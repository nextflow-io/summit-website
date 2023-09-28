---
slug: nov-30-neoantigen
timeframe: 10:00 - 10:15 AM (15 min)
title: "Enabling reproducible and flexible neoantigen prediction with Nextflow"
datetime: 2023-11-30T10:00:00.000Z
date: Nov 30, 2023
time: 10:00 AM
isChild: false
hasPage: true
speakers:
  - Steven Vensko II
tags:
  - Community
youtube:
youtubeUrl:
---
<div className="mb-4">
  <small className="typo-small">
    Steven Vensko II, Benjamin G. Vincent, Dante S. Bortone, and Brian Parker
  </small>
</div>

<hr className="border-t border-gray-50 mb-4 opacity-20" />

Neoantigens are tumor cell-specific antigens that can be recognized by the immune system as foreign. Cancer immunotherapy has improved patient outcomes through tumor cell elimination by neoantigen-specific T cells. However, only a minority of patients with advanced and metastatic disease respond to immunotherapy. An improved understanding of tumor antigen processing, presentation, and recognition along with advancements in in-silico estimations of these factors are crucial for the accurate prediction and prioritization of targetable neoantigens. Over two dozen workflows exist to predict neoantigens; however, many have ceased development. A modular and extensible neoantigen workflow with a heavy emphasis on reproducibility has been an unmet need within the field. Here, we introduce our neoantigen prediction workflow, LENS (Landscape of Effective Neoantigens Software), powered by our Nextflow DSL2 wrapper, RAFT (Reproducible Analyses Framework and Tools). RAFT enables users to create bespoke workflows consisting of interconnecting sub-workflows to accomplish a variety of bioinformatics tasks. These sub-workflows perform generic tasks, such as read alignment, and user-provided parameters dictate the tools to use and tool behaviors. RAFT currently has 114 modules covering a variety of themes (RNA quantification, alignment, variant calling, etc.) and tools (bwa, STAR, STARFusion, NeoSplice, NetMHCpan, etc.). RAFT also supports project-level reproducibility through compact, easily storable metadata tarballs. LENS, powered by RAFT, predicts tumor antigens from SNVs, InDels, gene fusions, splice variants, endogenous retroviruses, viruses, and cancer testis antigens. Furthermore, LENS reports relevant neoantigen prioritization metrics such as binding affinity and stability as well as a unified tumor antigen peptide expression quantifier. A clinical LENS workflow will be used in our institution’s therapeutic neoantigen vaccination protocol (PANDA-VAC, NCT04266730).

<div>
  <Button to="https://gitlab.com/landscape-of-effective-neoantigens-software/nextflow/modules/tools/lens/-/wikis/home" variant="secondary" size="md" arrow>
    View project
  </Button>
</div>