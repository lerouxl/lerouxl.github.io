# ScienceDirect

```
Available online at http://www.sciencedirect.com
```
```
http://www.elsevier.com/locate/procedia
```
```
Procedia CIRP 99 (2021) 342–
```
```
2212-8271 © 2021 The Authors. Published by Elsevier B.V.
This is an open access article under the CC BY-NC-ND license (https://creativecommons.org/licenses/by-nc-nd/4.0)
Peer-review under responsibility of the scientific committee of the 14th CIRP Conference on Intelligent Computation in Manufacturing Engineering,
15-17 July 2020.
10.1016/j.procir.2021.03.
```
```
© 2021 The Authors. Published by Elsevier B.V.
This is an open access article under the CC BY-NC-ND license (https://creativecommons.org/licenses/by-nc-nd/4.0)
Peer-review under responsibility of the scientific committee of the 14th CIRP Conference on Intelligent Computation in Manufacturing Engineering,
15-17 July 2020.
Keywords: Artificial Intelligence; Additive Manufacturing; Quality control; Image recognition; Transfert learning
```
1.Introduction

Additive manufacturing (AM) is one of the fastest
expanding manufacturing technologies in many industrial
areas, making it a high-value research topic in a wide range of
industrial applications. Creating nonstandard shaped parts can
be a challenge with conventional manufacturing technologies,
while the AM technologies’ main strength is to enable the
design and production of complicated shapes that could not be
previously considered. However, the integration of AM
technologies in the industry is still being limited due to various
barriers. This is particularly true for Metal AM. For many
industrial applications where production costs, geometrical
tolerances and uniformities of material properties are critical,
Metal AM remains a time-consuming and expensive process
lacking repeatability in the quality of produced components.

```
This is due to the relative lack of maturity of Metal AM
technologies. The quality and repeatability of AM processes is
heavily dependent on the scientific understanding of the
influence of printing parameters when processing specific
materials. This has led to a wide range of scientific work to
understand the influence of printing parameters [1] on the
quality.
Despite this ongoing research work, many uncertainties
regarding process parameters tuning remain in terms of
achievable qualities, particularly when new
materials/geometrical-features combinations are considered.
This issue can also be difficult to tackle considering that with
commercial Metal AM machines a limited number of AM
parameters are available for user-led tuning, as manufacturers
often protect control parameters specific to their personal
expertise. Thus, in addition to the research activities on
processing parameters mentioned above, many researchers
```
## 14th CIRP Conference on Intelligent Computation in Manufacturing Engineering, CIRP ICME ‘

# Automatised quality assessment in additive layer manufacturing using

# layer-by-layer surface measurements and deep learning

## Léopold Le Rouxa, Chao Liua, Ze Jia, Pierre Kerfridena,b, Daniel Gagec, Felix Feyerc,

## Carolin Körnerc, Samuel Bigota,*

```
aCardiff University, The Parade, Cardiff CF24 3AA, Wales
bCentre des Matériaux, Mines ParisTech, Boulevard Saint-Michel ,Paris 75 272, France
cFriedrich-Alexander Universität, Erlangen-Nürnberg, Martensstraße 5, 91058 Erlangen, Germany
```
* Corresponding author. Tel.: +44 29208 75946. E-mail address: bigots@cardiff.ac.uk

Abstract

Additive manufacturing (AM) has gained high research interests in the past but comes with some drawbacks, such as the difficulty to do in-situ
quality monitoring. In this paper, deep learning is used on electron-optical images taken during the Electron Beam Melting (EBM) process to
classify the quality of AM layers to achieve automatized quality assessment. A comparative study of several mainstream Convolutional Neural
Networks to classify the images has been conducted. The classification accuracy is up to 95 %, which demonstrates the great potential to support
in-process layer quality control of EBM.And the error analysis has shown that some human misclassification were correctly classified by the
Convolutional Neural Networks.


