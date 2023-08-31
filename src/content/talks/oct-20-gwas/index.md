---
slug: oct-20-gwas
timeframe: 12:30 - 12:45 AM (15 min)
title: "Performing large and reproducible GWAS analysis on biobank-scale data"
datetime: 2023-10-20T12:30:00.000Z
date: Oct 20, 2023
time: 12:30 PM
isChild: false
hasPage: true
speakers:
  - Sebastian Schönherr
tags:
  - Community
youtube: 
youtubeUrl: 
---
<div className="mb-4">
  <small className="typo-small">
    Sebastian Schönherr, Johanna Schachtl-Rieß, Silvia Di Maio, and Lukas Forer
  </small>
</div>

<hr className="border-t border-gray-50 mb-4 opacity-20" />

"Motivation: The application of genome-wide association studies (GWAS) in large biobanks is transforming genetic research and enables the detection of genotype-phenotype relationships. Over 60,000 genetic associations across thousands of human diseases and traits have been discovered using a GWAS approach. Due to larger imputation panels and increasing sample sizes, researchers are increasingly faced with computational challenges when executing GWAS analysis. A reproducible, modular and extensible pipeline with a focus on parallelization is essential to simplify data analysis and allow researchers to focus on the interpretation of results. 

Results: Here we present nf-gwas, a Nextflow pipeline to run biobank-scale GWAS analysis. The pipeline includes numerous pre- and post-processing steps, integrates regression modeling from the regenie package and works with the main genetic input formats. Nf-gwas also includes an extensive reporting functionality which allows to inspect thousands of phenotypes and navigate interactive Manhattan plots directly in the browser. Furthermore, we validated the pipeline against published GWAS datasets and evaluated the pipeline on numerous HPC and cloud infrastructure to provide cost estimations. Furthermore, the pipeline is extensively tested using the unit-style testing framework nf-test to ensure code maintainability, a crucial requirement in clinical and pharmaceutical settings.

<div>
  <Button to="https://github.com/genepi/nf-gwas" variant="secondary" size="md" arrow>
    View project
  </Button>
</div>