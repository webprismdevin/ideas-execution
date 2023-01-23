import Contact from "~/components/contact";
import type { MetaFunction } from "@remix-run/node";
export const meta: MetaFunction = () => ({
  title: "Ideas + Execution // Devin Santamaria",
  description: "If you've found this - man, you're early. I've been running WEBRPISM since the end of 2019. It's finally time I build a portfolio for myself."
});

export default function Index() {
  return (
    <main>
      <h1>Ideas + Execution</h1>
      <p>Hi there 😊</p>
      <p>
        If you've found this - man, you're early. I've been running{" "}
        <a href="https://webprism.co" target="_blank" rel="noreferrer">
          WEBRPISM
        </a>{" "}
        since the end of 2019. It's finally time I build a portfolio for myself.
      </p>
      <p>Why am I building this? Two reasons:</p>
      <ol>
        <li>I want to experiment with Remix</li>
        <li>I'm a marketing professional. It makes sense to market myself.</li>
      </ol>
      <p>What will exist here?</p>
      <ul>
        <li>code experiments</li>
        <li>writings and musings</li>
        <li>portfolio pieces</li>
        <li>other stuff too, probably</li>
      </ul>
      <p>
        If you want to stay in touch, or something about this interests you,
        shoot me a line below.
      </p>
      <Contact />
    </main>
  );
}