```
have been focusing on developing reliable monitoring systems
analysing process signatures in an attempt to detect defects, as
a first step, and if possible, to propose in-process corrections.
Some examples of such attempts are the use of as acoustic
emission to detect printing quality [2] or photodiode to assert
the print quality [3].
In this paper, a new automatic quality classification method
is presented and used to detect pores and bulging defects
occurring when using an Electron Beam Melting (EBM) AM
printer to process Ti-6Al-4V [4] powder. This classification
method was developed using Artificial intelligence (AI), and
more specifically Convolutional Neural Network (CNN)
models, to analyse EBM AM layers images collected during
the printing with a wide variety of printing parameters to cover
a wide range of printing conditions.
For this study, five of the most famous Deep Learning
algorithms have been selected due to their popularity and good
results, namely AlexNet, DenseNet, Resnet, SqueezeNet and
VGG. Their performance, when applied to the detection of
pores and bulging defects occurring in EBM AM, was then
compared.
The remainder of this paper is organized as follows. Section
2 presents a literature review of relevant Metal AM and AI
concepts. Section 3 introduces the selected EBM AM case
study. Finally, section 4 discusses the experimental results and
concludes the paper.
```
```
2.Literature review
```
```
2.1.Metal Additive manufacturing technologies
```
Various Metal AM technologies are emerging to produce
metallic components and most of them create parts by staking
multiple layers of material on top of each other. Each
technology has its own capabilities in terms of printing
resolutions, processable materials and achievable geometries.
This paper will focus on Electron Beam Melting (EBM)
technology, which melts metal powder using an electron beam
[5]. This electron beam is created using a tungsten filament and
an acceleration voltage of 60 kV ( Fig. 1 a). This beam then
goes through a group of lenses (Fig. 1 b)to focus and move
the beam on the printing area (Fig. 1 c). Layers of raw powder
are dispensed on the printing area using a rake (Fig. 1 d). The
thickness of those layers is controlled by the users.
These parameters influence the required energy to correctly
melt the layer, as a thicker layer need more energy from the
electron beam but would lead to quicker printing. Not reaching
the appropriate energy input can result in layers’ defects in the
form of porosity or deformations [4]. Thus, printing parameters
tuning is an important research area as the tuning must be made
for each type of powder. Research has been made by
monitoring the powder bed to measure the impact of
parameters variations [6]. Beam power, beam speed and
volume energy density are the most common and used
parameters to configure a print. More parameters exist, some
can be hidden by the printer manufacturer as in Selective laser
sintering (SLS), where at least 50 parameters influencing the
print quality have been found [1].

```
2.2. Machine learning
```
```
AI, specifically Machine Learning (ML), made a revolution
in the way we classify and predict systems’ future states by
using historical data to create and train predictive models. The
standard approaches used to train a learning model can be
broadly classified in three different ways. One of the most
widely adopted is supervised learning, which is used when the
training dataset contains the desired output, known as labels,
that must be predicted by ML models. For example, in images
classification problems, training images generally need to be
first classified by human experts to provide data to train the AI
models. Those models will generalise this classification to be
able to handle unseen images. When training datasets are not
labelled or classified with a specific result or prediction,
unsupervised learning can then be considered. This learning
will then perform automatically a classification of new data by
identifying clusters in the training data. And when dataset can
be represented as an environment, reinforcement learning is
used to explore and exploit this environment.
The type of learning and related algorithms are chosen in
function of the type of datasets. Algorithms can also be tuned
to work on a specific dataset by using transfer learning [7]. The
transfer learning allows the use of algorithms pre-trained on
similar datasets, which reduces the training time.
During the last decade, a technique called Deep Learning [8]
[9] (DL) has gained popularity and is increasingly being used
in various applications. One particular advantage of DL
techniques is their ability to easily deal with the crucial task of
features selection, which is essential to achieve accurate
results. This makes DL techniques ideal candidates to develop
intelligent monitoring systems for Metal AM, due to the
expected complexity of the features representing defects in the
monitored signals. In DL, different architectures can be
implemented, each achieving better or worse results depending
on the type of data. To classify images, for the type of data
collected in the EBM AM case study presented in this paper, a
CNN appears to be the most appropriate DL architecture [10].
As described below, CNN has made a revolution in the world
of image recognition [9].
```
```
Fig. 1. Schematic of an EBM printer [5]
```

Thus, for the proposed case study, this paper is focusing on
testing five well-known CNNs:

 AlexNet: AlexNet is the first CNN to win on 2012 ImageNet
Large Scale Visual Recognition Challenge image
recognition contest [11]. This achievement has allowed
AlexNet to lead the way in the use of CNN in image
recognition. Its architecture is composed of 8 layers: 5
convolutional layers for features extractions and 3 fully
connected layers making the classification result.
 VGG: To obtain better performance than AlexNet,
