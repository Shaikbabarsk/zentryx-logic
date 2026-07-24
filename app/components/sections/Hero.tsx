"use client";

import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";


export default function Hero() {

  return (

    <section id="home" className="hero">


      <div className="ai-circle circle-one"></div>
      <div className="ai-circle circle-two"></div>



      <motion.div

        className="hero-content"

        initial={{
          opacity:0,
          y:50
        }}

        animate={{
          opacity:1,
          y:0
        }}

        transition={{
          duration:1
        }}

      >



        <div className="hero-badge">

          <Sparkles size={18}/>

          AI • Software • Cloud Innovation

        </div>




        <h1>

          Zentryx Logic

        </h1>



        <h2>

          Engineering Intelligent
          Digital Solutions For Tomorrow

        </h2>




        <p>

          We design AI-powered applications,
          scalable software platforms, and modern
          technology solutions that help businesses
          grow faster in the digital era.

        </p>




        <div className="hero-buttons">


          <button>

            Start Your Project

            <ArrowRight size={18}/>

          </button>




          <button className="secondary-btn">

            Explore Our Services

          </button>



        </div>



      </motion.div>


    </section>

  );

}