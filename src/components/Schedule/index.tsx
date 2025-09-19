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
  url?: string;
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
  url,
}) => {
  return (
    <div
      className={`relative w-full flex flex-row border border-nextflow transition-all duration-300 p-4 rounded-sm mb-2 ${url && "hover:border-nextflow-200"}`}
    >
      <div
        className={`${highlighted ? "absolute bg-nextflow-100 w-full h-full z-0 top-0 right-0 left-0 opacity-25" : "hidden"} `}
      ></div>
      <div className="basis-2/6 sm:basis-1/5 sm:w-full uppercase">{time}</div>

      <div className="hidden sm:basis-2/5 w-full sm:flex flex-row pr-6">
        <div className={`w-full ${name2 && "basis-1/2"}`}>
          <h4 className="font-semibold display">{name}</h4>
          <p>{room && room}</p>
        </div>
        <div className={`w-full ${name2 ? "basis-1/2" : "hidden"}`}>
          <h4 className="font-semibold display">{name2}</h4>
          <p>{room2 && room2}</p>
        </div>
      </div>
      <div className="hidden sm:flex w-full sm:basis-1/5 sm:pr-4">
        <h4 className="font-semibold display">{speakers}</h4>
      </div>
      <div className="hidden sm:flex w-full sm:basis-1/5">
        <h4 className="font-semibold display">{category}</h4>
      </div>

      <div className="basis-4/6 w-full flex flex-col sm:hidden">
        <div className="w-full sm:basis-2/5 flex flex-col">
          <div className={`w-full`}>
            <h4 className="font-semibold display">{name}</h4>
            <p>{room && room}</p>
          </div>
          <div className={`w-full ${name2 ? "" : "hidden"}`}>
            <h4 className="font-semibold display">{name2}</h4>
            <p>{room2 && room2}</p>
          </div>
        </div>
        <div className="w-full sm:basis-1/5">
          <h4 className="monospace text-nextflow text-sm">{speakers}</h4>
        </div>
      </div>

      {url && (
        <a
          href={url}
          className="w-full h-full absolute top-0 left-0 right-0 bottom-0 z-10"
        />
      )}
    </div>
  );
};

export const ScheduleHeader = ({ timezone = "EDT" }: { timezone?: string }) => {
  return (
    <div className="monospace hidden sm:flex flex-row w-full border-b border-white p-4 mb-6">
      <div className="w-full basis-1/5">Time: {timezone}</div>
      <div className="w-full basis-2/5">Name</div>
      <div className="w-full basis-1/5">Speakers</div>
      <div className="w-full basis-1/5">Category</div>
    </div>
  );
};

type ScheduleDay = {
  date: string;
  timezone: string;
  items: Omit<ScheduleItemProps, "className">[];
};

type ScheduleConfig = {
  city: string;
  year: string;
  days: ScheduleDay[];
};

type Props = {
  children?: React.ReactNode;
  className?: string;
  config: ScheduleConfig;
};

