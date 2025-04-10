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

export default {
    main: [
      {
        name: "Luisa Herrmann",
        jobTitle: "Founder at AIINovva",
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
      },
      {
        name: "Angel Pizarro",
        jobTitle: "Principal Developer Advocate at Amazon Web Services",
        track: "Session 2: Big Nextflow",
        date:"May 15",
        time: "2:30PM - 3PM",
        submissionTitle: "What it took to run a pipeline on aarch64",
        coAuthors: "Kostis Karagiannis",
        bio: `<p>Angel Pizarro is a Principal Developer Advocate for HPC at AWS. He has over 20 years of experience in research computing, bioinformatics and high-throughput computing.</p><p> His focus has been on the development of system architectures for scalable computing in genomics and other high throughput life science domains, democratizing access to large scale datasets, and development of cloud architectures for science.</p>`,
        linkedin: "https://www.linkedin.com/in/angelpizarro/",
        github: "https://github.com/delagoya",
        image: pizarro.src,
        speaker: true,
      },
      {
        name: "Brice Sarver",
        jobTitle: "Director at ZS Associates",
        track: "Session 3: Organizational impact",
        date:"May 16",
        time: "10:40AM - 11AM",
        submissionTitle: "Integrating Bioinformatics into the Regulated Pharmaceutical Lifecycle (Fireside Chat)",
        bio: `<p>Brice has over 15 years of experience leveraging a variety of genetic and omics data from humans and other species to answer scientific questions in academia, biotech, and pharma. He has consistently collaborated with cross-functional teams, using his scientific expertise in genomics, population genetics, and phylogenetics to provide end-to-end perspectives on designing, implementing, and interpreting scientific analyses in the fields of computational biology, bioinformatics, and systematics.</p><p> He leads the global bioinformatics track in ZS’s Medical and Scientific Expertise Center as well as a ZS Discovery solution area focused on developing scalable, portable, and reproducible bioinformatic workflows. Drawing upon his academic insights and professional journey, he is a member of ZS’s advanced degree council, which provides professional guidance for ZSers with doctoral degrees.</p>`,
        image: sarver.src,
        linkedin: "https://www.linkedin.com/in/bricesarver",
        speaker: true,
      },
      {
        name: "Franz Arnold Ake",
        jobTitle: "PHD Student at IDIBELL",
        track: "Session 1: Enabling science",
        date:"May 15",
        time: "12:10PM - 12:30PM",
        submissionTitle: "SCALPEL, a Nextflow based pipeline for quantification of isoform at single-cell resolution",
        bio: `Franz AKE is a Bioinformatician specializing in single-cell transcriptomics. He pursuing his PhD in Bioinformatics at IDIBELL Institute (Barcelona, SPAIN) under the supervison of Dr Mireya PLASS. He advocates for workflow automation and the integration of Nextflow in omics studies.`,
        twitter: "https://x.com/franz_ake",
        linkedin: "https://www.linkedin.com/in/franz-arnold-ake-3a657b11b/",
        github: "https://github.com/Franzx7",
        image: ake.src,
        speaker: true,
      },
      {
        name: "Juliana Assis",
        jobTitle: "Senior Data Scientist at DTU Biosustain: The Novo Nordisk Foundation Center for Biosustainability",
        track: "Session 3: Organizational impact",
        date:"May 16",
        time: "10AM - 10:20AM",
        submissionTitle: `Building an Omics Data Infrastructure to Bridge Data Management and Data Science`,
        bio: `<p>Juliana Assis is a biologist/Bioinformatician/Data Scientist at DTU-Biosustain with a strong interest in bioinformatics and microbial genomics. Her work focuses on building integrated infrastructures that streamline omics data analysis, using Nextflow with Seqera for scalable, automated workflows. She is particularly interested in developing pipelines that enhance reproducibility, accessibility, and data reuse, aligning with FAIR principles.</p>
        <p>Currently, Juliana applies these approaches to taxonomic and functional characterization of microbial communities, leveraging both Nanopore and Illumina sequencing technologies. While not a core Nextflow developer, she actively implements and customizes workflows to bridge the gap between data management and computational analysis, making powerful bioinformatics tools more accessible to researchers.</p>`,
        linkedin: "https://www.linkedin.com/in/juliana-assis-6419a230/",
        image: assis.src,
        speaker: true,
      },
      {
        name: "Olaitan Awe",
        jobTitle: "Training Officer at African Society for Bioinformatics and Computational Biology",
        track: "Session 1: Enabling science",
        date:"May 16",
        time: "11:30AM - 11:50AM",
        submissionTitle: `Enabling Reproducible Science and African Represenation in Science through Nextflow Workshops`,
        bio: `<p>Olaitan I. Awe (Ph.D.) is the training officer for the African Society for Bioinformatics and Computational Biology (ASBCB) and his research focuses on the development of computational tools and the analysis of Next-Generation Sequencing datasets. He completed his PhD in bioinformatics at the Computer Science Department, University of Ibadan with a research focus on transcriptomic region identification in model organisms using machine learning, an MS in Computer Science and a BS in Electrical and Electronic Engineering also from the Univerisity of Ibadan.</p><p> He contributes to solving the gene-finding problem. He has used comparative genomics techniques to study filoviruses and arboviruses. He has conducted gene expression studies on complex phenotypes (colorectal cancer, breast cancer, prostate cancer) and neurological disorders (Epilepsy, Multiple Sclerosis, Alzheimers). He is interested in developing reproducible bioinformatics pipelines. He has a record of primary and collaborative authorship in peer-reviewed publications in internationally recognized journals.</p><p> With over a decade of experience in scientific research computing, he is passionate about African bioinformatics, reproducible research and capacity building and he organizes webinars, codeathons and workshops to train life scientists from more than 59 countries in genomic data science skills.</p>`,
        linkedin: "https://www.linkedin.com/in/juliana-assis-6419a230/",
        image: awe.src,
        speaker: true,
      },
      {
        name: "Alexandra Bartlett",
        jobTitle: "Bioinformatician II at Harvard Chan Bioinformatics Core",
        track: "Session 1: Enabling science",
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
      },
      {
        name: "Olga Botvinnik",
        jobTitle: "CEO & Founder at Seanome",
        track: "Session 1: Enabling science",
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
      },
      {
        name: "Gary Burnett",
        jobTitle: "Engineer at NVIDIA",
        track: "Session 1: Enabling science",
        date:"May 15",
        time: "4:20PM - 4:40PM",
        submissionTitle: "Seqera Fusion x NVIDIA Parabricks for Accelerated Analysis",
        bio: `Gary Burnett is an engineer on the healthcare team at NVIDIA, who helps scientists leverage GPUs to accelerate their bioinformatics workflows. He holds a Master's degree from Stanford University in Biomedical Informatics.`,
        linkedin: "https://www.linkedin.com/in/alexandra-bartlett-926b32109/",
        github: "https://github.com/abartlett004",
        image: burnett.src,
        speaker: true,
      },
      // {
      //   name: "Matthew Davies",
      //   jobTitle: "Head of Bioinformatics at DIOSynVax",
      //   track: "Session 1: Enabling science",
      //   date:"May 15",
      //   time: "4PM - 4:20PM",
      //   submissionTitle: "Generative AI in novel vaccine design",
      //   bio: `Head of the Bioinformatics department for <a href="https://www.diosvax.com" target="_blank">DioSynVax</a>, a biotech startup from the University of Cambridge. DioSynVax uses Deep Learning techniques and Generative AI in order to design novel synthetic vaccines derived from sequential and structural data. The company is a member of the NIVIDIA Inception programs and we implement our pipelines in the AWS environment, using AWS Sagemaker to implement our Deep Learning models to design synthetic vaccines. Previously I designed and implemented the EDAPT pipeline for <a href="https://enarabio.com/technology" target="_blank">Enara Bio</a> to identify cancer-specific transcripts for the development of TCR-directed immunotherapies and therapeutic vaccines. The pipeline was used create several off-the-shelf immunotherapies for non-small cell lung cancer (NSCLC) that were subsequently licenced by Boehringer Ingelheim licenses. I also implemented the PELEUS pipeline for <a href="https://achillestx.com/science" target="_blank">Achilles Therapeutics</a>, which identifies clonal neoantigens specific to a patient’s tumour profile as a means to develop a personalised vaccine response. I have worked for many years in the field of bioinformatics for many years, both in academica and industry, and continue to enjoy the rapid development of the field and the new challenges it poses.`,
      //   twitter: "https://x.com/matthewndavies",
      //   linkedin: "https://www.linkedin.com/in/matthew-davies-615051b6/",
      // },
      {
        name: "Paolo Di Tommaso",
        jobTitle: "CTO at Seqera",
        track: "Session 2: Big Nextflow",
        date:"May 15",
        time: "2PM - 2:30PM",
        submissionTitle: "Nextflow Updates",
        bio: `<p>Paolo is the CTO and co-founder of Seqera. He is a computer scientist with a strong interest in high-throughput scientific computing, data-intensive applications, parallel programming, cloud computing and containerisation technologies. He has broad experience as a software engineer and software architect in life science and healthcare applications.</p><p> He is an open-source advocate and the creator and maintainer of the Nextflow workflow system.</p>`,
        image: ditommaso.src,
        github: 'https://github.com/pditommaso',
        twitter: 'https://x.com/paoloditommaso?lang=en',
        linkedin: 'https://es.linkedin.com/in/paoloditommaso',
        speaker: true,
      },
      {
        name: "Evan Floden",
        jobTitle: "CEO at Seqera",
        track: "Session 1: Enabling science",
        date:"May 15",
        time: "9:40AM - 10:20AM",
        submissionTitle: "Summit Opening",
        bio: "<p>Evan Floden is the CEO and co-founder of Seqera where the team has spent the last decade building Nextflow and the modern biotech stack. By providing scientists with modern software development tools such as containers, cloud, and git - Seqera is making scientific data analysis accessible at any scale.</p><p> Evan is a strong advocate for open science through Seqera projects such as MultiQC and Wave containers.</p>",
        image: floden.src,
        twitter: "https://x.com/EvanFloden",
        linkedin: "https://www.linkedin.com/in/evan-floden-36137018/",
        github: 'https://github.com/evanfloden',
      },
      {
        name: "Hyun-Hwan Jeong",
        jobTitle: "Assistant Professor at Baylor College of Medicine",
        track: "Session 1: Enabling science",
        date:"May 15",
        time: "10:20AM - 10:40AM",
        submissionTitle: "From Technical Debt to Sustainable Workflows: The AI-MARRVEL Nextflow Journey",
        coAuthors: 'Jaeyen Lee, Chaozhong Liu, Zhandong Liu',
        bio: `<p>Hyun-Hwan Jeong is a scientist specializing in bioinformatics, computational biology, and machine learning, currently serving as an Assistant Professor in the Department of Pediatrics at Baylor College of Medicine. With extensive experience in next-generation sequencing analysis, Dr. Jeong has developed computational methods such as CRISPRBetaBinomial, SalmonTE, and the cloud-based analytic platform CRISPRcloud.</p>
 
        <p>Dr. Jeong earned his Ph.D. in Computer Science and Engineering from Ajou University, South Korea. His career includes roles at Baylor College of Medicine, Precede Biosciences, and UT Health Science Center, where he has applied bioinformatics and artificial intelligence to address challenges in precision medicine.</p>
        
        <p>His research has been published in notable journals, including Genome Research, Neuron, and Cell Reports, and he currently serves as the lead maintainer for the AI-MARRVEL pipeline, an AI-based genetic diagnosis tool designed to facilitate precise genetic analysis and diagnosis.</p>`,
        image: jeong.src,
        speaker: true,
      },
      {
        name: "Esha Joshi",
        jobTitle: "Bioinformatics Engineer at Seqera",
        track: "Session 3: Organizational impact",
        date:"May 16",
        time: "9:30AM - 10:00AM",
        submissionTitle: "Scale with Seqera: Accelerate, Expand, and Collaborate",
        bio: `<p>Esha is a Bioinformatician with a background in human genetics, with expertise bridging bioinformatics and software development. Her career has spanned biotech startups, academia, and government positions where she developed Nextflow pipelines and tools for large-scale genomic analysis.</p><p> Her role at Seqera's Scientific Development team allows her to leverage her diverse experience to assist scientists in optimizing their use of Nextflow and integrating the Seqera Platform into their research workflows.</p>`,
        image: joshi.src,
        speaker: true,
      },
      {
        name: "Adriana Messyasz",
        jobTitle: "Bioinformatics Analyst at Rutgers NJMS",
        track: "Session 1: Enabling science",
        date:"May 15",
        time: "12:30PM - 12:50PM",
        submissionTitle: "Developing a Scalable Workflow for Analyzing Long-Read 16S Sequences from Oxford Nanopore Sequencing",
        bio: `<p>Bioinformatician and microbial scientist who loves to collaborate and solve complex problems regarding data generation, analysis, and interpretation.</p><p> As a bioinformatics specialist at the Rutgers NJMS Molecular and Genomics Informatics Core (MaGIC), I help researchers generate, organize, and interpret all types of sequencing data.</p>`,
        image: messyasz.src,
        speaker: true,
      },
      {
        name: "Lorena Pantano",
        jobTitle: "Director of the Bioinformatics Platform at the Harvard Chan Bioinformatics Core",
        track: "Session 1: Enabling science",
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
      },
      {
        name: "Adrianto Wirawan",
        jobTitle: "Director of Bioinformatics Engineering at Genomics England",
        track: "Session 3: Organizational impact",
        date:"May 16",
        // submissionTitle: "[Coming soon]",
        time: "10:20AM - 10:40AM",
        image: wirawan.src,
        bio: 'Coming soon.',
        speaker: true,
      },
      // {
      //   name: "TBD",
      //   jobTitle: "TBD at ZS",
      //   track: "Session 3: Organizational impact",
      //   date:"May 16",
      //   time: "10:40AM - 11:00AM",
      // },
      // {
      //   name: "TBD",
      //   jobTitle: "TBD at QUILT",
      //   track: "Session 1: Enabling science",
      //   date:"May 15",
      //   time: "11:30AM - 11:50AM",
      // },
    ]
  }