"use client";

import { motion } from "framer-motion";

import {
  Brain,
  Code,
  Smartphone,
  Cloud,
  ShieldCheck,
  BarChart3
} from "lucide-react";


const services = [

{
icon:Brain,
title:"Artificial Intelligence & Machine Learning",
description:
"Build intelligent systems using AI models, machine learning algorithms, automation, and data-driven solutions."
},

{
icon:Code,
title:"Custom Software Development",
description:
"Scalable web platforms and enterprise software solutions designed with modern technologies."
},

{
icon:Smartphone,
title:"Mobile App Development",
description:
"High-performance Android and cross-platform applications with seamless user experiences."
},

{
icon:Cloud,
title:"Cloud & DevOps Solutions",
description:
"Reliable cloud infrastructure, deployment automation, and scalable digital platforms."
},

{
icon:ShieldCheck,
title:"Cyber Security Solutions",
description:
"Secure applications with vulnerability assessment, protection strategies, and best practices."
},

{
icon:BarChart3,
title:"Data Analytics & Intelligence",
description:
"Transform business data into meaningful insights with analytics, visualization, and intelligent reporting."
}

];



export default function Services(){

return (

<section id="services" className="services">


<div className="section-container">


<h2>
Technology Services
</h2>


<p>
We help businesses innovate through AI,
software engineering, and next-generation digital solutions.
</p>



<div className="service-cards">


{
services.map((service,index)=>{


const Icon = service.icon;


return (

<motion.div

className="service-card"

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
delay:index*0.1
}}

viewport={{
once:true
}}

whileHover={{
y:-10
}}

>


<div className="service-icon-box">

<Icon

size={45}

/>

</div>



<h3>
{service.title}
</h3>


<p>
{service.description}
</p>



</motion.div>

)


})

}


</div>


</div>


</section>

);

}