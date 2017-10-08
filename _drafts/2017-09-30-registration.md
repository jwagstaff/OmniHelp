---
layout: post
title: Registration
category: "Login & Registration"
---

OmniBuilds is a tool for tracking engineering designs.  Every *thing* in OmniBuilds is ultimately a design, whether it a single part, an entire project, or any level of assembly in between.  Naming conventions are a question of perspective.  Designs can be organized into three main classes based on their relationship to one another: design projects, design assemblies, and design parts.  This class will always depend on the context of the design project that a design is embedded into.

A design project represents a design that is not embedded in any other designs.  It is a root design that has other designs embedded in its Bill of Materials (BOM) as design assemblies or design parts.  A design assembly represents a design that has been embedded into another design's BOM (either a design project or design assembly) and also has other designs embedded within its BOM, which could include any combination of design assemblies or design parts.  A design part represents a design that is embedded into the BOM of another design project or design assembly, but has an empty BOM, with no other designs embedded within it.  

For example, imagine a sensor that included a Printed Circuit Board (PCB), an enclosure, and some fasteners.  It could exist as its own independent design project, or that project could be embedded in the BOM of a larger design project, as a design assembly.  If the sensor could be purchased as a single component from a supplier, then it could also exist as an individual design part with no assembly (albeit as a different design).  It all depends on how the design is being used in the context of your design project and your design library.
