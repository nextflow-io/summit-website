import jeong from "./speakerImages/hyun-hwan-jeong.jpg";
import bartlett from "./speakerImages/alexandra-bartlett.jpg";
import ake from "./speakerImages/franz-arnold-ake.jpg"; 
import messyasz from "./speakerImages/adriana-messyasz.jpg";
import ditommaso from "./speakerImages/paolo-ditommaso.jpg";
import pizarro from "./speakerImages/angel-pizarro.jpg";
import pantano from "./speakerImages/lorena-pantano.jpg";
import herrmann from "./speakerImages/luisa-herrmann.jpg";
import wirawan from "./speakerImages/adrianto-wirawan.jpg";
import burnett from "./speakerImages/gary-burnett.jpg";
import assis from "./speakerImages/juliana-assis.jpg";
import awe from "./speakerImages/olaitan-awe.jpg";
import botvinnik from "./speakerImages/olga-botvinnik.jpg";
import floden from "./speakerImages/evan-floden.jpg";
import joshi from "./speakerImages/esha-joshi.jpg";
import sarver from "./speakerImages/brice-sarver.jpg";
import moore from "./speakerImages/kevin-moore.jpg";
import henry from "./speakerImages/gervaise-henry.jpg";
import norton from "./speakerImages/scott.jpg";
import desalvador from "../PostersSection/posterImages/wolfgang-de-salvador.jpg";
import kostis from "./speakerImages/kostis.jpg";
import fisher from "./speakerImages/yan-fisher.png";