// Boston Schedule Configuration
export const bostonScheduleConfig: ScheduleConfig = {
  city: "boston",
  year: "2025",
  days: [
    {
      date: "Tuesday, May 13",
      timezone: "EDT",
      items: [
        {
          time: "9:00am",
          name: "Registration and Breakfast",
          highlighted: true,
        },
        {
          time: "10:00am",
          name: "Hackathon Welcome",
          name2: "Training Welcome",
        },
        {
          time: "10:30am",
          name: "Hackathon Session 1",
          name2: "Training Session 1",
        },
        { time: "1:00pm", name: "Lunch", highlighted: true },
        {
          time: "2:00pm",
          name: "Hackathon Session 2",
          name2: "Training Session 2",
        },
        {
          time: "4:45pm",
          name: "Hackathon Wrap-up",
          name2: "Training Wrap-up",
        },
        {
          time: "5:00pm",
          name: "Hackathon and Training: Social Event",
          highlighted: true,
        },
        { time: "8:00pm", name: "Hackathon and Training: Social Event Ends" },
      ],
    },
    {
      date: "Wednesday, May 14",
      timezone: "EDT",
      items: [
        {
          time: "9:00am",
          name: "Registration and Breakfast",
          highlighted: true,
        },
        {
          time: "10:00am",
          name: "Hackathon Session 3",
          name2: "Training Session 3",
        },
        { time: "1:00pm", name: "Lunch", highlighted: true },
        {
          time: "2:00pm",
          name: "Hackathon Session 4",
          name2: "Training Session 4",
        },
        {
          time: "4:45pm",
          name: "Hackathon Wrap-up",
          name2: "Training Wrap-up",
          highlighted: true,
        },
        { time: "5:00pm", name: "Hackathon and Training: End" },
      ],
    },
    {
      date: "Thursday, May 15",
      timezone: "EDT",
      items: [
        {
          time: "8:30am",
          name: "Registration, coffee and breakfast",
          highlighted: true,
        },
        {
          time: "9:30am",
          name: "Welcome",
          category: "Welcome",
          speakers: "Evan Floden",
        },
        {
          time: "9:40am",
          name: "Product Keynote: From Pipelines to Platform",
          speakers: "Evan Floden",
          category: "Enabling Science",
          url: "/2025/boston/agenda/from-pipelines-to-platform",
        },
        {
          time: "10:20am",
          name: "From Technical Debt to Sustainable Workflows: The AI-MARRVEL Nextflow Journey",
          category: "Enabling Science",
          speakers: "Hyun-Hwan Jeong",
          url: "/2025/boston/agenda/from-technical-debt-to-sustainable-workflows-the-ai-marrvel-nextflow-journey",
        },
        {
          time: "10:40am",
          name: "Streamlining RNA-Seq Data Analysis with rnaseq-reports",
          category: "Enabling Science",
          speakers: "Alexandra Bartlett",
          url: "/2025/boston/agenda/streamlining-rna-seq-data-analysis-with-rnaseq-reports",
        },
        { time: "11:00am", name: "Coffee break", highlighted: true },
        {
          time: "11:30am",
          name: "Closing the Metadata Gap: Linking Sample Context to Nextflow Outputs with Quilt",
          speakers: "Kevin Moore",
          category: "Organizational Impact",
          url: "/2025/boston/agenda/closing-the-metadata-gap-linking-sample-context-to-nextflow-outputs-with-quilt",
        },
        {
          time: "11:50am",
          name: "Create the best protein annotation pipeline in the world, aka Protein fasta → ??? → Profit!",
          category: "Enabling Science",
          speakers: "Olga Botvinnik",
          url: "/2025/boston/agenda/create-the-best-protein-annotation-pipeline-in-the-world-aka-protein-fasta-profit",
        },
        {
          time: "12:10pm",
          name: "SCALPEL, a Nextflow based pipeline for quantification of isoform at single-cell resolution",
          category: "Enabling Science",
          speakers: "Franz Arnold Ake",
          url: "/2025/boston/agenda/scalpel-a-nextflow-based-pipeline-for-quantification-of-isoform-at-single-cell-resolution",
        },
        {
          time: "12:30pm",
          name: "Developing a Scalable Workflow for Analyzing Long-Read 16S Sequences from Oxford Nanopore Sequencing",
          category: "Enabling Science",
          speakers: "Adriana Messyasz",
          url: "/2025/boston/agenda/developing-a-scalable-workflow-for-analyzing-long-read-16s-sequences-from-oxford-nanopore",
        },
        {
          time: "12:50pm",
          name: "Lightning Round",
          category: "Poster Pitches",
        },
        { time: "1:00pm", name: "Lunch", highlighted: true },
        {
          time: "2:00pm",
          name: "What's new in Nextflow: Defining the future of reproducible workflows",
          speakers: "Paolo Di Tommaso",
          category: "Big Nextflow",
          url: "/2025/boston/agenda/nextflow-updates",
        },
        {
          time: "2:30pm",
          name: "What it took to run a pipeline on aarch64",
          category: "Big Nextflow",
          speakers: "Angel Pizarro and Yan Fisher",
          url: "/2025/boston/agenda/what-it-took-to-run-a-pipeline-on-aarch64",
        },
        {
          time: "3:00pm",
          name: "Unified, community-developed analysis guidelines and templates for multi-omics data interpretability",
          category: "Big Nextflow",
          speakers: "Lorena Pantano",
          url: "/2025/boston/agenda/unified-community-developed-analysis-guidelines-and-templates-for-multi-omics-data",
        },
        { time: "3:20pm", name: "Lightning Round", category: "Poster Pitches" },
        { time: "3:30pm", name: "Coffee break", highlighted: true },
        {
          time: "4:00pm",
          name: "Running Nextflow on Microsoft Azure: selecting executors and infrastructure components",
          speakers: "Wolfgang De Salvador",
          category: "Big Nextflow",
          url: "/2025/boston/agenda/running-nextflow-on-microsoft-azure-selecting-executors-and-infrastructure-components/",
        },
        {
          time: "4:20pm",
          name: "Seqera Fusion x NVIDIA Parabricks for Accelerated Analysis",
          category: "Big Nextflow",
          speakers: "Gary Burnett and Edmund Miller",
          url: "/2025/boston/agenda/seqera-fusion-x-nvidia-parabricks-for-accelerated-analysis",
        },
        {
          time: "4:40pm",
          name: "Keynote: Responsible AI in Genomics: How to Prepare for a Future That's Already Here",
          category: "Big Nextflow",
          speakers: "Luisa Herrmann",
          url: "/2025/boston/agenda/responsible-ai-in-genomics",
        },
        { time: "5:30pm", name: "Summit Reception", highlighted: true },
        { time: "7:30pm", name: "Summit Reception: End" },
      ],
    },
    {
      date: "Friday, May 16",
      timezone: "EDT",
      items: [
        {
          time: "7:00am",
          name: "Network: Morning Walk and Run to Seaport",
          highlighted: true,
        },
        { time: "8:30am", name: "Coffee and breakfast", highlighted: true },
        {
          time: "9:30am",
          name: "Scale with Seqera: Accelerate, Expand, and Collaborate",
          category: "Organizational Impact",
          speakers: "Esha Joshi",
          url: "/2025/boston/agenda/scale-with-seqera-accelerate-expand-and-collaborate",
        },
        {
          time: "10:00am",
          name: "Integrating Bioinformatics into the Regulated Pharmaceutical Lifecycle",
          category: "Organizational Impact",
          speakers: "Brice Sarver and Kostis Karagiannis",
          url: "/2025/boston/agenda/integrating-bioinformatics-into-the-regulated-pharmaceutical-lifecycle",
        },
        {
          time: "10:20am",
          name: "Building an Omics Data Infrastructure to Bridge Data Management and Data Science",
          category: "Organizational Impact",
          speakers: "Juliana Assis",
          url: "/2025/boston/agenda/building-an-omics-data-infrastructure-to-bridge-data-management-and-data-science",
        },
        {
          time: "10:40am",
          name: "How Genie Empowers Genomic England's Generation Study",
          category: "Organizational Impact",
          speakers: "Adrianto Wirawan",
          url: "/2025/boston/agenda/how-genie-empowers-genomic-englands-generation-study",
        },
        { time: "11:00am", name: "Coffee break", highlighted: true },
        {
          time: "11:30am",
          name: "Optimizing Compute Costs with Seqera Cloud: Champions Oncology's PDX Bank and Multi-Omics Data",
          speakers: "Gervaise Henry",
          category: "Organizational Impact",
          url: "/2025/boston/agenda/optimizing-compute-costs-with-seqera-cloud-champions-oncology-s-pdx-bank-and-multi-omics-data",
        },
        {
          time: "11:45am",
          name: "DRAGoN - Divide-and-conquer strategy for processing large DRUG-seq experiments",
          speakers: "Scott Norton",
          url: "/2025/boston/agenda/dragon-divide-and-conquer-strategy-for-processing-large-drug-seq-experiments",
        },
        {
          time: "12:00pm",
          name: "Enabling Reproducible Science and African Representation in Science through Nextflow Workshops",
          category: "Organizational Impact",
          speakers: "Olaitan Awe",
          url: "/2025/boston/agenda/enabling-reproducible-science-and-african-representation-in-science-through-nextflow-workshops",
        },
        {
          time: "12:20pm",
          name: "Panel Discussion: Beyond the Pipeline: Advancing Diversity in Challenging Times",
          speakers: "Saba Nafees, Lorena Pantano and Francine Camacho",
          url: "/2025/boston/agenda/beyond-the-pipeline-advancing-diversity-in-challenging-times",
        },
        { time: "1:00pm", name: "Summit: Wrap-up", highlighted: true },
        { time: "1:10pm", name: "Summit: End", highlighted: true },
      ],
    },
  ],
};

