---
slug: oct-13-nf-core-airrflow-a-pipeline-to-analyze-adaptive-immune-receptor-repertoires-airrs
timeframe: 10:45 - 11:00 AM (15 min)
title: "nf-core/airrflow: A pipeline to analyze Adaptive Immune Receptor Repertoires (AIRRs)"
datetime: 2022-10-13T10:45:00.000Z
date: Oct 13, 2022
time: 10:45 AM
isChild: true
hasPage: true
speakers:
  - Gisela Gabernet
tags:
  - Community
youtube: Watch on Youtube
youtubeUrl: https://www.youtube.com/c/nextflow
---
Adaptive Immune Receptor Repertoire sequencing (AIRR-seq) is a sequencing technique that allows obtaining the genetic code of specific receptors present on the surface of B and T lymphocytes. The collection of B or T-cell receptors in an individual is referred to as the “repertoire”. AIRR-seq can be used to study the immune state of individuals, identify signatures of immune responses, and guide the development of vaccines and antibody therapies.

We developed [nf-core/airrflow](https://nf-co.re/airrflow), a scalable Nextflow pipeline to analyze high throughput AIRR-seq data from several NGS sequencing protocols. It uses the Immcantation framework for read quality control and assembly, V(D)J assignment with IgBlast, clonal assignment, and lineage tree reconstruction of bulk and single-cell repertoire data. The pipeline follows the nf-core best practices and can be easily ported to different compute environments including HPC clusters and commercial clouds.

<Button to="https://github.com/nf-core/airrflow">
  View project
</Button>

**Other authors:** Susanna Marquez, Alexander Peltzer, Robert Bjornson, Christoph Ruschil, Markus C. Kowarik, Steven H. Kleinstein, Sven Nahnsen
