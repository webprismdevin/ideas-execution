import { Form } from "@remix-run/react";

function Contact() {
  return (
    <Form method="post">
      <input
        style={{ display: "block", marginBottom: 2, padding: "0.5rem" }}
        type="text"
        name="name"
      />
      <input
        style={{ display: "block", marginBottom: 2, padding: "0.5rem" }}
        type="email"
        name="email"
      />
      <button
        style={{
          padding: "0.5rem 1rem",
          borderRadius: 50,
          border: "none",
          color: "#1d1d1d",
          background: "lightblue",
        }}
        type="submit"
      >
        Stay in touch
      </button>
    </Form>
  );
}

export default function Index() {
  return (
    <main>
      <h1>Ideas + Execution</h1>
      <p>Hi there 😊</p>
      <p>
        If you've found this - damn, you're early. I've been running{" "}
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
