import PortableText from '@components/PortableText';
import SocialIcon from '@components/SocialIcon';
import Button from '@components/Button';
import clsx from 'clsx';
import styles from './styles.module.css';

type Props = {
  post: any;
  title?: string;
};

const YouTubeEmbed = ({ id }) => {
  if (!id) return null;
  return (
    <div className="w-full h-0 relative pb-[56.75%] overflow-hidden">
      <iframe
        width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/${id}`}
        title=""
        className="absolute top-0 left-0 right-0 bottom-0 w-full h-full"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
};
const formatTime = (t?: string): string => {
  if (!t || t.length < 3) return t ?? '';
  const padded = t.padStart(4, '0');
  const h = parseInt(padded.slice(0, 2), 10);
  const m = padded.slice(2);
  const suffix = h >= 12 ? 'PM' : 'AM';
  const h12 = h % 12 || 12;
  return m === '00' ? `${h12}${suffix}` : `${h12}:${m}${suffix}`;
};

const formatDate = (dateStr?: string): string => {
  if (!dateStr) return '';
  const [year, month, day] = dateStr.split('-').map(Number);
  return new Date(year, month - 1, day).toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  });
};

const getAgendaPath = () => {
  if (typeof window !== 'undefined') {
    const p = window.location.pathname;
    if (p.includes('/virtual/')) return '/2026/virtual/agenda';
    if (p.includes('/boston/')) return '/2026/boston/agenda';
    if (p.includes('/barcelona/')) return '/2026/barcelona/agenda';
  }
  return '/2026/boston/agenda';
};

const getTimezone = () => {
  if (typeof window !== 'undefined') {
    const p = window.location.pathname;
    if (p.includes('/virtual/')) return 'CET';
    if (p.includes('/boston/')) return 'EST';
    if (p.includes('/barcelona/')) return 'CET';
  }
  return 'CET';
};

const EventPosts: React.FC<Props> = ({ post, date }) => {
  const agendaPath = getAgendaPath();
  const timezone = getTimezone();

  return (
    <section className="flex flex-col w-full py-4">
      {/* {post.startTime && (
        <div className="container-xl w-full relative bg-black text-white p-4 mb-6 transition-all duration-400">
          {date && formatDate(date)}{post.startTime && `${formatTime(post.startTime)}`}
          {post.endTime && ` – ${formatTime(post.endTime)}`}
          {` `}{timezone}
        </div>
      )} */}

      {/* hero */}
      <div className="pt-20 pb-10  md:py-10 container-xl w-full bg-black text-white">
        <h1 className="h4 py-2">{post?.title}</h1>
        <div className="pb-6 mt-6">
          <div className="inline-flex">
            {post.associatedSpeakers?.map((person, index) => (
              <span key={person._id ?? index}>
                {person.name}
                {index < (post.associatedSpeakers?.length ?? 0) - 1 &&
                  ',\u00A0'}
              </span>
            ))}
          </div>
          {post.coauthors && (
            <div className="mt-2">Coauthors: {post.coauthors}</div>
          )}

          <div className="flex flex-row pt-10 ">
            {post.projectLink && (
              <div className="mr-4">
                <Button light arrow href={post.projectLink}>
                  Link to Project
                </Button>
              </div>
            )}
            {post.poster?.asset.url && (
              <Button light arrow href={post.poster.asset.url}>
                View Poster
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* body */}
      {post?.body && (
        <div className=" bg-white w-full  py-4 md:py-10 px-4">
          <div className="container-md bg-nextflow  text-black p-4 md:p-8">
            <PortableText
              className=" container-lg t-4 monospace text-sm"
              value={post.body}
            />
          </div>

          {post.youtube && (
            <div className="container-md w-full h-full  bg-nextflow py-8">
              <YouTubeEmbed id={post.youtube} />
            </div>
          )}
        </div>
      )}

      {/* youtube */}

      {/* poster */}
      {post.poster?.asset?.url && (
        <div className=" bg-white">
          <div className="container-md w-full h-full min-h-[600px] bg-black py-8">
            <iframe
              className="min-h-[600px]"
              src={`${post.poster.asset.url}#zoom=page-fit`}
              width="100%"
              height="100%"
              style={{ border: 'none' }}
              title="PDF Preview"
            />
            <div className="pt-8">
              <Button light arrow href={post.poster.asset.url}>
                View Poster
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* speaker bios */}
      <div className="py-6 md:py-10  bg-white">
        {post.associatedSpeakers?.map((person, index) => (
          <div
            key={person._id ?? index}
            className="w-full bg-white text-black pb-6 md:pb-8"
          >
            <div className="container-xl w-full">
              <div className="container-md !p-0 bg-nextflow w-full flex  flex-col md:flex-row justify-between start">
                <div className="w-[34%]">
                  {person?.image ? (
                    <img
                      className="w-full p-8"
                      src={person.image.asset.url}
                      alt={`image of ${person.name}`}
                    />
                  ) : (
                    <div className="w-full h-full bg-nextflow-200" />
                  )}
                </div>
                <div className="w-full px-6 py-4">
                  <h3 className="font-display text-[2rem]">{person.name}</h3>
                  <p className="">{person?.role}</p>
                  <div className="flex flex-row mt-2">
                    {person.twitter && (
                      <SocialIcon
                        href={person.twitter}
                        type="Twitter"
                        className="pr-2 text-black"
                      />
                    )}
                    {person.linkedin && (
                      <SocialIcon
                        href={person.linkedin}
                        type="LinkedIn"
                        className="pr-2 text-black"
                      />
                    )}
                    {person.github && (
                      <SocialIcon
                        href={person.github}
                        type="GitHub"
                        className="pr-2 text-black"
                      />
                    )}
                    {person.bluesky && (
                      <SocialIcon
                        href={person.bluesky}
                        type="Bluesky"
                        className="pr-2 text-black"
                      />
                    )}
                  </div>
                  {person.bio && (
                    <div className="mt-8 pt-4">
                      <PortableText
                        className={clsx(styles.speakerBio)}
                        value={person.bio}
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* back to agenda */}
      <div className="bg-black text-white text-center py-10 w-full relative transition-all duration-400">
        <div className="container-xl w-full">
          <Button light arrow className="" href={agendaPath}>
            Return to Agenda
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EventPosts;
