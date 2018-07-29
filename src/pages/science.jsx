import React from 'react';
import { Container, Header, Divider, Icon, Card, Segment, Grid, Image, Item, Label } from 'semantic-ui-react';


class Science extends React.Component {
  render() {
    return (
      <Container>
        <Header className="title" as="h1">
          Once upon a time, I decided that I wanted a career in science...
        </Header>
        <Divider className="content__main__divider"/>
        <p>
        As some might know, by education I am actually a psychologist. I majored in engineering psychology and in my MSc diploma tried to show that active rest (by playing a game, for example) recovers attentional resources. This was fun to work on, but then fate has thrown me to Finland, where I did a PhD in cognitive neuroscience. While at this point I'm done with it, I will still keep the info here, in case someone might get interested and I would have useful information.
        </p>
        <p>
        In a nutshell, my research revolved around human brain activity during naturalistic behavior, and especially in social communication. Actually, I wanted to do music neuroscientific research, and even did one study where we used machine learning to tell what instrument individual listened to from their brain data, but it didn't work out that well, so I switched to other topics.
        </p>

        <b><i>Social cognition and cognitive neuroscience</i></b> - I really wanted to know how information is exchanged between humans from brain perspective.
        <p>
        1. Together with my colleagues, I studied how understanding of speech was affected by availability of contextual information. I've done this with some crazy smart people:
        <a href="http://www.sciencedirect.com/science/article/pii/S0028393214003121">Smirnov D, Glerean E, Lahnakoski JM, Salmi J, Jääskeläinen IP, Sams M, Nummenmaa L (2014) Fronto-parietal network supports context-dependent speech comprehension.</a>
        </p>
        <p>
        2. We have also learned that brains of people are working in synchrony when they try to share feelings of third person. Together with other research in that field, those studies suggest that understanding and empathizing with each other is associated with our brains being more similar. We had a great time putting this thing together:
        <a href="http://www.jneurosci.org/content/34/3/748.full">Nummenmaa L, Smirnov D, Lahnakoski JM, Glerean E, Jääskeläinen IP, Sams M, Hari R (2014) Mental Action Simulation Synchronizes Action-Observation Circuits Across Individuals. Journal of Neuroscience doi:10.1523/JNEUROSCI.0352-13.2014</a>
        </p>
        <p>
        3. Brains of two people at once.
        </p>
        <b><i>Computational methods in neuroscience and psychoinformatics</i></b> - I have picked up quite a few tricks on my way (some of those actually have driven me out of the academia). fMRI data is big, it doesn't fit in memory of your old PC, takes loads of computational power to process, and in general can be rather tricky to clean. I've learned my way around SPM, FSL, pyMVPA, nilearn and a lots of other tools and have some intuition on how to fix the problems with those. I have also developed my own toolbox to run machine learning models between two people (see above for details). Finally, I've been helping out with parallelization of our pipelines on cluster (thanks <a href="http://science-it.aalto.fi/">Science-IT project</a>).
        <b><i>Naturalistic stimulation in brain research</i></b> - I must admit, to me it is rather boring to run experiments with extremely controlled stimuli. Yes, it makes our work easier, and it is crucial to understand fundamentals, but at the same time, does it really make that much sense if we want to understand human brains also on systemic level? Human exist in complex environment, filled with interconnections and nuances, and I believe that to really understand ourselves, we must remain in this context and add the naturalistic experiments to our toolkits. I have done a few myself, and was around a lot of people involved in this kind of research, so I have assembled some experience and know-hows on what goes wrong and how to fix them.
        <b><i>Teaching</i></b> - 2012-2014 Course assistant, together with Heini Heikkilä at Becs-114.5501 and Becs-114.5502: Experimental and Statistical Methods in Biomedical Research. Lectured by Lauri Nummenmaa. 2012-2013 Assistant organizer, BECS Coffee Seminar, Aalto University School of Science
        <div>
        Publications
        </div>
        <div>
        Finally, I've been to quite a few events with this material, my favourite though was the Alpine Brain Imaging Meeting, where we snowboarded in the daytime, and talked science in the evening.
        <ol>
        <li>Smirnov D, Lachat F, Peltola T, Lahnakoski JM, Koistinen OP, Glerean E, Vehtari A, Hari R, Sams M, Nummenmaa L. Hyperclassification reveals shared representation of physical and vicarious perception of touch and pain across two brains. Poster at Alpine Brain Imaging Meeting, Champery, Switzerland, 11.-15.01.2015, pdf.</li>
        <li>Smirnov D, Lachat F, Glerean E, Lahnakoski JM, Hari R, Sams M, Nummenmaa L. Hyperclassification reveals shared representation of action execution and observation across interacting brains. Talk at Alpine Brain Imaging Meeting, Champery, Switzerland, 12.-16.01.2014.</li>
        <li>Smirnov D, Glerean E, Lahnakoski JM, Salmi J, Jääskeläinen IP, Sams M, Nummenmaa L. Inferior Frontal Gyrus Subserves Context-Dependent Comprehension of Spoken Narrative. Poster at 18th Annual Meeting of the Organization for Human Brain Mapping, Beijing, China, 10.-14.06.2012.</li>
        <li>Nummenmaa L, Smirnov D, Lahnakoski JM, Glerean E, Jääskeläinen IP, Sams M, Hari R. Mental Simulation of Natural Movements Synchronizes Action Observation Circuits Across Individuals. Poster at 18th Annual Meeting of the Organization for Human Brain Mapping, Beijing, China, 10.-14.06.2012.</li>
        <li>Lachat F, Smirnov D, Glerean E, Lahnakoski JM, Hari R, Sams M, Nummenmaa L. Hyperclassification reveals shared representation of action execution & observation across 2 brains. Poster at 20th Annual Meeting of Organization for Human Brain Mapping, Hamburg, Germany, 8.-12.06.2014.</li>
        <li>Smirnov D, Lachat F, Glerean E, Lahnakoski JM, Peltola T, Koistinen OP, Vehtari A, Hari R, Sams M, Nummenmaa L. Hyperclassification reveals shared representation of action execution and observation across interacting brains. Talk at B&M Symposium. 11.-12.09.2014.</li>
        </ol>
        </div>
      </Container>
    );
  }
}

export default Science;
