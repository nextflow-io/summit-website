---
slug: oct-19-genomics-england
timeframe: 6:00 - 6:30 PM (30 min)
title: "Porting workflow managers to Nextflow at a national diagnostic genomics medical service – strategy and learnings"
datetime: 2023-10-19T18:00:00.000Z
date: Oct 19, 2023
time: 6:00 PM
isChild: false
hasPage: true
speakers:
  - Luke Paul Buttigieg
  - Błażej Szczerba
  - Ricardo Humberto Ramirez Gonzalez
tags:
  - Community
youtube:
youtubeUrl: https://www.youtube.com/watch?v=Pgapp2hgWmc
---

<div className="mb-4">
  <small className="typo-small">
Luke-Paul Buttigieg, Blazej Szczerba, Ricardo Humberto Ramirez Gonzalez, and Edwin	Clark
  </small>
</div>

Genomics England provides whole genome sequencing diagnostics to the Genomic Medicine Service (U.K); a free at the point-of-care, nationwide, genomic diagnostic testing service, with the ambitious target of processing 300,000 samples by 2025. Currently, all clinical bioinformatic analysis is processed using a clinical-standard certified, internally developed workflow engine (Bertha). We are migrating to a new solution (Genie) which combines off-the-shelf products with custom functionality, so we can focus on our core mission to enable equitably accessed, genomics medicine for all. Genie should help us support newer use cases quicker, across different infrastructures (cloud and on-premise), and uses a standard workflow definition language.

We have developed an approach to migrate at speed in an agile and iterative fashion. The initial phase involves using the same Singularity image containing the bioinformatics workflow’s logic that Bertha uses, directly in Genie. This reduces the risk of divergence. We are using an automated comparison testing framework to compare the existing system with the new one to detect regressions. Later, we will iteratively refactor the workflows, breaking up the Singularity image and optimising for performance. We will focus on making the workflows portable, standardised, de-coupled and optimised for executing in the cloud with Nextflow.

In this talk, we will describe this migration strategy, risk management, refactoring strategy and lessons learnt while working through this large-scale effort.

<div>
  <Button to="https://www.genomicsengland.co.uk/" variant="secondary" size="md" arrow>
    View project
  </Button>
</div>
