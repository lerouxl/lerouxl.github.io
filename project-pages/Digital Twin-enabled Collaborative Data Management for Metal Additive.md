# Digital Twin-enabled Collaborative Data Management for Metal Additive

## Manufacturing Systems

```
Chao Liua*, Léopold Le Rouxa, Carolin Körnerb, Olivier Tabastec, Franck Lacana, Samuel Bigota
```
```
a School of Engineering, Cardiff University, Cardiff CF24 3AA, UK
b Chair of Materials Science and Engineering for Metals, Friedrich-Alexander-Universität
Erlangen-Nürnberg, Erlangen 91054, Germany
```
c (^) MSC Software part of Hexagon, Les Ulis 91978, France
*Corresponding author: LiuC64@cardiff.ac.uk
Please cite the article as:
Liu, C., Le Roux, L., Körner, C., Tabaste, O., Lacan, F., & Bigot, S. (2020). Digital Twin-enabled
Collaborative Data Management for Metal Additive Manufacturing Systems. Journal of Manufacturing
Systems, https://doi.org/10.1016/j.jmsy.2020.05.

## Abstract

Metal Additive Manufacturing (AM) has been attracting a continuously increasing attention due
to its great advantages compared to traditional subtractive manufacturing in terms of higher design
flexibility, shorter development time, lower tooling cost, and fewer production wastes. However,
the lack of process robustness, stability and repeatability caused by the unsolved complex
relationships between material properties, product design, process parameters, process signatures,
post AM processes and product quality has significantly impeded its broad acceptance in the
industry. To facilitate efficient implementation of advanced data analytics in metal AM, which
would support the development of intelligent process monitoring, control and optimisation, this
paper proposes a novel Digital Twin (DT)-enabled collaborative data management framework for
metal AM systems, where a Cloud DT communicates with distributed Edge DTs in different
product lifecycle stages. A metal AM product data model that contains a comprehensive list of
specific product lifecycle data is developed to support the collaborative data management. The
feasibility and advantages of the proposed framework are validated through the practical
implementation in a distributed metal AM system developed in the project MANUELA. A
representative application scenario of cloud-based and deep learning-enabled metal AM layer
defect analysis is also presented. The proposed DT-enabled collaborative data management has
shown great potential in enhancing fundamental understanding of metal AM processes, developing
simulation and prediction models, reducing development times and costs, and improving product
quality and production efficiency.

Key words: Metal Additive Manufacturing; Digital Twin; data management; data model; machine
learning; product lifecycle management.


### ______________________________________________________________________________

Liu, C., Le Roux, L., Körner, C., Tabaste, O., Lacan, F., & Bigot, S. (2020). Digital Twin-enabled Collaborative Data
Management for Metal Additive Manufacturing Systems. Journal of Manufacturing Systems,

## 1. Introduction

Additive Manufacturing (AM) refers to the technologies used to manufacture objects from 3D
model data, in which materials are accumulated layer by layer via specific techniques such as
extrusion, sintering, melting, photopolymerization, jetting, lamination, and deposition [1,2]. AM
allows the manufacturing of products with complex geometries, heterogeneous materials, and
customisable material properties [3]. Compared to traditional subtractive manufacturing, AM
enables higher design flexibility, shorter development time, lower tooling cost, and fewer
production wastes. The long-term impact of AM is expected in highly customized manufacturing,
where AM can be more cost-effective than traditional manufacturing [4].

In recent years, metal AM has been attracting a continuously increasing attention in both academia
and industry. Currently, there exist various types of metal AM technologies. Based on the
distinctions of AM processes, the international standard ISO/ASTM 52900:2015 [5] identifies
seven categories of AM technologies, including 1) powder bed fusion, 2) directed energy
deposition, 3) material jetting, 4) sheet lamination, 5) material extrusion, 6) binder jetting, and 7)
vat photopolymerization. With regard to metal AM, the first four technologies can be applied to
manufacture pure metal parts; the other three can be used to produce metallic composite parts.
While each technology has its distinct pros and cons, this paper focuses on the most mature and
widely used metal AM technology, i.e. metal Powder Bed Fusion (PBF). PBF uses laser or electron
beam to selectively fuse areas of a layer of powders, and then moves the powder bed downwards,
adding another layer of powders and repeating the process until the part has built up. Commonly
used metal PBF techniques include Direct Metal Laser Sintering (DMLS), Selective Laser Melting
(SLM) and Electron Beam Melting (EBM). Compared to traditional subtractive manufacturing
which has been developed and significantly improved for over two centuries [6], metal AM, which
was first introduced in the 1990s [7], is relatively new. Though metal AM has shown great potential
and advantages, many problems still exist that seriously limit its broad acceptance. The highly
variable product quality (geometry, mechanical properties, physical properties, etc.) and the lack
of process robustness, stability and repeatability have been recognised as the main barriers for the
industrial breakthrough of metal AM systems [8]. Identifying the complex relationships between
material properties, product design, process parameters, process signatures, post AM processes
and product quality remains a major challenge [4].

In order to address the aforementioned issues and challenges in metal AM, a prerequisite is to
collect and analyse the metal AM data from all product lifecycle stages. A typical metal AM
product lifecycle involves several different stages such as product design, process planning,
manufacturing, post processing and quality measurement. Each stage generates huge amounts and
various types of metal AM data that influences the final product quality. Since the development of
standards and certification for metal AM is still in the early stage, there is an urgent need to develop
efficient and collaborative data management systems for metal AM.

Recently, the advancements of Digital Twin (DT) have been extensively studied in the domain of
manufacturing. The implementation of DT technology in manufacturing systems has shown great
potential in enabling advanced manufacturing data management. In this context, this paper
proposes a novel DT-enabled collaborative data management framework for metal AM systems,


### ______________________________________________________________________________

Liu, C., Le Roux, L., Körner, C., Tabaste, O., Lacan, F., & Bigot, S. (2020). Digital Twin-enabled Collaborative Data
Management for Metal Additive Manufacturing Systems. Journal of Manufacturing Systems,

which comprises a Cloud DT and distributed Edge DTs in different product lifecycle stages. The
proposed framework allows metal AM data from all product lifecycle stages to be collaboratively
managed in the cloud, and hence enabling various types of advanced data analytics and product
quality control to be realised. As a critical component for both data management system and DT,
a metal AM product data model is developed by identifying and categorising the critical metal AM
product lifecycle data that has influence on the final product quality. To demonstrate the feasibility
and advantages of the proposed approach, an early implementation of the DT-enabled
collaborative data management in a real metal AM system is introduced. A representative
application scenario enabled by the proposed data management system, i.e. cloud-based and deep
learning-enabled metal AM layer defect analysis, is also developed and demonstrated. Results
have shown that the proposed DT-enabled collaborative data management plays an important role
in enhancing fundamental understanding of metal AM processes, developing simulation and
prediction models, reducing development times and costs, and improving product quality and
production efficiency.

The remaining of this paper is organised as follows. Section 2 reviews the state-of-the-art research
on data management for metal AM and DT-supported data management and identifies the research
gaps. Section 3 proposes a conceptual framework of the DT-enabled collaborative data
management for metal AM systems. Section 4 presents the developed metal AM product data
model. Section 5 demonstrates the early implementation of the DT-enabled collaborative data
management in a real metal AM system as well as a representative application scenario. Section 6
concludes the paper and discusses the future work.

## 2. Literature Review

Current research on metal AM focuses mainly on the material science, processing science and
process monitoring technologies [9–11]. Data management in the domain of metal AM has not
been extensively studied due to the relatively short development history of metal AM. On the other
hand, Digital Twin technology has just gained attention in manufacturing field in the last several
years. Since this paper proposes a novel DT-enabled data management concept for metal AM, this
section reviews the related work from two aspects: data management for metal AM and DT-
supported data management in manufacturing. The research gaps are then identified and discussed.

2.1 Data management for metal AM

In the context of Industry 4.0 where information and communication technology (ICT) plays a
vital role, data management becomes a critical issue for any type of manufacturing system. In
metal AM, it is estimated that PBF systems involve more than 130 variables [12], while over 50
different process parameters in metal AM processes have influences on the final product quality
[4,13]. The complex relationships between product design, process parameters, process signatures,
post AM processes, and product quality present an urgent need for efficient data management in
metal AM systems.

Since metal AM data comprises data from various sources in different product lifecycle stages,
collaborative data management systems are required for metal AM. Müller et al. [14] identified


### ______________________________________________________________________________

Liu, C., Le Roux, L., Körner, C., Tabaste, O., Lacan, F., & Bigot, S. (2020). Digital Twin-enabled Collaborative Data
Management for Metal Additive Manufacturing Systems. Journal of Manufacturing Systems,

