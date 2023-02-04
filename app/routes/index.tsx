import { json } from "@remix-run/node"; // or cloudflare/deno
import { useLoaderData } from "@remix-run/react";
import { Client } from "@notionhq/client";
import Contact from "~/components/contact";

import Post from "~/components/post";

import styles from "~/styles/index.css";

import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => ({
  title: "Ideas + Execution // Devin Santamaria",
  description:
    "If you've found this - man, you're early. I've been running WEBRPISM since the end of 2019. It's finally time I build a portfolio for myself.",
});

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

  return json({ post: blogDb.results[0] });
};

export default function Index() {
  const data = useLoaderData<typeof loader>();

  console.log(data);

  const slug = data.post.properties.Slug.rich_text[0]?.plain_text,
    short_description =
      data.post.properties["Short description"].rich_text[0]?.plain_text,
    title = data.post.properties.Name.title[0]?.plain_text;

  const post = {
    slug,
    title,
    short_description,
  };

  return (
    <main>
      <h1>Ideas + Execution</h1>
      <hr />
      <div className="home_content">
        <div className="home_content--latest_post">
          <h2>Latest post</h2>
          {data && <Post post={post} />}
        </div>
        <div className="home_content--intro content">
          <h2>What is this?</h2>
          <p>Hi there 😊</p>
          <p>
            If you've found this - man, you're early. I've been running{" "}
            <a href="https://webprism.co" target="_blank" rel="noreferrer">
              WEBPRISM
            </a>{" "}
            since the end of 2019. It's finally time I build a portfolio for
            myself.
          </p>
          <p>Why am I building this? Two reasons:</p>
          <ol>
            <li>
              I want to experiment with <a href="https://remix.run/">Remix</a>
            </li>
            <li>
              I'm a marketing professional. It makes sense to market myself.
            </li>
            <li>I like to write. It's human. I need somewhere to put it.</li>
          </ol>
          <p>What will exist here?</p>
          <ul>
            <li>code experiments</li>
            <li>writings and musings</li>
            <li>portfolio pieces</li>
            <li>other stuff too, probably</li>
          </ul>
          <p>
            If you want to stay in touch, or something about this interests you,
            shoot me a line below.
          </p>
        </div>
      </div>
      <Contact />
    </main>
  );
}

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}
