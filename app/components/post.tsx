import { Link } from "@remix-run/react";
import ArrowRight from "../../public/arrow-right.svg";

declare interface PostType {
  slug: string;
  title: string;
  short_description: string;
}

export default function Post({ post }: { post: PostType }) {
  const { slug, title, short_description } = post;

  return (
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
      <p className="line_clamp">{short_description}</p>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          color: "var(--brand_dark)",
          float: "right",
        }}
      >
        <span>Read</span>
        <img src={ArrowRight} height={18} width={18} />
      </div>
    </Link>
  );
}