three main requirements for a metal AM product lifecycle data management system: 1) easy
accessibility of the entire product knowledge, 2) traceability of individual product information,
and 3) automation of information flow. Aiming to capture, store and manage data through the
entire metal AM lifecycle and value chain, the National Institute of Standards and Technology
(NIST) [15,16] developed a collaborative AM data management system using the NoSQL (Not
Only Structured Query Language) database technology. The cloud-based database is structured by
an AM data schema which enables meaningful data curation and data retrieval. An ontology-based
web graphical user interface is developed for the data management system, allowing users to
perform data curating, exploring, and downloading. The data management system also provides a
Representational State Transfer (REST) interface for the integration with other applications.
Uhlmann et al. [17] developed a data management system that can store data from different sources,
such as the energy system (regarding power consumption), internal machine tool sensors (platform
temperature, process chamber pressure, etc.), external sensors (microphone) and machine
controller (process data). Their experimental results have proven that the developed data
management system enables the analysis of the links between SLM machine status and AM
process conditions, though it works only in the local environment and there is no data model to
organise the data from different sources. Müller et al. [14] developed a demonstrator tool as a
metal AM product lifecycle data management system, where the design, simulation,
manufacturing, post processing and measurement data of each individual product are stored.
However, their demonstrator provides only basic database and data visualisation functions without
data analytics functions. Based on the material data repository named MAPTIS, NASA [18]
developed a metal AM database that contains various types of metal AM data including build
parameters, material conditioning, test environment, tensile results, fracture toughness and fatigue.
They claimed that the developed database serves as the foundation of the metal AM data
management, which strongly complements the development of standards and protocols for metal
AM. Mies et al. [19] provided an overview of the current status of AM informatics, in which the
key technical requirements, the available AM informatics tools and the existing applicable
solutions have been summarised. They concluded that while metal AM standards and certification
are in the early development stage, advanced data management for metal AM plays an important
role in reducing development times and costs and improving product quality and production
efficiency.

Data model is considered as the backbone of a data management system, especially in the case of
metal AM where various types of data from different lifecycle stages are involved. Utilising a
Product Lifecycle Management (PLM) data modelling method named PPR (product, process and
resource), Lu et al. [20] proposed a conceptual metal AM integrated data model where the AM
data are modelled as entities under three categories, i.e. product, process and resource, and the
fundamental relationships among the entities are defined. Based on the conceptual data model, Lu
et al. [16] further developed an AM database schema using Unified Modelling Language (UML),
which was used as the foundation of the metal AM data management system introduced previously.
To address the data interoperability issue in metal AM, Feng et al. [21,22] developed an activity
model for structuring process-related PBF data, by decomposing the entire PBF process (including
design, process planning, fabrication, inspection and quality control) into specific activities and


### ______________________________________________________________________________

Liu, C., Le Roux, L., Körner, C., Tabaste, O., Lacan, F., & Bigot, S. (2020). Digital Twin-enabled Collaborative Data
Management for Metal Additive Manufacturing Systems. Journal of Manufacturing Systems,

identifying the inputs, outputs, mechanisms and controls of each activity. Later, Kim et al. [23]
developed AM data models in the form of data packages (in XML format) upon the activity model.
Three case studies have been conducted to demonstrate how the data models improved data
manageability, traceability and accountability in the metal AM processes. Based on the object-
oriented modelling method, Bonnard et al. [24] proposed a new AM digital chain model named
Hierarchical Object-Oriented Model (HOOM), which comprises seven levels corresponding to
seven stages of the AM process from product design to post-production and validation. The model
was implemented in a STEP-NC platform and tested through the manufacture of two parts. Their
experimental results proved that the proposed AM model improves transparency, interoperability
and scalability of the AM project data. Qin et al. [2] provided a comprehensive review of the
existing representations of AM data. The data modelling strategies are categorised into six methods:
STEP standards, coding system method, digital thread method, integrated data schema method,
unified storage file format and relational database method. Comparisons among the different
strategies were conducted in terms of the coverage, simplicity, interoperability, extensibility,
inspectibility, accessibility and application.

2.2 Digital Twin-supported data management in manufacturing

Recently, the Digital Twin concept has attracted great research interests in the domain of
manufacturing. DT is considered as a key enabling technology for the envisioned Cyber-Physical
Production Systems, Smart Factory and smart manufacturing systems in the context of Industry
4.0 [25–29]. The potential of utilising DT to improve product design [30], manufacturing processes
[31], process monitoring [32,33], Prognostics and Health Management (PHM) [34,35], production
management [36] and PLM [37,38] has been extensively discussed and studied.

It has been identified that currently, some problems in manufacturing systems have impeded the
development of efficient data management systems, including: 1) information islands between
different phases of product lifecycle caused by various data types and tasks of different product
lifecycle phases; 2) data waste and sharing problems due to duplicate data in different product
lifecycle phases; and 3) the absence of interaction and iteration between advanced data analytics
and various activities in the entire product lifecycle [26].

To overcome these problems, recent advancements in DT technology have shown great potential
and advantages in the form of DT-supported product/manufacturing data management. In a
comprehensive review on the development methods for DT, the enabling technologies and tools
for DT data management have been investigated in six categories, including data collection, data
transmission, data storage, data processing, data fusion, and data visualisation [39].

Applications of DT-supported data management for manufacturing systems have been widely
reported. Lu and Xu [40] proposed a DT-driven approach to enabling cloud-based manufacturing
equipment and big data analytics. A DT for a roll forming machine, which mirrors its near real-
time status in the shop floor, was developed in the cloud to support various types of cloud-based
data analytics such as machine status monitoring and production reporting. Based on data
modelling methods provided by the open communication standards MTConnect and OPC UA, Liu
et al. [41] developed DTs for CNC machine tools. The DTs enable an interoperable data


### ______________________________________________________________________________

Liu, C., Le Roux, L., Körner, C., Tabaste, O., Lacan, F., & Bigot, S. (2020). Digital Twin-enabled Collaborative Data
Management for Metal Additive Manufacturing Systems. Journal of Manufacturing Systems,

management environment where data from different types of CNC controllers and sensors can be
efficiently managed, visualised and analysed. Cheng et al. [42] proposed a digital twin enhanced
Industrial Internet (DT-II) reference framework towards smart manufacturing. Taking the
production of a steam turbine as an example, the authors claim that DT enables the interaction and
convergence between physical and virtual product, and hence shortens production preparation time
and production period, reduces production cost, and improves production efficiency and
processing quality. Wang et al. [43] developed a shop-floor DT that reflects real-time production
status in the shop floor. Advanced data analytics functions were integrated in the DT to analyse
the key production performance indicators and predict the remaining processing time of work-in-
processes.

In the context of Smart Manufacturing and Industry 4.0, data management is closely correlated
with PLM and PHM [44,45]. Applications of DT-supported PLM and PHM have also been
extensively developed. Kaewunruen et al. [46] developed a DT-enabled lifecycle management
system for railway turnout systems using the Building Information Modelling (BIM) technology.
Data from different lifecycle stages of the railway turnout system was integrated into a 6D model,
such that various lifecycle management functions (visualisation of product design/material/
component/project/schedule information, cost prediction and carbon foot-print estimation) were
realised in a big data sharing platform. Wang and Wang [31] developed a DT-based system for the
waste electrical and electronic equipment (WEEE) recovery to support the manufacturing/
remanufacturing operations throughout the product’s lifecycle, from design to recovery.
International standard-complaint data models were developed to support the DT-based PLM with
high data interoperability. Aiming to improve the process planning for optimized machining
solutions, Botkina et al. [38] developed a digital twin of a cutting tool that could represent the
properties of the cutting tool and perform precise process simulation, control and analysis. The
data format and structure of the digital twin are based on the international standard ISO 13399
(Cutting tool data representation and exchange). Zheng and Sivabalan [47] proposed a novel tri-
model-based approach for product-level DT development. A DT of a 3D printer that works
concurrently to simulate real-world physical behavior and characteristics of the digital model was
developed.

2.3 Research gaps

The literature review has revealed several research gaps. First, few studies have been conducted
on data management for metal AM systems. There is a lack of collaborative data management
systems for metal AM. Second, the literature review shows that data model is critical for both data
management system and DT. However, there is a lack of a metal AM product data model which
contains a comprehensive list of specific data that has influence on the product quality. Third, the
data communication between the field-level data sources and the data management system has
been rarely studied in the domain of metal AM. Furthermore, though there has been a considerable
amount of literature on DT in manufacturing field, in the domain metal AM, very few studies (e.g.
[48,49]) have applied the DT concept, and they all focus on the metal AM processes instead of
data management.


### ______________________________________________________________________________

Liu, C., Le Roux, L., Körner, C., Tabaste, O., Lacan, F., & Bigot, S. (2020). Digital Twin-enabled Collaborative Data
Management for Metal Additive Manufacturing Systems. Journal of Manufacturing Systems,

This paper attempts to bridge these research gaps by proposing a novel DT-enabled collaborative
data management framework for Metal AM. A metal AM product data model is developed by
identifying and categorising the critical metal AM data in different product lifecycle stages. Early
implementation of the proposed framework in a real metal AM system developed in the project
MANUELA is conducted. Cloud-based and deep learning-enabled metal AM layer defect analysis
is also demonstrated as a representative application scenario.

## 3. Conceptual framework of the Digital Twin-enabled collaborative data

## management for metal AM systems

Broadly, DT refers to an integrated multi-physics, multi-scale, probabilistic simulation of a
complex product and uses the best available physical models, sensor updates, etc., to mirror the
life of its corresponding twin [50]. Based on different types of physical objects and their functional
requirements, the DT of a specific object may be defined in different ways. For example,
Mukherjee and DebRoy [48] defined the DT of 3D printing hardware as an integration of a
mechanistic model, a sensing and control model, a statistical model, big data and machine learning
that can potentially improve part quality and shorten time between the design and production;
while Knapp et al. [49] claimed that a DT of the AM process should provide accurate predictions
of the spatial and temporal variations of metallurgical parameters that affect the structure and
properties of components.

