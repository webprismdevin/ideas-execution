export default function Contact() {
  return (
    <form action="https://submit-form.com/JZojw5Xb">
      <input
        type="hidden"
        name="_redirect"
        value="https://devin.webprism.xyz/"
      />
      <input
        style={inputStyle}
        type="text"
        placeholder="what's your name?"
        required
        name="name"
      />
      <input
        style={inputStyle}
        type="email"
        placeholder="enter your email address"
        required
        name="email"
      />
      <button type="submit">Stay in touch</button>
    </form>
  );
}

const inputStyle = {
  display: "block",
  marginBottom: 6,
  padding: "0.75rem 1rem",
  borderRadius: 2,
  border: "1px solid #e2e2e2",
  minWidth: 240,
  fontSize: 16,
};
