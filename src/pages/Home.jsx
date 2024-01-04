export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <img
        src="Collaborating.png"
        alt="Logo"
        style={{ maxWidth: "800px", height: "auto", marginTop: "6rem" }}
      />
      <div className="text-center">
        <p style={{ color: "var(--header-color)", fontSize: "2rem" }}>
          Where you Collaborate on Fantom
        </p>
        <br />
        <p
          style={{
            color: "var(--header-color)",
            fontSize: "1.3rem",
            maxWidth: "800px",
          }}
        >
          The list of projects on Fantom is growing and we want to help you ship
          yours, so check out the <a href="/collaboration">Collaborating</a>{" "}
          page and apply to any of them you want to collaborate on and get paid
          for.
        </p>
      </div>
    </div>
  );
}
