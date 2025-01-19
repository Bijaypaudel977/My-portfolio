import React, { useState } from "react";
import Title from "../layouts/Title";
import Education from "./Education";
import Skills from "./Skills";
import Achievement from "./Achievement";

const Resume = () => {
  const [educationData, setEducationData] = useState(true);
  const [skillData, setSkillData] = useState(false);
  //  const [experienceData, setExperienceData] = useState(false);
  const [achievementData, setAchievementData] = useState(false);
  return (
    <section
      id="resume"
      className="w-full py-20 px-10 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title des="My Resume" />
      </div>
      <div>
        <ul className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          <li
            onClick={() =>
              setEducationData(true) &
              setSkillData(false) &
              setAchievementData(false)
            }
            className={`${
              educationData
                ? "border-designColor rounded-lg"
                : "border-transparent"
            } resumeLi`}
          >
            Education
          </li>
          <li
            onClick={() =>
              setEducationData(false) &
              setSkillData(true) &
              setAchievementData(false)
            }
            className={`${
              skillData ? "border-designColor rounded-lg" : "border-transparent"
            } resumeLi`}
          >
            Professional Skills
          </li>
          
          <li
            onClick={() =>
              setEducationData(false) &
              setSkillData(false) &
              setAchievementData(true)
            }
            className={`${
              achievementData
                ? "border-designColor rounded-lg"
                : "border-transparent"
            } resumeLi`}
          >
            Achievements
          </li>
        </ul>
      </div>
      {educationData && <Education />}
      {skillData && <Skills />}
      {achievementData && <Achievement />}
      <div className="mt-10 pl-12 flex flex-col items-start space-y-4">
        
        <p className="text-lg text-gray-400 font-medium transition-colors hover:text-white">
          Want to see my resume in PDF format? Click the button below to
          download it.
        </p>

        
        <a
          href="/resume.pdf"
          download="Bijay_Resume.pdf"
          className="px-6 py-3 bg-designColor text-white font-bold rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
};

export default Resume;
