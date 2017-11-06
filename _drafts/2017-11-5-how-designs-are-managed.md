---
layout: post
title: How Designs are Managed
category: "BootCamp"
weight: 1
---

## Everything is a Design
---
OmniBuilds is a tool for tracking engineering designs.  Every *thing* in OmniBuilds is ultimately a design, whether it a single part, an entire project, or any level of assembly in between.  Naming conventions are a question of perspective.  Designs can be organized into three main classes based on their relationship to one another: 

> A project represents a design that is not embedded in any other designs. It is a root design that has other designs embedded in its Bill of Materials (BOM) as design assemblies or design parts. 

> An assembly represents a design that has been embedded into another design's BOM (either a design project or design assembly) and also has other designs embedded within its BOM, which could include any combination of design assemblies or design parts. 

> A part represents a design that is embedded into the BOM of another design project or design assembly, but has an empty BOM, with no other designs embedded within it.

For example, imagine a sensor that included a Printed Circuit Board (PCB), an enclosure, and some fasteners. It could exist as its own independent design project, or that project could be embedded in the BOM of a larger design project, as a design assembly. If the sensor could be purchased as a single component from a supplier, then it could also exist as an individual design part with no assembly (albeit as a different design). It all depends on how the design is being used in the context of your design project and your design library.

## Designs are Modular
---
Any design can be embedded into any other design. The only exception is that a design cannot be embedded within itself, either as the direct child in the assembly tree, or any lower level as a descendant of itself. This allows you to build a library of reusable components very quickly. Every design you create is automatically added to your parts library, allowing it to be easily referenced and imported into any other designs.

Parts libraries exist at multiple levels of organizational hierarchy. Your private designs are visible only to you and comprise your private parts library. These designs may be shared with other users at your discretion for inclusion in their own design projects. For a team or organizational account, designs are shared between all users in the organization by default. On the public side, all designs are shared across the entire site and may be freely used by anyone for both public and private projects. Public designs might include open-source user generated content or off the shelf parts and components provided by wholesale suppliers.

Designs may be included into other projects in two ways: by import or by copy. Unless you have created the design and have full read/write privileges to it you may not make any changes to it (i.e. cost, files, specs). If that is reasonable for your use of the part, then it makes sense to simply import by referencing the design at a given version and quantity. However, if you need to adapt the design to fit the needs of your project, you may make a full copy of the design and add it to your own parts library. You may then import this copied part into your project.

## Designs are Versioned
---
Every design is actually an archive that contains the full version history of all design records. The archive is organized according to a composite versioning schema that includes three key concepts: revisions, builds, and configurations. If you are familiar with [git based version control] (https://git-scm.com/) then you will recognize these as roughly equivalent to the notions of commits, tagged releases, and branches.

Parts are versioned as well

A revision, or rev, is a snapshot of the entire design, including all of its records, at a given point in time. Whenever an item is added to, removed from, or updated within a design (such as a part, file, or spec), a new rev will be created, and the rev number will be incremented or 'bumped' in the sequence. Rev numbers are auto-generated according to a standard numeric sequence beginning with 1 and continuing indefinitely. When the rev is bumped, you may enter an optional change message to specify the reason for the change, if none is provided then a simple auto-generated message will be used. Along with the change message, each rev will include the user who created the rev, a timestamp, and list of what records have been changed. You can change the state of the design back to any rev in its history, by toggling through the rev selector underneath the design name in the design page. When traversing the rev log, the design will change to a read-only state, meaning you may not make any changes to a past rev, since it is a historic version. You may only make changes to a design when in the latest rev, or the 'head' of your current design.

