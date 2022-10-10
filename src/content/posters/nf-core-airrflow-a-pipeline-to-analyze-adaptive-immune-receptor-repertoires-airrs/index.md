---
slug: nf-core-airrflow-a-pipeline-to-analyze-adaptive-immune-receptor-repertoires-airrs
title: "nf-core/airrflow: A pipeline to analyze Adaptive Immune Receptor Repertoires (AIRRs)"
url: https://github.com/nf-core/airrflow/
poster_id: 21
image: ../../../images/visuals/nf-core-airrflow-a-pipeline-to-analyze-adaptive-immune-receptor-repertoires-airrs.png
poster: /assets/nf-core-airrflow-a-pipeline-to-analyze-adaptive-immune-receptor-repertoires-airrs.pdf
speakers:
  - Gisela Gabernet
tags:
  - Community
---
<div className="mb-8">
  <small className="typo-small">
    Gisela Gabernet, Susanna Marquez, Alexander Peltzer, Robert Bjornson, Christoph Ruschil, Markus C. Kowarik, Steven H. Kleinstein, Sven Nahnsen
  </small>
</div>

Adaptive Immune Receptor Repertoire sequencing (AIRR-seq) is a sequencing technique that allows obtaining the genetic code of specific receptors present on the surface of B and T lymphocytes. The collection of B or T-cell receptors in an individual is referred to as the “repertoire”. AIRR-seq can be used to study the immune state of individuals, identify signatures of immune responses, and guide the development of vaccines and antibody therapies.

We developed [nf-core/airrflow](https://nf-co.re/airrflow), a scalable Nextflow pipeline to analyze high throughput AIRR-seq data from several NGS sequencing protocols. It uses the Immcantation framework for read quality control and assembly, V(D)J assignment with IgBlast, clonal assignment, and lineage tree reconstruction of bulk and single-cell repertoire data. The pipeline follows the nf-core best practices and can be easily ported to different compute environments including HPC clusters and commercial clouds.
