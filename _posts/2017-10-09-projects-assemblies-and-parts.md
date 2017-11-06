---
layout: post
title: Projects, Assemblies, and Parts 
category: "Exploring Designs on OmniBuilds"
weight: 2
---



Projects, Assemblies, and Parts are different design classes in Omnibuilds. These design classes work together to create a organizational hierarchy for the hardware you are building in the real world.
 
**1. Projects**

Projects are highest level design in the design hierarchy. Projects can have parts and assemblies under it in the " design architecture tree". In some use cases, projects can be added to under other projects. for example, say we created a new project similar to a raspberry pi called a blueberry pi. This blueberry pi is a great stand alone project consisting of many parts and assemblies. If I want to create retro gaming machine, I may have to embed the blueberry pi project as an assembly into the retro gaming machine project.

 **2. Assemblies**

 Assemblies will always be the middle level design class in the design hierarchy. It is always associated below a project and has parts and/or sub-assemblies below itself in the "design architecture tree" 


 **3. Parts** 

 Parts are the lowest level design class in the design hierarchy. It is associated either under a project or assembly. It will not have any designs below it in the "design architecture tree".


 It is **important** to remember that designs can change classes by adding parts and assemblies or taking away parts and assemblies from their Bill of Materials.

 **Every new design added to a project starts out as a part until you add sub-parts or assemblies to that specific design.**
