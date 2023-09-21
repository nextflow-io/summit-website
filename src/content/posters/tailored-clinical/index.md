---
slug: tailored-clinical
title: "nf-core for tailored clinical research data analysis – challenges and use cases"
url: https://summit.nextflow.io/
image: ../../../images/visuals/placeholder-poster.png
poster: /assets/placeholder-poster.pdf
poster_id: 6
speakers:
  - Anne Bertolini
tags:
  - Community
  - Poster Group 1
---

<div className="mb-8">
  <small className="typo-small">
    Anne Bertolini, Linda Grob, Vladislav Grigorjev, Irene Keller, and Franziska Singer
  </small>
</div>

<hr className="border-t border-gray-50 mb-4 opacity-20" />

Clinical research data analysis poses additional requirements on data processing and management. As a core facility for clinical data analysis, we often need to maintain a balance between the demand for reproducibility and highly specific and project-tailored experimental setups and research questions. 

The nf-core community offers highly standardized pipelines for the analysis of many common bioinformatics experiments, like RNA-sequencing and whole exome sequencing (WES). Our projects often require follow-up analyses after the nf-core pipeline steps. Therefore, we typically use a hybrid of Nextflow and other workflow management systems, including Snakemake, or extend pipelines with customized downstream analysis scripts. 

Furthermore, due to the sensitive nature of our data a cloud-based analysis is not possible. Our computing environment needs to comply with highest security standards to protect the privacy of patients. This means we are restricted to self-contained local runs of the pipelines, once the initial setup is completed. 

Here, we show a typical clinical data analysis where nf-core pipeline and tailored downstream analyses are intertwined and illustrate the privacy-ensuring computing and software installation setup.
