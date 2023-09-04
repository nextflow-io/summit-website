---
slug: oct-19-nf-validation
timeframe: 10:30 - 10:45 PM (15 min)
title: "nf-validation: a Nextflow plugin to validate pipeline parameters and input files"
datetime: 2023-10-19T10:30:00.000Z
date: Oct 19, 2023
time: 10:30 AM
isChild: false
hasPage: true
speakers:
  - Júlia Mir Pedrol
tags:
  - Community
youtube: 
youtubeUrl: 
---
<div className="mb-4">
  <small className="typo-small">
    Júlia Mir Pedrol, Nicolas Vannieuwkerke, Kevin Menden, and Phil Ewels
  </small>
</div>

<hr className="border-t border-gray-50 mb-4 opacity-20" />

"nf-validation is a Nextflow plugin to empower developers with ensuring data integrity and consistency before pipeline execution with only a few lines of code, mitigating potential errors and complications downstream. 

Nextflow offers the use of parameters that allow configuration adjustments during runtime. However, validating these parameters often demands a substantial amount of code from developers. nf-validation addresses this challenge by using a JSON schema. Developers can create schema files using automated CLI tooling and a graphical web interface, available through nf-core tooling. This JSON schema not only simplifies the management of input parameters but also facilitates the generation of documentation and help text.

nf-validation also incorporates the possibility to validate diverse data files, such as sample sheets in tsv, csv, or yaml formats. Furthermore, nf-validation converts validated data files into Nextflow channels, reducing the amount of external code when processing input data."

<div>
  <Button to="https://nextflow-io.github.io/nf-validation/" variant="secondary" size="md" arrow>
    View project
  </Button>
</div>