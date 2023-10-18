---
slug: genomic-england
title: "Bertha to Nextflow migration"
url: https://www.genomicsengland.co.uk
image: ../../../images/visuals/2_11_blazej.png
poster: ../../../images/posters/2_11_blazej.pdf
poster_id: 11
speakers:
  - Błażej Szczerba
tags:
  - Ecosystem
  - Poster Group 2
---

<div className="mb-8">
  <small className="typo-small">
    Błażej Szczerba
  </small>
</div>

<hr className="border-t border-gray-50 mb-4 opacity-20" />

Genomics England provides whole genome sequencing diagnostics to the Genomic Medicine Service (U.K), a free at the point-of-care, nationwide, genomic diagnostic testing service, with ambitious targets of processing 300,000 samples by 2025. Currently, all clinical bioinformatics is processed using a clinical-standard certified, internally developed workflow engine (Bertha). We are migrating to a new solution (known as Genie, based on Nextflow and Nextflow Tower) which combines off-the-shelf products with custom functionality, so we can focus on our core mission to enable equitably accessed, genomics medicine for all. Genie should help us support newer use cases quicker, across different infrastructures such as cloud, offers GA4GH WES APIs and uses a standard workflow definition language.
 
We will cover how Bertha workflows are being migrated so they can be run on Nextflow. We have developed an approach to migrate at speed in an agile and iterative fashion. The initial phase involves using the same Singularity image containing the bioinformatics workflow’s logic that Bertha uses, directly from Genie. This reduces the risk of code divergence. We are using an automated comparison testing framework to compare the existing system with the new one to detect regressions. Later, we will iteratively refactor the workflows, breaking up the Singularity image and optimising for performance. We will describe this migration strategy, risk management and lessons learnt while working through this large-scale effort.