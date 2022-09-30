---
slug: oct-14-automated-bioinformatics-infrastructure-for-large-scale-sars-cov-2-genomic-surveillance-at-qib
timeframe: 12:15 - 12:30 PM (15 min)
title: "Automated bioinformatics infrastructure for large scale SARS-Cov-2 genomic surveillance at QIB"
datetime: 2022-10-14T12:15:00.000Z
date: Oct 14, 2022
time: 12:15 PM
isChild: true
hasPage: true
speakers:
  - Thanh Le Viet
tags:
  - Ecosystem
youtube: Watch on Youtube
youtubeUrl: https://youtu.be/S9FDUEBSYCg
---
<div className="mb-4">
  <small className="typo-small">
    Thanh Le Viet, Andrew J. Page
  </small>
</div>

<hr className="border-t border-gray-50 mb-4 opacity-20" />

Between 2020 and 2022, QIB sequenced and analysed more than 87,000 SARS-CoV-2 genomes collected in the UK, and from over a dozen international collaborators. In order to rapidly analyse large numbers of the sequences with high priority, we implemented an automated bioinformatics infrastructure using the open source Nextflow based bioinformatics pipelines on an on-premise open stack platform of the CLIMB project. This is a robust modularised end-to-end workflow, it monitors and automatically starts when the instruments finish sequencing by scheduling computing analyses to a highly portable SLURM cluster, the main processes include demultiplexing the raw sequence data, generating viral consensus genomes and identifying viral lineages of the sequences. The resulting files and reports are then populated to a central database, and notified to the working group on an instant messaging platform. The pipelines ran robustly, and at scale, any time when sequence data was produced.
