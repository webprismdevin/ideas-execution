import { json } from "@remix-run/node"; // or cloudflare/deno
import { Client } from "@notionhq/client";
import { useLoaderData } from "@remix-run/react";
import styles from "~/styles/endeavors.css";

export const loader = async () => {
  const notion = new Client({
    auth: process.env.NOTION_KEY,
  });

  const workDb = await notion.databases.query({
    database_id: "edb044870040442c99241b209cde7b5b",
    filter: {
      property: "Status",
      status: {
        equals: "Ready",
      },
    },
  });

  return json({ work: workDb.results });
};

export default function Endeavors() {
  const { work } = useLoaderData<typeof loader>();

  console.log(work);

  return (
    <main>
      <h1>Career, Consulting & Company</h1>
      <p>I'm going to try to detail all the stuff I've done.</p>
      <hr />
      {work.map((item: any) => {
        const { Name: name, Tags: tags } = item.properties;
        const { id, cover } = item;

        return (
          <ul key={id}>
            <li>
              {cover !== null && cover.file && (
                <div style={{ maxWidth: "100%" }}>
                  <img
                    src={cover.file?.url}
                    alt={`${name} cover photo`}
                    style={{ objectFit: "contain", maxWidth: "100%" }}
                  />
                </div>
              )}
              <h2>{name.title[0].plain_text}</h2>
              <div style={{ display: "flex", flexWrap: "wrap" }}>
                {tags.multi_select.map((tag: any) => (
                  <code
                    style={{
                      background: tag.color,
                      marginRight: 8,
                      padding: "0px 4px",
                      borderRadius: 2,
                    }}
                  >
                    {tag.name}
                  </code>
                ))}
              </div>
            </li>
          </ul>
        );
      })}
    </main>
  );
}

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}
