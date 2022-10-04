---
slug: sagetasks-a-python-package-for-data-and-workflow-orchestration-in-the-cloud
title: "sagetasks: a Python package for data and workflow orchestration in the cloud"
url: https://github.com/sage-Bionetworks-workflows/sagetasks
image: ../../../images/visuals/sagetasks.pdf
speakers:
  - Bruno Grande
tags:
  - Ecosystem
---
<div className="mb-8">
  <small className="typo-small">
    Bruno M. Grande, Tess M. Thyer, James A. Eddy, Thomas V. Yu, Brian D. O’Connor
  </small>
</div>

Workflow execution engines such as Nextflow provide several benefits for processing scientific data, including scalability, portability, and caching. However, these workflows can often be part of larger extract-transform-load (ETL) pipelines because (1) input and output data are stored in different locations (common in the cloud context) and (2) multiple community-curated (e.g., nf-core) workflows need to be chained together, among other reasons. These use cases motivated us to develop the sagetasks Python package. This tool is a growing collection of reusable functions for orchestrating data and workflows on various platforms. We aim to be platform-agnostic and leverage standard APIs where possible, such as the GA4GH Workflow Execution Service. We hope this effort will facilitate a variety of workflow needs, including data coordination projects and model-to-data challenges. We therefore believe that sagetasks can be a valuable addition to the Nextflow Tower ecosystem.
