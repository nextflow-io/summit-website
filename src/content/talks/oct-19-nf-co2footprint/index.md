---
slug: oct-19-nf-co2footprint
timeframe: 12:30 - 12:45 PM (15 min)
title: "nf-co2footprint: a Nextflow plugin to estimate the CO2 footprint of pipeline runs"
datetime: 2023-10-19T12:30:00.000Z
date: Oct 19, 2023
time: 12:30 PM
isChild: false
hasPage: true
speakers:
  - Sabrina Krakau
tags:
  - Community
youtube: 
youtubeUrl: 
---

<div className="mb-4">
  <small className="typo-small">
    Sabrina Krakau, Júlia Mir-Pedrol, Phil Ewels, Paolo di Tommaso, and Sven Nahnsen
  </small>
</div>

<hr className="border-t border-gray-50 mb-4 opacity-20" />

The rapid growth of computational pipelines has revolutionized data analysis in various fields. However, the environmental impact of these resource-intensive computations, especially concerning CO2 emissions, demands attention. In particular, since optimizing computations for run time often results in non-optimal energy consumptions.

We developed nf-co2footprint, a Nextflow plugin designed to estimate the CO2 footprint of pipeline runs. During pipeline execution, the plugin calculates the CO2 emissions for the individual tasks based on the Nextflow resource usage metrics and information about the power consumption of the underlying compute system, while accounting for the carbon footprint of the respective energy production. With this, we aim to create an incentive already during the development process of pipelines to minimize energy consumption, to empower users to make informed decisions regarding computational resource allocation and to adopt more eco-friendly configurations.

nf-co2footprint offers a user-friendly report, analogous to the original Nextflow pipeline execution report, that visualizes the energy consumption and carbon emissions of each pipeline process and increases awareness of the environmental impact.

<div>
  <Button to="https://github.com/qbic-pipelines/nf-co2footprint" variant="secondary" size="md" arrow>
    View project
  </Button>
</div>