import { json } from "@remix-run/node"; // or cloudflare/deno
import { Client } from "@notionhq/client";
import { Link, useLoaderData } from "@remix-run/react";

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

  return json({ posts: workDb.results });
};

export default function Endeavors() {
  const data = useLoaderData<typeof loader>();

  console.log(data);

  return (
    <main>
      <h1>Career, Consulting & Company</h1>
      <p>I'm going to try to detail all the stuff I've done.</p>
    </main>
  );
}
