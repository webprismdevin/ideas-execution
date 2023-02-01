import { json } from "@remix-run/node"; // or cloudflare/deno
import { Client } from "@notionhq/client";
import { Link, useLoaderData } from "@remix-run/react";
import styles from "~/styles/essays.css";

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

  console.log(data);

  return (
    <main>
      <ul className="post_grid" style={{ listStyle: "none", padding: 0 }}>
        {data.posts.map((page: any) => {
          const slug = page.properties.Slug.rich_text[0]?.plain_text,
            short_description =
              page.properties["Short description"].rich_text[0]?.plain_text,
            title = page.properties.Name.title[0]?.plain_text;

          if (!slug || !short_description || !title) return null;

          return (
            <li
              key={page.id}
              style={{
                marginBottom: "3rem",
              }}
            >
              <Link
                to={`${slug}`}
                style={{
                  border: "1px solid rgba(245, 245, 245)",
                  padding: "0.75rem 2rem",
                  margin: 0,
                  borderRadius: 2,
                }}
              >
                <h2>{title}</h2>
                <p>{short_description}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
}

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}
