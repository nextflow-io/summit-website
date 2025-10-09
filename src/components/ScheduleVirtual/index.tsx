import React, { useState } from "react";

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

// Timezone conversion utility
const TIMEZONES = [
  { label: "Barcelona (CET)", value: "Europe/Madrid", offset: 2 },
  { label: "London (BST)", value: "Europe/London", offset: 1 },
  { label: "New York (EDT)", value: "America/New_York", offset: -4 },
  { label: "Chicago (CDT)", value: "America/Chicago", offset: -5 },
  { label: "Denver (MDT)", value: "America/Denver", offset: -6 },
  { label: "Los Angeles (PDT)", value: "America/Los_Angeles", offset: -7 },
  { label: "São Paulo (BRT)", value: "America/Sao_Paulo", offset: -3 },
  { label: "Paris (CET)", value: "Europe/Paris", offset: 2 },
  { label: "Berlin (CET)", value: "Europe/Berlin", offset: 2 },
  { label: "Dubai (GST)", value: "Asia/Dubai", offset: 4 },
  { label: "Singapore (SGT)", value: "Asia/Singapore", offset: 8 },
  { label: "Beijing (CST)", value: "Asia/Shanghai", offset: 8 },
  { label: "Seoul (KST)", value: "Asia/Seoul", offset: 9 },
  { label: "Tokyo (JST)", value: "Asia/Tokyo", offset: 9 },
  { label: "Sydney (AEDT)", value: "Australia/Sydney", offset: 11 },
  { label: "Auckland (NZDT)", value: "Pacific/Auckland", offset: 13 },
];

const convertTime = (time: string, sourceOffset: number, targetOffset: number): { time: string; dayOffset: number } => {
  // Extract hours and minutes
  const timeMatch = time.match(/(\d+):?(\d+)?\s*(AM|PM)/i);
  if (!timeMatch) return { time, dayOffset: 0 };
  
  const [, hourStr, mins = "0", period] = timeMatch;
  const hour12 = parseInt(hourStr);
  const minutes = parseInt(mins);
  
  // Convert to 24-hour format
  let hour24 = hour12;
  if (period.toUpperCase() === "PM" && hour12 !== 12) {
    hour24 = hour12 + 12;
  } else if (period.toUpperCase() === "AM" && hour12 === 12) {
    hour24 = 0;
  }
  
  // Convert timezone
  const convertedHour = hour24 + (targetOffset - sourceOffset);
  const normalizedHour = ((convertedHour % 24) + 24) % 24;
  const dayOffset = Math.floor(convertedHour / 24);
  
  // Format output
  let displayHour = normalizedHour;
  let displayPeriod = "AM";
  
  if (normalizedHour === 0) {
    displayHour = 12;
  } else if (normalizedHour === 12) {
    displayHour = 12;
    displayPeriod = "PM";
  } else if (normalizedHour > 12) {
    displayHour = normalizedHour - 12;
    displayPeriod = "PM";
  }
  
  const minuteStr = minutes > 0 ? `:${minutes.toString().padStart(2, '0')}` : "";
  const timeStr = `${displayHour}${minuteStr}${displayPeriod}`;
  
  return { time: timeStr, dayOffset };
};

const SessionItem: React.FC<SessionProps> = ({
  title,
  speaker,
  speaker2,
  category,
  url,
}) => {
  const content = (
    <div className="w-full border-b border-gray-200 last:border-b-0 pb-3 opacity-90 group transition-all duration-300">
      {category && (
        <h4 className="monospace text-xs bg-nextflow-500 inline text-brand rounded-sm px-2 p-[.15rem]">
          {category}
        </h4>
      )}
      <h4 className="font-semibold display mb-1 text-[1rem] md:text-[1.2rem] mt-1 group-hover:text-nextflow transition-all duration-300">
        {title}
      </h4>
      {speaker && speaker !== "N/A" && (
        <>
          <p className="font-semibold display text-sm text-gray-300  group-hover:text-nextflow transition-all duration-300">
            {speaker}
          </p>
          {speaker2 && (
            <p className="font-semibold display text-sm text-gray-300  group-hover:text-nextflow transition-all duration-300">
              {speaker2}
            </p>
          )}
        </>
      )}
    </div>
  );

  if (url) {
    return (
      <a
        href={`/2025/virtual/agenda/${url}`}
        className="block transition-colors px-4 -mx-4 "
      >
        {content}
      </a>
    );
  }

  return <div className="px-4 -mx-4">{content}</div>;
};