In this work, focusing specifically on data management for metal AM systems, we propose a novel
DT-enabled collaborative data management system that comprises a Cloud DT and distributed
Edge DTs in different product lifecycle stages. This section introduces the concepts of Cloud DT
and Edge DT and proposes a conceptual framework of DT-enabled data management for Metal
AM systems.

3.1 Cloud Digital Twin and Edge Digital Twin

The collaborative data management system needs to manage data generated in all product lifecycle
stages in metal AM. Different stages contain different types of devices and software tools and
perform different tasks. Each stage may generate a huge amount of raw data (e.g. sensor signals)
that needs to be processed locally. Hence, it is inefficient or even not possible to transfer all the
field-level data to the cloud to build a DT of the metal AM product. Inspired by the implementation
of cloud computing [51], edge computing [52] and fog computing [53] in manufacturing systems,
we propose the concepts of Cloud Digital Twin and Edge Digital Twin that communicate with
each other to enable a collaborative data management system.

In general, the Edge DTs focus on specific computing tasks of different product lifecycle stages
locally and transfer the processed data to the Cloud DT; while the Cloud DT stores all the product
lifecycle data in the cloud and provides data access as well as advanced data analytics to different
users and applications. The definitions and main functions of Edge DT and Cloud DT are explained
as follows:


### ______________________________________________________________________________

Liu, C., Le Roux, L., Körner, C., Tabaste, O., Lacan, F., & Bigot, S. (2020). Digital Twin-enabled Collaborative Data
Management for Metal Additive Manufacturing Systems. Journal of Manufacturing Systems,

- Edge DT: An Edge DT is a DT of a specific product lifecycle stage which resides in a
    distributed shop floor and focuses only on the functions of that lifecycle stage. The Edge
    DTs have their own computing power (or local intelligence) to support various types of
    local real-time data processing tasks such as machine control, process monitoring, in-
    process optimisation, simulation and prediction. The Edge DTs store the raw data of a
    product lifecycle stage in local databases and transfer the processed data which has
    influence on the product quality to the Cloud DT through the Internet, thus enabling
    efficient data communication by reducing the data traffic between shop floors and the cloud.
- Cloud DT: The Cloud DT collects all the product lifecycle data from the Edge DTs and
    records it in the cloud database which is structured by a metal AM product data model. It
    resides in the cloud and communicates with the Edge DTs as well as different users to
    allow collaborative data management for metal AM systems. Advanced data analytics are
    integrated in the Cloud DT to support analysing the relationships among the various
    historical product lifecycle data. Application interfaces are also embedded in the Cloud DT
    such that other applications can take advantage of the product lifecycle data.

3.2 Conceptual framework

The main objective of the Cloud DT and Edge DT is to support collaborative data management for
metal AM. To provide guidance for practical development and implementation, we propose a
conceptual framework of DT-enabled collaborative data management for metal AM systems, as
shown in Figure 1. The conceptual framework comprises six modules, i.e. a cloud-based
collaborative data management platform and five product lifecycle stages, including product
design, process planning, manufacturing, post processing and quality measurement. Each product
lifecycle stage has an Edge DT that performs specific computing tasks to support its users and
communicates with the Cloud DT to establish the collaborative data management for metal AM
systems.


### ______________________________________________________________________________

Liu, C., Le Roux, L., Körner, C., Tabaste, O., Lacan, F., & Bigot, S. (2020). Digital Twin-enabled Collaborative Data
Management for Metal Additive Manufacturing Systems. Journal of Manufacturing Systems,

```
Figure 1. Conceptual framework of DT-enabled collaborative data management for metal AM
```
In product design stage, the Edge DT supports the product designers to design the metal AM
product and perform CAE simulations with CAD and CAE software. The design files and
simulation results are transferred to the Cloud DT to be recorded and shared. The Edge DT can
also retrieve other data such as product quality data from the Cloud DT to aid the product designers
in design optimisation.

In process planning stage, the Edge DT supports the process planners to generate support structures
and conduct process planning (model slicing, selection of position, orientation, scan strategy,
process parameters, etc.), process simulation and process optimisation. The process plans, process
parameters and simulation results are transferred to the Cloud DT.

In manufacturing stage, the Edge DT focuses on the AM building processes of a specific metal
AM product and performs various types of data processing tasks such as process monitoring and
control, in-process optimisation, machine learning model training and real-time decision-making
support. The monitored process signatures (machine logs, sensor signals, images, etc.) are
processed locally and the results are transferred to the Cloud DT. The raw data which is usually
large in size is stored in the local database for further analysis.


### ______________________________________________________________________________

Liu, C., Le Roux, L., Körner, C., Tabaste, O., Lacan, F., & Bigot, S. (2020). Digital Twin-enabled Collaborative Data
Management for Metal Additive Manufacturing Systems. Journal of Manufacturing Systems,

In post processing stage, the Edge DT performs similar functions as in the manufacturing stage.
Various types of post AM processes are monitored, controlled and optimised with local computing
power. Process signatures and results are processes and transferred to the Cloud DT, while the raw
data is stored in local database.

In quality measurement stage, the Edge DT retrieves the measurement tasks and product design
files from the Cloud DT and supports the machine operators to measure the product qualities,
analyse the measured results and generate measurement reports. The processed product quality
data is then transferred to the Cloud DT.

In the collaborative data management platform, the Cloud DT collects all the product lifecycle
data from the Edge DTs and stores it in the cloud database structured by a metal AM product data
model. Different users (data analysts, project managers, customers, etc.) can access the Cloud DT
through the Internet to collectively manage the metal AM product data. Various types of functions
such as project management, production planning, progress monitoring, advanced data analytics
can be developed to improve the product quality and the production efficiency.

It is worth mentioning that this framework focuses on the metal AM product quality and its related
production processes, though a full product lifecycle may also include product usage stage and
end-of-life treatment stage [54]. Furthermore, the proposed conceptual framework can also be used
as a generic reference framework for developing collaborative data management for other types of
manufacturing systems.

## 4. Metal AM product data model

Data model is a critical element for both DTs and data management systems. The proposed DT-
enabled collaborative data management system requires a data model as the underlying database
structure in the Cloud DT which can organise the data acquired from all the Edge DTs of different
product lifecycle stages in a clear and logical manner, such that advanced data analytics can be
efficiently applied to analyse the complex relationships among the product lifecycle data.

In this work, we propose a metal AM product data model by identifying and categorising the
critical metal AM product lifecycle data that has influence on the final product quality, based on a
review of existing literature as well as experts’ knowledge. To ensure the data model can be easily
implemented in the data management system, a product-centric and object-oriented modelling
strategy is utilised.

The structure of the proposed data model is shown in Figure 2. The data model is developed as a
tree structure. The highest-level root element represents a metal AM product which contains five
categories of data (design parameters, process parameters, process signatures, post processing
parameters and product quality), divided based on the five product lifecycle stages mentioned in
the conceptual framework (Figure 1 ). Each category contains several sub-categories representing
different aspects of that category. Finally, each sub-category contains a comprehensive set of
specific critical metal AM data. The details of the critical data in each category are listed and
explained in the following subsections.


### ______________________________________________________________________________

Liu, C., Le Roux, L., Körner, C., Tabaste, O., Lacan, F., & Bigot, S. (2020). Digital Twin-enabled Collaborative Data
Management for Metal Additive Manufacturing Systems. Journal of Manufacturing Systems,

```
Figure 2. Structure of the metal AM product data model
```
4.1 Design parameters

Design parameters refer to the product design parameters that are defined in the product design
stage. Design parameters can only be modified at the design stage before manufacturing processes.
The critical data of the design parameters include two sub-categories: 1) design features, and 2)
build preparation.

Design parameters have a significant influence on the product quality, especially in metal AM
processes where inappropriate designs can directly lead to build failures and damage to machine
components. The data items of design parameters, along with their description and data format,
are listed in Table 1.

```
Table 1. Data items of design parameters in the data model
Sub-category Data item Description Data format
Design
Features
```
```
CAD file CAD file of the designed product CAD file
Part Material Material of the product string
Part Volume (cm^3 ) Volume of the designed part number
Minimum Feature Size (mm) Minimum feature size of the product in x, y, z axis number
Surface Roughness Required surface roughness number
Tolerances Required dimensional and geometric tolerances CAD file
Build
Preparation
```
```
Supports Designed support structure CAD file
Build Position Designed build position of the part on the powder bed number
Build Orientation Designed build orientation CAD file
```

### ______________________________________________________________________________

Liu, C., Le Roux, L., Körner, C., Tabaste, O., Lacan, F., & Bigot, S. (2020). Digital Twin-enabled Collaborative Data
Management for Metal Additive Manufacturing Systems. Journal of Manufacturing Systems,

4.2 Process parameters

Process parameters refer to the ‘input’ parameters for the manufacturing processes in metal AM.
They determine the rate of laser/electron beam energy delivered to the powder bed surface and
how that energy interacts with the powders. Based on different components involved in the
manufacturing process, the critical data of the process parameters is categorised into four sub-
categories: 1) laser/beam and scanning parameters, 2) powder material properties, 3) powder bed
properties and recoating parameters, and 4) build environment parameters.

