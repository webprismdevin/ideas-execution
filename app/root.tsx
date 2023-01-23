import {
  Links,
  LiveReload,
  Meta,
  NavLink,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => {
  return [
    {
      title: "Ideas + Execution // Devin Santamaria",
    },
    {
      name: "description",
      content: "f you've found this - man, you're early. I've been running WEBRPISM since the end of 2019. It's finally time I build a portfolio for myself.",
    },
    {
      name: "charset",
      content: "utf-8"
    },
    {
      name: "viewport",
      content: "width=device-width,initial-scale=1"
    }
  ];
};

export default function App() {
  return (
    <html
      lang="en"
      style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}
    >
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <header>
          <nav style={headerFooterStyles}>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/blog">Blog</NavLink>
          </nav>
        </header>
        <div
          style={{ padding: "1rem 3rem", maxWidth: 1440, margin: "0px auto" }}
        >
          <Outlet />
        </div>
        <footer style={headerFooterStyles}>
          <div>© {new Date().getFullYear()}. Devin Santamaria.</div>
        </footer>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

const headerFooterStyles = {
  padding: "1rem 2rem",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  gap: 12,
};
