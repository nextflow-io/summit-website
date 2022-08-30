---
slug: oct-14-junction-let-investigators-turning-their-data-into-results
timeframe: 10:45 - 11:00 AM (15 min)
title: "jUNCtion: Let investigators turning their data into results"
datetime: 2022-10-14T10:45:00.000Z
date: Oct 14, 2022
time: 10:45 AM
isChild: true
hasPage: true
speakers:
  - Alan Hoyle
tags:
  - Ecosystem
youtube: Watch on Youtube
youtubeUrl: https://www.youtube.com/c/nextflow
---
jUNCtion is a web application that allows our investigators turn their raw sequencing data into results.

It integrates with our LIMS system and can pull the FASTQ paths into a "Study", allow the investigators to select and run one or more Nextflow workflows on the data, and presents the data back to them via the web. Results can also be shared with other investigators or other campus labs.  

It is written in Java, Javascript, Python, and Bash languages, has a MySQL back-end, queries our LIMS Oracle SQL back-ends, runs under Tomcat, and uses Nextflow as the workflow engine.  Raw data are stored in our cluster's file system, and authentication is integrated with our campus SSO.

**Other authors:** David Marron, Kan Liu, Ryan Lata (former)
