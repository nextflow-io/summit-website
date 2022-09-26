---
slug: leveraging-nextflow-and-bactopia-for-automated-plant-pathogen-characterization
title: Leveraging Nextflow and Bactopia for automated plant pathogen characterization
url: https://www.ars.usda.gov/pacific-west-area/corvallis-or/horticultural-crops-research-unit/hcru/
image: ../../../images/visuals/poster.png
speakers:
  - Zachary Foster
tags:
  - Community
---
<div className="mb-8">
  <small className="typo-small">
    Zachary	Foster, Martha Sudermann, Nicholas C. Cauldron, Fernanda I. Bocardo, Hung Phan, Jeff H. Chang, Niklaus J. Grünwald
  </small>
</div>

Automated and rapid pipelines are needed to analyze abundant biological sequences. Nextflow provides a foundation for reproducible and scalable analyses. One such application that uses Nextflow is Bactopia, which provides workflows for genome-scale bacterial sequence analysis. However, such general-use pipelines must be adapted to specific cases. We are adapting and extending Bactopia for use in diagnostic plant clinics to automate pathogen detection and characterization. Significant additions include the ability to analyze eukaryotic pathogens using mitochondrial or diploid genomes, automated pathogen identification, and separation of host and pathogen sequences. This will enable rapid detection of unknown pathogens or variants infecting a known host. We are testing our pipeline using whole genome sequences of the Sudden Oak Death pathogen Phytophthora ramorum. Any general-use Nextflow modules or workflows developed will be offered as contributions to nf-core and Bactopia.
