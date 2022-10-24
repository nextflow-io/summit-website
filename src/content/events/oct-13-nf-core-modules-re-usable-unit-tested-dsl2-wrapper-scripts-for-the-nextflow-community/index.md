---
slug: oct-13-nf-core-modules-re-usable-unit-tested-dsl2-wrapper-scripts-for-the-nextflow-community
timeframe: 11:45 AM - 12:15 PM (30 min)
title: "nf-core/modules: Re-usable, unit tested DSL2 wrapper scripts for the Nextflow community"
datetime: 2022-10-13T11:45:00.000Z
date: Oct 13, 2022
time: 11:45 AM
isChild: true
hasPage: true
speakers:
  - Harshil Patel
tags:
  - Community
youtube: Watch on Youtube
youtubeUrl: https://youtu.be/7dTjF1-HRnI
---

In July 2020, Nextflow provided a syntax extension called DSL2 that permits the re-use of module libraries both within and between pipelines. The new DSL came with the promise of simplifying the implementation and maintenance of data analysis pipelines, especially for the nf-core community which hosts over 50 pipelines that share functionality and core features.

We have since created a centralised repository called [nf-core/modules](https://github.com/nf-core/modules) specifically for the purpose of hosting Nextflow DSL2 module files containing tool-specific process definitions and their associated documentation. Each module contribution is reviewed independently and must pass unit tests before merging into the codebase, as well as adhering to a set of best practices in order to make them standardised, re-usable, portable and reproducible. nf-core/modules has now become a reference for [almost 600](https://nf-co.re/modules) standardised wrapper scripts for software tools such as fastqc, bwa, samtools etc. that are re-usable within any Nextflow pipeline.

Extensive documentation and video content is available for adding and using nf-core/modules. The nf-core community have also extended the nf-core/tools Python package to [include functionality](https://github.com/nf-core/tools#modules) to install, update, lint and unit test modules in pipelines.

This talk will provide an overview of the current and future plans for nf-core/modules.

<div>
  <Button to="https://nf-co.re/modules" variant="secondary" size="md" arrow>
    View project
  </Button>
</div>
