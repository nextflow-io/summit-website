---
slug: oct-19-empowering-distributed-precision-medicine
timeframe: 5:30 - 5:45 PM (15 min)
title: "Empowering distributed precision medicine: scalable genomic analysis in clinical trial recruitment"
datetime: 2023-10-19T17:30:00.000Z
date: Oct 19, 2023
time: 5:30 PM
isChild: false
hasPage: true
speakers:
  - Heath OBrien
tags:
  - Community
youtube: 
youtubeUrl: 
---

<div className="mb-4">
  <small className="typo-small">
Heath OBrien, Adam Faulconbridge, and Matteo Di Giovannantonio
  </small>
</div>

Sano Genetics is at the forefront of precision medicine, specialising in equipping pharma and biotech companies with the tools to recruit and retain participants for clinical trials. This is done using decentralised, at-home genetic testing and cutting-edge digital technologies. 

We are currently scaling up to handle genetic data from 100s of participants per week, with a fully automated process from sample kit ordering, through to the return of processed results to the participant. 

The core of our product are our Participant Portals. These bespoke digital spaces act as a single source of truth for participants to access personalised study updates, condition-specific articles and more. 

Our globally distributed network of Participant Portals are built on a serverless infrastructure based on AWS lambda. This allows our systems to scale automatically and eliminates the need for server management, but it presents challenges for data science, particularly the analysis of genomic data. Execution time is capped at 15 minutes with limited compute, and many of the standard libraries for data analysis are unsuitable or incompatible. We use AWS Batch to handle these long-running analysis tasks, but provisioning the infrastructure for each task is a bottleneck. Nextflow solves this problem by separating the data processing code from the infrastructure engineering and allowing us to run various arbitrarily complex workflows on the same infrastructure. This allows data processing to be integrated within our Portal infrastructure, so that tasks are triggered by our sample logistics and the participant experience is automatically personalised according to the results.

Nextflow has not only enabled us to overcome the challenges posed by the scale and complexity of genomic data analysis but also allowed us to provide participants with a seamless, personalized experience, further advancing the frontiers of precision medicine in the field of clinical trials.

<div>
  <Button to="https://sanogenetics.com/" variant="secondary" size="md" arrow>
    View project
  </Button>
</div>