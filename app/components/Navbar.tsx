"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";


export default function Navbar() {

  const [open, setOpen] = useState(false);


  const links = [

    {
      name:"Home",
      link:"#home"
    },

    {
      name:"About",
      link:"#about"
    },

    {
      name:"Services",
      link:"#services"
    },

    {
      name:"Projects",
      link:"#projects"
    },

    {
      name:"Careers",
      link:"#careers"
    },

    {
      name:"Contact",
      link:"#contact"
    }

  ];



  return (

    <nav className="navbar">


      <div className="logo">


        <span>
          Z
        </span>


        <div className="logo-text">

          <strong>
            Zentryx Logic
          </strong>


          <small>
            AI • Software • Innovation
          </small>


        </div>


      </div>




      <ul className={open ? "nav-active" : ""}>


        {

          links.map((item,index)=>(


            <li key={index}>


              <a

                href={item.link}

                onClick={() => setOpen(false)}

              >

                {item.name}

              </a>


            </li>


          ))

        }


      </ul>




      <div

        className="menu-icon"

        onClick={()=>setOpen(!open)}

      >


        {

          open

          ?

          <X size={30}/>

          :

          <Menu size={30}/>

        }


      </div>



    </nav>

  );

}