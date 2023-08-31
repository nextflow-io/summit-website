---
slug: oct-19-nf-test-simple-but-powerful
timeframe: 5:15 - 5:30 PM (15 min)
title: "nf-test: A simple but powerful testing framework for Nextflow pipelines"
datetime: 2023-10-19T17:15:00.000Z
date: Oct 19, 2023
time: 5:15 PM
isChild: false
hasPage: true
speakers:
  - Lukas Forer
tags:
  - Tooling
youtube: 
youtubeUrl: 
---
<div className="mb-4">
  <small className="typo-small">
    Lukas Forer and Sebastian Schönherr
  </small>
</div>

<hr className="border-t border-gray-50 mb-4 opacity-20" />

Nextflow has emerged as a powerful and flexible platform for building scalable and reproducible computational pipelines. However, as pipeline complexity grows, ensuring their correctness and reliability becomes a critical challenge. The lack of a unified and robust testing framework specific to Nextflow pipelines limits the validation of their functionality and makes it difficult for developers to guarantee the accuracy of their workflows.

nf-test is a testing framework developed explicitly for Nextflow pipelines. It uses Nextflow itself to facilitate comprehensive testing at multiple stages of pipeline development. It introduces a modular approach which enables developers to isolate and validate individual process blocks, workflow patterns, and even entire pipelines. This modularity not only simplifies the debugging process but also encourages iterative development and code reuse. nf-test is based on Groovy and provides a similar syntax as Nextflow DSL 2 including assertions for channels and powerful snapshot testing. Moreover, it is extendable by custom Groovy functions and provides a plugin system to include domains specific functions (e.g. support of Bioinformatics file formats). Furthermore, nf-test can be easily integrated with continuous integration (CI) systems, enabling automated testing on code changes and updates. This all helps pipeline developers to catch issues early in the development cycle and enables a robust and agile development process.

In this talk, I will introduce nf-test and give an overview of its core functionality. Furthermore, I show on different code examples how it helps to improve the maintainability of complex computational pipelines and give an outlook on planned features.

<div>
  <Button to="https://code.askimed.com/nf-test" variant="secondary" size="md" arrow>
    View project
  </Button>
</div>