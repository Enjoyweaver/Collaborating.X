import React from "react";

const DAppStack = () => {
  return (
    <main>
      <h1
        style={{
          textAlign: "center",
          marginTop: "5rem",
          fontSize: "1.5rem",
          color: "var(--header-color)",
        }}
      >
        How the Collaborating dApp was built
      </h1>
      <div
        className="container"
        style={{
          maxWidth: "800px",
          textAlign: "center",
          margin: "auto",
          padding: "20px",
          color: "var(--header-color)",
        }}
      >
        <br />
        <p
          style={{
            textAlign: "center",
            color: "var(--description-color)",
          }}
        >
          Collaborating is built using a comprehensive dApp stack across various
          layer.
        </p>
        <br />
        <h3
          style={{
            textAlign: "center",
            color: "var(--header-color)",
          }}
        >
          Front-End Development
        </h3>
        <p
          style={{
            textAlign: "center",
            color: "var(--description-color)",
          }}
        >
          The front-end of Collaborating.X is developed with Vite, React, and
          TypeScript, ensuring a responsive and user-friendly interface.
        </p>
        <br />
        <h3
          style={{
            textAlign: "center",
            color: "var(--header-color)",
          }}
        >
          Decentralized Hosting
        </h3>
        <p
          style={{
            textAlign: "center",
            color: "var(--description-color)",
          }}
        >
          The dApp is deployed to IPFS (InterPlanetary File System) and hosted
          at <a href="https://UnstoppableDomains.com">UnstoppableDomains.com</a>
          , ensuring decentralized and censorship-resistant hosting.
        </p>
        <br />
        <h3
          style={{
            textAlign: "center",
            color: "var(--header-color)",
          }}
        >
          Form Creation and Management
        </h3>
        <p
          style={{
            textAlign: "center",
            color: "var(--description-color)",
          }}
        >
          {" "}
          <a href="https://deform.app">DeForm App </a>
          is utilized to create and manage the collaboration forms for
          streamlined user interaction, and also verification because we get to
          verify the twitter, wallet, and discord for the new collaborators.
        </p>
        <br />
        <h3
          style={{
            textAlign: "center",
            color: "var(--header-color)",
          }}
        >
          Collaboration Management and Communication
        </h3>
        <p
          style={{
            textAlign: "center",
            color: "var(--description-color)",
          }}
        >
          Collaborations and discussions take place at{" "}
          <a href="https://collaborating.vercel.app">
            Collaborating.vercel.app
          </a>
          , utilizing technologies like Liveblocks for real-time collaboration,
          Next.js for robust server-side rendering, TypeScript for type safety,
          and NextAuth.js for authentication which allows for logging in using
          your github.
        </p>
        <br />
        <h3
          style={{
            textAlign: "center",
            color: "var(--header-color)",
          }}
        >
          Version Control and Documentation
        </h3>
        <p
          style={{
            textAlign: "center",
            color: "var(--description-color)",
          }}
        >
          The project is version-controlled and documented on GitHub at{" "}
          <a href="https://github.com/CollaboratingOnFantom">
            CollaboratingOnFantom
          </a>
          , serving as a central hub for versioning and documentation.
        </p>
        <br />
      </div>
    </main>
  );
};

export default DAppStack;
