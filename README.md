
## How OmniBuilds Works

### Everything is a Design

OmniBuilds is a tool for tracking engineering designs.  Every *thing* in OmniBuilds is ultimately a design, whether it a single part, an entire project, or any level of assembly in between.  Naming conventions are a question of perspective.  Designs can be organized into three main classes based on their relationship to one another: design projects, design assemblies, and design parts.  This class will always depend on the context of the design project that a design is embedded into.

A design project represents a design that is not embedded in any other designs.  It is a root design that has other designs embedded in its BOM as design assemblies or design parts.  A design assembly represents a design that has been embedded into another design's BOM (either a design project or design assembly) and also has other designs embedded within its BOM, which could include any combination of design assemblies or desgin parts.  A design part represents a design that is embedded into the BOM of another design project or design assembly, but has an empty BOM, with no other designs embedded within it.  

For example, imagine a sensor that included a Printed Circuit Board (PCB), an enclosure, and some fasteners.  It could exist as its own independent design project, or that project could be embedded in the Bill of Materials (BOM) of a larger design project, as a design assembly.  If the sensor could be purchased as a single component from a supplier, then it could also exist as an individual design part with no assembly (albeit as a different design).  It all depends on how the design is being used in the context of your design project and your design library.

### Designs are Modular

Any design can be embedded into any other design.  The only exception is that a design cannot be emdedded within itself, either as the direct child in the assembly tree, or any lower level as a descendant of itself.  This allows you to build a library of resusable components very quickly.  Every design you create is automatically added to your parts libary, allowing it to easily be referenced and imported into any other design you create.

Parts libraries exist at multiple levels of ogranizational hierarchy.  Your private designs are visible only to you and comprise your private parts library.  Those designs may be shared with other users at your discretion for inclusion in their own design projects.  For a team or organizational account, designs are shared between all users in the org by default.  On the public side, all designs are shared across the entire site and may be freely used by anyone for both public and private projects.  Public designs might include open-source user generated content or off the shelf parts and components provided by wholesale suppliers.

Designs may be included into other projects in two ways: by import or by copy.  Unless you have created the design and have full read/write priveleges to it you may not make any changes to it (i.e. cost, files, specs).  If that is reasonable for your use of the part then it makes sense to simply import by referencing the design at a given version and quantity.  If however, you need to adapt the design to fit the needs your project, you will need to make a full copy of the design into your own parts library and then import the copied part into your project.


### Designs are Versioned

Every design is actually an archive that contains the full version history of all design records.  The archive is organized according to a compoosite versioning schema that includes three key concepts: revisons, builds, and configurations.  If you are familiar with git based version control then you will recoginize these as roughly equivalent to the notions of commits, tagged releases, and branches.

#### Revisions (Revs)

A revision, or rev, is a snapshot of the entire design, including all of its records, at a given point in time.  Whenever an item is added to, removed from, or updated within a design (such as a part, file, or spec), a new rev will be created, and the rev number will be incremented or 'bumped' in the sequence.  Rev numbers are auto-generated according to a standard numeric sequence beginning with 1 and continuing indefinintely.  When the rev is bumped, you may enter an optional change message to specify the reason for the change, if none is provided then a simple auto-generated message will be used.  Along with the change message, each rev will include the user who created the rev, a timestamp, and list of what records have been changed.  You can change the state of your design back to any rev in its history, by toggling through the rev selector underneath the design name in the design page.  When traversing the rev log, the design will change to read-only state, meaning you may not make any changes to a past rev, since it is a historic version.  You may only make changes to a design when you are on the latest rev, or the 'head' of your current design.

#### Builds 

Since revs can accumulate very quickly and become difficult to navigate, you also have the option to tag a given rev as a build, with a custom name.  Builds are simply another reference which points to an existing rev number, with a more meaningful name.  For example, Rev 13 could be tagged as Conceptual Design, and Rev 34 could be tagged as Engineering Prototype.  Builds are intended to reflect the attainment of a design milestone and often reflect a point at which the design will be physically prototyped, manufactured, or tested.  Like revs, builds are also read-only, and intended to serve as a historical record.  When first created, a design will not have any builds, nor will any be created automatically -- builds are always user generated.

#### Configurations (Configs)

