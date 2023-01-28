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

  return (
    <main>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {data.posts.map((page: any) => {
          const slug = page.properties.Slug;

          return (
            <li>
              <Link
                to={`/blog/${slug.rich_text[0].plain_text}`}
                key={page.id}
                style={{
                  border: "1px solid rgba(245, 245, 245)",
                  padding: "0.75rem 2rem",
                  margin: 0,
                  borderRadius: 2,
                }}
              >
                <h2>{page.properties.Name.title[0].plain_text}</h2>
                <p>
                  {page.properties["Short description"].rich_text[0].plain_text}
                </p>
              </Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
