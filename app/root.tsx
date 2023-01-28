import {
  Links,
  LiveReload,
  Meta,
  NavLink,
  Outlet,
  Scripts,
  ScrollRestoration,
  useNavigation,
} from "@remix-run/react";

import sharedStyles from "./shared.css";

import type { MetaFunction } from "@remix-run/node";
export const meta: MetaFunction = () => ({
  charset: "utf-8",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  const navigation = useNavigation();

  return (
    <html
      lang="en"
      style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.6" }}
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
          className={`outlet_wrapper ${
            navigation.state === "loading" ? "fadeout" : "fadein"
          }`}
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

export function links() {
  return [{ rel: "stylesheet", href: sharedStyles }];
}
