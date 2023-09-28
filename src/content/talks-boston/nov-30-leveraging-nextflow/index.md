---
slug: nov-30-leveraging-nextflow
timeframe: 3:00 - 3:30 PM (30 min)
title: "Moving from pandemic response to preparedness: Leveraging Nextflow to build VIRUS-MVP framework"
datetime: 2023-11-30T15:00:00.000Z
date: Nov 30, 2023
time: 3:00 PM
isChild: false
hasPage: true
speakers:
  - Zohaib Anwar
tags:
  - Community
youtube:
youtubeUrl:
---
<div className="mb-4">
  <small className="typo-small">
    Zohaib Anwar, Ivan S. Gill, Madeline Iseminger, Anoosha Sehar, Kenyi D. Igwacho, Khushi Vora, Gary Van Domselaar, Fiona S.L. Brinkman, Paul M. K. Gordon and William W.L. Hsiao
  </small>
</div>

<hr className="border-t border-gray-50 mb-4 opacity-20" />

The genomic response to infectious diseases such as COVID-19 has emphasized the need for modern bioinformatics that can rapidly be adapted to different pathogens and can integrate various contextual datasets. For the pandemic response in Canada, we developed a genomic analysis-powered visualization framework that not only integrated lineage information with genetic mutations but also the functional impact harbored by the mutation. This integrated approach has been lacking in the genomic surveillance of COVID-19 and thus provided valuable information to public health practitioners and academics. Here, we present the update on how nextflow is enabling us to move from pandemic response to pandemic preparedness by evolving this framework into a pathogen-agnostic structure. VIRUS-MVP (Mutations, Variants, and Prevalence) is now being adapted to Mpox (POX-MVP), and Influenza (FLU-MVP) and will continue towards other pathogens such as RSV (RSV-MVP). The visualization app completely depends on the back-end genomics workflow developed using the nextflow and nf-core frameworks. The modularized structure allows for analyzing sequencing data from different pathogens by picking the optimal tools for each step. It also allows analyzing different types of datasets e.g., Whole Genome Sequencing (WGS) and Amplicons from wastewater sequencing.

This architecture is currently used to analyze tens of thousands of viral genomes across different diseases in an automated, scalable, and elastic manner and is also integrated into Canada’s genomic surveillance capacity of priority pathogens.

<div>
  <Button to="https://github.com/cidgoh/COVID-MVP" variant="secondary" size="md" arrow>
    View project
  </Button>
</div>