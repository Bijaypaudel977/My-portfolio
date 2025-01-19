import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]"></p>
          <h2 className="text-3xl md:text-4xl font-bold">Achivements</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="MERN Stack Development."
            subTitle="Completed in partnership with Codroid Hub and Clock B."
            result="Completed"
            des="Successfully completed the MERN stack development program, gaining expertise in full-stack web development using MongoDB, Express.js, React.js, and Node.js."
          />
          <ResumeCard
            title="Project CyferVote."
            subTitle="Top 12 semi-finalist in Rising Star Innovation ICT Award 2024."
            result="Top 12 Finalist"
            des="Contributed as a front-end developer to design and implement an intuitive user interface for the blockchain-based e-voting system, recognized among the top 12 semi-finalists for its creativity and impact at the Rising Star Innovation ICT Award 2024."
          />
          <ResumeCard
            title="Hackathon - Phoenix Tech Fest."
            subTitle="Developed an Automated Tax Filing System."
            result="Participation"
            des="Worked as a front-end developer to create a seamless and accessible user experience for the automated tax filing system during the Hackathon organized by Phoenix Tech Fest."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
