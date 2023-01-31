import type {
  LoaderArgs
} from "@remix-run/node"; // or cloudflare/deno
import { json } from "@remix-run/node"; // or cloudflare/deno
import { useLoaderData } from "@remix-run/react";
import { Client } from "@notionhq/client";
import { Fragment } from "react";
import type { MetaFunction } from "@remix-run/node";
import renderBlock from "~/components/renderBlock";
import styles from "~/styles/text.css";

export const meta: MetaFunction = ({ data }) => ({
  title: `${data.page.title} // Devin Santamaria`,
  description: `${data.page.description}`
});

export const loader = async ({ params }: LoaderArgs) => {
  const notion = new Client({
    auth: process.env.NOTION_KEY,
  });
  
  const slug = params.slug;

  const postPage = await notion.databases.query({
    database_id: process.env.DATABASE_ID!,
    filter: {
      property: "Slug",
      rich_text: {
        equals: slug!,
      },
    },
  });
  
  const notionPage:any = postPage.results[0];
  
  const postPageId = notionPage.id,
        postTitle = notionPage.properties.Name.title[0].plain_text,
        postDescription = notionPage.properties['Short description'].rich_text[0].plain_text;
    
  const blockMap = await notion.blocks.children.list({ block_id: postPageId, page_size: 100})
  
    return json({ page: {
        slug: params.slug,
        title: postTitle,
        description: postDescription
   }, blockMap, postPage })
};

export default function PostRoute() {
  const data = useLoaderData<typeof loader>();
          
  return <article style={{maxWidth: 660, margin: '0px auto'}}>
          <h1>{data.page.title}</h1>
          <section>
            {data.blockMap.results.map((block: any) => (
              <Fragment key={block.id}>{renderBlock(block)}</Fragment>
            ))}
          </section>
        </article>
}

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}
