---
slug: building-the-flomics-bioinformatics-infrastructure-from-the-ground-up
title: Building the Flomics bioinformatics infrastructure from the ground up
image: ../../../images/visuals/poster.png
speakers:
  - Julien Lagarde
tags:
  - Ecosystem
---
<div className="mb-8">
  <small className="typo-small">
    Julien Lagarde, André Lopes, Pedro Ferreira, Cristina Tuñí, Lluc Cabus, Joao Curado
  </small>
</div>

Access to robust and scalable computing environments is nowadays a must for even the smallest bioinformatics research lab or startup company. Often, suitable on-premise infrastructures are unavailable or financially out of reach for such entities. For most, using cloud computing platforms such as Amazon Web Services (AWS) are the solution of choice to this problem. Integrating Nextflow pipelines in such environments provides obvious benefits in terms of scalability and computational reproducibility, but is not trivial to implement for the uninitiated. At Flomics (a biotech startup company operating in the liquid biopsies space and with a strong computational component), we have built our entire bioinformatics environment around Nextflow and nf-core pipelines in AWS. We will share our experience setting up our cost effective computing infrastructure, how we customized it to our needs using e.g. serverless functions, and share some of the lessons we learned in the process.
