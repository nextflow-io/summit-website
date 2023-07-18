---
slug: computational-analysis-of-single-cell-data-with-the-nf-core-workflows-scrnaseq-2-0-and-scatac
title: Computational analysis of single cell data with the nf-core workflows scrnaseq 2.0 and scatac
url: https://nf-co.re/scrnaseq/2.0.0
image: ../../../images/visuals/poster.png
poster_id: 10
speakers:
  - Florian Heyl
tags:
  - Software
---
<div className="mb-8">
  <small className="typo-small">
    Florian Heyl, Peter J. Bailey, Olga Botvinnik, Alex Peltzer, scrnaseq team, GHGA team
  </small>
</div>

Advanced single cell RNA and ATAC sequencing technologies, as well as the ever-increasing number of datasets leads to a high demand for reproducible and standardized analysis workflows. The nf-core community thus presents the new release of the scrnaseq pipeline, and a potential version for the analysis of scATAC-Seq data. The new release of scrnaseq supports DSL2 and features benchmarked tools, such as Alevin, and Cell Ranger. It generates the relevant count file that can be used for further analysis, and a MultiQC report for quality control. Based on scrnaseq, we want to build a workflow (scatac) to handle scATAC-Seq data. Thus, we will add missing tools, such as SnapATAC, to ensure a standardized data analysis. Both scrnaseq and scatac will play a major role in GHGA (www.ghga.de). The reproducibility and standardization of the Nextflow pipelines combined with the infrastructure for FAIR omics data usage and ethico-legal framework offered by GHGA will enable new research projects.
