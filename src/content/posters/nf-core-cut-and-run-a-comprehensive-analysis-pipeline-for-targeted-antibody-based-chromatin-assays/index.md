---
slug: nf-core-cut-and-run-a-comprehensive-analysis-pipeline-for-targeted-antibody-based-chromatin-assays
title: nf-core CUT&RUN - A comprehensive analysis pipeline for targeted antibody-based chromatin assays
url: https://github.com/nf-core/cutandrun
image: ../../../images/visuals/poster.png
speakers:
  - Christopher Cheshire
tags:
  - Community
---
<div className="mb-8">
  <small className="typo-small">
    Christopher Cheshire, Charlotte West, Tamara Hodgetts
  </small>
</div>

nf-core/CUT&RUN is a comprehensive analysis pipeline written in Nextflow that is designed to analyse data from experiments that target chromatin-bound proteins using antibodies; primarily CUT&RUN and CUT&Tag.

The pipeline is built around the principles of repeatability, reproducibility and transparency producing robust analysis with rich reporting at every stage. We have followed industry "test by design" standards when developing the pipeline with over 200 tests that verify the pipeline operation with every code change.

CUT&RUN/Tag experiments can be run with several different configurations such as with IgG controls, spike-ins and varying sample grouping scenarios.
nf-core/CUN&RUN is designed to work in all of these configurations with easy-to-use parameterisation. Additionally, we provide multiple peak caller options with automatic IGV browser session generation.