By default, each design has a single configuration, or config, named Alpha, which represents the inital development path for the design.  As the design changes, a record of every rev and build along that path as well as the state of the design at each point, will be tracked in this config.  If during the design process, the design requires some type of variaton or alternate project structure, you may simply create a new config, branching out into a new development path.  This new config is an exact replica of the Alpha Config, and both configs will have a shared version history up the point of departure, when the new config is branched off of the old config.  The config name is auto-generated in a standard alphabetic sequence, following the NATO standard phonetic alphabet (Alpha, Bravo, Charlie, ...).  Any changes in the new config will not effect the version history of the old config.  Any builds created in the old config will also be copied into the new config as well.  As an alternative to creating a config, the design could also be copied into an entirely new project.  This is largely a matter of preference and depends on the degree to which the varaition would differ from the origianl design.  In contrast to revs and builds, configs are not read-only, they may be freely edited at any time.


### Parts are the building blocks of Designs

The Bill of Materials (BOM) is a list of all the parts and assemblies that comprise a design, each of which is its own design.  BOMs may consist of multiple levels of hierarchy.  At a minimum, each item in the BOM includes a quantity, a cost, and version to be tracked at.  It is important to note that when an item is embedded into a BOM it is only a reference, not the actual item.  Since parts in a BOM are tracked by reference to another versioned design, they must be tracked at a specific version. This is referred to as the tracking point, and it may be of two general types.

#### Strict Tracking at a Rev or Build

In strict tracking, a part is always embedded at a specific reference, either a rev number or a named build (each with a corresponding config).  This freezes the part at a specific version and prevents upstream changes in the embedded design from affecting the parent design project over time.  While a part can be embedded at either a rev or a build, builds are the recommended pattern for tracking parts.  If you find yourself tracking parts at rev numbers you should probably create more builds.  Strict tracking is recommended for a design that has already gone into prototyping or manufacturing where mistakes can cost money.  It also intended for large teams or organizations that already have formal Engineering Change Order (ECO) procedures in place.  If at some point in the future you wish to change the tracking point to another rev or build, this can be done by simply selecting a new tracking point, and this change will be reflected in the change log for the parent design, allowing for full traceability.

#### Mirrored Tracking at a Config

With mirrored tracking, a part is embedded at the latest revison for a given config.  As the design changes over time and the rev number is bumped, the mirrored part will reflect these changes.  These upstream changes are applied automatically and will not be reflected in the parent design.  So as long the part is tracked at a config, when the part prototype changes the parent design will not increment its rev.  It will be as though the embedded part was always at the latest version.  Mirrored tracking is recommended for the early stages of design that is still undergoing heavy development or when being used by individuals or small teams that are more aware of the state of their parts library.

A key concept associated with tracking is the notion of a design prototype.  This should not be confused with a physical prototype, instead it refers to the original design that is being referenced in the BOM of another project or projects.  In strict tracking mode, the design is being tracked by reference to a hsitoric version, so that changes to the prototype -- the original design, will not affect the design it is embedded into.  However, with mirrored tracking the design is being tracked at the current state of the original design (for a given config).  So if you have a design embedded as a part in multiple projects with mirrored tracking, changes to the original design will immediately change its representation in all of its parent designs simultaneously.

### Part Numbers are Auto-Generated

Every design also has a corresponding, auto-generated part number, which serves as a succint human readable reference to the composite state of the design at any given time.  Part numbers allow us to track designs within other design at a specific version.  A design becomes a 'part' whenever it is embedded in the BOM of another design.  Since designs are versioned, we need to know exactly which version the design has been embedded at.  The part number is the specific reference that allows us to do that.

A part number consists of four hyphenated alphanumeric codes.  For exmaple, if the first design you create is named My First Design, the part # would be MFD-0001-100-A0.  This represents the initial part number for My First Design (MFD), being the first in the sequence of your private parts library (0001), with the design class for an Assembly/Top Level SKU (100), and at the base version/revision of the alpha configuration (A0).

#### First Code: Design Name Abbreviation

The first code is a simple abbreviaiton of the design name that condenses it down to the first letter of every word along with any digits, excluding any non-alphanumeric characters (spaces, commas, hyphens, etc).  When used properly this allows you to embed intelligent numbering schemes into your parts library.  For example, all of your resistors could start with the name resistor and be followed by the resistance value, so Resistor 40 becomes R40 or Heax Head Bolt 7 MM would become HHB7MM.  Whenever the design name changes, the abbreviation code will also change.  Design names may be locked in order to prevent name changes from altering the part number.  This is recommended after a design has passed from active development to production.

#### Second Code: Sequence in your Private Parts Library

The second code represents the order in which the design was created, or the sequence, within your private parts library.  So the first design you create would be 0001 and the 100th design would be 0100.  This allows you to have a rough idea of when the design was created, and prevents namespace collisions for two parts that have the same abbreviations.  Individual accounts are given four digits (10,000 unique parts), team accounts are given five digits (100,000 unique parts), and organizational accounts are given six digits (1,000,000 unique parts).  If parts are deleted ti does not affect the sequencing of new parts, the sequence numbers are not resused.  Since the sequence number will never change for a part, this code will never change for a given part number.

