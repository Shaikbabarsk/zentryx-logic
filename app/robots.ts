import type { MetadataRoute } from "next";


export default function robots(): MetadataRoute.Robots {

  return {

    rules: {

      userAgent: "*",

      allow: "/",

    },


    sitemap:
    "https://zentryx-logic-mocha.vercel.app/sitemap.xml",

  };

}