// Barcelona Schedule Configuration
export const barcelonaScheduleConfig: ScheduleConfig = {
  city: "barcelona",
  year: "2025",
  days: [
    {
      date: "Thursday, October 23",
      timezone: "CET",
      items: [
        { time: "TBA", name: "Nextflow Summit - Virtual", highlighted: true },
      ],
    },
    {
      date: "Friday, October 24",
      timezone: "CET",
      items: [
        { time: "TBA", name: "Nextflow Summit - Virtual", highlighted: true },
      ],
    },
    {
      date: "Tuesday, October 28",
      timezone: "CET",
      items: [
        {
          time: "9:00am",
          name: "Registration and Breakfast",
          highlighted: true,
        },
        {
          time: "10:00am",
          name: "Hackathon Welcome",
          name2: "Training Welcome",
        },
        {
          time: "10:30am",
          name: "Hackathon Session 1",
          name2: "Training Session 1",
        },
        { time: "1:00pm", name: "Lunch", highlighted: true },
        {
          time: "2:00pm",
          name: "Hackathon Session 2",
          name2: "Training Session 2",
        },
        {
          time: "4:45pm",
          name: "Hackathon Wrap-up",
          name2: "Training Wrap-up",
        },
        {
          time: "5:30pm",
          name: "Hackathon and Training: Social Event",
          highlighted: true,
        },
        { time: "8:00pm", name: "Hackathon and Training: Social Event Ends" },
      ],
    },
    {
      date: "Wednesday, October 29",
      timezone: "CET",
      items: [
        {
          time: "9:00am",
          name: "Registration and Breakfast",
          highlighted: true,
        },
        {
          time: "10:00am",
          name: "Hackathon Session 3",
          name2: "Training Session 3",
        },
        { time: "1:00pm", name: "Lunch", highlighted: true },
        {
          time: "2:00pm",
          name: "Hackathon Session 4",
          name2: "Training Session 4",
        },
        {
          time: "4:45pm",
          name: "Hackathon Wrap-up",
          name2: "Training Wrap-up",
          highlighted: true,
        },
        { time: "5:00pm", name: "Hackathon and Training: End" },
      ],
    },
    // {
    //   date: "Thursday, September 25",
    //   timezone: "CEST",
    //   items: [
    //     { time: "8:30am", name: "Registration, coffee and breakfast", highlighted: true },
    //     { time: "9:30am", name: "Welcome", category: "Welcome", speakers: "Evan Floden" },
    //     { time: "9:40am", name: "Product Keynote: Seqera Platform Evolution", speakers: "Paolo Di Tommaso", category: "Enabling Science", url: "/2025/barcelona/agenda/seqera-platform-evolution" },
    //     { time: "10:20am", name: "Scaling Genomic Analysis in European Healthcare", category: "Enabling Science", speakers: "Dr. Maria Gonzalez", url: "/2025/barcelona/agenda/scaling-genomic-analysis-european-healthcare" },
    //     { time: "10:40am", name: "Multi-omics Integration for Precision Medicine", category: "Enabling Science", speakers: "Prof. Jean Dubois", url: "/2025/barcelona/agenda/multi-omics-integration-precision-medicine" },
    //     { time: "11:00am", name: "Coffee break", highlighted: true },
    //     { time: "11:30am", name: "Cloud-Native Workflows for European Research Infrastructure", speakers: "Dr. Klaus Weber", category: "Big Nextflow", url: "/2025/barcelona/agenda/cloud-native-workflows-european-research" },
    //     { time: "11:50am", name: "GDPR-Compliant Genomic Data Processing", category: "Organizational Impact", speakers: "Laura Rossi", url: "/2025/barcelona/agenda/gdpr-compliant-genomic-data-processing" },
    //     { time: "12:10pm", name: "Nextflow in Agricultural Genomics: From Lab to Field", category: "Enabling Science", speakers: "Dr. Antonio Silva", url: "/2025/barcelona/agenda/nextflow-agricultural-genomics" },
    //     { time: "12:30pm", name: "Building Sustainable Bioinformatics Infrastructure in Academia", category: "Organizational Impact", speakers: "Prof. Elena Petrov", url: "/2025/barcelona/agenda/sustainable-bioinformatics-infrastructure" },
    //     { time: "12:50pm", name: "Lightning Round", category: "Poster Pitches" },
    //     { time: "1:00pm", name: "Lunch", highlighted: true },
    //     { time: "2:00pm", name: "What's new in Nextflow: European Perspectives", speakers: "Paolo Di Tommaso", category: "Big Nextflow", url: "/2025/barcelona/agenda/nextflow-european-perspectives" },
    //     { time: "2:30pm", name: "Federated Learning in Genomics with Nextflow", category: "Big Nextflow", speakers: "Dr. Mikhail Volkov", url: "/2025/barcelona/agenda/federated-learning-genomics-nextflow" },
    //     { time: "3:00pm", name: "European Genomics Cloud Initiative", category: "Big Nextflow", speakers: "Dr. Sophie Martin", url: "/2025/barcelona/agenda/european-genomics-cloud-initiative" },
    //     { time: "3:20pm", name: "Lightning Round", category: "Poster Pitches" },
    //     { time: "3:30pm", name: "Coffee break", highlighted: true },
    //     { time: "4:00pm", name: "Nextflow on European HPC Systems", speakers: "Dr. Anders Larsson", category: "Big Nextflow", url: "/2025/barcelona/agenda/nextflow-european-hpc-systems" },
    //     { time: "4:20pm", name: "Reproducible Research in the Mediterranean: A Multi-Country Collaboration", category: "Organizational Impact", speakers: "Dr. Nikos Papadopoulos and Dr. Fatima Al-Rashid", url: "/2025/barcelona/agenda/reproducible-research-mediterranean" },
    //     { time: "4:40pm", name: "Keynote: The Future of European Genomics Collaboration", category: "Big Nextflow", speakers: "Prof. Catherine Williams", url: "/2025/barcelona/agenda/future-european-genomics-collaboration" },
    //     { time: "5:30pm", name: "Summit Reception at Casa Batlló", highlighted: true },
    //     { time: "8:00pm", name: "Summit Reception: End" },
    //   ]
    // },
    // {
    //   date: "Friday, September 26",
    //   timezone: "CEST",
    //   items: [
    //     { time: "7:00am", name: "Network: Morning Walk along Barcelona Beach", highlighted: true },
    //     { time: "8:30am", name: "Coffee and breakfast", highlighted: true },
    //     { time: "9:30am", name: "Seqera Platform: European Data Sovereignty", category: "Organizational Impact", speakers: "Rob Newman", url: "/2025/barcelona/agenda/seqera-platform-european-data-sovereignty" },
    //     { time: "10:00am", name: "Regulatory Compliance for Genomic Workflows in Europe", category: "Organizational Impact", speakers: "Dr. Hans Mueller and Maria Santos", url: "/2025/barcelona/agenda/regulatory-compliance-genomic-workflows-europe" },
    //     { time: "10:20am", name: "Building Cross-Border Research Collaborations", category: "Organizational Impact", speakers: "Dr. Anna Kowalski", url: "/2025/barcelona/agenda/building-cross-border-research-collaborations" },
    //     { time: "10:40am", name: "Open Science and FAIR Data in European Genomics", category: "Organizational Impact", speakers: "Prof. Jan van der Berg", url: "/2025/barcelona/agenda/open-science-fair-data-european-genomics" },
    //     { time: "11:00am", name: "Coffee break", highlighted: true },
    //     { time: "11:30am", name: "Cost Optimization for European Cloud Computing", speakers: "Dr. Ingrid Olsen", category: "Organizational Impact", url: "/2025/barcelona/agenda/cost-optimization-european-cloud-computing" },
    //     { time: "11:45am", name: "Nextflow Training Programs Across Europe", speakers: "Dr. Pierre Laurent", url: "/2025/barcelona/agenda/nextflow-training-programs-europe" },
    //     { time: "12:00pm", name: "Diversity and Inclusion in European Bioinformatics", category: "Organizational Impact", speakers: "Dr. Amara Okafor", url: "/2025/barcelona/agenda/diversity-inclusion-european-bioinformatics" },
    //     { time: "12:20pm", name: "Panel Discussion: Shaping the Future of European Computational Biology", speakers: "Multiple European Leaders", url: "/2025/barcelona/agenda/shaping-future-european-computational-biology" },
    //     { time: "1:00pm", name: "Summit: Wrap-up", highlighted: true },
    //     { time: "1:10pm", name: "Summit: End", highlighted: true },
    //   ]
    // }
  ],
};

const Schedule: React.FC<Props> = ({ children, className, config }) => {
  return (
    <div className={clsx(styles.schedule, className)}>
      {config.days.map((day, dayIndex) => (
        <section key={dayIndex} className="mb-20">
          <h5 className="h5 mb-2">{day.date}</h5>
          <ScheduleHeader timezone={day.timezone} />
          {day.items.map((item, itemIndex) => (
            <ScheduleItem key={itemIndex} {...item} />
          ))}
        </section>
      ))}
      {children}
    </div>
  );
};

export default Schedule;
