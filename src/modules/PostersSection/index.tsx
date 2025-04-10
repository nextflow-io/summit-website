import React, { useState } from 'react';
import posters from "./posters";
import IconClose from "./IconClose.svg"
import clsx from "clsx";
import styles from "./posters.module.css";
import SocialIcon from '@components/SocialIcon'
import { motion } from "framer-motion";

type Props = {
  title?: string;
};

const SpeakerBox = ({
  name,
  jobTitle,
  date,
  time,
  submissionTitle,
  track,
  twitter,
  github,
  linkedin,
  bio,
  keynote,
  image,
  isOpen,
  onClick,
}) => {

  return (
    <motion.div className={`hover:cursor-pointer`}
    initial={{
      opacity: 0,
    }}
    whileInView={{
      opacity: 1,
    }}
    viewport={{
      once: true,
    }}
    transition={{
      duration: 0.25,
      ease: "linear",
      delay: .4,
    }}
    >
      {/* personcard */}
      <div
        className="speaker-card border border-nextflow hover:border-nextflow-200 transition-all duration-300 p-4 flex flex-col h-full"
        onClick={onClick}
      >
        <div className="flex flex-col justify-center items-center p-2 w-full">
          <div className="speaker-card__image rounded-full w-[200px] h-[200px] object-cover overflow-hidden">
            {image ? (
              <img
                className="imageBlend  w-full h-full object-cover"
                src={image}
                alt={`image of ${name}`}
              />
            ) : (
              <div className="w-full h-full bg-nextflow"></div>
            )}
          </div>
          <div className="text-center mb-6 mt-6 sm:min-h-[160px] w-full">
            <h3 className="font-display text-2xl mb-2">{name}</h3>
            <p className="monospace">{jobTitle}</p>
  
            {twitter &&
              <SocialIcon
                key={twitter}
                href={twitter}
                type={"Twitter"}
                className="p-2 text-nextflow"
              />
            }
              {linkedin &&
              <SocialIcon
                key={linkedin}
                href={linkedin}
                type={"LinkedIn"}
                className="p-2 text-nextflow"
              />
            }
            {github &&
              <SocialIcon
                key={github}
                href={github}
                type={"GitHub"}
                className="p-2 text-nextflow"
              />
            }

          </div>
        </div>
    
        <div className={`flex flex-row justify-between w-full border-t ${date && 'border-b'} border-nextflow pt-2 mb-2`}>
          <p className="monospace">{date}</p>
          <p className="font-display">{time}</p>
        </div>
        
        <h5 className="text-[1.2rem] leading-tight font-medium">
          {submissionTitle}
        </h5>
      </div>

      {isOpen && (
        <div
          onClick={onClick}
          className="fixed top-0 left-0 right-0 bottom-0 bg-brand/20 w-full h-full z-10 backdrop-blur-sm"
        ></div>
      )}

      {/* popup */}
  
      <div
        className={`w-full h-full max-w-[350px] sm:max-w-[850px] top-[50%] left-[50%] fixed z-[999] p-4 border border-nextflow bg-brand max-h-[550px] md:max-h-[550px] my-2 overflow-y-scroll md:overflow-y-hidden`}
        style={
          isOpen
            ? {
                display: "block",
                transform: "translate(-50%, -50%)",
              }
            : { display: "none" }
        }
      >

        <button className="fixed top-4 right-4 z-[999]"  onClick={onClick}>
          <img src={IconClose.src} alt="close" className="w-[20px] h-[20px]" />
        </button>
        <div className={`flex flex-col lg:flex-row  md:fixed md:top-0 md:left-0 md:bottom-0 p-4 w-full ${bio ? 'md:max-w-[45%]' : 'w-full'}`}>
          <div className="flex flex-col justify-between w-full pr-1 pt-2">
            <div className="flex flex-col justify-center items-center p-2 w-full">
              <div className="speaker-card__image rounded-full w-[150px] h-[150px] object-cover overflow-hidden">
                {image ? (
                  <img
                    className="imageBlend  w-full h-full object-cover"
                    src={image}
                    alt={`image of ${name}`}
                  />
                ) : (
                  <div className="w-full h-full bg-nextflow"></div>
                )}
              </div>
              <div className="text-center mb-6 mt-6  w-full">
                <h3 className="font-display text-[1.6rem] mb-1">{name}</h3>
                <p className="monospace text-[.95rem]">{jobTitle}</p>
           {twitter &&
              <SocialIcon
                key={twitter}
                href={twitter}
                type={"Twitter"}
                className="p-2 text-nextflow"
              />
            }
              {linkedin &&
              <SocialIcon
                key={linkedin}
                href={linkedin}
                type={"LinkedIn"}
                className="p-2 text-nextflow"
              />
            }
            {github &&
              <SocialIcon
                key={github}
                href={github}
                type={"GitHub"}
                className="p-2 text-nextflow"
              />
            }
              </div>
            </div>
            <div>
 
            <div className={`flex flex-row justify-between w-full border-t ${date && 'border-b'} border-nextflow pt-2 mb-4`}>
              <p className="monospace">{date}</p>
              <p className="font-display">{time}</p>
            </div>
       
            <h5 className="text-[1.05rem] leading-tight font-medium">
              {submissionTitle}
            </h5>
          </div>
          {bio &&
          <div className={clsx(styles.postersPopup, "md:p-4 md:fixed md:right-0 md:bottom-0 top-0 w-full md:max-w-[55%] overflow-scroll h-full flex flex-col overflow-y-scroll md:pr-8")} >
            <small className="text-nextflow mt-6 mb-2">About</small>
            <div className={clsx(styles.postersBio, `monospace`)}  dangerouslySetInnerHTML={{ __html: bio }}></div>
          </div>
           }
           </div>
        </div>
      </div>
      </motion.div>

  );
};

const postersSection: React.FC<Props> = ({ title }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const handleItemClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="container mt-14">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {posters.main.map(
          (
            {
              name,
              jobTitle,
              track,
              date,
              time,
              submissionTitle,
              bio,
              github,
              twitter,
              linkedin,
              image,
              keynote,
            },
            index,
          ) => {
            return (
              <SpeakerBox
                key={index}
                name={name}
                jobTitle={jobTitle}
                track={track}
                date={date}
                time={time}
                submissionTitle={submissionTitle}
                bio={bio}
                github={github}
                twitter={twitter}
                linkedin={linkedin}
                image={image}
                keynote={keynote}
                isOpen={activeIndex === index}
                onClick={() => handleItemClick(index)}
              />
            );
          },
        )}
      </div>
    </div>
  );
};

export default postersSection;
