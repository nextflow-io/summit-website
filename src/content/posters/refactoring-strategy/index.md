---
slug: refactoring-strategy
title: "Making Genomics England's clinical genomics workflows future-proof: refactoring strategy"
url: https://www.genomicsengland.co.uk
image: ../../../images/visuals/placeholder-poster.png
poster: /assets/placeholder-poster.pdf
poster_id: 10
speakers:
  - Luke Paul Buttigieg
tags:
  - Community
  - Poster Group 2
---

<div className="mb-8">
  <small className="typo-small">
    Luke Paul Buttigieg
  </small>
</div>

<hr className="border-t border-gray-50 mb-4 opacity-20" />

Genomics England provides whole genome sequencing diagnostics to the Genomic Medicine Service (U.K), a free at the point-of-care, nationwide, genomic diagnostic testing service, with ambitious targets of processing 300,000 samples by 2025. Currently, all clinical bioinformatics is processed using a clinical-standard certified, internally developed workflow engine (Bertha). We are migrating to a new solution (known as Genie, based on Nextflow and Nextflow Tower) which combines off-the-shelf products with custom functionality, so we can focus on our core mission to enable equitably accessed, genomics medicine for all. Genie should help us support newer use cases quicker, across different infrastructures such as cloud, offers GA4GH WES APIs and uses a standard workflow definition language.

We have developed an approach to migrate to Nextflow at speed in an agile and iterative fashion, by sharing a Singularity image containing the bioinformatics analysis code across Bertha and Genie. This migration approach is good for minimising divergence but less good for optimisation and removing redundancy. We have a separate abstract submission covering this migration approach, as part of a long-format talk and poster. 

In this poster, we will describe our later effort where we will iteratively refactor the workflows, breaking up the Singularity image and optimising for performance. We will re-write the code in Nextflow native format, taking full advantage of the Nextflow functionality. We want to empower our individual squads to deliver value faster and independently, closely following nf-core best practices and development processes. We want to separate calls to external services from analysis code to improve workflow robustness. We want to optimise the organisation of containers used within the workflow to improve the development process.

We will be sharing our target workflow design with the community, our guiding principles, and the different horizons of delivery.