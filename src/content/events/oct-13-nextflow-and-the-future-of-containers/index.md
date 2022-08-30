---
slug: oct-13-nextflow-and-the-future-of-containers
timeframe: 12:20 PM - 12:35 PM (15 min)
title: "Nextflow and the future of containers "
datetime: 2022-10-13T11:50:00.000Z
date: Oct 13, 2022
time: 11:50 AM
isChild: true
hasPage: true
speakers:
  - Paolo di Tommaso
tags:
  - Software
  - Nextflow
youtube: Watch on Youtube
youtubeUrl: https://www.youtube.com/c/nextflow
---
A key feature of Nextflow is its ability to use 'parameters' - configuration variables that can be overwritten at runtime in config files or on the command line. Parameters are a flexible and powerful concept, yet their flexibility can be a problem - developers may need to write a significant amount of code to validate user inputs.

To help with this, we developed a new standard within the nf-core community using the JSON Schema format. Developers can create a schema file using a combination of automated CLI tooling and a graphical web interface. This file is then used by the pipeline not only to automatically validate inputs, but also to generate documentation and help text. Because we use the JSON Schema standard, these files can also be used outside of Nextflow - they're used to build the nf-core website documentation and graphical launch interface.

In this talk I will cover how Nextflow schema files work and describe the tooling that we have created to work with them. I'll talk about ongoing work to port the nf-core library code into a new Nextflow plugin, moving beyond just nf-core so that any pipeline can use schema with just a few lines of code.