The controllability of process parameters is critical for metal AM process monitoring, control and
optimization. Process parameters can be characterised as either predefined or controllable.
Predefined parameters are set before each build and cannot be modified during printing; while
controllable parameters are possible to be continuously tuned during printing. It is noted that
different machine manufacturers may provide users with different levels of access rights to control
the process parameters during the build. Based on some previous summaries [55,56], Table 2 lists
the data items of process parameters in the data model, including their description, controllability
and data format.

```
Table 2. Data items of process parameters in the data model
Sub-
category
```
```
Data item Description Data
Format
```
```
Control-
ability
Laser/Beam
and
Scanning
Parameters
```
```
Laser/Beam Type The type of the laser/beam string Predefined
Laser/Beam Mode Continuous wave or pulsed string Predefined
Spot Diameter (μm) Diameter of the laser/beam spot number Predefined
Wavelength (μm) Laser/beam wavelength number Predefined
Beam Quality Factor The degree of variation of a beam from an
ideal Gaussian beam
```
```
number Predefined
```
```
Pulse Frequency (Hz) Pulses per unit time (in pulsed mode) number Predefined
Pulse Width (μm) Length of a laser pulse (in pulsed mode) number Predefined
Peak Power (W) Maximum power in a laser pulse (in pulsed
mode)
```
```
number Predefined
```
```
Laser/Beam Power (W) Power of the laser/beam number Controllable
Scan Speed (m/s) Velocity at which the laser/beam moves
across the build surface
```
```
number Controllable
```
```
Hatch Spacing (μm) Distance between the centres of two adjacent
scan paths
```
```
number Controllable
```
```
Scan Pattern Pattern in which the laser/beam is scanned
across the build surface
```
```
CAM
file
```
```
Controllable
```
```
Powder
Material
Properties
```
```
Powder Material Material of the powder string Predefined
Material Thermal
Conductivity (Wm-^1 K-^1 )
```
```
Measure of material’s ability to conduct heat number Predefined
```
```
Material Specific Heat
Capacity (JK-^1 kg-^1 )
```
```
Measure of energy required to raise the
temperature of the material
```
```
number Predefined
```
```
Material Melting
Temperature (°C)
```
```
Temperature at which the material melts number Predefined
```
```
Chemical Composition Measured powder chemical composition file (txt) Predefined
Impurity Element Characterization of material impurity string Predefined
Max Allowed Impurity
Concentration (wt%)
```
```
The controlled impurity concentration number Predefined
```

### ______________________________________________________________________________

Liu, C., Le Roux, L., Körner, C., Tabaste, O., Lacan, F., & Bigot, S. (2020). Digital Twin-enabled Collaborative Data
Management for Metal Additive Manufacturing Systems. Journal of Manufacturing Systems,

```
Phase Composition X-ray diffractogram image Predefined
Particle Morphology SEM images of powder image Predefined
Particle Sphericity Measure of how closely the shape of an
object resembles that of a perfect sphere
```
```
number Predefined
```
```
Particle Aspect Ratio Measure of roundness of the particle number Predefined
Particle Surface Roughness Measure of surface roughness of the particle number Predefined
Particle Presence of Defect The presence of defects in particles (Y/N) string Predefined
Particle Inhomogeneity The homogeneity of particles (Y/N) string Predefined
Particle Size Distribution Particle size distribution plot image Predefined
Powder Apparent Density
(g/cm^3 )
```
```
Apparent density of the powder number Predefined
```
```
Powder Tap Density
(g/cm^3 )
```
```
Tapped density of the powder number Predefined
```
```
Powder Cohesive Force
Index
```
```
Plot of flowability as a function of rotating
drum speed
```
```
image Predefined
```
```
Powder Hausner Ratio Hausner ratio from packing dynamic
measurements
```
```
number Predefined
```
```
Powder Bed
Properties
and
Recoating
Parameters
```
```
Density (g/cm^3 ) Measure of packing density of powder
particles
```
```
number Predefined
```
```
Thermal Conductivity
(Wm-^1 K-^1 )
```
```
Measure of powder bed’s ability to conduct
heat
```
```
number Predefined
```
```
Heat Capacity (J/K) Measure of energy required to raise the
temperature of the powder bed
```
```
number Predefined
```
```
Absorptivity (Lmol-^1 cm-^1 ) Measure of absorbed laser energy number Predefined
Emissivity Ratio of energy radiated to that of black body number Predefined
Recoater Type Type and mechanism of the recoating system string Predefined
Recoater Speed (mm/s) Velocity at which the recoater moves during
recoating
```
```
number Controllable
```
```
Dosing per Layer (%) Dosing of powders during recoating number Controllable
Layer Thickness (μm) Height of a single powder layer number Controllable
Powder Bed Preheating
Temperature (°C)
```
```
Preheating (bulk) temperature of the powder
bed
```
```
number Controllable
```
```
Build
Environment
parameters
```
```
Type of Shield Gas Argon, Nitrogen, Helium, etc. string Predefined
Shield Gas Molecular
Weight (g/mol)
```
```
Molecular weight of shield gas number Predefined
```
```
Shield Gas Viscosity (Pas) Viscosity of shield gas number Predefined
Shield Gas Thermal
Conductivity (Wm-^1 K-^1 )
```
```
Thermal conductivity of shield gas number Predefined
```
```
Shield Gas Heat Capacity
(J/K)
```
```
Heat capacity of shield gas number Predefined
```
```
Convective Heat Transfer
Coefficient
```
```
Convective cooling of just melted part by gas
flowing over the surface
```
```
number Predefined
```
```
Surface Free Energy
(mJ/m^2 )
```
```
Surface free energy between melted powders
and shield gas
```
```
number Predefined
```
```
Build Plate Material Material of the build plate string Predefined
Build Plate Thickness Thickness of the build plate number Predefined
Oxygen Level (%) Percentage of Oxygen in the build chamber number Controllable
Pressure (kPa) Pressure in the build chamber number Controllable
Gas Flow Velocity (m^3 /s) Gas flow velocity in the build chamber number Controllable
Ambient Temperature (°C) Ambient temperature in the build chamber number Controllable
```

### ______________________________________________________________________________

Liu, C., Le Roux, L., Körner, C., Tabaste, O., Lacan, F., & Bigot, S. (2020). Digital Twin-enabled Collaborative Data
Management for Metal Additive Manufacturing Systems. Journal of Manufacturing Systems,

4.3 Process signatures

Process signatures refer to the dynamic characteristics of the powder heating, melting and
solidification processes occurred during the build. Unlike process parameters that can be directly
set or controlled, process signatures reflect the dynamic processing results that can only be
controlled indirectly by modifying the process parameters. Based on different scopes of the
signatures, the critical data of the process signatures is categorised into five sub-categories: 1) melt
pool, 2) by-products, 3) single track, 4) single layer, and 5) powder bed.

Measurement of process signatures is critical for process and product quality improvement. The
sample rate required for measuring a process signature directly determines the feasibility, cost and
efficiency of the metal AM process monitoring and optimisation. Based on a literature review on
process monitoring of metal AM, the required sample rates of the process signatures are
summarised. Table 3 lists the data items of process signatures in the data model, including their
description, required sample rate and data format.

```
Table 3. Data items of process signatures in the data model
Sub-
category
```
```
Data item Description Sample rate Data
Format
Melt Pool Melt Pool
Temperature
```
```
Temperature signatures of melt pool (maximum
temperature, gradient temperature, etc.)
```
```
> 10 kHz signal file/
image
Melt Pool Geometry Geometry signatures of melt pool (width, length,
depth, shape, area, intensity, etc.)
```
```
> 10 kHz signal file/
image
By-products Plume Signature Signatures of plume (plume consists of metal vapor
and plasma)
```
```
50 Hz to 5
kHz
```
```
image
```
```
Spatter Signature Signatures of spatter (spatter comes from vapor jets
and bubbles, generated by the ablation pressure to
the vapor on the melt pool surface)
```
```
50 Hz to 5
kHz
```
```
image
```
```
Acoustic Emission Acoustic emission in the build chamber > 100 kHz signal file
Single
Track
```
```
Track Width Width of a single track ex-situ image
Track Continuity Continuity of a single track ex-situ image
Track Depth Depth of a single track ex-situ image
Track Overlap Overlap between two adjacent tracks ex-situ image
Track Microcracks Microcracks in a single track > 50 kHz image
Track Consolidation
Characteristics
```
```
Consolidation characteristics of a single track, such
as continuous, discontinuous, weak, ball-shaped,
very little consolidations.
```
```
> 10 kHz image
```
```
Single
Layer
```
```
Melt Pool Intensity
Variation
```
```
Melt pool intensity variation across a single layer > 10 kHz image
```
```
Layer Surface
Topography
```
```
Topography of a single layer (layer geometry,
height, waviness, roughness etc.)
```
```
per layer to 70
kHz
```
```
signal file/
image
Layer/Powder Bed
Surface Temperature
```
```
Temperatures of layer surface per layer to >
10 kHz
```
```
signal file/
image
Layer Defects Layerwise defects (porosity, uneven, under-melt,
over-melt, etc.)
```
```
per layer image
```
```
Powder Bed Powder Bed Surface
Topography
```
```
Surface topography of the powder bed per layer image
```

### ______________________________________________________________________________

Liu, C., Le Roux, L., Körner, C., Tabaste, O., Lacan, F., & Bigot, S. (2020). Digital Twin-enabled Collaborative Data
Management for Metal Additive Manufacturing Systems. Journal of Manufacturing Systems,