export default {
    main: [
      {
        name: "Luisa Herrmann",
        jobTitle: "Founder at AINovva",
        track: "Session 2: Big Nextflow",
        date:"May 15",
        time: "4:40PM - 5:30PM",
        submissionTitle: "Doing AI right",
        bio: `<p>Luisa (she/her) has 12 years of experience in Product Management and Product Marketing, launching products, building teams, and scaling organizations in the data software space. She has specific experience with scaling the Product Management function at VC and PE backed companies in the AI/ML space.</p>

<p>She was most recently the Head of Product at Arch Systems, a company working to make manufacturing more efficient through machine data analytics and insights. Before that, she was the Head of Product at Cape Privacy, an encrypted machine learning company, and the Head of Product at expert.ai, an NLP company.</p>

<p>She has a degree in Chemical and Biomolecular Engineering from the University of Pennsylvania and lives in the Boston area. In her free time she gardens, codes, and runs half marathons.</p>`,
        linkedin: "https://www.linkedin.com/in/luisahr/",
        image: herrmann.src,
        keynote: true,
        speaker: true,
        pageUrl: 'doing-ai-right',
      },
      {
        name: "Gervaise Henry",
        jobTitle: "VP Head of Data Engineering at Champions Oncology",
        track: "Session 3: Organizational Impact",
        date:"May 16",
        time: "11:30AM - 11:45AM",
        submissionTitle: "Optimizing Compute Costs with Seqera Cloud: Champions Oncology's PDX Bank and Multi-Omics Data",
        bio: `<p>Gervaise Henry began his career as a molecular biologist in the lab, where he honed his expertise in experimental biology before transitioning into the dynamic field of computational biology. As an early adopter of Nextflow, Gervaise has been at the forefront of workflow orchestration, leveraging cutting-edge tools to streamline complex bioinformatics processes.</p><p>Currently, Gervaise works at Champions Oncology, where he leads the company's data infrastructure and management strategy. He is responsible for designing, implementing, and maintaining a robust data platform that supports both Champions Oncology's research and development initiatives and its customers. His work focuses on managing multi-omics and research data in alignment with FAIR (Findable, Accessible, Interoperable, and Reusable) principles, ensuring the seamless integration, accessibility, and utility of data across the organization and for customer projects.</p>
        <p>With a unique blend of laboratory experience and computational innovation, Gervaise plays a pivotal role in driving advancements in precision oncology, fostering research efficiency, and pushing the boundaries of data-driven discovery.</p>`,
        image: henry.src,
        linkedin: "https://www.linkedin.com/in/gervaise-henry-7790679a/",
        speaker: true,
        pageUrl: 'optimizing-compute-costs-with-seqera-cloud-champions-oncology-s-pdx-bank-and-multi-omics-data',
      },
      {
        name: "Kevin Moore",
        jobTitle: "CEO at Quilt",
        track: "Session 3: Organizational Impact",
        date:"May 15",
        time: "11:30AM - 11:50AM",
        submissionTitle: "Closing the Metadata Gap: Linking Sample Context to Nextflow Outputs with Quilt",
        bio: `<p>Kevin has over 20 years of experience in enterprise data processing, from processor and memory system architectures to in-memory database software and cloud architecture. Prior to Quilt Data, Kevin developed hardware-optimized software and scale-out in-memory database processing systems at Oracle and Sun Microsystems. Kevin earned a Ph.D. from the University of Wisconsin.</p>`,
        image: moore.src,
        linkedin: "https://www.linkedin.com/in/kevinemoore/",
        github: 'https://github.com/quiltdata/quilt',
        speaker: true,
        pageUrl: 'closing-the-metadata-gap-linking-sample-context-to-nextflow-outputs-with-quilt',
      },
      {
        name: "Angel Pizarro",
        jobTitle: "Principal Developer Advocate at Amazon Web Services",
        track: "Session 2: Big Nextflow",
        date:"May 15",
        time: "2:30PM - 3PM",
        submissionTitle: "What it took to run a pipeline on aarch64",
        coAuthors: "Phil Ewels, David Lecomber",
        bio: `<p>Angel Pizarro is a Principal Developer Advocate for HPC at AWS. He has over 20 years of experience in research computing, bioinformatics and high-throughput computing.</p><p> His focus has been on the development of system architectures for scalable computing in genomics and other high throughput life science domains, democratizing access to large scale datasets, and development of cloud architectures for science.</p>`,
        linkedin: "https://www.linkedin.com/in/angelpizarro/",
        github: "https://github.com/delagoya",
        image: pizarro.src,
        speaker: true,
        pageUrl: 'what-it-took-to-run-a-pipeline-on-aarch64',
      },
      {
        name: "Brice Sarver",
        jobTitle: "Director at ZS Associates",
        track: "Session 3: Organizational Impact",
        date:"May 16",
        time: "10:00AM - 10:20AM",
        submissionTitle: "Integrating Bioinformatics into the Regulated Pharmaceutical Lifecycle (Fireside Chat)",
        bio: `<p>Brice has over 15 years of experience leveraging a variety of genetic and omics data from humans and other species to answer scientific questions in academia, biotech, and pharma. He has consistently collaborated with cross-functional teams, using his scientific expertise in genomics, population genetics, and phylogenetics to provide end-to-end perspectives on designing, implementing, and interpreting scientific analyses in the fields of computational biology, bioinformatics, and systematics.</p><p> He leads the global bioinformatics track in ZS’s Medical and Scientific Expertise Center as well as a ZS Discovery solution area focused on developing scalable, portable, and reproducible bioinformatic workflows. Drawing upon his academic insights and professional journey, he is a member of ZS’s advanced degree council, which provides professional guidance for ZSers with doctoral degrees.</p>`,
        image: sarver.src,
        linkedin: "https://www.linkedin.com/in/bricesarver",
        speaker: true,
        pageUrl: 'integrating-bioinformatics-into-the-regulated-pharmaceutical-lifecycle',
      },
      {
        name: "Franz Arnold Ake",
        jobTitle: "PHD Student at IDIBELL",
        track: "Session 1: Enabling Science",
        date:"May 15",
        time: "12:10PM - 12:30PM",
        submissionTitle: "SCALPEL, a Nextflow based pipeline for quantification of isoform at single-cell resolution",
        bio: `Franz AKE is a Bioinformatician specializing in single-cell transcriptomics. He pursuing his PhD in Bioinformatics at IDIBELL Institute (Barcelona, SPAIN) under the supervison of Dr Mireya PLASS. He advocates for workflow automation and the integration of Nextflow in omics studies.`,
        twitter: "https://x.com/franz_ake",
        linkedin: "https://www.linkedin.com/in/franz-arnold-ake-3a657b11b/",
        github: "https://github.com/Franzx7",
        image: ake.src,
        speaker: true,
        pageUrl: 'scalpel-a-nextflow-based-pipeline-for-quantification-of-isoform-at-single-cell-resolution',
      },
      {
        name: "Juliana Assis",
        jobTitle: "Senior Data Scientist at DTU Biosustain: The Novo Nordisk Foundation Center for Biosustainability",
        track: "Session 3: Organizational Impact",
        date:"May 16",
        time: "10:20AM - 10:40AM",
        submissionTitle: `Building an Omics Data Infrastructure to Bridge Data Management and Data Science`,
        bio: `<p>Juliana Assis is a biologist/Bioinformatician/Data Scientist at DTU-Biosustain with a strong interest in bioinformatics and microbial genomics. Her work focuses on building integrated infrastructures that streamline omics data analysis, using Nextflow with Seqera for scalable, automated workflows. She is particularly interested in developing pipelines that enhance reproducibility, accessibility, and data reuse, aligning with FAIR principles.</p>
        <p>Currently, Juliana applies these approaches to taxonomic and functional characterization of microbial communities, leveraging both Nanopore and Illumina sequencing technologies. While not a core Nextflow developer, she actively implements and customizes workflows to bridge the gap between data management and computational analysis, making powerful bioinformatics tools more accessible to researchers.</p>`,
        linkedin: "https://www.linkedin.com/in/juliana-assis-6419a230/",
        image: assis.src,
        speaker: true,
        pageUrl: 'building-an-omics-data-infrastructure-to-bridge-data-management-and-data-science',
      },
      {
        name: "Olaitan Awe",
        jobTitle: "Training Officer at African Society for Bioinformatics and Computational Biology",
        track: "Session 1: Enabling Science",
        date:"May 16",
        time: "12:00AM - 12:20AM",
        submissionTitle: `Enabling Reproducible Science and African Representation in Science through Nextflow Workshops`,
        bio: `<p>Olaitan I. Awe (Ph.D.) is the training officer for the African Society for Bioinformatics and Computational Biology (ASBCB) and his research focuses on the development of computational tools and the analysis of Next-Generation Sequencing datasets. He completed his PhD in bioinformatics at the Computer Science Department, University of Ibadan with a research focus on transcriptomic region identification in model organisms using machine learning, an MS in Computer Science and a BS in Electrical and Electronic Engineering also from the Univerisity of Ibadan.</p><p> He contributes to solving the gene-finding problem. He has used comparative genomics techniques to study filoviruses and arboviruses. He has conducted gene expression studies on complex phenotypes (colorectal cancer, breast cancer, prostate cancer) and neurological disorders (Epilepsy, Multiple Sclerosis, Alzheimers). He is interested in developing reproducible bioinformatics pipelines. He has a record of primary and collaborative authorship in peer-reviewed publications in internationally recognized journals.</p><p> With over a decade of experience in scientific research computing, he is passionate about African bioinformatics, reproducible research and capacity building and he organizes webinars, codeathons and workshops to train life scientists from more than 59 countries in genomic data science skills.</p>`,
        linkedin: "https://www.linkedin.com/in/laitanawe",
        image: awe.src,
        speaker: true,
        pageUrl: 'enabling-reproducible-science-and-african-representation-in-science-through-nextflow-workshops',
      },
      {
        name: "Alexandra Bartlett",
        jobTitle: "Bioinformatician II at Harvard Chan Bioinformatics Core",
        track: "Session 1: Enabling Science",
        date:"May 15",
        time: "10:40AM - 11AM",
        submissionTitle: "Streamlining RNA-Seq Data Analysis with rnaseq-reports",
        bio: `<p>Alex received her M.S. in Bioinformatics from Johns Hopkins University and her B.S. in Bioengineering from Harvard University. Her undergraduate thesis work involved optimizing the synthesis and loading of polymer-drug nanoparticles into cryogels for the treatment of breast cancer.</p>
        <p> Prior to joining the Harvard Chan Bioinformatics Core, she spent several years leveraging both her wet-lab and computational expertise in a variety of cutting-edge biotech companies, working on diverse problems such as CAR-T cancer immunotherapy, mRNA- and lncRNA-targeted drug discovery, and xenotransplantation.</p>
        
        <p>She particularly enjoys implementing elegant solutions to complex scientific problems and sharing the solutions with the broader community. </p>`,
        linkedin: "https://www.linkedin.com/in/alexandra-bartlett-926b32109/",
        github: "https://github.com/abartlett004",
        image: bartlett.src,
        speaker: true,
        pageUrl: '',
      },
      {
        name: "Olga Botvinnik",
        jobTitle: "CEO & Founder at Seanome",
        track: "Session 1: Enabling Science",
        date:"May 15",
        time: "11:50AM - 12:10PM",
        submissionTitle: "Create the best protein annotation pipeline in the world, aka Protein fasta → ??? → Profit!",
        bio: `<p>Dr. Olga Botvinnik is the Founder & CEO of Seanome, where she builds open genomics tools to unlock breakthroughs from ocean biodiversity. She is a scientist-engineer with experience in academia and industry and has contributed to key open-source projects including nf-core/rnaseq and Seaborn.</p>
        <p>At Seanome, Dr. Botvinnik leads efforts to build Kmerseek, a method to identify genes with similar functions across distantly related species, focusing on marine organisms. The first application is on the Arctic clam genome, which tolerates a toxic sphingolipid causing human neuropathy. Seanome unlocks nature’s 4 billion-year-old pharmacy, democratizing access and empowering scientists to accelerate the discovery of breakthrough therapies for cancer, neurodegeneration, antibiotic resistance, and more.</p>`,
        twitter: "https://x.com/olgabot",
        linkedin: "https://www.linkedin.com/in/olgabotvinnik/",
        github: "https://github.com/olgabot",
        image: botvinnik.src,
        speaker: true,
        pageUrl: 'create-the-best-protein-annotation-pipeline-in-the-world-aka-protein-fasta-profit'
      },
      {
        name: "Gary Burnett",
        jobTitle: "Engineer at NVIDIA",
        track: "Session 1: Enabling Science",
        date:"May 15",
        time: "4:20PM - 4:40PM",
        submissionTitle: "Seqera Fusion x NVIDIA Parabricks for Accelerated Analysis",
        bio: `Gary Burnett is an engineer on the healthcare team at NVIDIA, who helps scientists leverage GPUs to accelerate their bioinformatics workflows. He holds a Master's degree from Stanford University in Biomedical Informatics.`,
        linkedin: "https://www.linkedin.com/in/alexandra-bartlett-926b32109/",
        github: "https://github.com/abartlett004",
        image: burnett.src,
        speaker: true,
        pageUrl: 'seqera-fusion-x-nvidia-parabricks-for-accelerated-analysis'
      },
      {
        name: "Paolo Di Tommaso",
        jobTitle: "CTO at Seqera",
        track: "Session 2: Big Nextflow",
        date:"May 15",
        time: "2PM - 2:30PM",
        submissionTitle: "What’s new in Nextflow: Defining the future of reproducible workflows",
        bio: `<p>Paolo is the CTO and co-founder of Seqera. He is a computer scientist with a strong interest in high-throughput scientific computing, data-intensive applications, parallel programming, cloud computing and containerisation technologies. He has broad experience as a software engineer and software architect in life science and healthcare applications.</p><p> He is an open-source advocate and the creator and maintainer of the Nextflow workflow system.</p>`,
        image: ditommaso.src,
        github: 'https://github.com/pditommaso',
        twitter: 'https://x.com/paoloditommaso?lang=en',
        linkedin: 'https://es.linkedin.com/in/paoloditommaso',
        speaker: true,
        pageUrl: 'nextflow-updates'
      },
      {
        name: "Evan Floden",
        jobTitle: "CEO at Seqera",
        track: "Session 1: Enabling Science",
        date:"May 15",
        time: "9:40AM - 10:20AM",
        submissionTitle: "From Pipelines to Platform",
        bio: "<p>Evan Floden is the CEO and co-founder of Seqera where the team has spent the last decade building Nextflow and the modern biotech stack. By providing scientists with modern software development tools such as containers, cloud, and git - Seqera is making scientific data analysis accessible at any scale.</p><p> Evan is a strong advocate for open science through Seqera projects such as MultiQC and Wave containers.</p>",
        image: floden.src,
        twitter: "https://x.com/EvanFloden",
        linkedin: "https://www.linkedin.com/in/evan-floden-36137018/",
        github: 'https://github.com/evanfloden',
        pageUrl: 'from-pipelines-to-platform'
      },
      {
        name: "Hyun-Hwan Jeong",
        jobTitle: "Assistant Professor at Baylor College of Medicine",
        track: "Session 1: Enabling Science",
        date:"May 15",
        time: "10:20AM - 10:40AM",
        submissionTitle: "From Technical Debt to Sustainable Workflows: The AI-MARRVEL Nextflow Journey",
        coAuthors: 'Hyun-Hwan Jeong, Jaeyeon Lee, Seon Young Kim, Chaozhong Liu, Zhandong Liu',
        bio: `<p>Hyun-Hwan Jeong is a scientist specializing in bioinformatics, computational biology, and machine learning, currently serving as an Assistant Professor in the Department of Pediatrics at Baylor College of Medicine. With extensive experience in next-generation sequencing analysis, Dr. Jeong has developed computational methods such as CRISPRBetaBinomial, SalmonTE, and the cloud-based analytic platform CRISPRcloud.</p>
 
        <p>Dr. Jeong earned his Ph.D. in Computer Science and Engineering from Ajou University, South Korea. His career includes roles at Baylor College of Medicine, Precede Biosciences, and UT Health Science Center, where he has applied bioinformatics and artificial intelligence to address challenges in precision medicine.</p>
        
        <p>His research has been published in notable journals, including Genome Research, Neuron, and Cell Reports, and he currently serves as the lead maintainer for the AI-MARRVEL pipeline, an AI-based genetic diagnosis tool designed to facilitate precise genetic analysis and diagnosis.</p>`,
        image: jeong.src,
        speaker: true,
        pageUrl: 'from-technical-debt-to-sustainable-workflows-the-ai-marrvel-nextflow-journey'
      },
      {
        name: "Esha Joshi",
        jobTitle: "Bioinformatics Engineer at Seqera",
        track: "Session 3: Organizational Impact",
        date:"May 16",
        time: "9:30AM - 10:00AM",
        submissionTitle: "Scale with Seqera: Accelerate, Expand, and Collaborate",
        bio: `<p>Esha is a Bioinformatician with a background in human genetics, with expertise bridging bioinformatics and software development. Her career has spanned biotech startups, academia, and government positions where she developed Nextflow pipelines and tools for large-scale genomic analysis.</p><p> Her role at Seqera's Scientific Development team allows her to leverage her diverse experience to assist scientists in optimizing their use of Nextflow and integrating the Seqera Platform into their research workflows.</p>`,
        image: joshi.src,
        speaker: true,
        pageUrl: 'scale-with-seqera-accelerate-expand-and-collaborate'
      },
      {
        name: "Adriana Messyasz",
        jobTitle: "Bioinformatics Analyst at Rutgers NJMS",
        track: "Session 1: Enabling Science",
        date:"May 15",
        time: "12:30PM - 12:50PM",
        submissionTitle: "Developing a Scalable Workflow for Analyzing Long-Read 16S Sequences from Oxford Nanopore Sequencing",
        bio: `<p>Bioinformatician and microbial scientist who loves to collaborate and solve complex problems regarding data generation, analysis, and interpretation.</p><p> As a bioinformatics specialist at the Rutgers NJMS Molecular and Genomics Informatics Core (MaGIC), I help researchers generate, organize, and interpret all types of sequencing data.</p>`,
        image: messyasz.src,
        speaker: true,
        pageUrl: 'developing-a-scalable-workflow-for-analyzing-long-read-16s-sequences-from-oxford-nanopore'
      },
      {
        name: "Lorena Pantano",
        jobTitle: "Director of the Bioinformatics Platform at the Harvard Chan Bioinformatics Core",
        track: "Session 1: Enabling Science",
        date:"May 15",
        time: "3PM - 3:20PM",
        submissionTitle: "Unified, community-developed analysis guidelines and templates for multi-omics data interpretability",
        bio: `<p>Lorena Pantano is the Director of the Bioinformatics Platform at the Harvard Chan Bioinformatics Core, where she integrates new technologies to enhance research decision-making for HCBC collaborators. With 13 years of experience in computational biology, she is a leader in genomic analysis and data visualization.</p>
        <p> Lorena holds a Ph.D. in Biomedicine and developed the first tool for discovering small non-coding RNAs in brain samples using next-generation sequencing (NGS) data. After five years of research at the Harvard School of Public Health, she transitioned to the biotech industry in 2019, working with companies like eGenesis on gene editing of pig genomes for xenotransplantation and NextRNA for novel non-coding RNA discovery.</p>
        <p> In 2016, she founded the 'Women in Bioinformatics' Meetup to promote collaboration among women in the Boston area. In her free time, Lorena offers mentorship and support to women in the field.</p>`,
        linkedin: "https://www.linkedin.com/in/lpantano/",
        github: "https://github.com/lpantano",
        image: pantano.src,
        speaker: true,
        pageUrl: 'unified-community-developed-analysis-guidelines-and-templates-for-multi-omics-data'
      },
      {
        name: "Adrianto Wirawan",
        jobTitle: "Director of Bioinformatics Engineering at Genomics England",
        track: "Session 3: Organizational Impact",
        date:"May 16",
        submissionTitle: "How Genie Empowers Genomic England’s Generation Study",
        time: "10:40AM - 11:00AM",
        image: wirawan.src,
        bio: `<p>As Director of Bioinformatics Engineering at Genomics England, Adrianto oversees a diverse team of more than 40 software engineers and bioinformaticians, providing technical leadership and subject matter expertise in developing bioinformatics solutions across healthcare and research domains.</p>
        <p>Previously, as Associate Director at AstraZeneca in the UK, he managed platform development, pipeline orchestration, and data management for a wide range of omics data—including genomics, transcriptomics, proteomics, and metabolomics. He has also held key roles at companies such as immunoSCAPE and Human Longevity, Inc.</p>
        <p>Adrianto earned his PhD in High-Performance Computing in Bioinformatics from Nanyang Technological University in Singapore, where he pioneered innovative DNA and protein-related bioinformatics tools using the PlayStation 3 gaming console as a computational platform.</p>`,
        speaker: true,
        pageUrl: 'how-genie-empowers-genomic-england-s-generation-study',
      },
      {
        name: "Scott Norton",
        jobTitle: "Senior Bioinformatics Data Scientist at Merck",
        track: "Session 3: Organizational Impact",
        date:"May 16",
        submissionTitle: "DRAGoN - Divide-and-conquer strategy for processing large DRUG-seq experiments",
        time: "11:45AM - 12:00PM",
        image: norton.src,
        bio: 'Coming soon.',
        github: 'https://github.com/ScottNortonPhD',
        speaker: true,
        pageUrl: 'dragon-divide-and-conquer-strategy-for-processing-large-drug-seq-experiments'
      },
      {
        name: "Wolfgang De Salvador",
        jobTitle: "Senior Product Manager, Azure Storage at Microsoft",
        track: "Poster",
        submissionTitle: "Running Nextflow on Microsoft Azure: selecting executors and infrastructure components",
        bio: `<p>Wolfgang is a mechanical engineer with a strong passion and innate aptitude towards technology and computer science, but also an experienced HPC system administrator, for cloud and on premises systems.</p><p> He owns a long industrial and academic experience in FEA and CFD modelling applied to product design and manufacturing. He is passionate about amplifying business value and innovation through HPC/AI in research contexts.</p><p>Wolfgang loves to drive and promote the latest innovative technologies in the HPC/ AI domain. Wolfgang owns a PhD in Design, Manufacturing and Operations Engineering as well as a Master in Business Administration.</p>`,
        linkedin: 'https://www.linkedin.com/in/wolfgang-de-salvador/',
        github: 'https://github.com/wolfgang-desalvador',
        image: desalvador.src,
        date: "May 15",
        time: "4:00PM - 4:20PM",
        pageUrl: 'running-nextflow-on-microsoft-azure-selecting-executors-and-infrastructure-components',
      },
      {
        name: "Kostis Karagiannis",
        jobTitle: "Director, INT Bioinformatics Engineering, Moderna",
        track: "Session 3: Organizational Impact",
        submissionTitle: "Integrating Bioinformatics into the Regulated Pharmaceutical Lifecycle (Fireside Chat)",
        image: kostis.src,
        date: "May 16",
        time: "9:00AM - 9:20AM",
        linkedin: 'https://www.linkedin.com/in/k-karagiannis',
        pageUrl: 'integrating-bioinformatics-into-the-regulated-pharmaceutical-lifecycle',
      },
      {
        name: "Yan Fisher",
        jobTitle: "Director of Software Ecosystem at Arm",
        submissionTitle: "What it took to run a pipeline on aarch64",
        image: fisher.src,
        track: "Session 2: Big Nextflow",
        date:"May 15",
        time: "2:30PM - 3PM",
        linkedin: 'https://www.linkedin.com/in/k-karagiannis',
        pageUrl: 'what-it-took-to-run-a-pipeline-on-aarch64',
      },
    ]
  }