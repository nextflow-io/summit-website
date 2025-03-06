import clsx from "clsx";
import styles from "./schedule.module.css";

type ScheduleItemProps = {
  className?: string;
  time?: string;
  name?: string;
  room?: string;
  speakers?: string;
  category?: string;
};

export const ScheduleItem: React.FC<ScheduleItemProps> = ({
  className,
  time,
  name,
  room,
  speakers,
  category,
}) => {
  return (
    <div className="w-full flex flex-row border border-nextflow p-4 rounded-sm">
        <div className="w-full basis-1/5 monospace uppercase">{time}</div>
        <div className="w-full basis-2/5">
            <h4>{name}</h4>
            <p>{room && room}</p>
        </div>
        <div className="w-full basis-1/5">{speakers}</div>
        <div className="w-full basis-1/5">{category}</div>
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
      <section className="mb-10">
         <h5 className="h5 mb-2">Tuesday, May 21</h5>
        <ScheduleHeader />
        <ScheduleItem time="9:00 am" name="Registration and Breakfast"></ScheduleItem>
      </section>
    </div>
  );
};

export default Schedule;
