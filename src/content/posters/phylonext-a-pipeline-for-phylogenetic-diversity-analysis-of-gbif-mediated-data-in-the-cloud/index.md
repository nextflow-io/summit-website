---
slug: phylonext-a-pipeline-for-phylogenetic-diversity-analysis-of-gbif-mediated-data-in-the-cloud
title: "PhyloNext: a pipeline for phylogenetic diversity analysis of GBIF-mediated data in the cloud"
url: https://github.com/vmikk/PhyloNext
image: ../../../images/visuals/phylonext-a-pipeline-for-phylogenetic-diversity-analysis-of-gbif-mediated-data-in-the-cloud.png
poster: /assets/phylonext-a-pipeline-for-phylogenetic-diversity-analysis-of-gbif-mediated-data-in-the-cloud.pdf
poster_id: 13
speakers:
  - Vladimir Mikryukov
tags:
  - Community
---
<div className="mb-8">
  <small className="typo-small">
    Vladimir Mikryukov, Kessy Abarenkov, Shawn Laffan, Tim Robertson, Emily Jane McTavish, John Waller, Joe Miller
  </small>
</div>

Phylogenetic diversity indices evaluate biological communities from the perspective of the evolutionary interrelationship between species and thus help to maximize ecological, genetic, or functional diversity conservation effectiveness. Here, we present PhyloNext, a pipeline for phylogenetic diversity analysis of the extensive GBIF-mediated data, which encounter more than 2.2 billion worldwide species occurrence records. After filtering occurrence data with Apache Arrow, the data subsets are name-matched with the latest Open Tree of Life (OToL) or user-supplied phylogenies. The Biodiverse software is used to estimate spatially-explicit phylogenetic diversity indices for various taxonomic clades and geographic areas. The pipeline is orchestrated with the Nextflow workflow manager, allowing scalable data analysis in a cloud environment.
