import clsx from "clsx";
import styles from "./schedule.module.css";

type ScheduleItemProps = {
  className?: string;
  time?: string;
  name?: string;
  room?: string;
  name2?: string;
  room2?: string;
  speakers?: string;
  category?: string;
  highlighted?: boolean;
};

export const ScheduleItem: React.FC<ScheduleItemProps> = ({
  className,
  time,
  name,
  name2,
  room,
  room2,
  speakers,
  category,
  highlighted,
}) => {
  return (
    <div className="relative w-full flex flex-row border border-nextflow p-4 rounded-sm mb-2 ">
        <div className={`${highlighted ? 'absolute bg-nextflow-100 w-full h-full z-0 top-0 left-0 right-0 left-0 opacity-25' : 'hidden' } `}></div>
         <div className="basis-2/6 sm:basis-1/5 sm:w-full uppercase">{time}</div>

            <div className="hidden sm:basis-2/5 w-full sm:flex flex-row">
                <div className={`w-full ${name2 && 'basis-1/2'}`}>
                    <h4 className="font-semibold display">{name}</h4>
                    <p>{room && room}</p>
                </div>
                <div className={`w-full ${name2 ? 'basis-1/2' : 'hidden'}`}>
                    <h4 className="font-semibold display">{name2}</h4>
                    <p>{room2 && room2}</p>
                </div>
            </div>
            <div className="hidden sm:flex w-full sm:basis-1/5"><h4 className="font-semibold display">{speakers}</h4></div>
            <div className="hidden sm:flex w-full sm:basis-1/5"><h4 className="font-semibold display">{category}</h4></div>
 

        <div className="basis-4/6 w-full flex flex-col sm:hidden">
            <div className="w-full sm:basis-2/5 flex flex-col">
                <div className={`w-full`}>
                    <h4 className="font-semibold display">{name}</h4>
                    <p>{room && room}</p>
                </div>
                <div className={`w-full ${name2 ? '' : 'hidden'}`}>
                    <h4 className="font-semibold display">{name2}</h4>
                    <p>{room2 && room2}</p>
                </div>
            </div>
            <div className="w-full sm:basis-1/5"><h4 className="monospace text-nextflow text-sm">{speakers}</h4></div>
        </div>
    </div>
  );
};

export const ScheduleHeader = ({}) => {
  return (
    <div className="monospace hidden sm:flex flex-row w-full border-b border-white p-4 mb-6">
 
      <div className="w-full basis-1/5">Time: GMT+1</div>
      <div className="w-full basis-2/5">Name</div>
      <div className="w-full basis-1/5">Speakers</div>
      <div className="w-full basis-1/5">Category</div>
    
    </div>
  );
};

type Props = {
  children: React.ReactNode;
  className?: string;
  href?: string;
  externalLink?: boolean;
};

const Schedule: React.FC<Props> = ({
  children,
  className,
  href,
  externalLink,
}) => {
  return (
    <div className={clsx(styles.schedule, className, "", {})}>
      <section className="mb-20">
        <h5 className="h5 mb-2">Tuesday, May 13</h5>
        <ScheduleHeader />
        <ScheduleItem time="9:00am" name="Registration and Breakfast" highlighted={true}/>
        <ScheduleItem time="10:00am" name="Hackathon Welcome" name2="Training Welcome" />
        <ScheduleItem time="10:30am" name="Hackathon Session 1" name2="Training Session 1" />
        <ScheduleItem time="1:00pm" name="Lunch" highlighted={true} />
        <ScheduleItem time="2:00pm" name="Hackathon Session 2" name2="Training Session 2" />
        <ScheduleItem time="4:45pm" name="Hackathon Wrap-up" name2="Training Wrap-up" />
        <ScheduleItem time="5:00pm" name="Hackathon and Training: Social Event" />
        <ScheduleItem time="8:00pm" name="Hackathon and Training: Social Event Ends" />
      </section>

      <section className="mb-20">
        <h5 className="h5 mb-2">Wednesday, May 14</h5>
        <ScheduleHeader />
        <ScheduleItem time="9:00am" name="Registration and Breakfast" highlighted={true} />
        <ScheduleItem time="10:00am" name="Hackathon Session 3" name2="Training Session 3" />
        <ScheduleItem time="1:00pm" name="Lunch" highlighted={true} />
        <ScheduleItem time="2:00pm" name="Hackathon Session 4" name2="Training Session 4" />
        <ScheduleItem time="4:45pm" name="Hackathon Wrap-up"  />
        <ScheduleItem time="5:00pm" name="Hackathon and Training: End" />
      </section>

      <section className="mb-20">
        <h5 className="h5 mb-2">Thursday, May 15</h5>
        <ScheduleHeader />
        <ScheduleItem time="8:30am" name="Registration and Breakfast" highlighted={true} />
        <ScheduleItem time="9:30am" name="Welcome and Product Keynote" speakers="Evan Floden" category="Welcome" />
        <ScheduleItem time="10:20am" name="Talk" category="Enabling Science" />
        <ScheduleItem time="10:40am" name="Talk" category="Enabling Science" />
        <ScheduleItem time="11:00am" name="Coffee Break" highlighted={true} />
        <ScheduleItem time="11:30am" name="Sponsor Talk" category="Enabling Science" />
        <ScheduleItem time="12:00pm" name="Talk" category="Enabling Science" />
        <ScheduleItem time="12:20pm" name="Talk" category="Enabling Science" />
        <ScheduleItem time="12:40pm" name="nf-core Updates" category="Enabling Science" />
        <ScheduleItem time="1:00pm" name="Lunch" highlighted={true} />
        <ScheduleItem time="2:00pm" name="Nextflow Updates" speakers="Paolo di Tommaso" category="Big Nextflow" />
        <ScheduleItem time="2:30pm" name="Talk" category="Big Nextflow" />
        <ScheduleItem time="2:50pm" name="Talk" category="Big Nextflow" />
        <ScheduleItem time="3:10pm" name="Sponsor Talk" category="Big Nextflow" />
        <ScheduleItem time="3:30pm" name="Coffee Break" highlighted={true} />
        <ScheduleItem time="4:00pm" name="Talk" category="Big Nextflow" />
        <ScheduleItem time="4:20pm" name="Talk" category="Big Nextflow" />
        <ScheduleItem time="4:40pm" name="Keynote" category="Keynote" />
        <ScheduleItem time="5:30pm" name="Summit Reception"  />
        <ScheduleItem time="7:30pm" name="Summit Reception: End"  />
      </section>

      <section className="mb-20">
        <h5 className="h5 mb-2">Friday, May 16</h5>
        <ScheduleHeader />
        <ScheduleItem time="7:00am" name="Morning Walk and Run to Seaport" highlighted={true}/>
        <ScheduleItem time="8:30am" name="Registration and Breakfast" highlighted={true}/>
        <ScheduleItem time="9:30am" name="Seqera Updates" />
        <ScheduleItem time="10:00am" name="Talk" category="Organizational Impact" />
        <ScheduleItem time="10:20am" name="Talk" category="Organizational Impact" />
        <ScheduleItem time="10:40am" name="Sponsor Talk" category="Organizational Impact" />
        <ScheduleItem time="11:00am" name="Coffee Break" highlighted={true}/>
        <ScheduleItem time="11:30am" name="Talk" category="Organizational Impact" />
        <ScheduleItem time="11:50am" name="Keynote"  />
        <ScheduleItem time="12:40pm" name="Summit Closing"  />
        <ScheduleItem time="1:00pm" name="Summit End"  />
      </section>
    </div>
  );
};

export default Schedule;
