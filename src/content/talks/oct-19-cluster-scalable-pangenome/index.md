---
slug: oct-19-cluster-scalable-pangenome
timeframe: 3:15 - 3:30 PM (15 min)
title: "Cluster scalable pangenome graph construction with nf-core/pangenome"
datetime: 2023-10-19T15:15:00.000Z
date: Oct 19, 2023
time: 3:15 PM
isChild: false
hasPage: true
speakers:
  - Simon Heumos
tags:
  - Community
youtube:
youtubeUrl: https://www.youtube.com/watch?v=6PKZCgp6C2w
---

<div className="mb-4">
  <small className="typo-small">
    Simon Heumos, Andrea Guarracino, Jana Hoffmann, Michael Heuer, Lukas Heumos, Philipp Ehmele, Gisela Gabernet, Friederike Hanssen, Susanne Jodoin, Erik Garrison, Sven Nahnsen
  </small>
</div>

<hr className="border-t border-gray-50 mb-4 opacity-20" />

Pangenome graphs can represent variation between multiple genomes. The PanGenome Graph Builder (PGGB) (Garrison, Guarracino et al., bioRxiv 2023) is a method for constructing unbiased pangenome graphs that fully represent genomic variation without excluding any sequences. PGGB uses all-to-all genome alignments and learned graph embeddings to build and iteratively refine a model in which we can identify variation, measure conservation, infer phylogenetic relationships, and detect recombination events (Guarracino et al., Nature 2023). However, PGGB is deployed as a bash script, limiting its scalability to only one cluster node.

Here we present nf-core/pangenome, a cluster scalable implementation of PGGB. nf-core/pangenome can distribute genome alignments across multiple nodes of a cluster scaling to up to thousands of input sequences. We show its automated sequence partitioning feature by building a Lodderomyces elongisporus pangenome graph, aiming to assign each chromosome into one graph component. A detailed MultiQC report summarizes graph statistics and shows diagnostic graph visualizations in 1 and 2 dimensions. nf-core/pangenome is written with Nextflow’s DSL2 and incorporates nf-core modules, ensuring modularity while adhering to nf-core community standards.


<div>
  <Button to="https://github.com/nf-core/pangenome" variant="secondary" size="md" arrow>
    View project
  </Button>
</div>