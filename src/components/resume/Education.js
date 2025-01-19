import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2019 - 2025</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="BIT (Bachelor of Information Technology)"
            subTitle="Phoenix College of Management (Maitidevi, Kathmandu) (2021 Dec - 2025 Apr)"
            result="Running"
            des="Running with Good GPA And expected to complete by April 2025.
                Gained hands-on experience with various credit courses and academic qualities."
          />
          <ResumeCard
            title=" +2 Science (PCM)"
            subTitle="Uttar Ganga Secondary school (Burtibang, Baglung) (2001 - 2005)"
            result="2.54/4"
            des="Completed +2 Science with a strong foundation in Mathematics, Physics, and analytical problem-solving skills."
          />
          <ResumeCard
            title="Secondary School Education"
            subTitle="Shree Jana Jibraj Shusila Secondary School ( 2008 - 2019 )"
            result="3.01/4"
            des="Successfully completed 10 years of secondary school education with a strong foundation in core subjects."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
