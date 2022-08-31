---
slug: oct-13-epi2me-labs-and-democratising-nanopore-sequence-analysis
timeframe: 4:05 - 4:20 PM (15 min)
title: "EPI2ME Labs and democratising Nanopore sequence analysis"
datetime: 2022-10-13T16:05:00.000Z
date: Oct 13, 2022
time: 4:05 PM
isChild: true
hasPage: true
speakers:
  - Stephen Rudd
tags:
  - Ecosystem
youtube: Watch on Youtube
youtubeUrl: https://www.youtube.com/c/nextflow
---
<div>
  <Button to="https://labs.epi2me.io" variant="accent" size="md" arrow>
    View project
  </Button>
</div>

Oxford Nanopore Technologies develops and sells DNA and RNA sequencing products. The technology is based on sensing changes in current flow as nucleic acid molecules transit a biological nanopore. Our goal is to enable the analysis of anything, by anyone, anywhere. Our MinION sequencing device is small and portable; it is commonly used in combination with Windows laptops. This presentation will introduce how we are simplifying the DNA sequence analysis processes for non- bioinformaticians who may also be sequencing in the field.

The sequence data produced by Oxford Nanopore sequencing devices has specific characteristics; the data becomes available in real-time and DNA sequences of up to hundreds of kilobases in size may be routinely sequenced. A starting dataset may contain multiple demultiplex folders each containing hundreds of FASTQ files that are prepared over the course of a 72-hour sequencing run. These characteristics offer new analysis horizons but demand flexible approaches to data orchestration and integration.

We have been using Nextflow to develop such data analysis workflows that are relevant to our users. The scope of workflows developed ranges from the analysis of multiplexed SARS-CoV-2 genome sequences, through whole human genome analysis, and into broader real-time metagenomic classification. I will introduce our solution to the real-time analysis of metagenomic sequence data during the presentation. All our workflows are freely available from our GitHub repository, [https://github.com/epi2me-labs](https://github.com/epi2me-labs).

EPI2ME Labs is our multi-platform desktop environment developed to support users who are less confident with the terminal through their data analyses. EPI2ME Labs provides a JupyterLab interface to a collection of structured tutorials and the workflows referenced above. EPI2ME Labs offers a clean GUI to specify and run analyses, present results, and maintain logging information. This product will be introduced along with pointers as to how it may be extended to run workflows from other sources. EPI2ME Labs is available for download from [https://labs.epi2me.io](https://labs.epi2me.io) – the software is also pre-installed on GridION sequencing devices.
