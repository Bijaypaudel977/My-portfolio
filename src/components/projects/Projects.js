import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Online Voting System"
          des=" A secure platform enabling anonymous and transparent voting using blockchain technology (e.g., Solidity, React, Node.js). Features include voter verification, encrypted voting, and real-time decentralized result display. As a front-end developer, I contributed to the UI and also had the opportunity to explore other areas of the project."
          src={projectOne}
        />
        <ProjectsCard
          title="E-commerce Website"
          des=" A dynamic platform for buying and selling products, built with the PERN stack (PostgreSQL, Express.js, React.js, Next.js). Features include user authentication, product management, payment integration, and admin control. "
          src={projectTwo}
        />
        <ProjectsCard
          title="Blogging site"
          des=" A content-sharing platform for creating, editing, and publishing blogs using MERN stack (MongoDB, Express.js, React.js, Node.js). Features include user registration, rich text editing, comment sections, and social sharing."
          src={projectThree}
        />
      </div>
    </section>
  );
}

export default Projects