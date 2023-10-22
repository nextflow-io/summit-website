---
slug: oct-19-proteinfold
timeframe: 11:15 - 11:30 AM (15 min)
title: "nf-core/proteinfold: a standardized workflow framework for protein structure prediction tools"
datetime: 2023-10-19T11:15:00.000Z
date: Oct 19, 2023
time: 11:15 AM
isChild: false
hasPage: true
speakers:
  - Jose Espinosa-Carrasco
tags:
  - Community
youtube:
youtubeUrl: https://www.youtube.com/watch?v=LlVkxUoS5CY
---
<div className="mb-4">
  <small className="typo-small">
    Jose Espinosa-Carrasco, A. Baltzis, L. Santus, L. Mansouri, M. Steinegger, H. Patel, T. Hermoso-Pulido, J. Ponomarenko, nf-core community, and C. Notredame
  </small>
</div>

<hr className="border-t border-gray-50 mb-4 opacity-20" />

AlphaFold2's release paved the way for a new generation of prediction tools for studying unknown proteomes. These tools enable highly accurate predictions of protein structures taking advantage of the progresses in deep learning approaches. However, the implementation of these tools is not always easy for users who have to face technical challenges, such as putting in place the amalgam of dependencies and databases that each of the tools requires for its correct functioning. In this manner, offering the community a standardized workflow framework to execute these tools could prove highly advantageous for users. Thanks to its adherence to nf-core guidelines, the nf-core/proteinfold pipeline simplifies the application of cutting-edge protein structure modeling techniques by leveraging Nextflow optimal execution on cloud providers and HPC infrastructures. The pipeline currently incorporates three popular methods for protein structure prediction: AlphaFold, CollabFold, and ESMFold, and plans are underway to include more tools. This pipeline also forms an integral part of a strategy to enhance interoperable protein sequence processing across nf-core pipelines, sub-workflows, and modules. For instance, it is meant to be integrated within multiple sequence alignment tools able to combine sequence and structural information such as T-Coffee. We believe that nf-core/proteinfold's open-source access to community-developed tools will significantly impact biological analyses based on protein structures.

<div>
  <Button to="https://github.com/nf-core/proteinfold" variant="secondary" size="md" arrow>
    View project
  </Button>
</div>
