import PortableText from '@components/PortableText';
import SocialIcon from '@components/SocialIcon';
import Button from '@components/Button';
import clsx from 'clsx';
import styles from './styles.module.css';

type Props = {
  post: any;
  title?: string;
  /** YYYY-MM-DD from agenda (Boston build); event docs often omit `date`. */
  sessionDate?: string;
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

const dateOpts: Intl.DateTimeFormatOptions = {
  weekday: 'long',
  month: 'long',
  day: 'numeric',
};

/** Calendar day for display: `YYYY-MM-DD` (local noon-safe) or ISO datetime. */
const formatDay = (raw?: string): string => {
  if (!raw) return '';
  if (raw.includes('T') || raw.length > 10) {
    const d = new Date(raw);
    return Number.isNaN(d.getTime()) ? '' : d.toLocaleDateString('en-US', dateOpts);
  }
  const [y, m, day] = raw.split('-').map(Number);
  if (!y || !m || !day) return '';
  return new Date(y, m - 1, day).toLocaleDateString('en-US', dateOpts);
};

const pathContext = (): { agendaPath: string; tz: string } => {
  if (typeof window === 'undefined') {
    return { agendaPath: '/2026/boston/agenda', tz: 'CET' };
  }
  const p = window.location.pathname;
  if (p.includes('/virtual/'))
    return { agendaPath: '/2026/virtual/agenda', tz: 'CET' };
  if (p.includes('/boston/'))
    return { agendaPath: '/2026/boston/agenda', tz: 'EST' };
  if (p.includes('/barcelona/'))
    return { agendaPath: '/2026/barcelona/agenda', tz: 'CET' };
  return { agendaPath: '/2026/boston/agenda', tz: 'CET' };
};

const EventPosts: React.FC<Props> = ({ post, sessionDate }) => {
  const { agendaPath, tz } = pathContext();
  const datePart =
    formatDay(post.date || sessionDate) || formatDay(post.publishedAt);
  const timePart =
    post.startTime &&
    `${formatTime(post.startTime)}${
      post.endTime ? ` - ${formatTime(post.endTime)}` : ''
    }`;
  const scheduleLine = [datePart, timePart].filter(Boolean).join(' · ');

  return (
    <section className="flex flex-col w-full py-4">
      
      {/* hero */}
      <div className="pt-20 pb-10  md:py-10 container-xl w-full bg-black text-white">
        <h1 className="h4 py-2">{post?.title}</h1>
        {scheduleLine && (
          <p className="monospace text-sm md:text-base text-nextflow-500 mt-3">
            {scheduleLine} {tz}
          </p>
        )}
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
        <div className=" bg-white w-full  py-4 md:pt-10 md:pb-0 px-4">
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
      {/* {post.poster?.asset?.url && (
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
      )} */}

      {/* speaker bios */}
      <div className="py-6 md:py-10  bg-white">
        {post.associatedSpeakers?.map((person, index) => (
          <div
            key={person._id ?? index}
            className="w-full bg-white text-black pb-6 md:pb-8"
          >
            <div className="container-xl w-full">
              <div className="container-md !p-0 bg-nextflow w-full flex  flex-col md:flex-row justify-between start">
                <div className="md:w-[34%]">
                  {person?.image ? (
                    <img
                      className="w-full p-6 md:p-8"
                      src={person.image.asset.url}
                      alt={`image of ${person.name}`}
                    />
                  ) : (
                    <div className="w-full h-full bg-nextflow-200" />
                  )}
                </div>
                <div className="w-full px-6 py-2 md:py-4">
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
                    <div className="mt-4 md:mt-8 pt-4 pb-2">
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
