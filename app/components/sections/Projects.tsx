"use client";

import { motion } from "framer-motion";

import {
  BrainCircuit,
  BarChart3,
  Code2
} from "lucide-react";


const projects = [

{
icon: BrainCircuit,
category:"Artificial Intelligence",
title:"AI Personalized Learning Assistant",
description:
"An intelligent AI-powered learning platform that analyzes user needs and provides personalized educational experiences using machine learning and NLP.",
tech:[
"Python",
"AI",
"Machine Learning",
"NLP"
]
},


{
icon: BarChart3,
category:"Machine Learning",
title:"HDI Predictor",
description:
"A predictive analytics platform that uses machine learning models to estimate Human Development Index values from real-world datasets.",
tech:[
"Python",
"Flask",
"Machine Learning",
"Data Analytics"
]
},


{
icon: Code2,
category:"Software Development",
title:"Smart Business Platform",
description:
"A modern digital platform that helps businesses automate workflows, improve productivity, and manage operations efficiently.",
tech:[
"React",
"Cloud",
"Automation",
"Database"
]
}


];



export default function Projects(){


return(


<section id="projects" className="projects">


<div className="section-container">


<h2>
Featured Projects
</h2>


<p>
Innovative solutions combining artificial intelligence,
software engineering, and modern technologies.
</p>




<div className="project-cards">


{

projects.map((project,index)=>{


const Icon = project.icon;


return(


<motion.div


className="project-card"


key={index}


initial={{
opacity:0,
y:40
}}


whileInView={{
opacity:1,
y:0
}}


transition={{
duration:.5,
delay:index*0.15
}}


viewport={{
once:true
}}


whileHover={{
scale:1.03
}}


>



<Icon

size={50}

className="project-icon"

/>



<span className="project-category">

{project.category}

</span>



<h3>

{project.title}

</h3>



<p>

{project.description}

</p>




<div className="tech-list">


{

project.tech.map((item,i)=>(


<span key={i}>

{item}

</span>


))

}


</div>



</motion.div>


)


})

}


</div>



</div>


</section>


);


}