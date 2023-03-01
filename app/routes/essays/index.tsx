import { json } from "@remix-run/node"; // or cloudflare/deno
import { Client, LogLevel } from "@notionhq/client";
import { Link, useLoaderData } from "@remix-run/react";
import styles from "~/styles/essays.css";
import Post from "~/components/post";
import { useEffect } from "react";

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
    sorts: [
      {
        property: "Published",
        direction: "descending",
      },
    ],
  });

  return json({ posts: blogDb.results });
};

export default function Blog() {
  const data = useLoaderData<typeof loader>();

  console.log(data);

  const notion = new Client({
    auth: "secret_yrURRd4CeMVmBRLwLbfnzrUauTGCrx055y8HWZLG49v",
    logLevel: LogLevel.DEBUG,
  });

  const getData = async () => {
    const response = await notion.databases.query({
      database_id: "b3d77622ce8f420bb2b843b265727e59",
      filter: {
        property: "Approved",
        checkbox: {
          equals: true,
        },
      },
    });

    return response;
  };

  useEffect(() => {
    getData().then((res) => console.log(res));
  }, [])

  return (
    <main>
      <ul className="post_grid" style={{ listStyle: "none", padding: 0 }}>
        {data.posts.map((page: any) => {
          const slug = page.properties.Slug.rich_text[0]?.plain_text,
            short_description =
              page.properties["Short description"].rich_text[0]?.plain_text,
            title = page.properties.Name.title[0]?.plain_text;

          const post = {
            slug,
            title,
            short_description,
          };

          if (!slug || !short_description || !title) return null;

          return (
            <li
              key={page.id}
              style={{
                marginBottom: "3rem",
              }}
            >
              <Post post={post} />
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
