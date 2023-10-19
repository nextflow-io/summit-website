---
slug: oct-18-pixelgen-technologies-heart-nextflow
timeframe: 4:15 - 4:30 PM (15 min)
title: "Pixelgen Technologies ❤︎ Nextflow"
datetime: 2023-10-18T16:15:00.000Z
date: Oct 18, 2023
time: 4:15 PM
isChild: false
hasPage: true
speakers:
  - Johan Dahlberg
tags:
  - Community
  - Sponsor
youtube: 
youtubeUrl: https://youtu.be/0lnR1rx__xY?si=hglW9ZDzjXMvBN2A
is_sponsor: true
---
<div className="mb-4">
  <small className="typo-small">
    Johan Dahlberg, Alvaro Martinez Barrio, Florian de Temmerman, Max Karlsson, and Jose Fernandez Navarro
  </small>
</div>

<hr className="border-t border-gray-50 mb-4 opacity-20" />

Molecular Pixelation (MPX), a single cell technology, allows you to see the location of 76 proteins on the cell surface, 1000 cells at a time. All of this without using a microscope. How? In this talk we will introduce you to Pixelator, the software we have built to enable this groundbreaking technology, and how we use our Nextflow pipeline, nf-core/pixelator, to glue it all together.

Molecular Pixelation uses DNA-tagged antibodies to assay proteins on the cell surface. We determine the relative location of these proteins on the cell surface by creating neighborhoods of uniquely identifiable DNA pixels. Based on the information in the DNA pixels we build an in silico graph that allows us to get information about abundance and relative location of proteins at subcellular resolution.

We have built Pixelator, an open source software that transforms raw sequencing data into ready-for-analysis pxl-files that can be analyzed using standard data science tools such as R and Python. We use Nextflow as an orchestrator for Pixelator, and we are the first company to open-source our pipeline as part of the nf-core initiative.

<div>
  <Button to="https://pixelgen.com" variant="secondary" size="md" arrow>
    View project
  </Button>
</div>