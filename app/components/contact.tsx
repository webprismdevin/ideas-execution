export default function Contact() {
  return (
    <form action="https://submit-form.com/JZojw5Xb">
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
        name="name"
      />
      <input
        style={inputStyle}
        type="email"
        placeholder="can I have your email?"
        name="email"
      />
      <button
        style={{
          padding: "0.75rem 1.25rem",
          borderRadius: 50,
          border: "none",
          color: "#1d1d1d",
          fontSize: 18
          background: "lightblue",
        }}
        type="submit"
      >
        Stay in touch
      </button>
    </form>
  );
}

const inputStyle = {
  display: "block",
  marginBottom: 6,
  padding: "0.75rem 0.5rem 0.75rem 1rem",
  borderRadius: 50,
  border: "1px solid #e2e2e2",
  width: '100%',
  fontSize: 18
};
