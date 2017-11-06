---
layout: post
title: What is Tracked in a Design
category: "BootCamp"
weight: 2
---

## Bill of Materials (BOM)
---

The Bill of Materials (BOM) is a list of all the parts and assemblies that comprise a design, each of which is its own design. BOMs may consist of multiple levels of hierarchy. At a minimum, each item in the BOM includes a quantity, a cost, and the version it is tracked at. It is important to note that when an item is embedded into a BOM it is only a reference, not the actual item. Since parts in a BOM are tracked by reference to another versioned design, they must be tracked at a specific version. This is referred to as the tracking point and it may be of two general types.

### Strict Tracking at a Rev or Build

In strict tracking, a part is always embedded at a specific reference, either a rev number or a named build (each with a corresponding config). This freezes the part at a specific version and prevents upstream changes in the embedded design from affecting the parent design project over time. While a part can be embedded at either a rev or a build, builds are the recommended pattern for tracking parts. If you are tracking parts at rev numbers you should probably create more builds. Strict tracking is recommended for a design that has already gone into prototyping or manufacturing where mistakes can cost time and money. It also intended for large teams or organizations that already have formal Engineering Change Order (ECO) procedures in place. If at a future time you wish to change the tracking point to another rev or build, simply select a new tracking point. This change will be reflected in the rev log for the parent design, allowing for full traceability.

### Mirrored Tracking at a Config

With mirrored tracking, a part is embedded at the latest revision for a given config. As the design changes over time and the rev number is bumped, the mirrored part will reflect these changes. These upstream changes are applied automatically and will not be reflected in the parent design. So as long the part is tracked at a config, when the part prototype changes the parent design will not increment its rev. It will be as though the embedded part was always at the latest version. Mirrored tracking is recommended for the early stages of design that is still undergoing constant development or if being used by individuals or small teams that are more aware of the state of their parts library.

A key concept associated with tracking is the notion of a design prototype. This should not be confused with a physical prototype. Instead it refers to the original design that is being referenced in the BOM of another project or projects. In strict tracking mode, the design is being tracked by reference to a historic version, so that changes to the prototype -- the original design, will not affect the design it is embedded into. However, with mirrored tracking the design is being tracked at the current state of the original design (for a given config). So if you have a design embedded as a part in multiple projects with mirrored tracking, changes to the original design will immediately change its representation in all of its parent designs simultaneously.


## Design (CAD) Files
---

Designs may contain any number of files of any type. While primarily intended for tracking Computer Aided Design (CAD) Files, other common file types could include PDF drawings or data sheets, graphics or artwork, and spreadsheets. Since any file type is legal, the system is CAD agnostic, allowing the design to accept similar CAD files from different software vendors and handle mechanical and electrical CAD files in the same project.

Files use a simple versioning scheme that allows you to upload new versions of the same file without having to use an arbitrary naming scheme. When a new file is uploaded a cryptographic hash of the binary data is calculated and stored along with the file. Since this hash is always unique to the contents of the file, anytime a new file is uploaded the system will detect whether or not the data has changed. This will automatically create a new version, tagging it to the specific user and time stamp.

You have the option to include all of your project files in the root design. While this is the standard method for most design project hosting services, it is not the recommended pattern. To discourage use of this pattern, file structures within a given project are intentionally flat -- you may not have folders or directories within your files record. A better pattern would be to only include assembly level CAD files or project documentation in the root design files record then distribute the CAD files for each part in the respective files record for that part or assembly. This allows for modular designs and reuse of parts between projects.

## Specifications
---

Specifications allow you to classify and document your design data with as much or as little precision as needed. Basic Data includes a part class, short description, part number, and a part image. It is highly recommended to include these details for each design in your library. If you need to include more detailed specifications for you design, custom data allow you to add your own fields, values. These might include weight, material, color, tensile strength, resistance, etc.

If you already have manufacturers or suppliers set up for parts, these can be included in the specs as well. New suppliers can easily be created, and added to your supplier database. For each supplier, you may include any number of schedules for a given design that include a cost, minimum order quantity (MOQ), and lead time. You may specify a default schedule for BOM costing or allow it to be optimized based on the aggregate quantities of a given part across an entire BOM.


