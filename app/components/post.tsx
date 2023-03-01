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
    <Link to={`/essays/${slug}`}>
      <div
        style={{
          border: "1px solid rgba(245, 245, 245)",
          padding: "0.75rem 2rem",
          borderRadius: 2,
          height: "100%",
        }}
      >
        <h2>{title}</h2>
        <p className="line_clamp">{short_description}</p>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            color: "var(--brand_dark)",
            width: "100%"
          }}
        >
          <div><span>Read</span></div>
          <img src={ArrowRight} height={18} width={18} />
        </div>
      </div>
    </Link>
  );
}
