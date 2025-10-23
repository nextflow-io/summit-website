import { useEffect, useState } from "react";
import PortableText from "@components/PortableText";
import SocialIcon from "@components/SocialIcon";
import Button from "@components/Button";
import clsx from "clsx";
import styles from "./styles.module.css";

type Props = {
  post: any;
  title?: string;
};

const YouTubeEmbed = ({ id }) => {
  if (!id) return null;

  const embedUrl = `https://www.youtube.com/embed/${id}`;

  return (
    <div className="w-full h-0 relative pb-[56.75%] overflow-hidden">
      <iframe
        width="100%"
        height="100%"
        src={embedUrl}
        title=""
        className="absolute top-0 left-0 right-0 bottom-0 w-full h-full"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};
const formatDateTime = (dateString: string) => {
  if (!dateString) return "";

  const date = new Date(dateString);
  
  // Convert UTC to EDT (UTC-4)
  const edtDate = new Date(date.getTime() - 4 * 60 * 60 * 1000);
  
  const month = edtDate.toLocaleDateString("en-US", { 
    month: "long",
    timeZone: "UTC" 
  });
  const day = edtDate.getUTCDate();
  const hours = edtDate.getUTCHours();
  const minutes = edtDate.getUTCMinutes();

  const period = hours >= 12 ? "pm" : "am";
  const displayHours = hours % 12 || 12;

  const timeString =
    minutes === 0
      ? `${displayHours}:00${period}`
      : `${displayHours}:${minutes.toString().padStart(2, "0")}${period}`;

  return `${month} ${day}, ${timeString}`;
};

const formatTime = (dateString: string) => {
  if (!dateString) return "";

  const date = new Date(dateString);
  
  // Convert UTC to EDT (UTC-4)
  const edtDate = new Date(date.getTime() - 4 * 60 * 60 * 1000);
  
  const hours = edtDate.getUTCHours();
  const minutes = edtDate.getUTCMinutes();

  const period = hours >= 12 ? "pm" : "am";
  const displayHours = hours % 12 || 12;

  const timeString =
    minutes === 0
      ? `${displayHours}:00${period}`
      : `${displayHours}:${minutes.toString().padStart(2, "0")}${period}`;

  return timeString;
};
const EventPosts: React.FC<Props> = ({ post }) => {
  // Determine the agenda path based on location or speaker type flags
  const getAgendaPath = () => {
    // First, try to detect from current URL
    if (typeof window !== "undefined") {
      const currentPath = window.location.pathname;
      if (currentPath.includes("/virtual/")) return "/2025/virtual/agenda";
      if (currentPath.includes("/boston/")) return "/2025/boston/agenda";
      if (currentPath.includes("/barcelona/")) return "/2025/barcelona/agenda";
    }

    // Default fallback
    return "/2025/boston/agenda";
  };

  const timezonePrint = () => {
    // First, try to detect from current URL
    if (typeof window !== "undefined") {
      const currentPath = window.location.pathname;
      if (currentPath.includes("/virtual/")) return "CET";
      if (currentPath.includes("/boston/")) return "EST";
      if (currentPath.includes("/barcelona/")) return "CET";
    }

    // Default fallback
    return "CET";
  };

  const agendaPath = getAgendaPath();
  const timezone = timezonePrint();

  return (
    <section className="flex flex-col h-full">
   {post.publishedAt && (
  <div className="relative border border-nextflow p-4 mb-6 hover:border-nextflow-200 transition-all duration-400">
    ← {formatDateTime(post.publishedAt)}
    {post.endTime && ` - ${formatTime(post.endTime)}`}
    {` `}{timezone}
    
     <a  href={agendaPath}
      className="absolute top-0 right-0 bottom-0 left-0 w-full h-full hover:text-nextflow-200 duration-400 transition-all"
    ></a>
  </div>
)}
      <div className="border border-nextflow p-4">
        <div className="">
          {post?.category && (
            <p className="text-nextflow-200 text-sm mb-2">{post.category}</p>
          )}
          <h1 className="h4 py-2">{post?.title}</h1>

          <div className="pb-6 mt-6">
            <div className="inline-flex">
              {post.associatedPerson?.map((person, index) => (
                <span key={index}>
                  {person.name}
                  {index < post.associatedPerson.length - 1 && ",\u00A0"}
                </span>
              ))}
            </div>
            {post.coauthors && (
              <div className="mt-2">Coauthors: {post.coauthors}</div>
            )}
          </div>

          <div className="border-t border-nextflow py-2">
            <PortableText
              className="mt-4 monospace text-sm"
              value={post?.body}
            />
          </div>

          {post.projectLink && (
            <div className="mt-10">
              <Button
                white
                arrowAfter
                className="monospace"
                href={post.projectLink}
              >
                Link to Project
              </Button>
            </div>
          )}
        </div>
      </div>

      {post.youtube && (
        <div className="w-full h-full my-10 border border-nextflow">
          <div className="w-full h-full">
            <YouTubeEmbed id={post.youtube} />
          </div>
        </div>
      )}

      {post.poster?.asset?.url && (
        <div className="my-10 border border-nextflow">
          <div className="w-full h-full min-h-[600px]">
            <iframe
              className="min-h-[600px]"
              src={`${post.poster.asset.url}#zoom=page-fit`}
              width="100%"
              height="100%"
              style={{ border: "none" }}
              title="PDF Preview"
            />
          </div>

          <div className="mt-10 mb-4 px-4">
            <Button
              white
              arrowAfter
              className="monospace"
              href={post.poster.asset.url}
            >
              View Poster
            </Button>
          </div>
        </div>
      )}

      {post.associatedPerson?.map((person, index) => (
        <div
          key={index}
          className="mt-8 speaker-card border border-nextflow p-4 flex flex-col h-full"
        >
          <div className="flex flex-col justify-center items-center w-full pt-2">
            <div className="speaker-card__image rounded-full w-[150px] h-[150px] object-cover overflow-hidden">
              {person?.image ? (
                <img
                  className="imageBlend w-full h-full object-cover"
                  src={person.image.asset.url}
                  alt={`image of ${person.name}`}
                />
              ) : (
                <div className="w-full h-full bg-nextflow"></div>
              )}
            </div>
            <div className="text-center mt-6 w-full">
              <h3 className="font-display text-xl mb-1">{person.name}</h3>
              <p className="monospace">{person?.role}</p>
              {person?.keynote && (
                <div className="text-nextflow mt-2 font-display font-medium text-[1.1rem]">
                  Keynote Speaker
                </div>
              )}

              <div className="flex flex-row justify-center">
                {person.twitter && (
                  <SocialIcon
                    key={person.twitter}
                    href={person.twitter}
                    type="Twitter"
                    className="p-2 text-nextflow"
                  />
                )}
                {person.linkedin && (
                  <SocialIcon
                    key={person.linkedin}
                    href={person.linkedin}
                    type="LinkedIn"
                    className="p-2 text-nextflow"
                  />
                )}
                {person.github && (
                  <SocialIcon
                    key={person.github}
                    href={person.github}
                    type="GitHub"
                    className="p-2 text-nextflow"
                  />
                )}
              </div>
            {person.bio && (
              <div className="mt-8 w-full border-t border-nextflow pt-4">
           
                <PortableText
                  className={clsx(
                  styles.speakerBio)}
                  value={person.bio}
                />
              </div>
            )}
            </div>
          </div>
        </div>
      ))}

      <div className="relative border border-nextflow p-4 mt-8 hover:border-nextflow-200 transition-all duration-400">
        ← Back to agenda
        <a
          href={agendaPath}
          className="absolute top-0 right-0 bottom-0 left-0 w-full h-full hover:text-nextflow-200 duration-400 transition-all"
        ></a>
      </div>
    </section>
  );
};

export default EventPosts;
