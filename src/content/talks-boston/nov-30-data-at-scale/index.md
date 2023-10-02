---
slug: nov-30-data-at-scale
timeframe: 12:00 - 12:15 PM (15 min)
title: "Leveraging Nextflow in a distributed cloud infrastructure to analyze genetic data at scale"
datetime: 2023-11-30T12:00:00.000Z
date: Nov 30, 2023
time: 12:00 AM
isChild: false
hasPage: true
speakers:
  - Mayur Khanna
tags:
  - Community
youtube:
youtubeUrl:
---
<div className="mb-4">
  <small className="typo-small">
    Mayur Khanna & Benjamin Alexander
  </small>
</div>

<hr className="border-t border-gray-50 mb-4 opacity-20" />

The quantity and quality of genetic data has been increasing at an exponential rate over the last few decades. These increases present new challenges for both the storage and analysis of genetic datasets. Systems such as High-Performance Computing (HPC) environments offer increased computational power for genetic analyses but cannot exceed the limitations of the deployed hardware. Further, computational algorithms are increasing in complexity, but parallelization can be difficult and time-consuming to implement. Variability in algorithm implementation, underlying libraries, and hardware stacks can lead to artifacts and unreproducible results. To address these challenges, the Genetic Informatics Platform (GIP) harnesses the power of cloud computing to provide a highly scalable framework for scientists to ingest genetic data and to build reproducible workflows. Nextflow managed workflows running within our cloud infrastructure are central to the GIP. Nextflow pipeline execution enables us to run dynamically scaling pipeline jobs at a magnitude not possible on a shared HPC environment. Utilizing this system, we have ingested 35,813 public genome wide association studies, standardized to a common human genome build and integrated into a distributed database cluster. These datasets reference 32,845 distinct traits, across a total of 72 populations. Further, we provide a user interface to query and visualize this database through interactive plotting. A batch processing system driven by Nextflow manages these ingestion pipelines in addition to user defined workflows. The Genetic Informatics Platform allows researchers to conduct reproducible research at a scale necessary to meet the demands of the future of genetic datasets and analysis.
