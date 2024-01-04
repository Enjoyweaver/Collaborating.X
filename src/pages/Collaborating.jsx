import React from "react";

const Collaborating = () => {
  const projects = [
    {
      name: "DAOstination DAO",
      link: "https://twitter.com/DAOstination",
      description:
        "Members fund the rental / purchase of a DAOstination and examples could be a large house for themselves for ETH Denver or a downtown bungalow in San Francisco that each member gets a week out of the year.",
      oneTimeCollaboration: [
        "Create website UI/UX",
        "Write smart contracts",
        "DAO manager",
      ],
    },
    {
      name: "Collaborating",
      link: "https://twitter.com/_Collaborating",
      description:
        "Where projects come to collaborate on Fantom. Whether you need collaboration or want to collaborate, this is where you collaborate on Fantom.",
      oneTimeCollaboration: ["Build Discord server", "Find collaborators"],
    },
    {
      name: "DAOsigner Apparel",
      link: "https://twitter.com/DAOsignrApparel",
      description:
        "A place for aspiring fashion designers to start their career, get global exposure, and to get paid with Fantom.",
      permanentJobs: [
        "Lead programmer",
        "Full-stack dev",
        "Marketer",
        "Designer",
      ],
      oneTimeCollaboration: [
        "Design and build consumer crypto payment infrastructure",
        "Create smart contract for payments to DAOsigners",
      ],
    },
    {
      name: "DAOlicious",
      link: "https://twitter.com/DAOlicious",
      description:
        "A DAO for foodies to collaborate on food projects, but this is for you to decide what this DAO does, so join the Discord and help us decide.",
      permanentJobs: [
        "Lead programmer",
        "Full-stack dev",
        "Marketer",
        "Designer",
      ],
      oneTimeCollaboration: ["Brainstorm DAO ideas", "Design DAO structure"],
    },
    {
      name: "Motivate Labs",
      link: "https://twitter.com/Motivate__Labs",
      description:
        "Making 3D art for projects on Fantom, whether its NFTs or 3D models for games, we are here to collaborate.",
      permanentJobs: [
        "Lead programmer",
        "3D Artist",
        "Animator",
        "UI/UX Designer",
      ],
      oneTimeCollaboration: [
        "Design and build website",
        "Create 3D models",
        "Develop animations",
      ],
    },
    {
      name: "Kissing Beaver",
      link: "https://twitter.com/KissingBeaver",
      description:
        "A meme accidentally created by Roosh, but now its mission is to distribute 31% of its supply to those collaborating on Fantom.",
      oneTimeCollaboration: ["Create smart contracts", "Develop tokenomics"],
    },
    {
      name: "Fantom Fluid",
      link: "https://twitter.com/FantomFluid",
      description:
        "Forking SuperFluid to make Fantom Fluid, which will be the first DeFi protocol on Fantom that allows for streaming payments.",
      permanentJobs: ["Blockchain developer", "Frontend developer", "Designer"],
      oneTimeCollaboration: ["Assist in implementing SuperFluid on Fantom"],
    },
    {
      name: "Happy News DAO",
      link: "https://twitter.com/HappyNewsDAO",
      description:
        "Fresh News from Fresh Voices. Happy News is where new journalists start their career, propvide fresh news, and get paid with Fantom.",
      permanentJobs: [
        "Smart contract developer",
        "Data analyst",
        "UX/UI Designer",
      ],
      oneTimeCollaboration: [
        "Write fresh news articles",
        "Develop payment smart contracts",
        "Design subscription system",
      ],
    },
    {
      name: "Provenance DeFi",
      link: "https://twitter.com/ProvenanceDeFi",
      description:
        "Provenance DeFi will be where you on-board fiat to Fantom and where artists prove provenance and get paid forever for their work.",
      permanentJobs: [
        "Blockchain engineer",
        "DEX architect",
        "Solidity developer",
      ],
      oneTimeCollaboration: [
        "Design and collaborate on CEX",
        "Design and create website",
      ],
    },
    {
      name: "Write On DAO",
      link: "https://twitter.com/WriteOnDAO",
      description:
        "Some writers deserve to be onchain, some stories deserve to be read on a timeline, but all authors deserve to be paid fairly.",
      permanentJobs: [
        "Blockchain engineer",
        "DEX architect",
        "Solidity developer",
      ],
      oneTimeCollaboration: [
        "Design and create website",
        "Consult on smart contract architecture",
      ],
    },
    {
      name: "DAOcumentary DAO",
      link: "https://twitter.com/DAOcumentaryDAO",
      description:
        "Members fund and decide on the documentary to be made and the DAOcumentary DAO will make it happen.",
      oneTimeCollaboration: ["DAO manager", "Design and build website"],
    },
    {
      name: "inDemniFi",
      link: "https://twitter.com/inDemniFi",
      description:
        "Web3 risk and insurance. Right now our focus is on building an exploit database and dashboard, exploit education, wallet insurance, and certifying web3's future crypto auditors, underwriters, and actuaries.",
      permanentJobs: [
        "Blockchain engineer",
        "DEX architect",
        "Solidity developer",
      ],
      oneTimeCollaboration: [
        "Contribute to web3 risk and insurance certification program",
        "Provide exploit data",
      ],
    },
    {
      name: "inDAOpendent",
      link: "https://twitter.com/inDAOpendent",
      description:
        "A DAO for foodies to collaborate on food projects, but this is for you to decide what this DAO does, so join the Discord and help us decide.",

      oneTimeCollaboration: ["Brainstorm DAO ideas", "Design DAO structure"],
    },
    {
      name: "DAO_or_Die",
      link: "https://twitter.com/DAO_or_Die",
      description: "This is a DAO for you to decide what to do with, or DIE",

      oneTimeCollaboration: ["Brainstorm DAO ideas", "Design DAO structure"],
    },
    {
      name: "inDAOment",
      link: "https://twitter.com/inDAOment",
      description: "A DAO for you to decide what to do with",
      permanentJobs: [
        "Lead programmer",
        "Full-stack dev",
        "Marketer",
        "Designer",
      ],
      oneTimeCollaboration: ["Brainstorm DAO ideas", "Design DAO structure"],
    },
    {
      name: "in DAO We Trust",
      link: "https://twitter.com/in_DAO_We_Trust",
      description: "Where DAO's are defined, ranked, and accredited.",
      permanentJobs: [
        "Lead programmer",
        "Full-stack dev",
        "Marketer",
        "Designer",
      ],
      oneTimeCollaboration: ["Brainstorm DAO ideas", "Design DAO structure"],
    },
    {
      name: "Rayvolution DAO",
      link: "https://twitter.com/RayvolutionDAo",
      description:
        "Where members fund solar farms, own each panel individually, and get paid for the energy produced in Fantom.",
      permanentJobs: [
        "Lead programmer",
        "Full-stack dev",
        "Marketer",
        "Designer",
      ],
      oneTimeCollaboration: ["Brainstorm DAO ideas", "Design DAO structure"],
    },
    {
      name: "inDAOpendence",
      link: "https://twitter.com/inDAOpendence",
      description:
        "Yup, you read that right that, this is different than inDAOpendent. So you decide what it does and how.",

      oneTimeCollaboration: ["Brainstorm DAO ideas", "Design DAO structure"],
    },
  ];

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "20px",
        maxWidth: "1200px",
        margin: "auto",
        padding: "20px",
        marginTop: "5rem",
      }}
    >
      {projects.map((project, index) => (
        <div
          key={index}
          style={{
            border: "1px solid #ccc",
            borderRadius: "8px",
            padding: "20px",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              color: "var(--header-color)",
              fontSize: "1.5rem",
              textDecoration: "underline",
              marginBottom: "1rem",
            }}
          >
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              {project.name}
            </a>
          </h2>
          <p
            style={{
              color: "var(--description-color)",
              marginBottom: "1rem",
            }}
          >
            {project.description}
          </p>
          <div
            style={{
              textAlign: "center",
              color: "var(--description-color)",
              marginBottom: "1rem",
            }}
          >
            <h3 style={{ marginTop: "3rem", fontSize: "1.3rem" }}>
              Collaboration Needed
            </h3>
          </div>
          <div
            style={{
              textAlign: "left",
              color: "var(--content-color)",
              marginBottom: "1rem",
            }}
          >
            <ul style={{ paddingLeft: "20px" }}>
              {project.oneTimeCollaboration &&
                project.oneTimeCollaboration.map((collab, collabIndex) => (
                  <li key={collabIndex}>{collab}</li>
                ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Collaborating;
