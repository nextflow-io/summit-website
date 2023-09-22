---
slug: nov-29-bactopia
timeframe: 2:45 - 3:00 PM (15 min)
title: "Bactopia v3 - enhancements for public health genomic surveillance"
datetime: 2023-11-29T14:45:00.000Z
date: Nov 29, 2023
time: 2:45 PM
isChild: false
hasPage: true
speakers:
  - Robert Petit
tags:
  - Community
youtube:
youtubeUrl:
---
<div className="mb-4">
  <small className="typo-small">
    Robert Petit, Tim Read, Taylor Fearing, Chayse Rowley, and Jim Mildenberger
  </small>
</div>

<hr className="border-t border-gray-50 mb-4 opacity-20" />

[Bactopia](https://bactopia.github.io/) is a Nextflow pipeline for the complete analysis of bacterial genomes. Bactopia allows users on all types of systems such as laptops, HPC, and cloud platforms to quickly analyze bacterial genomes using more than 150 bioinformatic tools. Users can seamlessly switch between Conda, Docker and Singularity. Bactopia has extensive version control, data auditing, and includes more than 10,000 output tests to ensure reliability. Since the initial versions of the pipeline was developed more than 10 years ago there has been a rapid evolution in the field of bioinformatics, converging on concepts such as package management, containerization and version control. 

Here we introduce version 3 of [Bactopia](https://bactopia.github.io/) which retains usability for small scale genome analysis but is also compatible with large scale genome surveillance projects. Bactopia v3 has many improvements for its users and developers alike, especially in the latter case, with a strong focus on reduction in the on-going maintenance burden. Users rely on free and open-source tools, this update should help ease any concerns of on-going support for Bactopia. To accomplish this many workflow customizations, such as custom containers, were generalized or off-loaded to public resources such as Bioconda. Custom Nextflow modules and nf-core modules are no longer treated differently, making Bactopia easier for outside developers to contribute. Many Nextflow features that did not exist when Bactopia was first developed are now being used. This has greatly simplified the process for users to quickly start processing their genomes, as dataset pre-builds are no longer required. We also took the time to revise the output directory structure to be more compatible with projects performing on-going surveillance and incremental accumulation of genome sequences over time.

Bactopia is used by many from academia and public health agencies around the globe. Version 3 allows easier maintenance, scaling and customization of analysis.

<div>
  <Button to="https://bactopia.github.io/" variant="secondary" size="md" arrow>
    View project
  </Button>
</div>