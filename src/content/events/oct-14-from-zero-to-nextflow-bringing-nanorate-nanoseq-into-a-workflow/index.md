---
slug: oct-14-from-zero-to-nextflow-bringing-nanorate-nanoseq-into-a-workflow
timeframe: 12:00 - 12:15 PM (15 min)
title: "From zero to Nextflow, bringing Nanorate (NanoSeq) into a workflow"
datetime: 2022-10-14T12:00:00.000Z
date: Oct 14, 2022
time: 12:00 PM
isChild: true
hasPage: true
speakers:
  - Raul Alcantara Aragon
tags:
  - Community
youtube: Watch on Youtube
youtubeUrl: https://youtu.be/PXwKJRcTwos
---
<div className="mb-4">
  <small className="typo-small">
    Raul Alcantara Aragon, Federico Abascal, Robert J. Osborne, Alex Cagan, Iñigo Martincorena
  </small>
</div>

<hr className="border-t border-gray-50 mb-4 opacity-20" />

In the field of cancer research there has been a renewed interest in understanding mutational processes of normal tissue. A variation on duplex sequencing, nanorate sequencing (NanoSeq), allows identification of somatic mutations with a very low error rates ( less than five errors per billion base pairs in single DNA molecules). Analysis of these type of experiments requires a multitude of scripts and programs, written in a diverse set of languages (R, Perl, Python & C++) by two members of the Martincorena group at Sanger. Initially all of this code was organised under one Python wrapper to simplify the analysis. However, it soon became apparent that a third layer of organisation would be necessary in order to turn this code into a workflow capable of handling the large throughput required by researchers. Nextflow seemed to be a natural choice for designing this workflow. I will detail this journey into Nextflow of how a simple DSL1 flow grew into a batch capable DSL2 workflow.

<div>
  <Button to="https://github.com/cancerit/NanoSeq" variant="secondary" size="md" arrow>
    View project
  </Button>
</div>