```
Powder Bed
Anomalies
```
```
Various types of powder bed anomalies (recoater
hopping, recoater streaking, debris, super-elevation,
part failure, incomplete spreading, etc.)
```
```
per layer image
```
4.4 Post processing parameters

Post processing parameters refer to the designed post processes and their related process
parameters. Post processing is an optional process depending on specific requirements. There exist
various types of post processing technologies that can be generally divided into four sub-categories:
1) powder removal, 2) heat treatment, 3) post machining, and 4) non-standard processes. Table 4
lists the data items of post processing parameters in the data model, including their description and
data format.

```
Table 4. Data items of post processing parameters in the data model
Sub-category Data item Description Data Format
Powder Removal Vibration Setting Machine vibration settings string
Rotational Setting Machine rotational settings file (txt)
Time (min) Time of the removal process number
Heat Treatment Heat Treatment Sequence Sequence of heat treatment steps for a single component file (txt)
Technique The heat treatment technique used (e.g. annealing,
quenching, case hardening)
```
```
string
```
```
Atmosphere Media (nitrogen, argon etc.) and pressure string
Heating Rate (K/min) Heating rate number
Final Temperature (°C) Final temperature number
Holding Time (h) Holding time at final temperature in hours number
Cooling Rate (K/min) Cooling rate number
Cooling Medium Air, Nitrogen, Argon, Water, etc. string
Post Machining Machining Operation Milling, drilling, fly cutting, grinding, turning, shaping,
slotting, planning etc.
```
```
string
```
```
Process Plan Process plan of the machining operation, including the
machining strategy, tool path plan, G code, and all
process parameters such as cutting speed (m/min), feed
rate (mm/min), depth of cut (mm), etc.
```
```
CAM file
```
```
Tool Geometry Specification of cutting tool geometry. CAD file
Tool Material Specification of cutting tool material. string
Non-standard
Processes
```
```
Process Name For example, painting, etching, plasma treatment etc. string
Process Specification A description of the non-standard processes and process
parameters used.
```
```
file (txt)
```
4.5 Product quality

Product quality refers to the final quality of the metal AM product. It is the joint results of all the
other critical data introduced previously. Product quality can be categorised into four sub-
categories: 1) geometry and dimension, 2) surface quality, 3) physical properties, and 4)
mechanical properties. Accurate and efficient measurement of the product quality is critical for
product quality control, design optimisation and process optimization. Commonly used
measurement devices/methods for each data item are summarised from literature. Table 5 lists the


### ______________________________________________________________________________

Liu, C., Le Roux, L., Körner, C., Tabaste, O., Lacan, F., & Bigot, S. (2020). Digital Twin-enabled Collaborative Data
Management for Metal Additive Manufacturing Systems. Journal of Manufacturing Systems,

data items of product quality in the data model, including their common measurement
devices/methods and data format.

```
Table 5. Data items of product quality in the data model
Sub-category Data item Common measurement devices/methods Data Format
Geometry and
Dimension
```
```
Dimensional Accuracy CT dimensional metrology; coordinate
measuring machine (CMM); 3D laser scanner
```
```
measurement reports
(PDF, CSV, XLS)
Geometric Accuracy CT dimensional metrology; CMM; 3D laser
scanner
```
```
measurement reports
(PDF, CSV, XLS)
Surface
Quality
```
```
Surface Roughness (μm) Contact/optical surface profilometers number; profile graphs
Surface Waviness (μm) Contact/optical surface profilometers number; profile graphs
Surface Deformation (μm) Contact/optical surface profilometers number; profile graphs
Surface Chemical
composition
```
```
X-ray photoelectron spectroscopy; scanning
electron microscopy
```
```
report (image, table)
```
```
Physical
Properties
```
```
Part Density (g/cm^3 ) Archimedes drainage method; Gas pycnometry;
Microscopy of cross-sections; X-ray scanning of
cross-sections
```
```
number
```
```
Part Porosity Archimedes method; gas pycnometry;
microscopic analysis of cross-sections; X-ray CT
```
```
CT scan images; 3D
model (STL)
Residual Stress (MPa) Diffraction based methods; Mechanical strain
relaxation-based methods
```
```
number/report
```
```
Cracks and Delamination Camera; Visual observation image
Part Microstructures SEM, transmission electron microscopy (TEM) image
Mechanical
Properties
```
```
Yield Strength (N/m^2 ) Tensile tests based on standards number
Tensile Strength (N/m^2 ) Tensile tests based on standards number
Elongation (%) Tensile tests based on standards number
Fatigue Fatigue tests based on standards report
Hardness (kgf/mm^2 ) Rockwell/Brinell/Vickers/Knoop hardness
testing; Instrumented Indentation Testing
```
```
number
```
```
Toughness (J/m^3 ) Fracture Toughness Testing number
```
4.6 Summary

The features and advantages of the proposed metal AM product data model are summarised as
follows:

- The data model contains a comprehensive set of specific metal AM product data and
    divides them into five categories corresponding to five product lifecycle stages, thus
    allowing collaborative data management and advanced data analytics to be realised
    efficiently.
- The data model is designed to be product-centric and object-oriented. Each specific metal
    AM product can be generated as a new instance based on the data model, which contains
    only the product-specific data while omitting the data items that are not of interest or not
    available.
- The data model allows data of different formats to be stored, including number, string,
    CAD file, CAM file, image, signal file, reports, and so on. Database developed based on


### ______________________________________________________________________________

Liu, C., Le Roux, L., Körner, C., Tabaste, O., Lacan, F., & Bigot, S. (2020). Digital Twin-enabled Collaborative Data
Management for Metal Additive Manufacturing Systems. Journal of Manufacturing Systems,

```
this data model needs to be able to store data in different formats. For large data sets such
as stacks of images, a link to another database could be stored under the data item.
```
- The data model can be easily extended by adding additional data items or sub-categories
    into their related categories.
- Implementation of the data model in databases or data management systems is flexible due
    to its simple hierarchical structure.

## 5. Early implementation of DT-enabled collaborative data management in

## MANUELA metal AM system

To demonstrate the feasibility and advantages of the proposed approach, this section introduces an
early implementation of DT-enabled collaborative data management in a metal AM system
established under the European Union’s H2020 project MANUELA, which involves 20 partner
organisations from both research institutions and industrial companies. The goal of MANUELA
is the development of a metal AM pilot line service covering the full AM development cycle
including simulation, robust AM manufacturing and on-line process control, characterization, real-
time feedback, post-treatment, AM qualification protocols and associated business model.
MANUELA contains all the five product lifecycle stages described in the conceptual framework.
However, the shop floors and hardware equipment are geographically distributed in several
countries in Europe. Thus, to realise collaborative data management among all partners throughout
the product lifecycle, the DT-enabled collaborative data management is implemented in
MANUELA metal AM system in an early stage.

First, the system architecture of the DT-enabled collaborative data management in MANUELA is
introduced. Detailed data communications in each product lifecycle stage are explained. Examples
of early implementations are also demonstrated. Second, a representative application scenario of
the collaborative data management system, i.e. cloud-based and deep learning-enabled layer defect
analysis, is presented.

5.1 System architecture and early implementations

The conceptual framework proposed in Section 3. 2 describes the general functions and high-level
data communication structures. To implement the DT-enabled collaborative data management in
a real metal AM system, specific data communication and storage strategies in the field level must
be developed correspondingly to establish the connections among the field-level data, the Edge
DTs, the Cloud DT as well as different users. Based on the shop floors and hardware equipment
involved in MANUELA, the overall system architecture of the DT-enabled collaborative data
management in MANUELA metal AM system is developed as shown in Figure 3.


### ______________________________________________________________________________

Liu, C., Le Roux, L., Körner, C., Tabaste, O., Lacan, F., & Bigot, S. (2020). Digital Twin-enabled Collaborative Data
Management for Metal Additive Manufacturing Systems. Journal of Manufacturing Systems,

Figure 3. Overall system architecture of DT-enabled collaborative data management in MANUELA

The system comprises five main modules: 1) Dashboard, 2) Dashboard Users, 3) Pilot Line, 4)
Post AM, and 5) Quality Measurement. In correspondence with the conceptual framework (Figure
1 ), the Dashboard module represents the cloud-based collaborative data management platform.
The Dashboard Users module represents different users who utilise software tools and local
intelligence of their Edge DTs to collaboratively manage the metal AM product lifecycle data in
the cloud. The product design and process planning stages described in the conceptual framework
are integrated in the Dashboard Users module since they do not directly work on the field-level
manufacturing equipment. The other three modules, i.e. Pilot Line, Post AM and Quality
Measurement, are respectively corresponding to the manufacturing stage, post processing stage
and quality measurement stage in the metal AM product lifecycle. The following sub-sections
explain the detailed functions and data communications in each module.

5.1.1 Dashboard and Dashboard Users
The Dashboard resides in the cloud and communicates with Dashboard Users through the Internet
to achieve collaborative data management in MANUELA. Figure 4 illustrates the main functions


### ______________________________________________________________________________

Liu, C., Le Roux, L., Körner, C., Tabaste, O., Lacan, F., & Bigot, S. (2020). Digital Twin-enabled Collaborative Data
Management for Metal Additive Manufacturing Systems. Journal of Manufacturing Systems,

and tasks of the Dashboard and different Dashboard Users. The Dashboard provides five main
functions as follows:

