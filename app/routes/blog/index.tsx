import { json } from "@remix-run/node"; // or cloudflare/deno
import { Client } from "@notionhq/client";
import { Link, useLoaderData } from "@remix-run/react";

export const loader = async () => {
  const notion = new Client({
    auth: process.env.NOTION_KEY,
  });

  const blogDb = await notion.databases.query({
    database_id: process.env.DATABASE_ID!,
    filter: {
      property: "Status",
      status: {
        equals: "Posted",
      },
    },
  });

  return json({ posts: blogDb.results });
};

export default function Blog() {
  const data = useLoaderData<typeof loader>();

  console.log(data.posts[0].properties.Name.title[0].plain_text);

  return (
    <main>
      <ul style={{ listStyle: "none", margin: 0 }}>
        {data.posts.map((page) => {
          const slug = page.properties.Slug;

          return (
            <Link to={`/blog/${slug.rich_text[0].plain_text}`} key={page.id}>
              <li
                style={{
                  border: "1px solid rgba(245, 245, 245)",
                  padding: "1rem 2rem",
                  padding: 0,
                }}
              >
                <h2>{page.properties.Name.title[0].plain_text}</h2>
                <p>
                  {page.properties["Short description"].rich_text[0].plain_text}
                </p>
              </li>
            </Link>
          );
        })}
      </ul>
    </main>
  );
}
