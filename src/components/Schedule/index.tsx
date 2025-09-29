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
      date: "Tuesday, October 28",
      timezone: "CEST (UTC+2)",
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
      timezone: "CEST (UTC+2)",
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
  ],
};


export const virtualScheduleConfig: ScheduleConfig = {
  city: "virtual",
  year: "2025",
  days: [
    {
      date: "Thursday, October 23",
      timezone: "CEST (UTC+2)",
      items: [
        {
          time: "1PM-2:40PM",
          name: "Keynote",
          speakers: "Evan Floden, CEO at Seqera",
          highlighted: true,
        },
        {
          time: "2:40PM",
          name: "Elevating a Legacy Institute: A Hybrid HPC Strategy with Nextflow",
          speakers:
            "Melanie Nuesch, Head of the High Performance Computing Platform, DRFZ Berlin",
          category: "Infrastructure & Automation",
        },
        {
          //   time: "2:40PM",
          name: "N/A",
          speakers: "N/A",
          category: "Microbiology & Ecology",
        },
        {
          //  time: "2:40PM",
          name: "Building bioinformatics skills with Nextflow/nf-core: a program for early–mid-career researchers",
          speakers:
            "Patricia Agudelo-Romero, Senior Research Fellow, The Kids Research Institute Australia | The University of Western Australia",
          category: "Community & Training",
        },
        {
          time: "3PM",
          name: "Integrating Seqera into Enhanced Process Automation to Fuel Nucleome's Discovery Engine",
          speakers:
            "Pauline Fourgoux, Senior Bioinformatician, Nucleome Therapeutics",
          category: "Infrastructure & Automation",
        },
        {
          //  time: "3PM",
          name: "Enabling reproducibility in Agri-Ecology and Evolutionary biology",
          speakers:
            "Christopher Wyatt, Bioinformatician, University College London",
          category: "Microbiology & Ecology",
        },
        {
          //  time: "3PM",
          name: "Collaborative Nextflow training for Australia’s dispersed research landscape",
          speakers:
            "Giorgia Mori, BioCloud Training and Communication Officer, Australian BioCommons",
          category: "Community & Training",
        },
        {
          time: "3:20PM",
          name: "Lighting Talks",
          highlighted: true,
        },
        {
          time: "3:30PM",
          name: "Coffee break",
          highlighted: true,
        },
        {
          time: "3:40PM",
          name: "Optimizing Genomics Workflows with Nextflow & Cloud Computing: Insights from a Research Institution",
          speakers:
            "Jacopo Tartaglia, Bioinformatician, CREA-GB Wolfgang De Salvador, Senior Product Manager, Azure Storage Microsoft",
          category: "Infrastructure & Automation",
        },
        {
          //  time: "3:40PM",
          name: "Nextflow v25 Broke Bactopia, So We Rewrote It",
          speakers:
            "Robert A Petit III, Senior Bioinformatics Scientist, Wyoming Public Health Laboratory",
          category: "Microbiology & Ecology",
        },
        {
          //  time: "3:40PM",
          name: "Updates from the Community Team",
          speakers:
            "Geraldine Van der Auwera, Lead Developer Advocate, Marcel Ribeiro-Dantas, Senior Developer Advocate, Seqera",
          category: "Community & Training",
        },
        {
          time: "4PM",
          name: "Reads to Results: Architecting Modern Genomics Pipelines with Nextflow and Seqera Platform",
          speakers: "Vinay Vyas, Sr DevOps Engineer, Arcus Biosciences",
          category: "Infrastructure & Automation",
        },
        {
          //  time: "4PM",
          name: "WasteFlow 2.0: Multi-Pathogen Respiratory Virus Surveillance in Canada",
          speakers:
            "Zohaib Anwar, Bioinformatician, BC Centre for Disease Control, British Columbia, Canada",
          category: "Microbiology & Ecology",
        },
        {
          //  time: "4PM",
          name: "How I Built the Nextflow Community in Korea",
          speakers: "Jehee Lee, Nextflow Ambassador of Korea",
          category: "Community & Training",
        },
        {
          time: "4:20PM",
          name: "Using Nextflow to Break Computational Barriers: NASA's Approach to Democratizing Space Omics Data",
          speakers:
            "Barbara Novak, NASA GeneLab Data Processing Lead, Blue Marble Space Institute of Science",
          category: "Infrastructure & Automation",
        },
        {
          // time: "4:20PM",
          name: "Metagenome quality metrics and taxonomical annotation visualization through BIgMAG/MAGFlow",
          speakers:
            "Jeferyd Yepes-García, PhD Candidate, University of Fribourg",
          category: "Microbiology & Ecology",
        },
        {
          // time: "4:20PM",
          name: "From FASTQ to Kappa: My First Experience with nf-core/viralrecon",
          speakers:
            "Mariam Sulaiman, Graduate Research Intern, International Institute of Tropical Agriculture (IITA), Nigeria",
          category: "Community & Training",
        },
        {
          time: "4:40PM",
          name: "OpenProblems.bio: Reproducible Benchmarks for Single-Cell Omics at Scale",
          speakers:
            "Robrecht Cannoodt, Data Science Consultant, Data Intuitive",
          category: "Infrastructure & Automation",
        },
        {
          //  time: "4:40PM",
          name: "Development of the ENSure Database and Pipeline for Rapid Microbial Testing in Biomanufacturing",
          speakers:
            "Tyler Laird, Bioinformatician, National Institute of Standards and Technology (NIST)",
          category: "Microbiology & Ecology",
        },
        {
          //   time: "4:40PM",
          name: "N/A",
          speakers: "N/A",
          category: "Community & Training",
        },
        {
          time: "5PM",
          name: "Benchmarking nf-core/scrnaseq for Mouse Prostate Single-cell RNA-seq: Practical Insights",
          speakers:
            "Nikhila T Suresh, Post Doctoral Research Associate, Purdue University",
          category: "Infrastructure & Automation",
        },
        {
          // time: "5PM",
          name: "Earth Observation with Nextflow: A Use Case–Driven Introduction",
          speakers:
            "Felix Kummer, Research Associate, Humboldt-Universität zu Berlin",
          category: "Microbiology & Ecology",
        },
        {
          // time: "5PM",
          name: "N/A",
          speakers: "N/A",
          category: "Community & Training",
        },
        {
          time: "5:20PM",
          name: "Summit End",
          highlighted: true,
        },
      ],
    },
    {
      date: "Friday, October 24",
      timezone: "CEST (UTC+2)",
      items: [
        {
          time: "1PM",
          name: "OSS and SciDev Demo",
          highlighted: true,
        },
        {
          time: "2-2:40PM",
          name: "Keynote",
          speakers: "Segun Fatumo",
          highlighted: true,
        },
        {
          time: "2:40PM",
          name: "N/A",
          speakers: "N/A",
          category: "AI-Assisted Research",
        },
        {
          //  time: "2:40PM",
          name: "nf-core/oncoanalyser: an accessible and portable pipeline to unify cancer DNA and RNA analysis",
          speakers:
            "Stephen Watts, Senior Bioinformatician, Collaborative Centre for Genomic Cancer Medicine",
          category: "Translational Research",
        },
        {
          // time: "2:40PM",
          name: "Updates from the nf-core community",
          speakers: "TBD",
          category: "Nextflow Ecosystem & nf-core",
        },
        {
          time: "3PM",
          name: "N/A",
          speakers: "N/A",
          category: "AI-Assisted Research",
        },
        {
          // time: "3PM",
          name: "N/A",
          speakers: "N/A",
          category: "Translational Research",
        },
        {
          // time: "3PM",
          name: "What's new from the nf-core infrastructure team in 2025",
          speakers:
            "Matthias Hörtenhuber, Systems Developer, SciLifeLab Data Centre",
          category: "Nextflow Ecosystem & nf-core",
        },
        {
          time: "3:20PM",
          name: "Lighting Talks",
          highlighted: true,
        },
        {
          time: "3:30PM",
          name: "Coffee break",
          highlighted: true,
        },
        {
          time: "3:40PM",
          name: "Reproducible LLM Driven Molecular Design with Nextflow and BioLM",
          speakers: "Andrew Stewart, COO, BioLM",
          category: "AI-Assisted Research",
        },
        {
          // time: "3:40PM",
          name: "DelMoro : A Nextflow Pipeline for Variant Calling and  Streamlined Reporting in Clinical Genomics",
          speakers: "Firas Zemzem, PhD Candidate",
          category: "Translational Research",
        },
        {
          // time: "3:40PM",
          name: "MetroFlow : Generating Interactive Metro-Maps from Workflow Code",
          speakers: "George Marchment, Université Paris-Saclay",
          category: "Nextflow Ecosystem & nf-core",
        },
        {
          time: "4PM",
          name: "SPONSOR: Accelerating Cross-Assay Correlation with GenAI",
          speakers:
            "Kevin Moore, CEO, Quilt.bio, Vasisht Tadigotla, Head of Data and Engineering, Sail Biomedicines",
          category: "AI-Assisted Research",
        },
        {
          // time: "4PM",
          name: "GTEx Expression Data Processing Pipeline for Sex- and Age-Stratified Target Discovery",
          speakers:
            "Samantha Klasfeld, Web Developer, Boston Women in Bioinformatics",
          category: "Translational Research",
        },
        {
          // time: "4PM",
          name: "Contributing to nf-core within a translational project for personalized cancer medicine in Germany",
          speakers:
            "Barbara Novak, NASA GeneLab Data Processing Lead, Blue Marble Space Institute of Science",
          category: "Nextflow Ecosystem & nf-core",
        },
        {
          time: "4:20PM",
          name: "AI-Driven Spatial Transcriptomics for Predicting Drug Response in the Tumor Microenvironment",
          speakers:
            "Kayode Raheem, PhD Researcher, University of Nebraska Medical Center",
          category: "AI-Assisted Research",
        },
        {
          //  time: "4:20PM",
          name: "nf-core/differentialabundance: a unified framework for differential analysis",
          speakers:
            "Suzanne Jin, PhD Student, Centre for Genomic Regulation, Susanne Jodoin",
          category: "Translational Research",
        },
        {
          // time: "4:20PM",
          name: "Pipeline Hubs: A Concept for Live, Reproducible Method Comparison in Bioinformatics",
          speakers: "Cedric Notredame, PI, CRG",
          category: "Nextflow Ecosystem & nf-core",
        },
        {
          time: "4:40PM",
          name: "Somatem: a modular and open source metagenomic analysis pipeline for long-reads with an LLM co-pilot",
          speakers:
            "Prashant Kalvapalle, Postdoctoral Researcher,  Rice University",
          category: "AI-Assisted Research",
        },
        {
          //  time: "4:40PM",
          name: "nf-core/proteinfamilies: A scalable pipeline for the generation of protein families",
          speakers: "Evangelos Karatzas, Research Fellow, EMBL-EBI",
          category: "Translational Research",
        },
        {
          // time: "4:40PM",
          name: "Python ♡ Nextflow: How to use the nf-python plugin",
          speakers: "Roy Jacobson, MSc Student, Weizmann Institute of Science",
          category: "Nextflow Ecosystem & nf-core",
        },
        {
          time: "5PM",
          name: " SEQERA: 10 years of MultiQC",
          speakers:
            "Phil Ewels, Senior Product Manager for Open Source, Seqera",
          category: "AI-Assisted Research",
        },
        {
          //  time: "5PM",
          name: "Advancing the nf-core/sammyseq pipeline for 4f-SAMMY-seq toward its first release",
          speakers:
            "Ugo Maria Iannacchero, PhD Student, Institute of Biomedical Technologies, National Research Council (ITB-CNR), Margherita Mutarelli, Researcher, ISASI-CNR",
          category: "Translational Research",
        },
        {
          // time: "5PM",
          name: "Tracking the Carbon Footprint of Pipeline Runs with nf-co2footprint, a Nextflow Plugin",
          speakers: "Josua Carl & Nadja Volkmann, Software Developer, QBiC",
          category: "Nextflow Ecosystem & nf-core",
        },
        {
          time: "5:20PM",
          name: "Summit Wrap",
          speakers: "Evan Floden",
          highlighted: true,
        },
      ],
    }
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
