import React from "react";
import styles from "./project.module.css";
import { SiExpress, SiJavascript } from "react-icons/si";
import { SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { GrReactjs } from "react-icons/gr";
import { SiChakraui } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { DiNodejsSmall } from "react-icons/di";
import ProjectCard from "./ProjectCard";
const projects = [
    {
        name: "Boat-lifestyle.com clone",
        img: "/Boat-lifestyle.png",
        link: "https://candid-paletas-feef7b.netlify.app",
        git: "https://github.com/chaitanya0319/Collab",
        about:
          "This is a clone of e-commerce website named as Boat-lifestyle.Users can buy Headphones,Earphones,Earbuds,Speakers and Smart watches on this platform.",
        stacks: [
        <SiJavascript className={styles.stackIcon} />,
          <SiHtml5 className={styles.stackIcon} />,
          <SiCss3 className={styles.stackIcon} />,
        ],
      },
  
  {
    name: "Nordstorm.com clone",
    img: "/Nordstorm.png",
    link: "https://comfy-cheesecake-0f2b94.netlify.app",
    git: "https://github.com/mr-ashu/Unit-3-Assingment",
    about:"This is a clone of e-commerce website named as Nordstorm.It is a leading fashion retailer offering compelling clothing, shoes and accessories for men, women and kids.Pages: Home Page,Products Listing Page,Product Details Page,Payment Page.",
    stacks: [
     <SiJavascript className={styles.stackIcon} />,
      <SiHtml5 className={styles.stackIcon} />,
      <SiCss3 className={styles.stackIcon} />,
    ],
  },
  {
    name: "Weather App",
    img: "/Weather Forecast.png",
    link: "https://astonishing-narwhal-4d4609.netlify.app/",
    git:"https://github.com/grvsharma1994/weather-Forecast",
    about:
      "This app fetches the user's current location using GeoLocation API, and then uses the location data to fetch the current weather data via the Open Weather Map API. User can search weather data of any location by just typing the location name.",
    stacks: [
      <SiJavascript className={styles.stackIcon} />,
      <SiHtml5 className={styles.stackIcon} />,
      <SiCss3 className={styles.stackIcon} />,
    ],
},
  {
    name: "YouTube App",
    img: "/youtube.png",
    link: "https://willowy-kelpie-4e6c56.netlify.app",
    git: "https://github.com/grvsharma1994/YoutubeApp",
    about:
      "Youtube clone where you can search the videos. Also it shows the popular videos on the front page.",
    stacks: [
      <SiJavascript className={styles.stackIcon} />,
      <SiHtml5 className={styles.stackIcon} />,
      <SiCss3 className={styles.stackIcon} />,
    ],
  }
];
const Project = () => {
  return (
    <div id="projects">
      <div>
        <p className={styles.projectName}>Projects</p>
      </div>
      <div className={styles.projectGrid}>
        {projects.map((project) => (
          <ProjectCard {...project} />
        ))}
      </div>
    </div>
  );
};
export default Project;