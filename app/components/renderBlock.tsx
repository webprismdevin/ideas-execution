import { Fragment } from "react";
import { Text } from "./text";

const renderBlock = (block: any) => {
  const { type, id } = block;
  const value = block[type];

  switch (type) {
    case "paragraph":
      return (
        <p>
          <Text value={value} />
        </p>
      );
    case "heading_1":
      return (
        <h1>
          <Text value={value} />
        </h1>
      );
    case "heading_2":
      return (
        <h2>
          <Text value={value} />
        </h2>
      );
    case "heading_3":
      return (
        <h3>
          <Text value={value} />
        </h3>
      );
    case "bulleted_list_item":
    case "numbered_list_item":
      return (
        <li>
          <Text value={value} />
        </li>
      );
    case "to_do":
      return (
        <div>
          <label htmlFor={id}>
            <input type="checkbox" id={id} defaultChecked={value.checked} />{" "}
            <Text text={value.text} />
          </label>
        </div>
      );
    case "toggle":
      return (
        <details>
          <summary>
            <Text text={value.text} />
          </summary>
          {value.children?.map((block: any) => (
            <Fragment key={block.id}>{renderBlock(block)}</Fragment>
          ))}
        </details>
      );
    case "child_page":
      return <p>{value.title}</p>;
    case "image":
      const src =
        value.type === "external" ? value.external.url : value.file.url;
      const caption = value.caption ? value.caption[0].plain_text : "";
      return (
        <figure>
          <img src={src} alt={caption} />
          {caption && <figcaption>{caption}</figcaption>}
        </figure>
      );
    case "callout":
      console.log(value);

      return (
        <div
          style={{
            background: colors[value.color],
            padding: "0.5rem 1rem",
            borderRadius: 2,
          }}
        >
          {value.icon.type === "emoji" ? (
            <div style={{ paddingRight: "rem", float: "left" }}>
              {value.icon.emoji}
            </div>
          ) : null}
          <Text value={value} />
        </div>
      );
    default:
      return `❌ Unsupported block (${
        type === "unsupported" ? "unsupported by Notion API" : type
      })`;
  }
};

declare interface Color {
  [key: string]: string;
}

const colors: Color = {
  blue_background: "rgb(173, 216, 230, 0.5)",
};

export default renderBlock;