researchers have created a deeper neural network. This
augmentation of the number of layers increases the capacity
of the CNN to create an abstract representation of data but
comes with some problems such as the vanishing gradient
problem. VGG was created with a depth network of 19
layers and achieved top images recognition in images
challenges [12].
 ResNet: ResNet CNN was made using skip connections to
connect distance layers [13]. This avoids the vanishing
gradients problem and makes it possible to create a deeper
neural network.
 DenseNet: DenseNet is an evolution of ResNet. It is
composed of multiple dense blocks separated by
convolution and pooling layers [14]. Those dense blocks are
made of multiple connected layers. Each layer is connected
to all the following ones. DenseNet needs only 1/3 of
ResNet parameters to obtain similar accuracies [14].
Making DenseNet more efficient.
 SqueezeNet: In 2016, SqueezeNet obtained equivalent
results to AlexNet by using 50x fewer parameters [15]. This
drastic parameters reduction was made by using convolution
layers with smaller filters. This parameters reduction also
allows a reduction in training time and produces lighter
models.

2.3.Additive manufacturing with machine learning

In the literature, experiments have been made to monitor
printing quality using ML and images extracted from the AM
process. Scime and Beuth [16] focused on using data acquired
by monitoring the melt pool to predict layers' quality. The
printing quality was predicted by ML using filtered images.
The acquisition of melt pool images requires the use of a high-
speed camera to properly capture the physical phenomena.
Thus, this experiment has generated 6 400 images per second
(~13 GB per second), which are required to monitor the melt
pool accurately, making real-time acquisition and analysis
unrealistic.
In another study, Scime and Beuth [17] used powder bed
images taken post melting for quality assessments. These
techniques reduce the input data to a reasonable size for real-
time control. However, this input size-reduction does not allow
the control of the melt pool, which is at the origin of the
majority of the defaults. Other studies [6] [18] used multiple
images of one layer to make quality assessments. Those images
give a different type of information on the print. This study uses
layer images before and after scanning, to look at defects in the
powder affecting the printing and the parts’ quality.
Our study will use a different type of images to detect in-
process defects, namely electron-optical (ELO) images, as they
can help visualize topography surface changes [5].

```
3.AM case study, a quality classification of EBM layers
```
```
3.1.EBM printing process summary
```
```
To use the EBM process, first, a CAD model is created and
the printing orientation is selected. This orientation will
influence how the final product will be and how a defect will
affect the final result. This CAD model is then sliced in
multiple layers and converted in machine code. This
conversion requires printing parameters, such as the layer
thickness, the scanning patterns (defining the scanning path)
and the scanning speed.
During printing, deviations may occur as the defined
printing parameters may not be fully respected or may be
influenced by unexpected deviations, such as temperatures or
powder bed quality variations. Those variations can be
monitored by monitoring various process signatures, such as
layer images or sound as shown in Figure 2 [2]. Various types
of layers images can be used to detect porosity, bulging,
temperature variations or layer deposition problems. Sounds
may allow detection of issues with the powder recoater, such
as impacts with the produced parts due to geometrical
deformations. Other sensors can also be used, such as thermal
sensors to monitor the stability of the melt pool. After printing,
the part itself can be checked to provide more feedback on the
process. Internal and external features can be measured (e.g.
porosity, microstructure, dimensional accuracy) using various
metrology tools (e.g. microscope, CT scans).
This paper focuses on the capture of ELO images obtained
by detecting backscattered electrons (BSE) [4]. Those sensors
are located on the top of the building chamber allowing
monitoring of the real state of each layer. The assumption being
that the use of layer images, rather than monitoring the melt
pool, would still provide sufficient information to detect
deviations, while allowing a data size small enough to
implement real-time analyses and potentially real-time
correction in the next layer.
```
```
Fig. 2. Input and output of a 3D printing
```

3.2.Experimental setup and collected images

