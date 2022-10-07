---
slug: nextits-a-pipeline-for-metabarcoding-fungi-with-full-length-its-sequenced-with-pacbio
title: "NextITS: a pipeline for metabarcoding fungi with full-length ITS sequenced with PacBio"
image: ../../../images/visuals/nextits-a-pipeline-for-metabarcoding-fungi-with-full-length-its-sequenced-with-pacbio.png
poster: /assets/nextits-a-pipeline-for-metabarcoding-fungi-with-full-length-its-sequenced-with-pacbio.pdf
poster_id: 12
speakers:
  - Vladimir Mikryukov
tags:
  - Community
---
<div className="mb-8">
  <small className="typo-small">
    Vladimir Mikryukov, Sten Anslan, Leho Tedersoo
  </small>
</div>

The most widely used genetic markers for metabarcoding fungal communities are highly variable rRNA ITS1 and ITS2 sub-regions of the internal transcribed spacer. High-throughput metabarcoding has greatly improved our understanding of fungal community ecology. Here, we present NextITS, an automated pipeline for analyzing full-length ITS sequences (ITS1-5.8S-ITS2) from the Pacific Biosciences (PacBio) third-generation sequencing platform. Although the PacBio HiFi reads are highly accurate, the primary type of sequencing error is insertions or deletions in homopolymeric sites, which are also naturally common in fungal ITS. In the pipeline, we implemented correction of homopolymer errors, detection of tag-switching artifacts, and recovery of sequences false-positively annotated as chimeric. The pipeline is built using Nextflow workflow manager, with all the software dependencies packaged into Docker and Singularity containers.
