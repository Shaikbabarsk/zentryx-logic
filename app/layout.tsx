import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {


  title:
  "Zentryx Logic | AI, Software Development & Digital Innovation",



  description:
  "Zentryx Logic is an AI and software technology company building intelligent applications, machine learning solutions, cloud platforms, and digital products for businesses.",



  keywords:[

    "Zentryx Logic",

    "AI Company",

    "Artificial Intelligence",

    "Machine Learning",

    "Software Development",

    "Web Development",

    "Mobile App Development",

    "Cloud Solutions",

    "Cyber Security",

    "Data Analytics",

    "Technology Solutions"

  ],



  authors:[

    {
      name:"Zentryx Logic"
    }

  ],



  creator:
  "Zentryx Logic",



  icons:{

    icon:"/logo.png",

    apple:"/logo.png"

  },



  openGraph:{


    title:
    "Zentryx Logic | Building Intelligent Digital Solutions",



    description:
    "AI-powered software solutions, cloud technologies, and digital innovation for modern businesses.",



    type:
    "website",



    siteName:
    "Zentryx Logic"


  },



  robots:{

    index:true,

    follow:true

  }


};



export default function RootLayout({

children,

}: Readonly<{

children: React.ReactNode;

}>) {


return (


<html lang="en">


<body>

{children}

</body>


</html>


);


}