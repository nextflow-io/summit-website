import React from "react";
import icon from "./icon.svg";

const Box = ({ children, href }) => {
  return (
    <a
      href={href}
      className="flex items-center justify-between bg-nextflow-100 py-4 px-7 rounded-md text-brand h-full font-light"
    >
      <span>{children}</span>
      <img src={icon.src} />
    </a>
  );
};

const SectionContact: React.FC = () => {
  return (
    <section className="container smaller py-8">
      <h4 className="h5 mb-8 text-center">Contact us</h4>
      <div className="flex -m-4 flex flex-wrap">
        <div className="w-full md:w-1/2 p-4">
          <Box href="mailto:help.summit@nextflow.io">
            <h5 className="h5 mb-2">Ticketing questions</h5>
            <div>help.summit@nextflow.io</div>
          </Box>
        </div>
        <div className="w-full md:w-1/2 p-4">
          <Box href="mailto:summit@nextflow.io">
            <h5 className="h5 mb-2">Program questions</h5>
            <div>summit@nextflow.io</div>
          </Box>
        </div>
      </div>
    </section>
  );
};

export default SectionContact;
