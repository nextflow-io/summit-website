---
slug: sh-matchmaker
title: "SH-Matcher: towards identification and communication of taxa through species hypotheses"
url: https://omi.ut.ee/en
image: ../../../images/visuals/placeholder-poster.png
poster: /assets/placeholder-poster.pdf
poster_id: 16
speakers:
  - Vladimir Mikryukov
tags:
  - Software
  - Group 2
---

<div className="mb-8">
  <small className="typo-small">
    Vladimir Mikryukov, Kessy Abarenkov, R. Henrik Nilsson, Urmas Kõljalg and Leho Tedersoo
  </small>
</div>

<hr className="border-t border-gray-50 mb-4 opacity-20" />

Classifying life's vast diversity is a daunting task, especially in the field of mycology, where only approximately 15% of the estimated 2+ million fungal species have been formally described. The use of molecular data in research has transformed and complicated classification systems, introducing new challenges for users. The dynamic nature of taxonomic content, evolving over time due to redefinitions of species boundaries, major shifts in taxonomic annotations with new emerging evidence, and variable interpretations inherent in the process, underpins the crucial need for a robust referencing system. This is particularly true for the elusive ""dark taxa"", species that lack distinctive morphological features and are recalcitrant to laboratory cultivation.

In response to this challenge, the UNITE database (https://unite.ut.ee/) for fungal identification has pioneered the use of unique persistent identifiers (PIDs) such as digital object identifiers (DOIs) for stable, precise, and trackable classifications. This dynamic and community-engaged approach allows for ongoing refinement of taxonomic classifications. A significant advancement is the introduction of the Species Hypotheses (SH) concept, which assigns DOIs to all species identifiable from sequence data, bypassing the need for Latin binomials and enhancing communication on environmental species known solely from DNA barcode sequences.

We present SH-Matcher, an automated pipeline designed for SH matching analysis. This tool expedites the discovery of global species from environmental DNA by targeting all Eukaryota through the use of rRNA ITS marker sequences. SH-Matcher produces DOI-based identifiers linked to the taxonomic backbones of the PlutoF biodiversity management platform (https://plutof.ut.ee/) and the Global Biodiversity Information Facility (GBIF; https://www.gbif.org/). Employing the Nextflow workflow manager, SH-Matcher delivers scalable data analysis in a robust, reproducible, and efficient manner.