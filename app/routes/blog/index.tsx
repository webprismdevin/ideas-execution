import { json } from "@remix-run/node"; // or cloudflare/deno
// import { Client } from "@notionhq/client"

// export const loader = async () => {
//   const notion = new Client({ auth: process.env.NOTION_KEY })
  
//   const blogDb = await notion.databases.query({
//   database_id: process.env.DATABASE_ID!,
//     filter: {
//       property: "Status",
//       status: {
//         equals: "Posted",
//       },
//     },
//   })
  
//   console.log(blogDb)
  
//   return json({ data: blogDb });
// };

export default function Blog() {
  return <main>Blog is forthcoming.</main>;
}
