---
slug: nov-29-microsoft
timeframe: 4:00 - 4:15 PM (15 min)
title: "Advancements of Nextflow in  Microsoft Azure"
datetime: 2023-11-29T16:00:00.000Z
date: Nov 29, 2023
time: 4:00 PM
isChild: false
hasPage: true
speakers:
  - Venkat Malladi
tags:
  - Ecosystem
youtube:
youtubeUrl:
is_sponsor: true
---
<div className="mb-4">
  <small className="typo-small">
    Venkat Malladi
  </small>
</div>

<hr className="border-t border-gray-50 mb-4 opacity-20" />

Bioinformatic pipelines are compute-intensive. We recognize that various computing environments may be necessary to meet and scale various analysis needs. Additionally, we understand navigating and executing workloads across these diverse environments can be challenging. Microsoft has contributed to Task Execution Schema (TES), a standard developed by the Global Alliance for Genomics and Health (GA4GH) with the goal of unifying task execution across diverse computing environments.  

Microsoft Genomics has developed a TES backend for orchestrating tasks using Microsoft Azure Batch within a workflow. Our TES sets up all required Microsoft Azure resources for workflow execution, compute resources for task execution, and storage accounts for data management. This facilitates the reproducibility of genomic analysis at scale by providing portability between various computational resources and workflows, thereby contributing to the collaborative potential of the global scientific community. 

This talk will walk you through how to set up TES and Nextflow to run genomics analysis pipelines in the cloud.  We will discuss how we optimize the compute configuration to be cost and time-efficient. You will also learn how other partners have been integrating Nextflow into their Azure ecosystem that supports secure, optimized, and scalable research on an extensible platform.   

By the end of the talk, you will have the resources you need to build a secure and scalable genomics workflow environment within Microsoft Azure. Additionally, we will talk about the future use of TES API and Nextflow integration.

<div>
  <Button to="https://github.com/microsoft/ga4gh-tes" variant="secondary" size="md" arrow>
    View project
  </Button>
</div>