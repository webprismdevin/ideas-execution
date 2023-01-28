export const Text = ({ value }: any) => {
  if (!value.rich_text) {
    return null;
  }
  return value.rich_text.map((content: any) => {
    const {
      annotations: { bold, code, color, italic, strikethrough, underline },
      text,
    } = content;

    return (
      <span
        className={[
          bold ? "bold" : "",
          code ? "code" : "",
          italic ? "italic" : "",
          strikethrough ? "strikethrough" : "",
          underline ? "underline" : "",
        ].join(" ")}
        style={color !== "default" ? { color } : {}}
      >
        {text.link ? <a href={text.link.url}>{text.content}</a> : text.content}
      </span>
    );
  });
};
