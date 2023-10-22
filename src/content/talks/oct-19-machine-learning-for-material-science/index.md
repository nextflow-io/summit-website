---
slug: oct-19-machine-learning-for-material-science
timeframe: 11:00 - 11:15 AM (15 min)
title: "How to use data pipelines in Machine Learning for Material Science"
datetime: 2023-10-19T11:00:00.000Z
date: Oct 19, 2023
time: 11:00 AM
isChild: false
hasPage: true
speakers:
  - Jakob Zeitler
tags:
  - Community
youtube:
youtubeUrl: https://www.youtube.com/watch?v=kFDNRWXa_Mg
---

<div className="mb-4">
  <small className="typo-small">
    Jakob Zeitler
  </small>
</div>

<hr className="border-t border-gray-50 mb-4 opacity-20" />

Machine Learning is rapidly becoming a staple tool in Material Science. Just like in Bioinformatics, data pipelines in Material Science can be composed of a multitude of scripts and executables, that need to be organised and monitored. We showcase how we use Nextflow to manage our pipelines, with a specific focus on Bayesian Optimisation: For example, to optimise the yield of a yeast organism, we need to run many different experiments to find the conditions that maximise the output. We build a pipeline that standardises the steps of data cleaning, modeling (with Gaussian Processes), inference and prediction of the next best experiment. We integrate the pipeline with Nextflow Tower and our own data management API at Matterhorn Studio. This significantly improves the throughput of experimentation loops and helps automate and safeguard critical steps. All together, the setup is able to give full flexibility to the data scientist, easy data handling for the material scientist and complete reliability and monitoring for the whole pipeline.

<div>
  <Button to="https://github.com/matterhorn-studio" variant="secondary" size="md" arrow>
    View project
  </Button>
</div>
