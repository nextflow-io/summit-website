---
slug: migrating-complex-to-nextflow
title: "Migrating a complex to Nextflow with a containerised replica of the production environment"
url: https://summit.nextflow.io/
image: ../../../images/visuals/placeholder-poster.png
poster: /assets/placeholder-poster.pdf
poster_id: 12
speakers:
  - "Ricardo Humberto Ramirez Gonzalez"
tags:
  - Ecosystem
  - Group 2
---

<div className="mb-8">
  <small className="typo-small">
    Ricardo Humberto Ramirez Gonzalez
  </small>
</div>

<hr className="border-t border-gray-50 mb-4 opacity-20" />

Genomics England is a provider for the Genomic Medicine Service (GMS), a nationwide genomic diagnostic testing service. In Genomics England we have an in-house developed monolithic workflow manager (Bertha) for high-throughput sequence analysis with clinical applications. Bertha coordinates from receiving the samples from our sequencing provider to providing candidate genomic variants to the whole genome sequencing component of the Genomic Medicine Service of the English NHS. We are in the process of migrating from Bertha to Nextflow (Genie). Bertha depends on various internal APIs and databases to track the status of the samples, communicate with external stakeholders and to retrieve information about known pathological genomic variants. 

We have developed a tool, Jasmine, with multiple services within containerised images in Docker Compose.  Jasmine includes a python wrapper to start the APIs used by our workflows. Once the services are running, Jasmine can run and compare components using both Bertha and Genie in order to ensure that both workflows have the same results, both as output of the component and in the side effects on the surrounding services. To test complex workflows, Jasmine leverages on Nextflow’s subworkflows to make partial tests on the top of end-to-end (E2E) testing. This enables both local development and continuous integration (CI). Setting up Jasmine required a significant investment, but it is becoming crucial to accelerate the migration and catch introduced errors early and will be useful for future refactoring and enhancement to our workflows.

In this presentation, we will discuss the consequences of not having comprehensive testing, how to develop a testing environment for migrating complex pipelines to Nextflow, with containerised images to enable local development and continuous integration, and the importance of understanding the decision process taken on each component, as it is a balance between technical and clinical constrains.