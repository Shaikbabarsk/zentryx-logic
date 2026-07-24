"use client";

import { motion } from "framer-motion";


export default function About(){

return (

<section id="about" className="about">


<div className="section-container">


<motion.div

initial={{
opacity:0,
y:40
}}

whileInView={{
opacity:1,
y:0
}}

transition={{
duration:.7
}}

viewport={{
once:true
}}

>


<h2>
About Zentryx Logic
</h2>



<p>
Zentryx Logic is an AI and software technology company
focused on building intelligent digital solutions for
businesses, startups, and organizations.
</p>



<p>
We combine artificial intelligence, modern software
engineering, cloud technologies, and data-driven
approaches to create scalable solutions that solve
real-world challenges and accelerate digital transformation.
</p>




<div className="about-cards">



<div className="about-card">


<h3>
Our Mission
</h3>


<p>
To empower businesses with innovative technology
solutions by developing intelligent software,
AI-powered applications, and digital platforms that
improve efficiency, productivity, and growth.
</p>


</div>





<div className="about-card">


<h3>
Our Vision
</h3>


<p>
To become a leading technology company that creates
impactful AI-driven solutions and helps build a smarter,
more connected digital future.
</p>


</div>





<div className="about-card">


<h3>
Our Approach
</h3>


<p>
We focus on innovation, quality engineering, and
continuous learning to transform ideas into reliable
technology products.
</p>


</div>



</div>



</motion.div>


</div>


</section>

);

}