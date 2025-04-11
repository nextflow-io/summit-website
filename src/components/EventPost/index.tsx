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
        <p className="text-nextflow-200">{post?.publishedAt}</p>
        {post?.category}
        <h1 className="h4 mt-2 py-6"> {post?.title}</h1>

        <div className="pb-4">
        <p>{post.associatedPerson.name}</p>
        {post.coauthors && <p>Coauthors: {post.coauthors} </p> }
        </div>

        <div className="border-t border-nextflow py-4">
          <p> {post?.category}</p>
          <PortableText className="mt-4 monospace text-sm" value={post?.body} />
        </div>

        {post?.category}
      </div>
      </div>


      <div className="mt-8 speaker-card border border-nextflow p-4 flex flex-col h-full">
          <div className="flex flex-col justify-center items-center w-full">
            <div className="speaker-card__image rounded-full w-[150px] h-[150px] object-cover overflow-hidden">
              {post.associatedPerson.image ? (
                <img
                  className="imageBlend  w-full h-full object-cover"
                  src={post.associatedPerson.image.asset.url}
                  alt={`image of ${post.associatedPerson?.name}`}
                />
              ) : (
                <div className="w-full h-full bg-nextflow"></div>
              )}
            </div>
            <div className="text-center mt-6 w-full">
              <h3 className="font-display text-xl mb-1">
                {post.associatedPerson.name}
              </h3>
              <p className="monospace"> {post.associatedPerson?.role}</p>
              {post.associatedPerson?.keynote && (
                <div className="text-nextflow mt-2 font-display font-medium text-[1.1rem]">
                  Keynote Speaker
                </div>
              )}

              {post.associatedPerson.twitter && (
                <SocialIcon
                  key={post.associatedPerson.twitter}
                  href={post.associatedPerson.twitter}
                  type={"Twitter"}
                  className="p-2 text-nextflow"
                />
              )}
              {post.associatedPerson.linkedin && (
                <SocialIcon
                  key={post.associatedPerson.linkedin}
                  href={post.associatedPerson.linkedin}
                  type={"LinkedIn"}
                  className="p-2 text-nextflow"
                />
              )}
              {post.associatedPerson.github && (
                <SocialIcon
                  key={post.associatedPerson.github}
                  href={post.associatedPerson.github}
                  type={"GitHub"}
                  className="p-2 text-nextflow"
                />
              )}
            </div>
          </div>
        </div>
    
      <div className="border border-nextflow p-4 mt-8">
        <a href="/2025/boston/agenda" className=" hover:text-nextflow-200 duration-400 transition-all">← Back to agenda</a>
      </div>

    </section>
  );
};

export default EventPosts;
