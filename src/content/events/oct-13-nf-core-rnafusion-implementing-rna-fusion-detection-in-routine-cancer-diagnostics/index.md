---
slug: oct-13-nf-core-rnafusion-implementing-rna-fusion-detection-in-routine-cancer-diagnostics
timeframe: 4:35 - 4:50 PM (15 min)
title: "nf-core/rnafusion: Implementing RNA-fusion detection in routine cancer diagnostics"
datetime: 2022-10-13T16:35:00.000Z
date: Oct 13, 2022
time: 4:35 PM
isChild: true
hasPage: true
speakers:
  - Annick Renevey
tags:
  - Community
youtube: Watch on Youtube
youtubeUrl: https://www.youtube.com/c/nextflow
---
<div className="mb-4">
  <small className="typo-small">
    Annick Renevey, Martin Proks, Maxime Garcia, Rickard Hammarén, Praveen Raj, Philip Ewels, Anders Jemt, Valtteri Wirta
  </small>
</div>

<div>
  <Button to="https://github.com/nf-core/rnafusion" variant="accent" size="md" arrow>
    View project
  </Button>
</div>

An increased number of gene fusions are observed in several cancer types with possible impacts for cancer diagnostics and therapy selection. However, to operate in clinical settings, a robust and reproducible data analysis pipeline is necessary. We have developed the nf-core/rnafusion pipeline designed to examine gene fusions in RNA sequencing. nf-core/rnafusion uses the combination of five detection tools (STAR-Fusion, Arriba, FusionCatcher, SQUID & pizzly) to generate a combined comprehensive report of fusions events, using visualisation tools such as FusionInspector from STAR-Fusion and draw_fusions.R from Arriba to aid the clinical interpretation of results. A complete refactoring of the pipeline was achieved with DSL 2 syntax and additional tuning parameters were added and are being developed continuously to achieve optimal results on different library preparation protocols using community feedback and a range of validation data sets.
