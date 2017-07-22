
## How OmniBuilds Works

### Everything is a Design

OmniBuilds is a tool for tracking engineering designs.  Every *thing* in OmniBuilds is ultimately a design, whether it a single part, an entire project, or any level of assembly in between.  Naming conventions are a question of perspective.  For example, imagine a sensor that included a Printed Circuit Board (PCB), an enclosure, and some fasteners.  It could exist as its own independent design project, or that project could be embedded in the Bill of Materials (BOM) of a larger project, as an assembly.  If the sensor could be purchased as a single component from a supplier, then it could also exist as an individual part with no assembly.  It just depends on how it is being used in the context of your design and your parts library.

### Designs are made up of records

Each design is comprised of three main records.
1. Parts: A bill of materials (BOM) that includes a cost, quantity, and tracking point for each part.
2. Files: A list of attached design files
3. Specs: Technical specifications and documentation

### Designs are Modular

Any design can be embedded into any other design.  The only exception is that a design cannot be emdedded within itself, either as the direct child in the assembly tree, or any lower level as a descendant of itself.  This allows you to build a library of resusable components very quickly.  Every design you create is automatically added to your parts libary, allowing it to easily be referenced and imported into any other design you create.

Parts libraries exist at multiple levels of ogranizational hierarchy.  Your private designs are visible only to you and comprise your private parts libraries.  Those designs may be shared with other users at your discretion for inclusion in their own projects.  For a team or organizational account, designs are shared between all users in the org by default.  On the public side, all designs are shared across the entire site and may be freely used by anyone for both public and private project.  Public designs might include open-source user generated content or off the shelp parts and components provided by wholesale suppliers.

Designs may be included into other projects in two ways: by import or by copy.  Unless you have created the design and have full read/write priveleges to it you may not make any changes to it (i.e. cost, files, specs).  If that is reasonable for your use of the part then it makes sense to simply import by refencing the design at a given version and quantity.  If however, you need to adapt the component or design to your project, you will need to make a full copy of the design into your own parts library and then import the copied part into your project.

### Designs are Versioned

Every design is also an archive that contains the full version history of all design records and pathways.  The archive is a compoosite versioning scheme that includes three key concepts: changes, revisions, and configurations. 

A change represents a snapshot of the entire design with all of its records, that is taken anytime a field or item changes.  This could mean updating a specificaiton, adding a new file, or changing the quantity on a part in the BOM.  Recording changes allows for the full version history of the entire project is available indefinitely throughout the life of the project.  Every change is recorded along with the user who commited the change, a timestamp, what record was changed, and an optional user generated change message.  Every change is logged and the history is accessible within the project settings.  A design may be restored back to any prevision change at a read only state.

Since these changes will add up very quickly, especially for complex designs.  You have the ability to tag a change, or a given project state, as a named revision.  For example after you have finished adding all parts and files to a design you could call it Rev 0 as a baseline.  Then after each subsequent major design change you could name it Rev 1, 2, 3 and so on.  Like changes, revs are read only as well.  The default rev for a design is always latest, which represents the most current version of the design and is not a snapshot like a named revision.  

By default, each design has a single configuration, the primary config, which represents a unique development path and version history, with its own change log and named revisions.  If the design requires some type of variation or alternate structure, then a new config can easily be branched off of the current config.  The new config represents a new development path that will have a shared version history with the primary config, up to the point that the new config is created. Alternatively, the design could be copied into an entirely new project.  This is a matter of preference and depends on the degree to which the varaition would differ from the origianl record.  In contrast to changes and revs, configs are not read only, they may be freely edited at any time.

### Parts are the building blocks of Designs

The BOM is a list of all the parts and assemblies that comprise a design, each of which is its own design.  BOMs may consist of multiple levels of hierarchy.  At a minimum, each item in the BOM includes a quantity, a cost, and the version that the associated design is being tracked at.  It is important to note that when an item is embedded into a BOM it is only a reference, not the actual item.  Since parts in a BOM are tracked by reference to another versioned design, they must be tracked at a specific version.  The two general ways to reference a design are at strict reference or or mirrored at the latest version for a given configuration. 

In strict mode, a part is always embedded at a specific reference, either a change or a named revision.  This prevents changes in the embedded design from affecting the parent project over time.  Each upstream change to an embedded part has to be manually accepted before it can be implemented in the BOM, and those changes will be recorded in the parent BOM allowing for full traceability all the way down through the BOM.  This mode is recommended for a design that has already gone into prototyping or manufacturing where mistakes can cost money.  It also intended for large teams or organizations that already have formal Engineering Change Order (ECO) policies and procedures in place.

In mirror mode, a part is embedded at the latest revision for a given configuration.  As the embedded part changes, the part in the BOM will change along with it, mirroring each change in step.  These upstream changes are applied automatically and are not tracked or recorded in the parent, only in the root design for the individual part.  Mirror mode is recommended for the early stages of design that is still undergoing heavy development or when being used by individuals or small teams that are more aware of the state of their parts library.

### Files are CAD Agnostic

Designs may contain any number of files, of any type.  While primarily intended for tracking Computer Aided Desing (CAD) Files, other common types could include PDF drawings or data sheets, graphics and artwork, or spreadsheets.  Since any file type is legal, the system is also CAD agnostic, allowing it to accept similar CAD files from different software vendors and easily handle mechancial and electrical CAD files in the same project.

Files use a simple versioning scheme that allows you to upload new versions of the file without having to use an arbitrary naming scheme.  When a new file is uploaded a cryptographic hash of the binary data is calculated and stored along with the file.  Since this hash is always unique to the contents of the file, anytime a new file is uploaded the system can detect whether or not the data has changed and will automatically create a new version,  tagging it to the specific user and time.

If you choose to, you may include all of your files for your entire project in the root design.  This is the standard method for most design project hosting services but it is not the recommended patterns.  To discourse this pattern files structures within a given project are intentionally flat -- you may not have folders or directories within your files record.  This is to encourage modularity and allow for better reuse of designs between projects.  A better pattern would be to only include assembly level CAD files or project doumentation in the root design files record, and then distribute the CAD files for each part in the respective design for that component.

### Specs: Technical specification and documentation

Specifications allow you to classify and document your design data with as much or as little precision as needed. Basic Data includes a part class, short description, part number, and a part image. It is highly recommended to include these details for each design in your library.  If you need to include more detailed specificaitons for you design, custom data allow you to add your own fields, values.  These might include weight, material, color, tensile strength, resistance, etc.

If you already have manufacturers or suppliers set up for your parts, they can be included in the specs as well.  New suppliers may be easily created, and are then added to your supplier database.  For each supplier you may include any number of schedules for the given design that include a cost, minimum order quantity (MOQ), and lead time.  You may specify a default schedule for BOM costing or allow it to be optimized based on the aggregate quantities of a given part across your entire BOM.