```
1) The Dashboard provides a Graphical User Interface (GUI) that allows efficient data
management and data visualisation. Customised GUIs are developed for different users
based on specific requirements.
2) An interactive metal AM workflow is designed in the Dashboard for each product/project
by the project managers. The workflow, based on the product lifecycle stages, defines the
specific tasks and access rights for each type of Dashboard Users to establish a safe and
collaborative project management platform.
3) The Dashboard contains a cloud-based relational database which is structured by the metal
AM product data model introduced in Section 4. This database stores all the product
lifecycle data retrieved from the Edge DTs.
4) Advanced data analytics tools can be embedded in the Dashboard to provide cloud-based
decision-making support, such as analysis of material-geometry-process-property
relationships and non-real-time product quality control.
5) The Dashboard also provides application interfaces for a wide range of software
(CAD/CAM/CAE software, data visualisation and analytics software, etc.) that allow
different Dashboard Users to perform various types of specialised data analysis.
```
There are mainly six types of Dashboard Users, including 1) product designers, 2) process planners,
3) production planners, 4) project managers, 5) data analysts, and 6) customers. These users utilise
the local intelligence of their Edge DTs to perform their tasks and interact with the Dashboard
through the Internet. The main tasks of each type of Dashboard Users are summarised in Figure 4.

```
Figure 4. Main functions of Dashboard and Dashboard Users
```
The Dashboard application for MANUELA project is developed using MSC’s product lifecycle
management software named MaterialCenter. MaterialCenter perfectly meets the requirements of
the proposed DT-enabled collaborative data management since it provides flexible and efficient


### ______________________________________________________________________________

Liu, C., Le Roux, L., Körner, C., Tabaste, O., Lacan, F., & Bigot, S. (2020). Digital Twin-enabled Collaborative Data
Management for Metal Additive Manufacturing Systems. Journal of Manufacturing Systems,

functions for 1) developing customised Graphical User Interfaces (GUIs) and databases, 2)
integrating customised data analytics functions, and 3) interfacing with external software
applications. In addition, MaterialCenter allows secure cloud-based collaborative data
management by granting different administration rights to different users.

The database in the Dashboard is developed based on the metal AM product data model introduced
in Section 4. XML schema files are developed for MaterialCenter to define the structure as well
as the name, data type, description and properties of each individual data item of the database. The
Dashboard allows users to upload data to the database in two manners, i.e. manual input and bulk
upload. Figure 5 shows the developed Dashboard GUI for manual data input where users can input
values or files to each individual data item in the database.

```
Figure 5. Manual data input using the Dashboard
```
The GUIs and procedures for bulk data upload using the Dashboard are described in Figure 6. A
template Excel file that contains all the data items in the database is developed as shown in the
bottom of Figure 6. An XML mapping schema is developed for mapping all the data in the template
Excel file to the database through the MaterialCenter plugin in Excel software. In the Dashboard
GUI, the user chooses the Excel file to be imported and the mapping schema to perform the bulk
data upload. In this way, various types of field-level manufacturing data can be uploaded to the


### ______________________________________________________________________________

Liu, C., Le Roux, L., Körner, C., Tabaste, O., Lacan, F., & Bigot, S. (2020). Digital Twin-enabled Collaborative Data
Management for Metal Additive Manufacturing Systems. Journal of Manufacturing Systems,

cloud database, and hence enabling efficient and collaborative metal AM product data
management.

```
Figure 6. Bulk data upload using the Dashboard
```
5.1.2 Pilot Line
Figure 7 describes the detailed data communications and tasks in the Pilot Line. This current early
stage involves three metal AM machines in three distributed shop floors, including an in-house
developed EBM machine [57], an EOS M290 DMLS machine and an EOS M270 DMLS machine.
These machines are equipped with different sensors or monitoring systems. For example, a
backscatter electrons (BSE) detector is installed in the EBM machine to acquire electron optical
(ELO) images of the printed layers; while the EOS M290 machine has a built-in process
monitoring system called EOSTATE ExposureOT and MeltPool.

An Edge DT is developed for each machine in the local shop floor. During printing, the machine
logs and sensor signals generated by the machines and sensors are transferred to the Edge DT
through field bus, Ethernet, WiFi, etc. The operators in the shop floors utilise the local intelligence
provided by the Edge DT to conduct various computationally intensive tasks as listed in Figure 7.
The main tasks of the Cloud DT for the Pilot Line are also listed in Figure 7. The interactions
between the Edge DTs in Pilot Line and the Dashboard will be demonstrated in a representative
application scenario in Section 5.2.


### ______________________________________________________________________________

Liu, C., Le Roux, L., Körner, C., Tabaste, O., Lacan, F., & Bigot, S. (2020). Digital Twin-enabled Collaborative Data
Management for Metal Additive Manufacturing Systems. Journal of Manufacturing Systems,

```
Figure 7. Detailed data communications and tasks in Pilot Line
```
5.1.3 Post AM
Figure 8 describes the detailed data communications and tasks in Post AM. The Post AM module
comprises a post AM cell, an automated supply chain, a main Programmable Logic Controller
(PLC) and an Edge DT. The post AM cell consists of a machine tool (for post machining), a furnace
(for heat treatment), a robot arm and a laser scanner (for quality assurance). The automated supply
chain consists of an Automated Guided Vehicle (AGV) and a robot. The main PLC is used to
control all the devices via field bus such as EthernetIP or Profinet. ProfiSafe (a safety layer on top
of the field bus) is implemented to ensure safe data communications among the devices. All the
devices send handshakes to the PLC and the PLC responds with control commands of the next
actions.

The Edge DT downloads all the post processing tasks from the Cloud DT and sends the process
sequences and process parameters to the main PLC and the AGV to coordinate the post AM
processes. The AGV is controlled via the AGV interface (HTTP REST API) embedded in the Edge
DT. Ethernet TCP is used to send and receive process data between the Edge DT and the devices.
During post processes, computational tasks such as process simulation and real-time data
processing are conducted with the local intelligence of the Edge DT. The process events and
process data are stored in the local database and transferred to the Cloud DT. The main tasks of
the Edge DT and the Cloud DT are listed in Figure 8.


### ______________________________________________________________________________

Liu, C., Le Roux, L., Körner, C., Tabaste, O., Lacan, F., & Bigot, S. (2020). Digital Twin-enabled Collaborative Data
Management for Metal Additive Manufacturing Systems. Journal of Manufacturing Systems,

```
Figure 8. Detailed data communications and tasks in Post AM
```
A Virtual Reality (VR)-based DT application is developed for the Post AM shop floor as shown
on the right of Figure 9. The application allows real-time field-level data to be communicated
between the manufacturing facilities and their virtual models, and hence providing real-time post
AM process monitoring functions. An Application Programming Interface (API) is developed in
the MaterialCenter to allow data communication between the Dashboard and the DT application.
Figure 9 shows the developed GUI in the Dashboard for post AM machine status monitoring. More
advanced data analytics for the Post AM processes will be integrated in the Dashboard in the future.


### ______________________________________________________________________________

Liu, C., Le Roux, L., Körner, C., Tabaste, O., Lacan, F., & Bigot, S. (2020). Digital Twin-enabled Collaborative Data
Management for Metal Additive Manufacturing Systems. Journal of Manufacturing Systems,

```
Figure 9. Interaction between Dashboard and Edge DT in Post AM
```
5.1.4 Quality Measurement
Figure 10 describes the detailed data communications and tasks in Quality Measurement. The
Quality Measurement module comprises product quality measurement and analysis devices,
including an X-ray Computed Tomography (CT) scanner, a tactile Coordinate Measurement
Machine (CMM), their control PCs and an Edge DT. The CT scanner take cross-sectional images
of the product and send the radiographs to the control PC for image analysis and 3D reconstruction;
while the tactile CMM measures the dimensional accuracy of the product and send the tactile probe
data to the control PC for data processing.

The Edge DT retrieves the measurement tasks and the related product design files from the Cloud
DT via the Internet. All the measurement results are sent to the Edge DT and processed into product
quality data and measurement reports corresponding to the data items in the metal AM product
data model. Then the product quality data and measurement reports are uploaded to the Cloud DT
to be stored and shared with the Dashboard Users.


### ______________________________________________________________________________

Liu, C., Le Roux, L., Körner, C., Tabaste, O., Lacan, F., & Bigot, S. (2020). Digital Twin-enabled Collaborative Data
Management for Metal Additive Manufacturing Systems. Journal of Manufacturing Systems,

```
Figure 10. Detailed data communications and tasks in Quality Measurement
```
5.2 Representative application scenario: cloud-based and deep learning-enabled layer
defect analysis

The implementation of DT-enabled collaborative data management in MANUELA enables
various possibilities for advanced cloud-based metal AM data analytics, thus improving the metal
AM process performance and product quality. This sub-section briefly introduces a representative
application scenario, i.e. cloud-based and deep learning-enabled metal AM layer defect analysis,
to demonstrate the great advantages and potential of the proposed approach.

The overview of the application scenario is described in Figure 11. First, the product designers and
process planners upload the design and process parameters of the product to the cloud database
through the Dashboard GUI. Then the operator in the shop floor retrieves the process parameters
from the Dashboard to configure the machine and conduct the experiment. The experiment is
conducted on the in-house developed EBM machine mentioned in Section 5.1.2. Ti-6Al-4V ELI
(grade 23) powders are utilised to build eight cuboid samples with different scan speeds. During
the metal AM process, the BSE detector installed in the building chamber of the EBM machine
generates the ELO images of each printed layer. The raw ELO images are processed with image
processing techniques in the Edge DT and then uploaded to the cloud database in the Dashboard.
Figure 12 shows a snapshot of the cloud database in the Dashboard that contains the product
lifecycle data uploaded by different users.