Simple 15 mm by 15 mm cubical parts were produced by
EBM using various scanning speeds and beam powers [4] [5],
leading to 2 types of defects, namely porosity and bulging.
Throughout the AM process 16,324 ELO images of the printed
layers were collected.
These images were then classified by a human expert in one
of the 3 defined categories: porous, normal or bulging. As
classification is a monotonous task, human errors are expected
and some layers can have features of multiple classes, making
them hard to classify.
The porous category (Figure 3.a) is due to too low energy
input caused by an insufficient beam power or an excessive
beam speed resulting in the creation of pores in the layers.
Those pores can be easily identified by a human as their
characteristics are well known. They have the appearance of a
black dot in the printing area.
The second category, the bulging category (Figure 3.b), is
the opposite of the first one. The excess of energy during the
printing makes the printed layer wrap and deform. It can be
caused by having low beam speed or high beam power.
In some cases, bulging over several layers can lead to pores
resulting in a porous and bulging layer as seen in Figure 3d.
This case can make data analysts, who lack the domain
knowledge, fail to recognize the layer category. This type of
layer was the hardest to classify.
The third category is the good quality print where none of
the previous defaults exists as in Figure 3c.
The image data set included 6954 porous images (43 %);
3167 bulging images (19 %), and 6203 normal images (38 %).

3.3.Data pre-processing

Data pre-processing consisted of extracting the print part
from the powder bed (Figure 4), as the powder bed does not
contain any information. The edge of the print was also
removed to protect against border artefacts, which may create
confusion in the CNN training. Next, images were normalized
using hard-coded values to avoid learning from unrelated
features.
Removing the corner of the printed part should make it
possible to use the produced neural network for the analyses of

```
different printed shapes as it will only classify the inner part of
the print without using the print border.
```
```
3.4.Data processing with CNN
```
```
For this research, Python 3.7.4 and Pytorch 1.3.1 were used.
Calculations were performed on the supercomputer ARCCA
using P100 GPU. The uses of graphics cards speed up the data
processing time, making possible to classify on images in less
than 0.01s. The CNNs presented in section 2.2 were used as a
straight forward solution to classify the images using Pytorch
[19]. The CNNs training was done using the same
hyperparameters for all. Their momentum was set to 0.9 and
the learning rate to 0.001.
To process those images, each CNN was trained twice, once
with transfer learning (called pre-trained) and once without it
(called untrained). This allows to compare the capacity of the
CNNs to learn from scratch on the data. With transfer learning,
a previous CNN had been trained on complex datasets and had
learned to extract features from images. Thus, transfer learning
copies the weights of this existing CNN in the new CNN,
consequently transferring some of its feature extraction
capabilities.
The comparison test shows, as expected, that pre-trained
CNNs have overall better accuracy and faster training than
untrained CNNs. But untrained CNN's models demonstrate
more significant differences in performance.
Training results are shown in Figure 5 and Figure 6. The top
accuracy was obtained with a pre-trained SqueezeNet (95.1 %).
But surprisingly, AlexNet without pre-training did not learn
effectively. Its accuracy stabilises itself around 33 % looking
like a random choice (as shown in Figure 6). As the pre-trained
```
```
Fig. 4. Images pre-processing
```
```
Fig. 3. ELO images of layers types Fig. 5. Top accuracy comparison
```

CNNs produced better results, the focus will be on them. It was
found that their accuracies will quickly approach 95% and then
stop improving thereafter. As shown in Figure 6, the learning
of the CNN quickly stops as the accuracy starts to stabilise near
the 10th epoch.
The accuracy showed for each algorithm is the validation
accuracy. Obtained by checking the model prediction on new
data, unseen during the training. The advantage of focusing on
the validation accuracy rather than on the training accuracy is
that it can highlight any overfitting, where the neural network
learns irrelevant features and can’t generalise properly on new
data. The training data and the validation data used were the
same for all models.

3.5.Errors analysis

The CNN accuracy appears to be topped around 95 %,
suggesting that the 5 % of inaccuracy could be caused by noises
in the data that may be due to human errors, during the
classification by an expert, or due to ambiguities to categorize
images. To investigate this further, a confusion matrix of a pre-
trained SqueezeNet CNN was constructed (Figure 7). 0
represents the layers classified as normal, 1 the ones classified
as porous and 2 the ones classified as bulging.
By highlighting how the CNN classifies the images in
comparison with the human expert classification, the confusion

