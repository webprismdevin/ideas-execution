export default function Contact() {
  return (
    <form
      action="https://submit-form.com/JZojw5Xb"
      data-botpoison-public-key0="pk_f7d9a478-bf2d-4ae9-9227-cc4cc2fcbc4e"
    >
      <input
        type="hidden"
        name="_redirect"
        value={
          process.env.NODE_ENV === "development"
            ? "https://nqgser-3000.preview.csb.app/"
            : "https://devin.webprism.xyz/"
        }
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
