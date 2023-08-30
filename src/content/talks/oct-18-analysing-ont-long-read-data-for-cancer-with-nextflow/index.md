---
slug: oct-18-analysing-ont-long-read-data-for-cancer-with-nextflow
timeframe: 3:45 - 4:00 PM (15 min)
title: Analysing ONT Long Read data for cancer with Nextflow
datetime: 2022-10-18T15:15:45.000Z
date: Oct 18, 2022
time: 3:45 PM
isChild: false
hasPage: true
speakers:
  - Arthur Gymer
tags:
  - Community
youtube: 
youtubeUrl: 
---
<div className="mb-4">
  <small className="typo-small">
    Arthur Gymer, Adam Geiss, Tim Freeman, Rowan Howell, Bisal Nayal, and Matt Proxenos
  </small>
</div>

<hr className="border-t border-gray-50 mb-4 opacity-20" />

The identification of genomic changes in cancer is important for the treatment, prognostication and monitoring of cancers. Long read DNA sequencing can be used to identify genomic alterations which may not be detected using short read DNA based sequencing technologies and therefore provide greater insight into a patients cancer and allow for improvements in patient management.

The Genomics England Cancer 2.0 programme aims to investigate the clinical utility of long read sequencing in cancer. Genomics England are working with academic partners and NHS Genomic Laboratory Hubs (GLH’s) to explore the clinical potential of this technique. Using Oxford Nanopore technology, to date the project has sequenced over 4000 flow cells with the initial pilot phase expected to add upwards of 150 flow cells per month from the 3 pilot sites. As part of this project, a bioinformatics pipeline for long read sequencing is being developed to analyse the sequencing data. 

The project currently comprises two pipelines; a per-flowcell basecalling and QC pipeline, and a per-patient tumour-normal variant-calling pipeline. Input for the QC pipeline can be either pre or post basecalling, with both FAST5 and POD5 raw formats supported as well as basecalled FASTQ or BAM formats. Basecalling is performed using Guppy or Dorado and requires GPU support. As part of the basecalling process DNA methylation information is also endcoded into the BAMs. All alignment is performed using minimap2 with access to iGenomes references enabled through nf-core. QC steps performed include measuring coverage and alignment quality as well as making HLA typing calls and a simplistic sex determination. 

Tumour-normal analysis is performed using the aligned BAMs output from the QC pipeline. Structural variants are called using nanomonsv and small variant calling is implemented with ClairS. Finally, we perform a proprietary tiering of called variants. 

<div>
  <Button to="https://www.genomicsengland.co.uk/" variant="secondary" size="md" arrow>
    View project
  </Button>
</div>