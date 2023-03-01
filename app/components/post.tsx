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
      to={`/essays/${slug}`}
      style={{
        border: "1px solid rgba(245, 245, 245)",
      }}
    >
      <div
        style={{
          padding: "0.75rem 2rem",
          borderRadius: 2,
          height: "100%",
        }}
      >
        <h2>{title}</h2>
        <p className="line_clamp" style={{ marginBottom: '2rem' }}>{short_description}</p>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            color: "var(--brand_dark)",
            position: "absolute",
            bottom: '1rem',
            right: '1rem'
          }}
        >
          <div>
            <span>Read</span>
          </div>
          <img src={ArrowRight} height={18} width={18} />
        </div>
      </div>
    </Link>
  );
}
