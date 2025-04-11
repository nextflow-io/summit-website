import { useEffect, useState } from "react";
import PortableText from "@components/PortableText";
import SocialIcon from "@components/SocialIcon";


type Props = {
  post: any;
  title?: string;
};


const EventPosts: React.FC<Props> = ({ post }) => {

  return (
    <section className="container smaller mx-auto flex flex-col h-full">
      <div className="border border-nextflow p-4">
        <div className="">
          {/* <p className="text-nextflow-200">{post?.publishedAt}</p> */}
          {post?.category}
          <h1 className="h4 py-2"> {post?.title}</h1>

          <div className="pb-6 mt-6">
            {post.associatedPerson?.map((person, index) => (
              <div key={index}>
                {person.name} {index < post.associatedPerson.length - 1 && ", "}
              </div>
            ))}
            <div className="mb-1">{post.associatedPerson.name}</div>
            {post.coauthors && <div>Coauthors: {post.coauthors} </div>}
          </div>

          <div className="border-t border-nextflow py-2">
            <p> {post?.category}</p>
            <PortableText
              className="mt-4 monospace text-sm"
              value={post?.body}
            />
          </div>

          {post?.category}
        </div>
      </div>
     
      {post.associatedPerson?.map((person, index) => (
      <div className="mt-8 speaker-card border border-nextflow p-4 flex flex-col h-full">
        <div className="flex flex-col justify-center items-center w-full pt-2">
          <div className="speaker-card__image rounded-full w-[150px] h-[150px] object-cover overflow-hidden">
            {person.image ? (
              <img
                className="imageBlend  w-full h-full object-cover"
                src={person.image.asset.url}
                alt={`image of ${person?.name}`}
              />
            ) : (
              <div className="w-full h-full bg-nextflow"></div>
            )}
          </div>
          <div className="text-center mt-6 w-full">
            <h3 className="font-display text-xl mb-1">
              {person.name}
            </h3>
            <p className="monospace"> {person?.role}</p>
            {person?.keynote && (
              <div className="text-nextflow mt-2 font-display font-medium text-[1.1rem]">
                Keynote Speaker
              </div>
            )}

            {person.twitter && (
              <SocialIcon
                key={person.twitter}
                href={person.twitter}
                type={"Twitter"}
                className="p-2 text-nextflow"
              />
            )}
            {person.linkedin && (
              <SocialIcon
                key={person.linkedin}
                href={person.linkedin}
                type={"LinkedIn"}
                className="p-2 text-nextflow"
              />
            )}
            {person.github && (
              <SocialIcon
                key={person.github}
                href={person.github}
                type={"GitHub"}
                className="p-2 text-nextflow"
              />
            )}
          </div>
        </div>
      </div>
        ))}

      <div className="relative border border-nextflow p-4 mt-8 hover:border-nextflow-200 transition-all duration-400">
      ← Back to agenda
        <a
          href="/2025/boston/agenda"
          className="absolute top-0 right-0 bottom-0 left-0 w-full h-full hover:text-nextflow-200 duration-400 transition-all"
        >
        </a>
      </div>
    </section>
  );
};

export default EventPosts;