#### Third Code: Design Class Code

On creation each design is given a class, which is a three digit code reflecting the level of hiearchy for the design, what type of design it is, and any material or fabrication properties specific to the design.  This is further explained below in the specs discussion.  Suffice to say, any time a new design project is created from the dashboard it will be given a code of 300 -- Generic Top Level Assembly -- when it is created.  Whenever a new part is created from within the BOM tab of an existing design, it will be given the code of 100 -- Generic Part.  As the BOMs for these designs change there design class will correct itself accordingly.  A design class may also be set manually in the Specs tab for a design.

#### Fourth Code: Tracking Point

The tracking point denotes the specific version of the design that the part number refers to.  This means that a given design actually has as many part numbers as it has configs, revs, and builds.  In reality though, only one, or a few of these, will be in use at any given time.  This is just a function of how the part is being tracked in the BOM of whatever design/s it is embedded in.  If a part is tracked strictly, by a rev or a build, it's tracking point will refelct the rev # or build name.  If a part is being mirrored at the latest revision for a config, then the tracking point will be the config name.

Part tracked at Rev A15          ->   MFP-0001-100-A15

Part tracked at Prototype Build  ->   MFP-0001-100-A27: Prototype

Part tracked at Alpha Config     ->   MFP-0001-100-ALPHA

#### Handling Changes in Part Numbers

At first glance, it may seem strange that a single design can have so many different part numbers.  Keeping track of all these different part numbers, especially within the context of an organizaiton, would be a nightmare, right?  In reality, only one, or a few of these part numbers will be in use at a given time, in a physical sense.  The part numbering system is organized so that anytime the underlying data in your design changes, the part number will change accordingly.  If the name changes, the abbreviation will change.  If the class changes, the code will change.  And most importantly, if the version changes, the tracking point code will change.  

If we are still in the design process, and have not actually manufactured the part, then none of these versions or changes really matter yet.  It is not until a version is marked as a build that we would expect to actually produce something.  At this point the name should be locked, as well as the design class.  As long as the part is embedded in the production BOM at the build (or rev behind the build) then that is the only part number that really matters.  And while the underlying design (for the part) may continue to change over time, from the point of view of the production BOM and the embedded part, these changes are irrelevant (because the part has been locked at a given tracking point).  If the form, fit, or function of the part changes and this needs to be pushed to manufacturing, then the part number would and should change, but only after it has been manually updated by the owner of the BOM.  


### Files are CAD Agnostic

Designs may contain any number of files, of any type.  While primarily intended for tracking Computer Aided Desing (CAD) Files, other common types could include PDF drawings or data sheets, graphics and artwork, or spreadsheets.  Since any file type is legal, the system is also CAD agnostic, allowing it to accept similar CAD files from different software vendors and easily handle mechancial and electrical CAD files in the same project.

Files use a simple versioning scheme that allows you to upload new versions of the file without having to use an arbitrary naming scheme.  When a new file is uploaded a cryptographic hash of the binary data is calculated and stored along with the file.  Since this hash is always unique to the contents of the file, anytime a new file is uploaded the system can detect whether or not the data has changed and will automatically create a new version,  tagging it to the specific user and time.

If you choose to, you may include all of your files for your entire project in the root design.  This is the standard method for most design project hosting services but it is not the recommended patterns.  To discourage use of this pattern, file structures within a given project are intentionally flat -- you may not have folders or directories within your files record.  This is to encourage modularity and allow for better reuse of designs between projects.  A better pattern would be to only include assembly level CAD files or project doumentation in the root design files record, and then distribute the CAD files for each part in the respective files record for that part or assembly.


### Specs describe Designs

Specifications allow you to classify and document your design data with as much or as little precision as needed. Basic Data includes a part class, short description, part number, and a part image. It is highly recommended to include these details for each design in your library.  If you need to include more detailed specificaitons for you design, custom data allow you to add your own fields, values.  These might include weight, material, color, tensile strength, resistance, etc.

If you already have manufacturers or suppliers set up for your parts, they can be included in the specs as well.  New suppliers may be easily created, and are then added to your supplier database.  For each supplier you may include any number of schedules for the given design that include a cost, minimum order quantity (MOQ), and lead time.  You may specify a default schedule for BOM costing or allow it to be optimized based on the aggregate quantities of a given part across your entire BOM. 
