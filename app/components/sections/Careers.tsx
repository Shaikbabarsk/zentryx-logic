"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function Careers() {

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {

    e.preventDefault();

    setLoading(true);
    setMessage("");

    const form = e.currentTarget;

    const formData = new FormData(form);


    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const position = formData.get("position") as string;
    const experience = formData.get("experience") as string;
    const portfolio = formData.get("portfolio") as string;
    const messageText = formData.get("message") as string;
    const resume = formData.get("resume") as File;



    try {


      // Upload Resume

      const fileName = `${Date.now()}-${resume.name}`;


      const { error: uploadError } =
        await supabase.storage
          .from("resumes")
          .upload(fileName, resume);



      if (uploadError) {
        throw uploadError;
      }



      const { data: urlData } =
        supabase.storage
          .from("resumes")
          .getPublicUrl(fileName);



      // Save Application Data

      const { error } =
        await supabase
          .from("applications")
          .insert({

            name,
            email,
            phone,
            position,
            experience,
            portfolio,
            message: messageText,
            resume_url: urlData.publicUrl

          });



      if (error) {
        throw error;
      }



      setMessage(
        "Application submitted successfully!"
      );


      form.reset();



    } catch (error) {


      console.log(error);

      setMessage(
        "Something went wrong. Please try again."
      );


    }


    setLoading(false);

  }



  return (

    <section id="careers" className="careers">

      <div className="section-container">


        <h2>
          Join Zentryx Logic
        </h2>


        <p>
          Build the future with us. Apply for opportunities
          in AI, Software Development, Cloud and Digital Innovation.
        </p>



        <form
          className="career-form"
          onSubmit={handleSubmit}
        >


          <input
            name="name"
            placeholder="Full Name"
            required
          />


          <input
            name="email"
            type="email"
            placeholder="Email Address"
            required
          />


          <input
            name="phone"
            placeholder="Phone Number"
            required
          />


          <select
            name="position"
            required
          >

            <option value="">
              Select Position
            </option>

            <option>
              Software Developer
            </option>

            <option>
              AI/ML Intern
            </option>

            <option>
              Frontend Developer
            </option>

            <option>
              Backend Developer
            </option>

          </select>



          <input
            name="experience"
            placeholder="Experience"
          />



          <input
            name="portfolio"
            placeholder="LinkedIn / GitHub"
          />



          <textarea
            name="message"
            placeholder="Tell us about yourself"
            rows={5}
            required
          />



          <label>
            Upload Resume (PDF/DOC)
          </label>


          <input
            type="file"
            name="resume"
            accept=".pdf,.doc,.docx"
            required
          />



          <button type="submit" disabled={loading}>

            {loading
              ? "Submitting..."
              : "Submit Application"
            }

          </button>



          {message && (

            <p>
              {message}
            </p>

          )}



        </form>


      </div>


    </section>

  );

}