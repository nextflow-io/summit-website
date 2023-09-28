---
slug: nf-core-crisprseq
title: "CRISPR gene editing analysis with nf-core/crisprseq: A pipeline for targeted and screening experiments"
url: https://github.com/nf-core/crisprseq
image: ../../../images/visuals/placeholder-poster.png
poster: /assets/placeholder-poster.pdf
poster_id: 15
speakers:
  - "Júlia Mir Pedrol"
tags:
  - Community
  - Poster Group 2
---

<div className="mb-8">
  <small className="typo-small">
    Júlia	Mir Pedrol, Laurence Kuhlburger, Marta Sanvicente-García, Gisela Gabernet, nf-core community, Marc Güell, Ghazaleh Tabatabai, and Sven Nahnsen
  </small>
</div>

<hr className="border-t border-gray-50 mb-4 opacity-20" />

CRISPR-Cas9 gene editing has revolutionized the fields of molecular biology and functional genomics. This technique enables precise DNA editing which unlocks numerous possibilities for understanding gene function as well as identifying therapeutic targets, and advancing precision medicine. It holds big potential in various research domains, including drug discovery, disease modelling, agriculture or gene therapies. 

Here we present nf-core/crisprseq, an analysis pipeline for the analysis of CRISPR gene editing experiments. This tool facilitates the analysis of a wide range of experiments, from targeted gene edits to large-scale functional screens. The pipeline accurately characterizes knockouts, knock-ins, base and prime editing, as well as gene modulation, while providing precise editing efficiency assessments and identifying genetic dependencies in screening studies. Written with Nextflow's DSL2 and incorporating nf-core modules, the pipeline ensures reproducibility and modularity while adhering to community standards.