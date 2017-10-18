---
layout: post
title: What is a BOM and how does it work
category: "2. Exploring Designs on OmniBuilds"
weight: 2
---

A **Bill of Materials** is a list of the raw materials, sub-assemblies, intermediate assemblies, sub-components, parts and the quantities of each needed to manufacture an end product.

Hardware projects will usually have a Bill of Materials (BOM) associated with it.

Remember there are three design classes in Omnibuilds: Projects, Assemblies, and Parts. It's important to know how BOMs relate to these design classes.

- **Projects** are the highest level design class and will most always contain a BOM

- **Assemblies** will be listed in a project's or master assembly's BOM **and** will have a BOM consisting of parts or sub-assemblies  

- **Parts** is the lowest level design class. It will be listed in a project's BOM or in an assembly's BOM but it will never have BOM associated under it. It is stand-alone


For example, let's use OmniBuilds to manage our designs for building a corvette.

The corvette is the project and the engine, body, and tires would be assemblies and parts listed in Corvette's BOM.

The corvette's engine would be an assembly and it's BOM would contain parts (such as a specific gasket) and sub-assemblies (such as an ignition)

The Specific Gasket would be the lowest level in the design hierarchy and would classified as a part
