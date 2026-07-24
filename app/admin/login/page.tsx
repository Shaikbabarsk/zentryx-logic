"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";


export default function AdminPage() {

  const router = useRouter();

  const [applications, setApplications] = useState<any[]>([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");


  useEffect(() => {

    const admin = localStorage.getItem("admin");


    if (!admin) {

      router.push("/admin/login");
      return;

    }


    fetchApplications();


  }, []);



  async function fetchApplications() {


    const { data, error } = await supabase

      .from("applications")

      .select("*")

      .order(
        "created_at",
        {
          ascending: false
        }
      );


    if(error){

      console.log(error);

      return;

    }


    setApplications(data || []);

  }



  function logout() {

    localStorage.removeItem("admin");

    router.push("/admin/login");

  }



  const filteredApplications = applications.filter((app)=>{


    const matchesSearch =

      app.name?.toLowerCase()
      .includes(search.toLowerCase())

      ||

      app.email?.toLowerCase()
      .includes(search.toLowerCase());


    const matchesFilter =

      filter === "All"

      ||

      app.position === filter;



    return matchesSearch && matchesFilter;


  });




  return (

    <section className="admin">

      <div className="section-container">


        <div className="admin-header">


          <h1>
            Zentryx Logic Hiring Dashboard
          </h1>


          <button onClick={logout}>
            Logout
          </button>


        </div>



        <div className="admin-controls">


          <input

            type="text"

            placeholder="Search applicant..."

            value={search}

            onChange={(e)=>
              setSearch(e.target.value)
            }

          />



          <select

            value={filter}

            onChange={(e)=>
              setFilter(e.target.value)
            }

          >

            <option>
              All
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


        </div>




        <div className="admin-stats">


          <div className="stat-card">


            <h2>
              {filteredApplications.length}
            </h2>


            <p>
              Applications
            </p>


          </div>


        </div>




        <div className="applications-grid">


        {

          filteredApplications.map((app)=>(


            <div

              key={app.id}

              className="application-card"

            >


              <h3>
                {app.name}
              </h3>



              <span className="position">

                {app.position}

              </span>



              <p>
                📧 {app.email}
              </p>



              <p>
                📱 {app.phone}
              </p>



              <p>
                Experience: {app.experience}
              </p>



              <p>
                {app.message}
              </p>



              <p>

                Applied:

                {" "}

                {
                  new Date(
                    app.created_at
                  )
                  .toLocaleDateString()

                }

              </p>



              <a

                href={app.resume_url}

                target="_blank"

                className="resume-button"

              >

                View Resume

              </a>



            </div>


          ))

        }


        </div>



      </div>


    </section>

  );

}