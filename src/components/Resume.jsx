import React from "react";
import resumePdf from "../assets/resume.pdf";

const Resume = () => {
  return (
    <div className="p-4 mx-auto border-2 border-white w-[300px] rounded-lg">
      <a href={resumePdf} download="Avelin_Ann_resume.pdf">
        <button>Download Resume</button>
      </a>
    </div>
  );
};

export default Resume;