```
matrix should help detect which type of images are creating
confusion.
To construct the matrix (Figure 7), 20 % of the available
images were used. They were selected randomly, while
providing the same amount of each image type, and submitted
for prediction to a trained SqueezeNet CNN. Then, for each
expected image type, as classified according to the human
expert, the percentage of image predicted as belonging to each
of the three types was calculated and added to the confusion
matrix (Figure 7).
Focusing on the highest classification mismatches, the
confusion matrix shows that the CNN is classifying 3 % (cell
[0,2]) of the images as bulging while, according to the human
expert, they should be classified as normal, while classifying
0.8 % (cell [2,0]) as normal while they should be classified as
bulging, leading to a total classification error of 5 %. This
suggests that distinctions between the normal and bulging
images bring some difficulties to either the CNN or the human
expert. By examining the images more closely, this confusion
could be explained. To help visualise the problem, 9 classified
images have been extracted and placed in the confusion matrix
(Figure 8).
This figure shows some images, in particular cells [0,2] and
[2,0], which result in mismatches due to slightly visible
bulging. Slight bulging is tolerable and therefore categorized as
normal by the human expert, but a quantitative and sharp
```
```
Fig. 6. CNNs accuracy curves
```
```
Fig.7.Confusion matrix of pre-trainedSqueezenet Fig. 8. Confusion matrix with images
```

transition between non-tolerable bulging and layers
categorized as normal is still missing.
With that in mind, the monotonous task of classifying such
images is likely to bring human errors and while such errors
could have been present during the CNN training. Thus, rather
than a wrong classification by the CNN, these classification
mismatches are more likely to highlight a human error.
Therefore, the CNN performance is likely to be higher than the
plateau mentioned previously.
The last two highest mismatches are shown in cells [1,0] and
[1,2], where images classified as porous by the human expert,
where predicted as normal (1.3 %) or as bulging (0.31 %) by
the CNN. Looking at some of the related images (Figure 8),
they appear to contain features from both defects and may
suggest that such images would be hard to classify by both a
CNN and a human expert. To solve this problem, an additional
class for layers with both defect types, pores and bulging, have
to be complemented.

4.Conclusion and future work

The results showed that ELO images can be correctly
classified by a CNN without too much difficulty allowing
automatic monitoring of the state of printing in real-time, as the
time required to classify one image is inferior to 0.01 s on a
graphic card, which is much shorter than the time needed to
print a layer. An un-trained CNN had more difficulties to learn
from the data set and did not achieve the good accuracies that
a pre-trained CNN did. This can be due to the similarity
between all images, which may confuse the network and
making it overfit the data by learning non-relevant patterns.
While pre-train neural networks have been first trained on more
diverse data, forcing them to extract good features.
This work proves that the EBM printing quality of a single
layer can be monitored in real-time using ELO images with
great accuracy (95%) leading to the development of ML
feedback loops [20]. But these detected defects could still be
modified by the processing of future layers, mainly because of
multiple remelting. For example, detected pores could vanish
by sufficient energy input in the subsequent layers. Those
changes can lead to uncertainty in the layers’ defect
classification and especially in the correlation of layer defects
and defects in printed parts. Future work will focus on
collecting data after a completed build, for example using
CT-scans, to link information brought by ELO images during
the process of a layer with the actual resulting layer inside a
completed part.

Acknowledgements

This work was performed using the computational facilities
of the Advanced Research Computing @ Cardiff (ARCCA)
Division, Cardiff University.
This project has received funding from the European
Union’s Horizon 2020 research and innovation programme
under grant agreement n°820774.

