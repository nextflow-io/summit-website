import yang from "./posterImages/bowen-yang.jpg";
import lyu from "./posterImages/huimin-lyu.jpg";
import valeriani from "./posterImages/lucrezia-valeriani.jpg";
import chen from "./posterImages/rebecca-chen.jpg";
import zhang from "./posterImages/wenchao-zhang.jpg";
import mueller from './posterImages/michael-mueller.jpg'
import desalvador from './posterImages/wolfgang-de-salvador.jpg'
import blum from './posterImages/laura-blum.jpg'
import ianov from './posterImages/lara-ianov.jpg'
import grindle from './posterImages/riley-grindle.png'

export default {
    main: [
      {
        name: "Wolfgang De Salvador",
        jobTitle: "Senior Product Manager, Azure Storage at Microsoft",
        track: "Poster",
        submissionTitle: "Running Nextflow on Microsoft Azure: selecting executors and infrastructure components",
        bio: `<p>Wolfgang is a mechanical engineer with a strong passion and innate aptitude towards technology and computer science, but also an experienced HPC system administrator, for cloud and on premises systems.</p><p> He owns a long industrial and academic experience in FEA and CFD modelling applied to product design and manufacturing. He is passionate about amplifying business value and innovation through HPC/AI in research contexts.</p><p>Wolfgang loves to drive and promote the latest innovative technologies in the HPC/ AI domain. Wolfgang owns a PhD in Design, Manufacturing and Operations Engineering as well as a Master in Business Administration.</p>`,
        linkedin: 'https://www.linkedin.com/in/wolfgang-de-salvador/',
        github: 'https://github.com/wolfgang-desalvador',
        image: desalvador.src,
        pageUrl: 'running-nextflow-on-microsoft-azure-selecting-executors-and-infrastructure-components',
      },
      {
        name: "Michael Mueller",
        jobTitle: "Senior Solutions Architect at Amazon Web Services",
        track: "Poster",
        submissionTitle: "Cost-effective and scalable Oxford Nanopore basecalling with Nextflow and Amazon EC2 G Instances",
        bio: `<p>Dr. Michael Mueller is a Senior Solutions Architect in AWS's UK Public Sector Healthcare team, where he helps public sector organisations leverage cloud computing to accelerate genomic research and improve clinical outcomes. After completing his studies in Cell Biology at the University of Heidelberg, he earned his Ph.D. in Bioinformatics from Cambridge University.</p><p> He brings two decades of experience in bioinformatics, having worked across various roles related to clinical genomics in academia and public sector before joining AWS where he specialises in architecting cost-effective, scalable solutions for large-scale genomic data processing and analysis.</p>`,
        linkedin: 'http://www.linkedin.com/in/michael-mueller-5013a36',
        image: mueller.src,
        pageUrl: 'cost-effective-and-scalable-oxford-nanopore-basecalling-with-nextflow-and-amazon-ec2-g-instances',
      },
      {
        name: "Laura Blum",
        jobTitle: "Development Scientist, Bioinformatics at New England Biolabs",
        track: "Poster",
        submissionTitle: "Workflow for germline variant calling with EM-seq data",
        bio: `<p>Laura is a development scientist in the bioinformatics group at New England Biolabs, where she supports NEBNext product development for sequencing applications. Currently she works closely with scientists developing a variety of epigenetic products. Laura holds an M.S. from Dartmouth College and a B.S. from Middlebury College.</p>`,
        linkedin: 'https://www.linkedin.com/in/laura-blum-a6ba76198/',
        image: blum.src,
        pageUrl: 'workflow-for-germline-variant-calling-with-em-seq-data',
      },
      // {
      //   name: "Rebecca Chen",
      //   jobTitle: "Graduate Student at University of Calgary",
      //   track: "Poster",
      //   submissionTitle: "Large-scale analysis of drug resistance in livestock parasites",
      //   bio: `<p>Graduate student from the University of Calgary, Canada. Thesis project focuses on developing pipelines for analyzing Illumina and Nanopore amplicon sequencing of parasitic nematode marker genes.</p>`,
      //   image: chen.src,
      //   pageUrl: 'large-scale-analysis-of-drug-resistance-in-livestock-parasites',
      // },
      {
        name: "Lara Ianov",
        jobTitle: "Assistant Professor at University of Alabama at Birmingham",
        track: "Poster",
        submissionTitle: "scnanoseq: an nf-core pipeline for Oxford Nanopore single-cell RNA-sequencing",
        bio: `<p>Lara Ianov is the Co-Director of the UAB Biological Data Science Core and an Assistant Professor at the UAB Department of Neurobiology. She directs the development of transcriptomics and epigenomics pipelines including the nf-core/scnanoseq pipeline.</p><p>Beyond secondary data analysis pipelines, Dr. Ianov also leads the establishment and development of analytical best practices and tertiary analysis pipelines for applications such as single-cell/single-nuclei RNA-seq, CITE-seq, ATAC-seq and spatial transcriptomics (10X Visium and Xenium).</p><p> Within the core, and as part of research collaborations, Dr. Ianov’s involvement in the analysis, interpretation and visualization of omics data have resulted in many peer-reviewed publications and funded grants. <./p><p>Dr. Ianov is also a dedicated contributor to the training community at UAB, having led multiple workshops focused on bioinformatics and computational workflows. As a Nextflow Ambassador, she is currently expanding these efforts by promoting Nextflow and nf-core topics, fostering a broader adoption of reproducible and scalable data analysis practices.</p>`,
        twitter: 'https://x.com/UAB_BDS',
        linkedin: 'https://www.linkedin.com/in/lara-ianov/',
        github: 'https://github.com/lianov',
        image: ianov.src,
        pageUrl: 'scnanoseq-an-nf-core-pipeline-for-oxford-nanopore-single-cell-rna-sequencing',
      },
      {
        name: "Huimin Lyu",
        jobTitle: "Bioinformatics Programmer at Yale School of Medicine",
        track: "Poster",
        submissionTitle: "nf-core/airrflow: a workflow for adaptive immune receptor analysis using the Immcantation framework",
        bio: `<p>With a background in bioinformatics and computer science, Huimin Lyu is currently a bioinformatics programmer at Yale School of Medicine, focusing on AIRR-seq analysis and the maintenance and development of the airrflow pipeline.</p>`,
        image: lyu.src,
        pageUrl: 'nf-core-airrflow-a-workflow-for-adaptive-immune-receptor-analysis-using-the-immcantation',
      },
      {
        name: "Lucrezia Valeriani",
        jobTitle: "PhD student at University of Trieste - AREA Science Park",
        track: "Poster",
        submissionTitle: "nf-core/tumourevo: accelerates understanding in tumour evolution",
        bio: `<p>Phd Student in Artificial Intelligence at University of Trieste and AREA Science Park.</p>`,
        image: valeriani.src,
        pageUrl: 'nf-core-tumourevo-accelerates-understanding-in-tumour-evolution',
      },
      {
        name: "Bowen Yang",
        jobTitle: "Bioinformatics Specialist III at Stowers Institute for Medical Research",
        track: "Poster",
        submissionTitle: "Streamlined bioinformatics services available at the Stowers institute for medical research",
        bio: `<p>Bioinformatics Scientist with over six years of research experience in computational biology and three years in molecular biology. I specialize in bioinformatics, software and database development (including Nextflow and Snakemake), with expertise in a wide range of NGS analysis, data mining, and molecular biology.</p><p> My interests also extend to website development (using Django and UI/UX principles), integrating computational and biological sciences. Passionate about advancing bioinformatics in both industry and research, I am dedicated to leveraging technology to drive innovation in genomics, molecular biology, and bioinformatics.</p>`,
        linkedin: 'https://www.linkedin.com/in/bowen-yang-ph-d-0a9714126/',
        github: 'https://github.com/boweny920',
        image: yang.src,
        pageUrl: 'streamlined-bioinformatics-services-available-at-the-stowers-institute-for-medical-research',
      },
      {
        name: "Wenchao Zhang",
        jobTitle: "Senior Computational Research Scientist at St. Jude Children's Research Hospital",
        track: "Poster",
        submissionTitle: "HiFi-Somatic-Nextflow: A Customizable Nextflow Pipeline for Somatic Variant Calling Using HiFi Data",
        bio: `<p>Dr. Wenchao Zhang is a Senior Computational Research Scientist at the Center for Applied Bioinformatics (CAB) at St. Jude Children's Research Hospital (SJCRH). He began his career as an electronics engineer before transitioning to the field of bioinformatics. Over the past 15 years, Dr. Zhang has cultivated extensive expertise in computational biology, with a particular focus on developing innovative solutions for complex biological problems.</p>
        <p>His research interests include the development of Nextflow pipelines, the creation of bioinformatics algorithms and tools, and the application of high-performance computing (HPC) techniques to accelerate bioinformatics analyses. Dr. Zhang specializes in leveraging both task-driven parallel computing frameworks, such as MPI, and data-driven parallel computing platforms, such as CUDA GPU, to optimize computational efficiency and scalability in bioinformatics workflows.</p>`,
        linkedin: "https://www.linkedin.com/in/wenchao-zhang-5095044a",
        image: zhang.src,
        pageUrl: 'hifi-somatic-nextflow-a-customizable-nextflow-pipeline-for-somatic-variant-calling-using-hifi',
      },
      {
        name: "Riley Grindle",
        jobTitle: "Bioinformatics Analyst at MDI Biological Laboratory",
        track: "Poster",
        submissionTitle: "CGDS Collaborations in Research & Innovation",
        // bio: `<p></p>`,
        linkedin: "https://www.linkedin.com/in/riley-grindle",
        github: 'https://github.com/Riley-Grindle',
        image: grindle.src,
        pageUrl: 'cgds-collaborations-in-research-and-innovation',
      },
    ]
  }