### ______________________________________________________________________________

Liu, C., Le Roux, L., Körner, C., Tabaste, O., Lacan, F., & Bigot, S. (2020). Digital Twin-enabled Collaborative Data
Management for Metal Additive Manufacturing Systems. Journal of Manufacturing Systems,

Data analysts download the processed ELO images from the Dashboard and use them as the
training data to train a Convolutional Neural Network (CNN) model. The training data includes
over 16, 000 ELO images that are labelled into three categories: 1) good, 2) porous and 3) bulging,
corresponding to three types of layer defects appeared during the metal AM process. Since the
development of CNN model is not the focus of this application, we applied the transfer learning
technique to train the AlexNet [58] with the ELO images and achieved 95. 0 % test accuracy. The
trained CNN model is finally integrated into the Dashboard as an embedded data analytics function
that is accessible for different users through the Internet.

```
Figure 11. Overview of the cloud-based and deep learning-enabled metal AM layer defect analysis
```

### ______________________________________________________________________________

Liu, C., Le Roux, L., Körner, C., Tabaste, O., Lacan, F., & Bigot, S. (2020). Digital Twin-enabled Collaborative Data
Management for Metal Additive Manufacturing Systems. Journal of Manufacturing Systems,

```
Figure 12. Snapshot of the uploaded product lifecycle data in the Dashboard
```

### ______________________________________________________________________________

Liu, C., Le Roux, L., Körner, C., Tabaste, O., Lacan, F., & Bigot, S. (2020). Digital Twin-enabled Collaborative Data
Management for Metal Additive Manufacturing Systems. Journal of Manufacturing Systems,

The developed application enables both off-line product quality optimisation and on-line layer
defect detection. On the one hand, product designers and process planners can effectively correlate
the layer defect analysis results with specific product design features and process parameters (part
geometry, laser power, layer thickness, scan pattern, etc.), and hence perform design and process
optimisations to improve the product quality. On the other hand, during metal AM building process,
the ELO image can be uploaded to the Dashboard once it has been generated and processed locally,
then the embedded CNN model can detect the layer defects on-line.

The on-line layer defect detection function has been developed by integrating the CNN model into
the Dashboard’s backend. Figure 13 illustrates the designed GUIs and procedures of the on-line
layer defect detection in the Dashboard. Briefly, it includes four steps as follows:

- Step 1: Import ELO images to the Dashboard.
- Step 2: Launch the embedded deep learning-enabled layer defect detection function.
- Step 3: Display runtime status of the data analytics function and generate the prediction
    results as a .csv file.
- Step 4: Import the predicted defect result as a child object of the ELO image in the database.

This application allows distributed users to monitor the layer quality during the metal AM building
process. The early identification of layer defects not only protects the recoating system from being
damaged, but also reduces production costs in terms of material waste and production time.

```
Figure 13. Procedures of the on-line layer defect detection in the Dashboard
```

### ______________________________________________________________________________

Liu, C., Le Roux, L., Körner, C., Tabaste, O., Lacan, F., & Bigot, S. (2020). Digital Twin-enabled Collaborative Data
Management for Metal Additive Manufacturing Systems. Journal of Manufacturing Systems,

## 6. Conclusions and future work

Metal AM has been attracting a continuously increasing attention due to its great advantages
compared to traditional subtractive manufacturing in terms of higher design flexibility, shorter
development time, lower tooling cost, and fewer production wastes. However, the lack of process
robustness, stability and repeatability caused by the unsolved complex relationships between
material properties, product design, process parameters, process signatures, post AM processes
and product quality has significantly impeded its broad acceptance in the industry. To enable
efficient implementation of advanced data analytics, this paper proposes a novel DT-enabled
collaborative data management approach for metal AM systems. The main contributions of this
work are summarised as follows:

- Proposed a novel DT-enabled collaborative data management framework for metal AM
    systems, where a Cloud DT communicates with distributed Edge DTs in different product
    lifecycle stages.
- Proposed a metal AM product data model that contains a comprehensive list of specific
    product lifecycle data that has influence on the product quality.
- Practically implemented the DT-enabled collaborative data management in a distributed
    metal AM system. Early development of the data management system has demonstrated
    efficient data communications between the distributed shop floors and the cloud-based data
    management system.
- Developed a representative application scenario of cloud-based and deep learning-enabled
    metal AM layer defect analysis, which enables both off-line product design and process
    optimisation and on-line layer defect detection.

The proposed DT-enabled collaborative data management has shown great potential in enhancing
fundamental understanding of metal AM processes, developing simulation and prediction models,
reducing development times and costs, and improving product quality and production efficiency.

Moreover, the proposed DT-enabled conceptual framework is not limited to the application of
metal AM systems. It can be treated as a generic reference framework for developing collaborative
data management for other types of manufacturing systems. In those cases, domain-specific
product data models need to be developed by identifying the specific product quality-related
manufacturing data in each lifecycle stage. Efficient data communications between field-level
manufacturing devices, the Edge DTs and the Cloud DT need to be established with consideration
of the specific manufacturing facilities involved. Other product lifecycle stages that have not been
considered in this work such as product usage stage and end-of-life treatment stage could also be
included to enable various types of PLM services.

Our future work will focus on the development and implementation of machine learning-enabled
advanced data analytics in the DT-enabled collaborative data management system in MANUELA.
Recent advancements of machine learning will be studied and applied for metal AM process
monitoring, control and optimisation. Various types of machine learning-enabled closed-loop
metal AM applications based on the DT-enabled collaborative data management system will be
developed to improve the metal AM product quality and production efficiency.


### ______________________________________________________________________________

Liu, C., Le Roux, L., Körner, C., Tabaste, O., Lacan, F., & Bigot, S. (2020). Digital Twin-enabled Collaborative Data
Management for Metal Additive Manufacturing Systems. Journal of Manufacturing Systems,

## Acknowledgements

This research was performed within the project Additive Manufacturing using Metal Pilot Line
(MANUELA), which received funding from the European Union's Horizon2020 research and
innovation programme under grant agreement No 820774. The authors would like to thank Mr.
Emil Johansson, Dr. Benjamin Bircher, Dr. Vaclav Pejchal and Dr. Zhuoer Chen for their support
in developing the data model and the MANUELA system architecture, and Mr. Daniel Gage for
coordinating the experiments.

## Declaration of Competing Interest

No potential conflict of interest was reported by the authors.

## References

[1] Gibson I, Rosen D, Stucker B. Additive manufacturing technologies: 3D printing, rapid
prototyping, and direct digital manufacturing, second edition. 2015.

[2] Qin Y, Qi Q, Scott PJ, Jiang X. Status, comparison, and future of the representations of
additive manufacturing data. CAD Computer Aided Design 2019;111:44–64.

[3] Atzeni E, Salmi A. Economics of additive manufacturing for end-usable metal parts.
International Journal of Advanced Manufacturing Technology 2012;62:1147–55.

[4] Mani M, Lane B, Donmez MA, Feng SC, Moylan SP, Fesperman R. Measurement Science
Needs for Real-time Control of Additive Manufacturing Powder Bed Fusion Processes;
NIST Interagency/Internal Report (NISTIR) - 8036. 2015.

[5] ISO/ASTM. INTERNATIONAL STANDARD ISO / ASTM 52900 Additive
manufacturing — General principles — Terminology. International Organization for
Standardization 2015.

[6] Xu X. Machine Tool 4.0 for the new era of manufacturing. International Journal of
Advanced Manufacturing Technology 2017;92:1893–900.

[7] Kruth JP, Leu MC, Nakagawa T. Progress in additive manufacturing and rapid prototyping.
CIRP Annals - Manufacturing Technology 1998;47:525–40.

[8] Grasso M, Colosimo BM. Process defects and in situ monitoring methods in metal powder
bed fusion: A review. Measurement Science and Technology 2017;28:044005.

[9] Frazier WE. Metal additive manufacturing: A review. Journal of Materials Engineering and
Performance 2014;23:1917–28.

[10] Sames WJ, List FA, Pannala S, Dehoff RR, Babu SS. The metallurgy and processing science
of metal additive manufacturing. International Materials Reviews 2016;61:315–60.

[11] Everton SK, Hirsch M, Stavroulakis PI, Leach RK, Clare AT. Review of in-situ process
monitoring and in-situ metrology for metal additive manufacturing. Materials and Design
2016;95:431–45.

[12] Yadroitsau I. Selective laser melting: Direct manufacturing of 3D-objects by selective laser


### ______________________________________________________________________________

Liu, C., Le Roux, L., Körner, C., Tabaste, O., Lacan, F., & Bigot, S. (2020). Digital Twin-enabled Collaborative Data
Management for Metal Additive Manufacturing Systems. Journal of Manufacturing Systems,

```
melting of metal powders. Lambert Academic Publishing; 2009.
```
[13] Craeghs T, Clijsters S, Yasa E, Kruth JP. Online quality control of selective laser melting.
22nd Annual International Solid Freeform Fabrication Symposium - An Additive
Manufacturing Conference, SFF 2011, 2011, p. 212–26.

