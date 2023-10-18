---
slug: nextflow-in-healthcare
title: "Using nextflow in healthcare: A non-invasive prenatal diagnosis pipeline"
url: https://summit.nextflow.io/
image: ../../../images/visuals/1_10_helen.png
poster: ../../../images/posters/1_10_helen.pdf
poster_id: 21
speakers:
  - Helen Curley
tags:
  - Community
  - Poster Group 1
---

<div className="mb-8">
  <small className="typo-small">
    Helen Curley, Joseph Larkman, Natalie Barrows, and Chipo Mashayamombe-Wolfgarten
  </small>
</div>

<hr className="border-t border-gray-50 mb-4 opacity-20" />
Non-Invasive Prenatal Testing (NIPD) is a revolutionary diagnostic approach for prenatal screening, offering a safer alternative to traditional invasive procedures. NIPD analyses cell-free fetal DNA present in the maternal bloodstream to detect certain genetic conditions during pregnancy without the need for invasive procedures. In comparison to its invasive counterparts, NIPD boasts reduced risk of miscarriage, minimal discomfort, and early detection of genetic abnormalities. We can couple NIPD with Relative haplotype dosage (RHDO), which works by analysing the haplotypes inherited from both parents and comparing them with the fetal DNA. We use the NIPD-RHDO pipeline to investigate diseases such duchene muscular dystrophy (DMD), spinal muscular atrophy (SMA), congenital adrenal hyperplasia (CAH), cystic fibrosis (CF) and retinoblastoma (RB1). Early detection of genetic conditions enables expectant parents to make informed decisions about their pregnancy and plan for any potential medical interventions or care required after birth.

Our center performs these tests for ~100 cases annually, and thus we have a growing demand for computing power and storage resources. To address this, we are now exploring cloud computing solutions. In this regard, Nextflow emerges as a logical and promising choice for optimising our processes and enhancing the efficiency of our genomic analyses. By leveraging cloud-based resources and the flexibility of Nextflow, we aim to streamline our workflows and meet the escalating demands of our genomic testing services. This transition to cloud-based computation holds the potential to significantly enhance our genomics center's capabilities, allowing us to better serve our patients and advance research in the field of genomics.

The pipeline presented here exemplifies one of our successful transitions to Nextflow, wherein we amalgamated standard nf-core modules, and nf-core modules with customised components tailored to our specific needs.