```
References
```
```
[1] Amini, M., and Chang, S. Process Monitoring of 3D Metal Printing in
Industrial Scale. ASME 2018 13th Int. Manuf. Sci. Eng. Conf. MSEC
2018.
[2] Shevchik, S. A., Kenel, C., Leinenbach, C., and Wasmer, K. Acoustic
Emission for in Situ Quality Monitoring in Additive Manufacturing
Using Spectral Convolutional Neural Networks. Addit. Manuf; 2018.p.
598–604.
[3] Okaro, I. A., Jayasinghe, S., Sutcliffe, C., Black, K., Paoletti, P., and
Green, P. L. Automatic Fault Detection for Laser Powder-Bed Fusion
Using Semi-Supervised Machine Learning. Addit. Manuf; 2019. p. 42–
53.
[4] Pobel, C. R., Arnold, C., Osmanlic, F., Fu, Z., and Körner C. Immediate
Development of Processing Windows for Selective Electron Beam
Melting Using Layerwise Monitoring via Backscattered Electron
Detection. Mater. Lett; 2019. p. 70–72.
[5] Arnold, C., Pobel, C., Osmanlic, F., and Körner, C. Layerwise
Monitoring of Electron Beam Melting via Backscatter Electron
Detection. Rapid Prototyp; 2018. p. 1401–1406.
[6] Imani, F., Gaikwad, A., Montazeri, M., Rao, P., Yang, H., and Reutzel,
E. Layerwise In-Process Quality Monitoring in Laser Powder Bed
Fusion. ASME 2018 13th Int. Manuf. Sci. Eng. Conf. MSEC 2018.
[7] Weiss, K., Khoshgoftaar, T. M., and Wang, D. D. A Survey of Transfer
Learning, Springer International Publishing; 2016.
[8] Al-Saffar, A. A. M., Tao, H., and Talab, M. A. Review of Deep
Convolution Neural Network in Image Classification. Proceeding - 2017
Int. Conf. Radar, Antenna, Microwave, Electron. Telecommun.
ICRAMET 2017; p. 26–31.
[9] Lecun, Y., Bengio, Y., and Hinton, G., Deep Learning. Nature; 2015. p.
436–444.
[10] Guo, Y., Liu, Y., Oerlemans, A., Lao, S., Wu, S., and Lew, M. S. Deep
Learning for Visual Understanding: A Review. Neurocomputing; 2016.
p. 27–48.
[11] Krizhevsky A, S. I., and G, H. ImageNet Classification with Deep
Convolutional Neural Networks; 2017. Commun. ACM.
[12] Simonyan, K., and Zisserman, A. Very Deep Convolutional Networks
for Large-Scale Image Recognition. 3rd Int. Conf. Learn. Represent.
ICLR 201; 2015. p. 1–14.
[13] He, K., Zhang, X., Ren, S., and Sun, J..Deep Residual Learning for
Image Recognition. Proc. IEEE Comput. Soc. Conf. Comput. Vis.
Pattern Recognit; 2016. p. 770–778.
[14] Huang, G., Liu, Z., Van Der Maaten, L., and Weinberger, K. Q.Densely
Connected Convolutional Networks. Proc. - 30th IEEE Conf. Comput.
Vis. Pattern Recognition, CVPR 2017; p. 2261–2269.
[15] Iandola, F. N., Han, S., Moskewicz, M. W., Ashraf, K., Dally, W. J., and
Keutzer, K. SqueezeNet: AlexNet-Level Accuracy with 50 X FEWER
PARAMETERS AND < 0. 5MB MODEL SIZE. ICLR; 2017. p. 1–13.
[16] Scime, L., and Beuth, J., Using Machine Learning to Identify In-Situ
Melt Pool Signatures Indicative of Flaw Formation in a Laser Powder
Bed Fusion Additive Manufacturing Process. Addit. Manuf; 2019. p.
151–165.
[17] Scime, L., and Beuth, J. A Multi-Scale Convolutional Neural Network
for Autonomous Anomaly Detection and Classification in a Laser
Powder Bed Fusion Additive Manufacturing Process. Addit. Manuf;
```
2018. p. 273–286.
[18] Caggiano, A., Zhang, J., Alfieri, V., Caiazzo, F., Gao, R., and Teti, R.
Machine Learning-Based Image Processing for on-Line Defect
Recognition in Additive Manufacturing,. CIRP Ann. 2019. p. 451–454.
[19] Paszke, A., Gross, S., Massa, F., Lerer, A., Bradbury, J., Chanan, G.,
Killeen, T., Lin, Z., Gimelshein, N., Antiga, L., Desmaison, A., Köpf,
A., Yang, E., DeVito, Z., Raison, M., Tejani, A., Chilamkurthy, S.,
Steiner, B., Fang, L., Bai, J., and Chintala, S. PyTorch: An Imperative
Style, High-Performance Deep Learning Library. NeurIPS; 2019.
[20]C., Liu, L., Le Roux, Z., Ji, P., Kerfriden, F., Lacan, S., Bigot. Machine
Learning-Enabled Feedback Loops for Metal Powder Bed Fusion
Additive Manufacturing. Journal of Manufacturing Systems; 2020.


