import React from "react";

type SessionProps = {
  title: string;
  speaker?: string;
  speaker2?: string;
  category?: string;
  url?: string;
};

type TimeSlot = {
  time: string;
  highlighted?: boolean;
  sessions: SessionProps[];
};

type ScheduleDay = {
  date: string;
  timezone: string;
  slots: TimeSlot[];
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

const SessionItem: React.FC<SessionProps> = ({
  title,
  speaker,
  speaker2,
  category,
  url,
}) => {
  const content = (
    <div className="w-full border-b border-gray-200 last:border-b-0 py-3">
      {category && (
        <h4 className="monospace text-xs bg-nextflow-500 inline text-brand rounded-sm px-1 p-[.15rem] opacity-80">
          {category}
        </h4>
      )}
      <h4 className="font-semibold display mb-1 text-[1.1rem] mt-1">{title}</h4>
      {speaker && speaker !== "N/A" && (
        <>
          <p className="font-semibold display text-sm text-gray-600">
            {speaker}
          </p>
          {speaker &&
          <p className="font-semibold display text-sm text-gray-600">
            {speaker2}
          </p>
}
        </>
      )}
    </div>
  );

  if (url) {
    return (
      <a
        href={url}
        className="block hover:bg-gray-50 transition-colors px-4 -mx-4"
      >
        {content}
      </a>
    );
  }

  return <div className="px-4 -mx-4">{content}</div>;
};

const TimeSlotItem: React.FC<TimeSlot> = ({ time, highlighted, sessions }) => {
  if (highlighted) {
    return (
      <div className="relative w-full flex flex-row border border-nextflow transition-all duration-300 p-4 rounded-sm mb-2">
        <div className="absolute bg-nextflow-100 w-full h-full z-0 top-0 right-0 left-0 opacity-25"></div>
        <div className="basis-2/6 sm:basis-1/6 sm:w-full uppercase z-10">
          {time}
        </div>
        <div className="basis-4/6 sm:basis-5/6 w-full z-10">
          <h4 className="font-semibold display">{sessions[0].title}</h4>
          {sessions[0].speaker && (
            <p className="font-semibold display text-sm">
              {sessions[0].speaker}
            </p>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full flex flex-row border border-nextflow transition-all duration-300 p-4 rounded-sm mb-2">
      <div className="basis-2/6 sm:basis-1/6 sm:w-full uppercase self-start">
        {time}
      </div>
      <div className="basis-4/6 sm:basis-5/6 w-full">
        {sessions
          .filter((s) => s.title !== "N/A")
          .map((session, idx) => (
            <SessionItem key={idx} {...session} />
          ))}
      </div>
    </div>
  );
};

const ScheduleHeader: React.FC<{ timezone?: string }> = ({
  timezone = "EDT",
}) => {
  return (
    <div className="monospace hidden sm:flex flex-row w-full border-b border-white p-4 mb-6">
      <div className="w-full basis-1/6">Time: {timezone}</div>
    </div>
  );
};

const virtualScheduleConfig: ScheduleConfig = {
  city: "virtual",
  year: "2025",
  days: [
    {
      date: "Thursday, October 23",
      timezone: "CEST (UTC+2)",
      slots: [
        {
          time: "1PM-2:40PM",
          highlighted: true,
          sessions: [
            {
              title: "Keynote",
              speaker: "Evan Floden, CEO & Co-Founder, Seqera",
            },
          ],
        },
        {
          time: "2:40PM",
          sessions: [
            {
              title:
                "Elevating a Legacy Institute: A Hybrid HPC Strategy with Nextflow",
              speaker:
                "Melanie Nuesch, Head of the High Performance Computing Platform, DRFZ Berlin",
              category: "Infrastructure & Automation",
            },
            {
              title:
                "Building bioinformatics skills with Nextflow/nf-core: a program for early–mid-career researchers",
              speaker:
                "Patricia Agudelo-Romero, Senior Research Fellow, The Kids Research Institute Australia",
              category: "Community & Training",
            },
          ],
        },
        {
          time: "3PM",
          sessions: [
            {
              title:
                "Integrating Seqera into Enhanced Process Automation to Fuel Nucleome's Discovery Engine",
              speaker:
                "Pauline Fourgoux, Senior Bioinformatician, Nucleome Therapeutics",
              category: "Infrastructure & Automation",
            },
            {
              title:
                "Enabling reproducibility in Agri-Ecology and Evolutionary biology",
              speaker:
                "Christopher Wyatt, Bioinformatician, University College London",
              category: "Microbiology & Ecology",
            },
            {
              title:
                "Collaborative Nextflow training for Australia's dispersed research landscape",
              speaker:
                "Giorgia Mori, BioCloud Training and Communication Officer, Australian BioCommons",
              category: "Community & Training",
            },
          ],
        },
        {
          time: "3:20PM",
          highlighted: true,
          sessions: [
            {
              title: "Lightning Talks",
            },
          ],
        },
        {
          time: "3:30PM",
          highlighted: true,
          sessions: [
            {
              title: "Coffee break",
            },
          ],
        },
        {
          time: "3:40PM",
          sessions: [
            {
              title:
                "Optimizing Genomics Workflows with Nextflow & Cloud Computing: Insights from a Research Institution",
              speaker: "Jacopo Tartaglia, Bioinformatician, CREA-GB",
              speaker2:
                "Wolfgang De Salvador, Senior Product Manager, Azure Storage Microsoft",
              category: "Infrastructure & Automation",
            },
            {
              title: "Nextflow v25 Broke Bactopia, So We Rewrote It",
              speaker:
                "Robert A Petit III, Senior Bioinformatics Scientist, Wyoming Public Health Laboratory",
              category: "Microbiology & Ecology",
            },
            {
              title: "Updates from the Community Team",
              speaker:
                "Geraldine Van der Auwera, Lead Developer Advocate, Seqera",
              category: "Community & Training",
            },
          ],
        },
        {
          time: "4PM",
          sessions: [
            {
              title:
                "Reads to Results: Architecting Modern Genomics Pipelines with Nextflow and Seqera Platform",
              speaker: "Vinay Vyas, Sr DevOps Engineer, Arcus Biosciences",
              category: "Infrastructure & Automation",
            },
            {
              title:
                "WasteFlow 2.0: Multi-Pathogen Respiratory Virus Surveillance in Canada",
              speaker:
                "Zohaib Anwar, Bioinformatician, BC Centre for Disease Control",
              category: "Microbiology & Ecology",
            },
            {
              title: "How I Built the Nextflow Community in Korea",
              speaker: "Jehee Lee, Nextflow Ambassador of Korea",
              category: "Community & Training",
            },
          ],
        },
        {
          time: "4:20PM",
          sessions: [
            {
              title:
                "Using Nextflow to Break Computational Barriers: NASA's Approach to Democratizing Space Omics Data",
              speaker:
                "Barbara Novak, NASA GeneLab Data Processing Lead, Blue Marble Space Institute of Science",
              category: "Infrastructure & Automation",
            },
            {
              title:
                "Metagenome quality metrics and taxonomical annotation visualization through BIgMAG/MAGFlow",
              speaker:
                "Jeferyd Yepes-García, PhD Candidate, University of Fribourg",
              category: "Microbiology & Ecology",
            },
            {
              title:
                "From FASTQ to Kappa: My First Experience with nf-core/viralrecon",
              speaker:
                "Mariam Sulaiman, Graduate Research Intern, IITA Nigeria",
              category: "Community & Training",
            },
          ],
        },
        {
          time: "4:40PM",
          sessions: [
            {
              title:
                "OpenProblems.bio: Reproducible Benchmarks for Single-Cell Omics at Scale",
              speaker:
                "Robrecht Cannoodt, Data Science Consultant, Data Intuitive",
              category: "Infrastructure & Automation",
            },
            {
              title:
                "Development of the ENSure Database and Pipeline for Rapid Microbial Testing in Biomanufacturing",
              speaker: "Tyler Laird, Bioinformatician, NIST",
              category: "Microbiology & Ecology",
            },
          ],
        },
        {
          time: "5PM",
          sessions: [
            {
              title:
                "Benchmarking nf-core/scrnaseq for Mouse Prostate Single-cell RNA-seq: Practical Insights",
              speaker:
                "Nikhila T Suresh, Post Doctoral Research Associate, Purdue University",
              category: "Infrastructure & Automation",
            },
            {
              title:
                "Earth Observation with Nextflow: A Use Case–Driven Introduction",
              speaker:
                "Felix Kummer, Research Associate, Humboldt-Universität zu Berlin",
              category: "Microbiology & Ecology",
            },
          ],
        },
        {
          time: "5:20PM",
          highlighted: true,
          sessions: [
            {
              title: "Summit End/Summit Wrap",
              speaker: "Evan Floden, CEO & Co-Founder, Seqera",
            },
          ],
        },
      ],
    },
    {
      date: "Friday, October 24",
      timezone: "CEST (UTC+2)",
      slots: [
        {
          time: "1PM",
          highlighted: true,
          sessions: [
            {
              title: "What's New With Nextflow",
              speaker: "Ben Sherman, Senior Software Engineer, Seqera",
            },
          ],
        },
        {
          time: "2-2:40PM",
          highlighted: true,
          sessions: [
            {
              title: "Keynote",
              speaker: "Segun Fatumo, Professor and Chair of Genomic Diversity, Queen Mary University of London",
            },
          ],
        },
        {
          time: "2:40PM",
          sessions: [
            {
              title:
                "nf-core/oncoanalyser: an accessible and portable pipeline to unify cancer DNA and RNA analysis",
              speaker:
                "Stephen Watts, Senior Bioinformatician, Collaborative Centre for Genomic Cancer Medicine",
              category: "Translational Research",
            },
            {
              title: "Updates from the nf-core community",
              speaker: "TBD",
              category: "Nextflow Ecosystem & nf-core",
            },
          ],
        },
        {
          time: "3PM",
          sessions: [
            {
              title: "What's new from the nf-core infrastructure team in 2025",
              speaker:
                "Matthias Hörtenhuber, Systems Developer, SciLifeLab Data Centre",
              category: "Nextflow Ecosystem & nf-core",
            },
          ],
        },
        {
          time: "3:20PM",
          highlighted: true,
          sessions: [
            {
              title: "Lightning Talks",
            },
          ],
        },
        {
          time: "3:30PM",
          highlighted: true,
          sessions: [
            {
              title: "Coffee break",
            },
          ],
        },
        {
          time: "3:40PM",
          sessions: [
            {
              title:
                "Reproducible LLM Driven Molecular Design with Nextflow and BioLM",
              speaker: "Andrew Stewart, COO, BioLM",
              category: "AI-Assisted Research",
            },
            {
              title:
                "DelMoro : A Nextflow Pipeline for Variant Calling and Streamlined Reporting in Clinical Genomics",
              speaker: "Firas Zemzem, PhD Candidate",
              category: "Translational Research",
            },
            {
              title:
                "MetroFlow : Generating Interactive Metro-Maps from Workflow Code",
              speaker: "George Marchment, Université Paris-Saclay",
              category: "Nextflow Ecosystem & nf-core",
            },
          ],
        },
        {
          time: "4PM",
          sessions: [
            {
              title: "Accelerating Cross-Assay Correlation with GenAI",
              speaker:
                "Kevin Moore, CEO, Quilt.bio",
              speaker2: "Vasisht Tadigotla, Head of Data and Engineering, Sail Biomedicines",
              category: "AI-Assisted Research",
            },
            {
              title:
                "GTEx Expression Data Processing Pipeline for Sex- and Age-Stratified Target Discovery",
              speaker:
                "Samantha Klasfeld, Web Developer, Boston Women in Bioinformatics",
              category: "Translational Research",
            },
            {
              title:
                "Contributing to nf-core within a translational project for personalized cancer medicine in Germany",
              speaker:
                "Barbara Novak, NASA GeneLab Data Processing Lead, Blue Marble Space Institute of Science",
              category: "Nextflow Ecosystem & nf-core",
            },
          ],
        },
        {
          time: "4:20PM",
          sessions: [
            {
              title:
                "AI-Driven Spatial Transcriptomics for Predicting Drug Response in the Tumor Microenvironment",
              speaker:
                "Kayode Raheem, PhD Researcher, University of Nebraska Medical Center",
              category: "AI-Assisted Research",
            },
            {
              title:
                "nf-core/differentialabundance: a unified framework for differential analysis",
              speaker:
                "Suzanne Jin, PhD Student, Centre for Genomic Regulation",
              category: "Translational Research",
            },
            {
              title:
                "Pipeline Hubs: A Concept for Live, Reproducible Method Comparison in Bioinformatics",
              speaker: "Cedric Notredame, PI, CRG",
              category: "Nextflow Ecosystem & nf-core",
            },
          ],
        },
        {
          time: "4:40PM",
          sessions: [
            {
              title:
                "Somatem: a modular and open source metagenomic analysis pipeline for long-reads with an LLM co-pilot",
              speaker:
                "Prashant Kalvapalle, Postdoctoral Researcher, Rice University",
              category: "AI-Assisted Research",
            },
            {
              title:
                "nf-core/proteinfamilies: A scalable pipeline for the generation of protein families",
              speaker: "Evangelos Karatzas, Research Fellow, EMBL-EBI",
              category: "Translational Research",
            },
            {
              title: "Python ♡ Nextflow: How to use the nf-python plugin",
              speaker:
                "Roy Jacobson, MSc Student, Weizmann Institute of Science",
              category: "Nextflow Ecosystem & nf-core",
            },
          ],
        },
        {
          time: "5PM",
          sessions: [
            {
              title: "SEQERA: 10 years of MultiQC",
              speaker:
                "Phil Ewels, Senior Product Manager for Open Source, Seqera",
              category: "AI-Assisted Research",
            },
            {
              title:
                "Advancing the nf-core/sammyseq pipeline for 4f-SAMMY-seq toward its first release",
              speaker:
                "Ugo Maria Iannacchero, PhD Student, Institute of Biomedical Technologies, National Research Council",
              speaker2: "Margherita Mutarelli, Researcher, ISASI-CNR",
              category: "Translational Research",
            },
            {
              title:
                "Tracking the Carbon Footprint of Pipeline Runs with nf-co2footprint, a Nextflow Plugin",
              speaker: "Josua Carl & Nadja Volkmann, Software Development, QBiC",
              category: "Nextflow Ecosystem & nf-core",
            },
          ],
        },
        {
          time: "5:20PM",
          highlighted: true,
          sessions: [
            {
              title: "Summit End/Summit Wrap",
              speaker: "Evan Floden, CEO & Co-Founder, Seqera",
            },
          ],
        },
      ],
    },
  ],
};

const ScheduleVirtual: React.FC<Props> = ({ children, className, config }) => {
  return (
    <div className={`w-full ${className || ""}`}>
      {config.days.map((day, dayIndex) => (
        <section key={dayIndex} className="mb-20">
          <h5 className="text-2xl mb-2">{day.date}</h5>
          <ScheduleHeader timezone={day.timezone} />
          {day.slots.map((slot, slotIndex) => (
            <TimeSlotItem key={slotIndex} {...slot} />
          ))}
        </section>
      ))}
      {children}
    </div>
  );
};

// Demo wrapper component
const VirtualScheduleDemo = () => {
  return <ScheduleVirtual config={virtualScheduleConfig} />;
};

export { virtualScheduleConfig, ScheduleVirtual };
export default VirtualScheduleDemo;
