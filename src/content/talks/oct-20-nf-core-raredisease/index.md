---
slug: oct-20-nf-core-raredisease
timeframe: 11:00 - 11:15 PM (15 min)
title: "nf-core/raredisease: a workflow to analyse data from patients with rare diseases"
datetime: 2023-10-20T11:00:00.000Z
date: Oct 20, 2023
time: 11:00 AM
isChild: false
hasPage: true
speakers:
  - Ramprasad Neethiraj
tags:
  - Community
youtube: 
youtubeUrl: 
---
<div className="mb-4">
  <small className="typo-small">
    Ramprasad Neethiraj, Anders Jemt, Lucia Pena-Perez, Mei Wu, Annick Renevey, Gwenna Breton, Sima Rahimi, Emma Andersson, Lauri Mesilaakso, Subazini Thankaswamy Kosalai, Emil Bertilsson, Ryan Kennedy, Viktor Henmyr, Valtteri Wirta, and Henrik Stranneheim
  </small>
</div>

<hr className="border-t border-gray-50 mb-4 opacity-20" />

Healthcare in Sweden is primarily a responsibility of the regional administration. Several regions have dedicated units that are responsible for both the development of diagnostic pipelines and their implementation within their existing healthcare system. For developers this arrangement has two major drawbacks: 1) units work in silos and develop pipelines targeting the same disease groups with very little knowledge transfer between the groups, and 2) implementation of a pipeline built by another unit, for their local computing platform, on a different platform is a challenging task.

In 2018, Genomic Medicine Sweden (GMS), which is a national initiative in genomic and precision medicine, was started to foster collaboration among regional units to improve healthcare across Sweden. One of the goals of GMS is to aggregate regional units’ knowledge and develop a pipeline which will eventually be established as a national bioinformatic pipeline for diagnosing rare diseases (RD). It was also required that this pipeline should be easy to develop in collaboration, and be portable across different computing platforms.

We decided to develop our RD pipeline in Nextflow, as that allows us to run the same code on multiple platforms. We also decided to develop our code under the umbrella of the nf-core organization, as the community there provides tooling that makes collaboration easy.

Development of nf-core/raredisease started as an extension of the workflow used in the Stockholm region to analyze nearly 3000 whole genome and 1000 whole exome sequencing samples every year, with a diagnostic yield of about 40%. Since then, the pipeline has grown to incorporate several features used by our collaborators. The pipeline can align reads, call, annotate and rank SNV/indels, SVs and CNVs, and it runs a specialized workflow for mitochondrial variants. Additionally, the pipeline’s modular architecture enables switching between different bioinformatic programs to fit local needs."

<div>
  <Button to="https://github.com/nf-core/raredisease" variant="secondary" size="md" arrow>
    View project
  </Button>
</div>