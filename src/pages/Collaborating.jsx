import React from "react";

const Collaborating = () => {
  const projects = [
    {
      name: "DAOstination",
      link: "https://twitter.com/DAOstination",
      founderRoles: ["CTO", "COO", "CEO"],
      permanentJobs: [
        "Lead programmer",
        "Full-stack dev",
        "Marketer",
        "Designer",
      ],
      oneTimeCollaboration: ["Create website UI/UX", "Write smart contracts"],
      tasks: ["Start website development"],
    },
    {
      name: "Collaborating",
      link: "https://twitter.com/_Collaborating",
      founderRoles: ["CTO", "COO", "CEO"],
      permanentJobs: [
        "Lead programmer",
        "Full-stack dev",
        "Marketer",
        "Designer",
      ],
      oneTimeCollaboration: [
        "Build Discord server",
        "Create Twitter logo and banner",
      ],
      tasks: ["Build Discord server"],
    },
    {
      name: "DAOsignr Apparel",
      link: "https://twitter.com/DAOsignrApparel",
      founderRoles: ["CTO", "COO", "CEO"],
      permanentJobs: [
        "Lead programmer",
        "Full-stack dev",
        "Marketer",
        "Designer",
      ],
      oneTimeCollaboration: [
        "Design payment UI",
        "Create smart contract for payments",
      ],
      tasks: [
        "Develop crypto payments system",
        "Create smart contracts for paying DAOsigners",
      ],
    },
    {
      name: "DAOlicious",
      link: "https://twitter.com/DAOlicious",
      founderRoles: ["CTO", "COO", "CEO"],
      permanentJobs: [
        "Lead programmer",
        "Full-stack dev",
        "Marketer",
        "Designer",
      ],
      oneTimeCollaboration: ["Brainstorm DAO ideas", "Design DAO structure"],
      tasks: ["Generate ideas for DAO creation"],
    },
    {
      name: "Motivate Labs",
      link: "https://twitter.com/Motivate__Labs",
      founderRoles: ["CTO", "COO", "CEO"],
      permanentJobs: [
        "Lead programmer",
        "3D Artist",
        "Animator",
        "UI/UX Designer",
      ],
      oneTimeCollaboration: ["Create 3D models", "Develop animations"],
      tasks: ["Assist in creating 3D art for various projects"],
    },
    {
      name: "Kissing Beaver",
      link: "https://twitter.com/KissingBeaver",
      founderRoles: ["CTO", "COO", "CEO"],
      permanentJobs: ["Lead developer", "Blockchain expert", "Designer"],
      oneTimeCollaboration: ["Create smart contracts", "Develop tokenomics"],
      tasks: [
        "Design smart contracts for monthly unlocked token payments to Collaborating.X",
      ],
    },
    {
      name: "Fantom Fluid",
      link: "https://twitter.com/FantomFluid",
      founderRoles: ["CTO", "COO", "CEO"],
      permanentJobs: ["Blockchain developer", "Frontend developer", "Designer"],
      oneTimeCollaboration: [
        "Implement SuperFluid on Fantom",
        "Fork SuperFluid",
      ],
      tasks: ["Fork and implement SuperFluid on Fantom"],
    },
    {
      name: "Happy News DAO",
      link: "https://twitter.com/HappyNewsDAO",
      founderRoles: ["CTO", "COO", "CEO"],
      permanentJobs: [
        "Smart contract developer",
        "Data analyst",
        "UX/UI Designer",
      ],
      oneTimeCollaboration: [
        "Develop payment smart contracts",
        "Design subscription system",
      ],
      tasks: [
        "Develop smart contracts to pay journalists",
        "Set up payment structure for HappyNews subscriptions",
      ],
    },
    {
      name: "Provenance DeFi",
      link: "https://twitter.com/ProvenanceDeFi",
      founderRoles: ["CTO", "COO", "CEO"],
      permanentJobs: [
        "Blockchain engineer",
        "DEX architect",
        "Solidity developer",
      ],
      oneTimeCollaboration: [
        "Design secure DEX structure",
        "Implement DEX features",
      ],
      tasks: [
        "Collaborate on designing and building a secure, transparent DEX with creator functions",
      ],
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
          }}
        >
          <h2>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "blue", textDecoration: "underline" }}
            >
              {project.name}
            </a>
          </h2>

          <div>
            <h3>Collaboration Wanted</h3>
            <ul>
              {project.oneTimeCollaboration.map((collab, collabIndex) => (
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
