---
slug: mango
title: "MangoRNASeqPipeline"
url: https://github.com/sejyoti/MangoRNASeqPipeline
image: ../../../images/visuals/placeholder-poster.png
poster: /assets/placeholder-poster.pdf
poster_id: 20
speakers:
  - "Sejyoti Chakraborty"
tags:
  - Community
  - Virtual
---

<div className="mb-8">
  <small className="typo-small">
    Sejyoti Chakraborty
  </small>
</div>

<hr className="border-t border-gray-50 mb-4 opacity-20" />

The "MangoRNASeqPipeline" is a versatile Nextflow-based bioinformatics pipeline designed to analyze mango transcriptomic data obtained from RNA sequencing (RNA-seq) experiments. Its primary objective is to identify differentially expressed genes in mango samples subjected to distinct treatments and controls, shedding light on the underlying molecular mechanisms governing specific physiological processes in mango plants.The pipeline comprises three modular Nextflow scripts, each dedicated to a specific stage of the RNA-seq analysis workflow. The "preprocess.nf" script undertakes initial data preprocessing tasks, encompassing quality control, read trimming, filtering, and alignment of sequenced reads to the reference genome.Subsequently, the "quantify.nf" script employs advanced tools such as Salmon or Kallisto to quantify gene expression accurately, providing transcript abundance estimates for each sample.The core of the pipeline, the "differential_expression.nf" script, utilizes the well-established DESeq2 tool to perform differential expression analysis. By statistically comparing gene expression levels between treatment groups and corresponding controls, it facilitates the identification of significantly differentially expressed genes.The MangoRNASeqPipeline is designed for adaptability and scalability, accommodating various experimental setups with different mango treatments and control combinations. Researchers can effortlessly customize input data paths and specify experimental conditions through Nextflow parameters, ensuring seamless integration into diverse RNA-seq datasets.To ensure reproducibility and portability across diverse computational environments, the MangoRNASeqPipeline leverages Nextflow's modularity and containerization capabilities. This empowers researchers and bioinformaticians to confidently analyze mango transcriptomic data regardless of the computing infrastructure they utilize.