[14] Müller JR, Panarotto M, Malmqvist J, Isaksson O. Lifecycle design and management of
additive manufacturing technologies. Procedia Manufacturing, 2018, p. 135–42.

[15] Lu Y, Witherell P, Lopez F, Assouroko I. Digital solutions for integrated and collaborative
additive manufacturing. Proceedings of the ASME Design Engineering Technical
Conference, 2016.

[16] Lu Y, Witherell P, Donmez A. A collaborative data management system for additive
manufacturing. Proceedings of the ASME Design Engineering Technical Conference, 2017.

[17] Uhlmann E, Pontes RP, Laghmouchi A, Bergmann A. Concept of Sustainable Data for a
Selective Laser Melting Machine. Procedia Manufacturing, 2018, p. 655–62.

[18] Prater T. Database development for additive manufacturing. Progress in Additive
Manufacturing 2017;2:11–8.

[19] Mies D, Marsden W, Warde S. Overview of Additive Manufacturing Informatics: “A
Digital Thread.” Integrating Materials and Manufacturing Innovation 2016;5: 114 – 42.

[20] Lu Y, Choi S, Witherell P. Towards an integrated data schema design for additive
manufacturing: Conceptual modeling. Proceedings of the ASME Design Engineering
Technical Conference, 2015.

[21] Feng SC, Witherell P, Ameta G, Kim DB. Activity model for homogenization of data sets
in laser-based powder bed fusion. Rapid Prototyping Journal 2017;23:137–48.

[22] Feng SC, Witherell PW, Ameta G, Kim DB. Fundamental requirements for data
representations in laser-based powder bed fusion. ASME 2015 International Manufacturing
Science and Engineering Conference, MSEC 2015, 2015.

[23] Kim DB, Witherell P, Lu Y, Feng S. Toward a Digital Thread and Data Package for Metals-
Additive Manufacturing. Smart and Sustainable Manufacturing Systems 2017;1:75.

[24] Bonnard R, Hascoët JY, Mognol P, Zancul E, Alvares AJ. Hierarchical object-oriented
model (HOOM) for additive manufacturing digital thread. Journal of Manufacturing
Systems 2019;50:36–52.

[25] Tao F, Qi Q. Make more digital twins. Nature 2019:490–1.

[26] Tao F, Cheng J, Qi Q, Zhang M, Zhang H, Sui F. Digital twin-driven product design,
manufacturing and service with big data. International Journal of Advanced Manufacturing
Technology 2018;94:3563–76.

[27] Uhlemann THJ, Lehmann C, Steinhilper R. The Digital Twin: Realizing the Cyber-Physical
Production System for Industry 4.0. Procedia CIRP, 2017, p. 335–40.

[28] Lu Y, Liu C, Wang KI-K, Huang H, Xu X. Digital Twin-driven smart manufacturing:
Connotation, reference model, applications and research issues. Robotics and Computer-
Integrated Manufacturing 2020;61:101837.


### ______________________________________________________________________________

Liu, C., Le Roux, L., Körner, C., Tabaste, O., Lacan, F., & Bigot, S. (2020). Digital Twin-enabled Collaborative Data
Management for Metal Additive Manufacturing Systems. Journal of Manufacturing Systems,

[29] Lim KYH, Zheng P, Chen C-H. A state-of-the-art survey of Digital Twin: techniques,
engineering product lifecycle management and business innovation perspectives. Journal of
Intelligent Manufacturing 2019:1–25.

[30] Tao F, Sui F, Liu A, Qi Q, Zhang M, Song B, et al. Digital twin-driven product design
framework. International Journal of Production Research 2019;57:3935–53.

[31] Wang XV, Wang L. Digital twin-based WEEE recycling, recovery and remanufacturing in
the background of Industry 4.0. International Journal of Production Research
2019;57:3892–902.

[32] Liu C, Vengayil H, Zhong RY, Xu X. A systematic development method for cyber-physical
machine tools. Journal of Manufacturing Systems 2018;48:13–24.

[33] Liu C, Hong X, Zhu Z, Xu X. Machine Tool Digital Twin: Modelling methodology and
applications. Proceedings of International Conference on Computers and Industrial
Engineering, CIE, 2018.

[34] Tao F, Zhang M, Liu Y, Nee AYC. Digital twin driven prognostics and health management
for complex equipment. CIRP Annals 2018;67:169–72.

[35] Wang J, Ye L, Gao RX, Li C, Zhang L. Digital Twin for rotating machinery fault diagnosis
in smart manufacturing. International Journal of Production Research 2019;57:392 0 – 34.

[36] Zhuang C, Liu J, Xiong H. Digital twin-based smart production management and control
framework for the complex product assembly shop-floor. International Journal of Advanced
Manufacturing Technology 2018;96:1149–63.

[37] Gerhard D. Product lifecycle management challenges of CPPS. Multi-Disciplinary
Engineering for Cyber-Physical Production Systems: Data Models and Software Solutions
for Handling Complex Engineering Projects, 2017, p. 89–110.

[38] Botkina D, Hedlind M, Olsson B, Henser J, Lundholm T. Digital Twin of a Cutting Tool.
Procedia CIRP, 2018, p. 215–8.

[39] Qi Q, Tao F, Hu T, Anwer N, Liu A, Wei Y, et al. Enabling technologies and tools for
digital twin. Journal of Manufacturing Systems 2019.

[40] Lu Y, Xu X. Cloud-based manufacturing equipment and big data analytics to enable on-
demand manufacturing services. Robotics and Computer-Integrated Manufacturing
2019;57:92–102.

[41] Liu C, Vengayil H, Lu Y, Xu X. A Cyber-Physical Machine Tools Platform using OPC UA
and MTConnect. Journal of Manufacturing Systems 2019;51:61–74.

[42] Cheng J, Zhang H, Tao F, Juang CF. DT-II:Digital twin enhanced Industrial Internet
reference framework towards smart manufacturing. Robotics and Computer-Integrated
Manufacturing 2020;62:101881.

[43] Wang W, Zhang Y, Zhong RY. A proactive material handling method for CPS enabled
shop-floor. Robotics and Computer-Integrated Manufacturing 2020;61:101849.

[44] Xia T, Dong Y, Xiao L, Du S, Pan E, Xi L. Recent advances in prognostics and health
management for advanced manufacturing paradigms. Reliability Engineering and System


### ______________________________________________________________________________

Liu, C., Le Roux, L., Körner, C., Tabaste, O., Lacan, F., & Bigot, S. (2020). Digital Twin-enabled Collaborative Data
Management for Metal Additive Manufacturing Systems. Journal of Manufacturing Systems,

```
Safety 2018;178:255–68.
```
[45] Xia T, Xi L. Manufacturing paradigm-oriented PHM methodologies for cyber-physical
systems. Journal of Intelligent Manufacturing 2019;30:1659–72.

[46] Kaewunruen S, Lian Q. Digital twin aided sustainability-based lifecycle management for
railway turnout systems. Journal of Cleaner Production 2019;228:1537–51.

[47] Zheng P, Sivabalan AS. A generic tri-model-based approach for product-level digital twin
development in a smart manufacturing environment. Robotics and Computer-Integrated
Manufacturing 2020;64:101958.

[48] Mukherjee T, DebRoy T. A digital twin for rapid qualification of 3D printed metallic
components. Applied Materials Today 2019;14:59–65.

[49] Knapp GL, Mukherjee T, Zuback JS, Wei HL, Palmer TA, De A, et al. Building blocks for
a digital twin of additive manufacturing. Acta Materialia 2017;135:390–9.

[50] Glaessgen EH, Stargel DS. The digital twin paradigm for future NASA and U.S. Air force
vehicles. Collection of Technical Papers - AIAA/ASME/ASCE/AHS/ASC Structures,
Structural Dynamics and Materials Conference, 2012, p. 1818.

[51] Xu X. From cloud computing to cloud manufacturing. Robotics and Computer-Integrated
Manufacturing 2012;28:75–86.

[52] Georgakopoulos D, Jayaraman PP, Fazia M, Villari M, Ranjan R. Internet of Things and
Edge Cloud Computing Roadmap for Manufacturing. IEEE Cloud Computing 2016;4:66–
73.

[53] Wu D, Liu S, Zhang L, Terpenny J, Gao RX, Kurfess T, et al. A fog computing-based
framework for process monitoring and prognosis in cyber-manufacturing. Journal of
Manufacturing Systems 2017;43:25–34.

[54] Peng T, Kellens K, Tang R, Chen C, Chen G. Sustainability of additive manufacturing: An
overview on its energy demand and environmental impact. Additive Manufacturing
2018;21:694–704.

[55] O’Regan P, Prickett P, Setchi R, Hankins G, Jones N. Metal Based Additive Layer
Manufacturing: Variations, Correlations and Process Control. Procedia Computer Science,
2016, p. 216–24.

[56] Spears TG, Gold SA. In-process sensing in selective laser melting (SLM) additive
manufacturing. Integrating Materials and Manufacturing Innovation 2016;5:16–40.

[57] Arnold C, Pobel C, Osmanlic F, Körner C. Layerwise monitoring of electron beam melting
via backscatter electron detection. Rapid Prototyping Journal 2018;24:1401–6.

[58] Krizhevsky A, Sutskever I, Hinton GE. ImageNet classification with deep convolutional
neural networks. Advances in Neural Information Processing Systems, 2012, p. 1097–105.