const TimeSlotItem: React.FC<TimeSlot & { sourceOffset: number; targetOffset: number }> = ({ 
  time, 
  highlighted, 
  sessions,
  sourceOffset,
  targetOffset 
}) => {
  const converted = convertTime(time, sourceOffset, targetOffset);
  const displayTime = converted.dayOffset !== 0 
    ? `${converted.time} ${converted.dayOffset > 0 ? '+1 day' : '-1 day'}`
    : converted.time;
  
  if (highlighted) {
    return (
      <div
        className={`relative w-full flex flex-row border border-nextflow ${sessions[0].url && "hover:border-nextflow-200  hover:text-white transition-all duration-300"} p-4 rounded-sm mb-2 group`}
      >
        <div
          className={`absolute bg-nextflow-100 w-full h-full z-0 top-0 right-0 left-0 opacity-25 ${sessions[0].url && "group-hover:opacity-100 group-hover:bg-nextflow-800"} transition-opacity duration-300`}
        ></div>

        <div className="basis-2/6 sm:basis-1/6 sm:w-full uppercase z-10 pointer-events-none">
          {displayTime}
        </div>
        <div className="basis-4/6 sm:basis-5/6 w-full z-10 pointer-events-none">
          <h4 className="font-semibold  text-[1rem] md:text-[1.2rem] display  transition-colors duration-300">
            {sessions[0].title}
          </h4>
          {sessions[0].speaker && (
            <p className="font-semibold display text-sm text-white  transition-colors duration-300">
              {sessions[0].speaker}
            </p>
          )}
        </div>

        {sessions[0].url && (
          <a
            href={`/2025/virtual/agenda/${sessions[0].url}`}
            className="absolute inset-0 z-20 cursor-pointer"
            aria-label={`View ${sessions[0].title}`}
          ></a>
        )}
      </div>
    );
  }
  return (
    <div className="relative w-full flex flex-row border border-nextflow transition-all duration-300 p-4 rounded-sm mb-2">
      <div className="basis-2/6 sm:basis-1/6 sm:w-full uppercase self-start pt-6">
        {displayTime}
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

const ScheduleHeader: React.FC<{ 
  timezone: string;
  selectedTimezone: typeof TIMEZONES[0];
  onTimezoneChange: (tz: typeof TIMEZONES[0]) => void;
}> = ({
  timezone,
  selectedTimezone,
  onTimezoneChange
}) => {
  return (
    <div className="monospace flex flex-col sm:flex-row w-full border-b border-white p-4 mb-6 gap-4">
      <div className="w-full ">Time:        <select
          value={selectedTimezone.value}
          onChange={(e) => {
            const tz = TIMEZONES.find(t => t.value === e.target.value);
            if (tz) onTimezoneChange(tz);
          }}
          className="monospace bg-transparent border border-white px-3 py-1 rounded-sm cursor-pointer hover:bg-white hover:text-black transition-all duration-300"
        >
          {TIMEZONES.map((tz) => (
            <option key={tz.value} value={tz.value} className="bg-black text-white">
              {tz.label}
            </option>
          ))}
        </select></div>
  
    </div>
  );
};

const virtualScheduleConfig: ScheduleConfig = {
  city: "virtual",
  year: "2025",
  days: [
    {
      date: "Thursday, October 23",
      timezone: "CET (UTC+2)",
      slots: [
        {
          time: "1PM",
          highlighted: true,
          sessions: [
            {
              title: "Opening Keynote",
              speaker: "Evan Floden, CEO & Co-Founder, Seqera",
              url: "opening-keynote",
            },
          ],
        },
        {
          time: "2:40PM",
          sessions: [
            {
              title:
                "Enabling reproducibility in Agri-Ecology and Evolutionary biology",
              speaker:
                "Christopher Wyatt, Bioinformatician, University College London",
              category: "Microbiology & Ecology",
              url: "enabling-reproducibility-in-agri-ecology-and-evolutionary-biology",
            },
            {
              title:
                "Building bioinformatics skills with Nextflow/nf-core: a program for early–mid-career researchers",
              speaker:
                "Patricia Agudelo-Romero, Senior Research Fellow, The Kids Research Institute Australia",
              category: "Community & Training",
              url: "building-bioinformatics-skills-with-nextflow-nf-core-a-program-for-early-mid-career-researchers",
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
              url: "integrating-seqera-into-enhanced-process-automation-to-fuel-nucleomes-discovery-engine",
            },
            {
              title: "Nextflow v25 Broke Bactopia, So We Rewrote It",
              speaker:
                "Robert A Petit III, Senior Bioinformatics Scientist, Wyoming Public Health Laboratory",
              category: "Microbiology & Ecology",
              url: "nextflow-v25-broke-bactopia-so-we-rewrote-it",
            },
            {
              title:
                "Collaborative Nextflow training for Australia's dispersed research landscape",
              speaker:
                "Giorgia Mori, BioCloud Training and Communication Officer, Australian BioCommons",
              category: "Community & Training",
              url: "collaborative-nextflow-training-for-australias-dispersed-research-landscape",
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
                "Reads to Results: Architecting Modern Genomics Pipelines with Nextflow and Seqera Platform",
              speaker: "Vinay Vyas, Sr DevOps Engineer, Arcus Biosciences",
              category: "Infrastructure & Automation",
              url: "reads-to-results-architecting-modern-genomics-pipelines-with-nextflow-and-seqera-platform",
            },
            {
              title:
                "WasteFlow 2.0: Multi-Pathogen Respiratory Virus Surveillance in Canada",
              speaker:
                "Zohaib Anwar, Bioinformatician, BC Centre for Disease Control",
              category: "Microbiology & Ecology",
              url: "wasteflow-multi-pathogen-respiratory-virus-surveillance-in-canada",
            },
            {
              title: "Updates from the Community Team",
              speaker:
                "Geraldine Van der Auwera, Lead Developer Advocate, Seqera",
              category: "Community & Training",
              url: "updates-from-the-community-team",
            },
          ],
        },
        {
          time: "4PM",
          sessions: [
            {
              title:
                "Elevating a Legacy Institute: A Hybrid HPC Strategy with Nextflow",
              speaker:
                "Melanie Nuesch, Head of the High Performance Computing Platform, DRFZ Berlin",
              category: "Infrastructure & Automation",
              url: "elevating-a-legacy-institute-a-hybrid-hpc-strategy-with-nextflow",
            },
            {
              title:
                "Metagenome quality metrics and taxonomical annotation visualization through BIgMAG/MAGFlow",
              speaker:
                "Jeferyd Yepes-García, PhD Candidate, University of Fribourg",
              category: "Microbiology & Ecology",
              url: "metagenome-quality-metrics-and-taxonomical-annotation-visualization-through-bigmag-magflow",
            },
            {
              title:
                "Nextflow Ambassadors",
              speaker:
                "Marcel Ribeiro-Dantas, Senior Developer Advocate, Seqera",
              category: "Community & Training",
              url: "nextflow-ambassadors",
            },
          ],
        },
        {
          time: "4:20PM",
          sessions: [
            {
              title:
                "Optimizing Genomics Workflows with Nextflow & Cloud Computing: Insights from a Research Institution",
              speaker: "Jacopo Tartaglia, Bioinformatician, CREA-GB",
              speaker2:
                "Wolfgang De Salvador, Senior Product Manager, Azure Storage Microsoft",
              category: "Infrastructure & Automation",
              url: "optimizing-genomics-workflows-with-nextflow-and-cloud-computing",
            },
            {
              title:
                "Development of the ENSure Database and Pipeline for Rapid Microbial Testing in Biomanufacturing",
              speaker: "Tyler Laird, Bioinformatician, National Institute of Standards and Technology",
              category: "Microbiology & Ecology",
              url: "development-of-the-ensure-database-and-pipeline-for-rapid-microbial-testing-in-biomanufacturing",
            },
            {
              title: "How I Built the Nextflow Community in Korea",
              speaker: "Jehee Lee, Nextflow Ambassador of Korea",
              category: "Community & Training",
              url: "how-i-built-the-nextflow-community-in-korea",
            },
          ],
        },
        {
          time: "4:40PM",
          sessions: [
            {
              title:
                "Benchmarking nf-core/scrnaseq for Mouse Prostate Single-cell RNA-seq: Practical Insights",
              speaker:
                "Nikhila T Suresh, Post Doctoral Research Associate, Purdue University",
              category: "Infrastructure & Automation",
              url: "benchmarking-nf-core-scrnaseq-for-mouse-prostate-single-cell-rna-seq-practical-insights",
            },
            {
              title:
                "Using Nextflow to Break Computational Barriers: NASA's Approach to Democratizing Space Omics Data",
              speaker:
                "Barbara Novak, NASA GeneLab Data Processing Lead, Blue Marble Space Institute of Science",
              category: "Microbiology & Ecology",
              url: "using-nextflow-to-break-computational-barriers-nasas-approach-to-democratizing-space-omics-data",
            },
            {
              title:
                "From FASTQ to Kappa: My First Experience with nf-core/viralrecon",
              speaker:
                "Mariam Sulaiman, Graduate Research Intern, International Institute of Tropical Agriculture",
              category: "Community & Training",
              url: "from-fastq-to-kappa-my-first-experience-with-nf-core-viralrecon",
            },
          ],
        },
        {
          time: "5PM",
          sessions: [
            {
              title:
                "OpenProblems.bio: Reproducible Benchmarks for Single-Cell Omics at Scale",
              speaker:
                "Robrecht Cannoodt, Data Science Consultant, Data Intuitive",
              category: "Infrastructure & Automation",
              url: "openproblems-bio-reproducible-benchmarks-for-single-cell-omics-at-scale",
            },
            {
              title:
                "Earth Observation with Nextflow: A Use Case–Driven Introduction",
              speaker:
                "Felix Kummer, Research Associate, Humboldt-Universität zu Berlin",
              category: "Microbiology & Ecology",
              url: "earth-observation-with-nextflow-a-use-case-driven-introduction",
            },
            {
              title: "From beginner to nf-core contributor",
              speaker:
                "Nour Mahfel, Trainee Clinical Scientist (Bioinformatics - Genomics), Birmingham Women's and Children's NHS Foundation Trust",
              category: "Community & Training",
              url: "from-beginner-to-nf-core-contributor",
            },
          ],
        },
        {
          time: "5:20PM",
          highlighted: true,
          sessions: [
            {
              title: "Day One Wrap Up",
              speaker: "Evan Floden, CEO & Co-Founder, Seqera",
            },
          ],
        },
      ],
    },
    {
      date: "Friday, October 24",
      timezone: "CET (UTC+2)",
      slots: [
        {
          time: "1PM",
          highlighted: true,
          sessions: [
            {
              title: "What's New With Nextflow",
              speaker: "Ben Sherman, Senior Software Engineer, Seqera",
              url: "whats-new-with-nextflow",
            },
          ],
        },
        {
          time: "2PM",
          highlighted: true,
          sessions: [
            {
              title: "Keynote",
              speaker:
                "Segun Fatumo, Professor and Chair of Genomic Diversity, Queen Mary University of London",
              url: "keynote-segun-fatumo",
            },
          ],
        },
        {
          time: "2:40PM",
          sessions: [
            {
              title: "Accelerating Cross-Assay Correlation with GenAI",
              speaker: "Kevin Moore, CEO, Quilt.bio",
              speaker2:
                "Vasisht Tadigotla, Head of Data and Engineering, Sail Biomedicines",
              category: "AI-Assisted Research",
              url: "accelerating-cross-assay-correlation-with-genai",
            },
            {
              title: "Updates from the nf-core community",
              speaker:
                "Phil Ewels, Senior Product Manager for Open Source, Seqera",
              category: "Nextflow Ecosystem & nf-core",
              url: "updates-from-the-nf-core-community",
            },
          ],
        },
        {
          time: "3PM",
          sessions: [
            {
              title:
                "Reproducible LLM Driven Molecular Design with Nextflow and BioLM",
              speaker: "Andrew Stewart, COO, BioLM",
              category: "AI-Assisted Research",
              url: "reproducible-llm-driven-molecular-design-with-nextflow-and-biolm",
            },
            {
              title:
                "nf-core/oncoanalyser: an accessible and portable pipeline to unify cancer DNA and RNA analysis",
              speaker:
                "Stephen Watts, Senior Bioinformatician, Collaborative Centre for Genomic Cancer Medicine",
              category: "Translational Research",
              url: "nf-core-oncoanalyser-an-accessible-and-portable-pipeline-to-unify-cancer-dna-and-rna-analysis",
            },
            {
              title: "What's new from the nf-core infrastructure team in 2025",
              speaker:
                "Matthias Hörtenhuber, Systems Developer, SciLifeLab Data Centre",
              category: "Nextflow Ecosystem & nf-core",
              url: "whats-new-from-the-nf-core-infrastructure-team-in-2025",
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
                "AI-Driven Spatial Transcriptomics for Predicting Drug Response in the Tumor Microenvironment",
              speaker:
                "Kayode Raheem, PhD Researcher, University of Nebraska Medical Center",
              category: "AI-Assisted Research",
              url: "ai-driven-spatial-transcriptomics-for-predicting-drug-response-in-the-tumor-microenvironment",
            },
            {
              title:
                "nf-core/differentialabundance: a unified framework for differential analysis",
              speaker:
                "Suzanne Jin, PhD Student, Centre for Genomic Regulation",
              speaker2: "Susanne Jodoin, Bioinformatician, QBiC",
              category: "Translational Research",
              url: "nf-core-differentialabundance-a-unified-framework-for-differential-analysis",
            },
            {
              title:
                "MetroFlow : Generating Interactive Metro-Maps from Workflow Code",
              speaker: "George Marchment, Université Paris-Saclay",
              category: "Nextflow Ecosystem & nf-core",
              url: "metroflow-generating-interactive-metro-maps-from-workflow-code",
            },
          ],
        },
        {
          time: "4PM",
          sessions: [
            {
              title:
                "Somatem: a modular and open source metagenomic analysis pipeline for long-reads with an LLM co-pilot",
              speaker:
                "Prashant Kalvapalle, Postdoctoral Researcher, Rice University",
              category: "AI-Assisted Research",
              url: "somatem-a-modular-and-open-source-metagenomic-analysis-pipeline",
            },
            {
              title:
                "DelMoro: A Nextflow Pipeline for Variant Calling and Streamlined Reporting in Clinical Genomics",
              speaker: "Firas Zemzem, PhD Candidate",
              category: "Translational Research",
              url: "delmoro-a-nextflow-pipeline-for-variant-calling-and-streamlined-reporting-in-clinical-genomics",
            },
            {
              title:
                "Contributing to nf-core within a translational project for personalized cancer medicine in Germany",
              speaker: "Famke Bäuerle, PhD Student, University Clinic Tübingen",
              category: "Nextflow Ecosystem & nf-core",
              url: "contributing-to-nf-core-within-a-translational-project-for-personalized-cancer-medicine",
            },
          ],
        },
        {
          time: "4:20PM",
          sessions: [
            {
              title: "SEQERA: 10 years of MultiQC",
              speaker:
                "Phil Ewels, Senior Product Manager for Open Source, Seqera",
              category: "AI-Assisted Research",
              url: "seqera-10-years-of-multiqc",
            },
            {
              title:
                "GTEx Expression Data Processing Pipeline for Sex- and Age-Stratified Target Discovery",
              speaker:
                "Samantha Klasfeld, Web Developer, Boston Women in Bioinformatics",
              category: "Translational Research",
              url: "gtex-expression-data-processing-pipeline-for-sex-and-age-stratified-target-discovery",
            },
            {
              title:
                "Pipeline Hubs: A Concept for Live, Reproducible Method Comparison in Bioinformatics",
              speaker: "Cedric Notredame, PI, CRG",
              category: "Nextflow Ecosystem & nf-core",
              url: "pipeline-hubs-a-concept-for-live-reproducible-method-comparison-in-bioinformatics",
            },
          ],
        },
        {
          time: "4:40PM",
          sessions: [
            {
              title:
                "nf-core/proteinfamilies: A scalable pipeline for the generation of protein families",
              speaker: "Evangelos Karatzas, Research Fellow, EMBL-EBI",
              category: "Translational Research",
              url: "nf-core-proteinfamilies-a-scalable-pipeline-for-the-generation-of-protein-families",
            },
            {
              title: "Python ♡ Nextflow: How to use the nf-python plugin",
              speaker:
                "Roy Jacobson, MSc Student, Weizmann Institute of Science",
              category: "Nextflow Ecosystem & nf-core",
              url: "python-nextflow-how-to-use-the-nf-python-plugin",
            },
          ],
        },
        {
          time: "5PM",
          sessions: [
            {
              title:
                "Advancing the nf-core/sammyseq pipeline for 4f-SAMMY-seq toward its first release",
              speaker:
                "Ugo Maria Iannacchero, PhD Student, Institute of Biomedical Technologies, National Research Council",
              speaker2: "Margherita Mutarelli, Researcher, ISASI-CNR",
              category: "Translational Research",
              url: "advancing-the-nf-core-sammyseq-pipeline-for-4f-sammy-seq-toward-its-first-release",
            },
            {
              title:
                "Tracking the Carbon Footprint of Pipeline Runs with nf-co2footprint, a Nextflow Plugin",
              speaker:
                "Josua Carl & Nadja Volkmann, Software Development, QBiC",
              category: "Nextflow Ecosystem & nf-core",
              url: "tracking-the-carbon-footprint-of-pipeline-runs-with-nf-co2footprint-a-nextflow-plugin",
            },
          ],
        },
        {
          time: "5:20PM",
          highlighted: true,
          sessions: [
            {
              title: "Summit Wrap Up",
              speaker: "Evan Floden, CEO & Co-Founder, Seqera",
            },
          ],
        },
      ],
    },
  ],
};

const ScheduleVirtual: React.FC<Props> = ({ children, className, config }) => {
  const [selectedTimezone, setSelectedTimezone] = useState(TIMEZONES[0]); // Barcelona CEST default
  
  return (
    <div className={`w-full ${className || ""}`}>
      {config.days.map((day, dayIndex) => (
        <section key={dayIndex} className="mb-20">
          <h5 className="text-2xl mb-2">{day.date}</h5>
          <ScheduleHeader 
            timezone={day.timezone} 
            selectedTimezone={selectedTimezone}
            onTimezoneChange={setSelectedTimezone}
          />
          {day.slots.map((slot, slotIndex) => (
            <TimeSlotItem 
              key={slotIndex} 
              {...slot} 
              sourceOffset={2} // CEST is UTC+2
              targetOffset={selectedTimezone.offset}
            />
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