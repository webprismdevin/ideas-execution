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
import { inject } from "@vercel/analytics";

import Initials from "../public/initials.png";

import sharedStyles from "./shared.css";
import Instagram from "../public/instagram.svg";
import LinkedIn from "../public/linkedin.svg";
import Twitter from "../public/twitter.svg";

import type { MetaFunction } from "@remix-run/node";
export const meta: MetaFunction = () => ({
  charset: "utf-8",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  const navigation = useNavigation();
  const production = process.env.NODE_ENV === "production" ? true : false;

  if (production) inject();

  return (
    <html
      lang="en"
      style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.6" }}
    >
      <head>
        <Meta />
        <Links />
        {production && (
          <>
            <script
              defer
              data-domain="devinsantamaria.com"
              src="/stats/js/script.js"
              data-api="/stats/api/event"
            ></script>
          </>
        )}
      </head>
      <body>
        <header style={headerFooterStyles}>
          <img src={Initials} height={36} width={36} />
          <nav style={{ flexShrink: 0 }}>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/essays">Essays</NavLink>
            <NavLink to="/endeavors">Endeavors</NavLink>
          </nav>
          <div>
            <a href="https://www.instagram.com/santamaria.devin/">
              <img
                style={{ margin: "0 0.25rem" }}
                src={Instagram}
                height={24}
                width={24}
              />
            </a>
            <a href="https://www.linkedin.com/in/devinsantamaria/">
              <img
                style={{ margin: "0 0.25rem" }}
                src={LinkedIn}
                height={24}
                width={24}
              />
            </a>
            <a href="https://twitter.com/devinsantamaria">
              <img
                style={{ margin: "0 0.25rem" }}
                src={Twitter}
                height={24}
                width={24}
              />
            </a>
          </div>
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
  gap: "1rem",
};

export function links() {
  return [{ rel: "stylesheet", href: sharedStyles }];
}
