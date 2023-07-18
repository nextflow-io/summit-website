---
slug: nf-core-sarek-a-workflow-for-germline-tumor-only-and-somatic-analysis-of-ngs-data
title: "nf-core/sarek: A workflow for germline, tumor-only, and somatic analysis of NGS data"
url: https://github.com/nf-core/sarek/
poster_id: 20
image: ../../../images/visuals/nf-core-sarek-a-workflow-for-germline-tumor-only-and-somatic-analysis-of-ngs-data.png
poster: /assets/nf-core-sarek-a-workflow-for-germline-tumor-only-and-somatic-analysis-of-ngs-data.pdf
speakers:
  - Friederike Hanssen
tags:
  - Community
---
<div className="mb-8">
  <small className="typo-small">
    Friederike Hanssen, Maxime Garcia, Susanne Jodoin, Nick Smith, Francesco Lescai, Gavin Mackenzie, Oskar Wacker, Anders Sune Pedersen, Lasse Folkersen, Edmund Miller, Gisela Gabernet, Sven Nahnsen
  </small>
</div>

High-throughput, efficient, and reproducible pipelines are needed to ensure homogeneous data processing across different compute infrastructures with affordable resource usage.
We present nf-core/sarek 3.0, to explore single-nucleotide variants, structural variation, microsatellite instability, and copy-number alterations of germline, tumor-only, and tumor-normal pairs.

We reduced compute resources and increased turn-around times, which minimizes costs on commercial clouds, facilitating the integration of publicly hosted data from repositories with in-house patient cohorts.

Other improvements include modularization of processes which facilitates maintainability and customization, and a broader repertoire of available tools.

We have re-processed 54 whole-genome-sequenced tumor-normal pairs of the TCGA-LIHC cohort, as well as on-site data, including 100 cholangiocarcinoma and 20 colorectal carcinoma panels to investigate the relationship of genomic variation to drug responsiveness.
