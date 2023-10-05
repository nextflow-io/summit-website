---
slug: oct-20-tree-of-life
timeframe: 10:30 - 10:45 AM (15 min)
title: "Automated production engine to decode the Tree of Life"
datetime: 2023-10-20T10:30:00.000Z
date: Oct 20, 2023
time: 10:30 AM
isChild: false
hasPage: true
speakers:
  - Guoying Qi
tags:
  - Ecosystem
youtube: 
youtubeUrl: 
---
<div className="mb-4">
  <small className="typo-small">
    Guoying Qi on behalf of the Tree of Life programme of the Sanger Institute
  </small>
</div>

<hr className="border-t border-gray-50 mb-4 opacity-20" />

The Tree of Life programme at the Wellcome Sanger Institute leads and participates in global biodiversity sequencing projects. The aim is to sequence all complex life forms on Earth. This will help in conservation, to understand the interconnectedness of all life, and to build a new economy based on biological materials.

To analyse this diversity of life, we are building a series of high-quality pipelines that take the raw data from the sequencing machines and perform three main tasks: (1) decontaminate the data and generate a reference genome assembly, (2) create automated standardised genome publications, and (3) run and share standard genomics analyses as preparation for common research projects.

To efficiently manage our software and tools, we adopt a standardised approach of packaging them into Docker images and then storing these images in centralised registries. These Docker images can be easily installed in our computing environment through Singularity Registry HPC (shpc) as Environment Modules during pipeline development. They can also be seamlessly integrated into our Nextflow pipelines. This setup ensures that each software and tool operates in its own isolated container, promoting efficient and reliable execution.

Our pipelines are built following open-source principles, utilising nf-core templates and tools to adhere to the highest community standards. You can find these pipelines on both Github and our dedicated portal (https://pipelines.tol.sanger.ac.uk/), which is a customised version of the original nf-core website.

Currently, we are utilising WESkit to execute and oversee workflows on our LSF farms. WESkit implements the Workflow Execution Service API developed by the Global Alliance for Genomic Health (GA4GH). Our objective is to automate workflow submission and execution by combining WESkit with Prefect.

<div>
  <Button to="https://pipelines.tol.sanger.ac.uk/" variant="secondary" size="md" arrow>
    View project
  </Button>
</div>