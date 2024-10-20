import React from "react";
import "./technologies.css";

import Image1 from "../../assets/react-js-icon.svg"
import Image2 from "../../assets/nextjs-icon.svg"
import Image3 from "../../assets/javascript-programming-language-icon.svg"
import Image4 from "../../assets/tailwind-css-icon.svg"
import Image5 from "../../assets/Figma-ORJmffst5_brandlogos.net (2).svg"

const data = [
  {
    id: 1,
    image: Image1,
    title: "React",
  },
  {
    id: 2,
    image: Image2,
    title: "Next.js",
  },
  {
    id: 3,
    image: Image3,
    title: "JavaScript",
  },
  {
    id: 4,
    image: Image4,
    title: "TailwindCSS",
  },
  {
    id: 5,
    image: Image5,
    title: "Figma",
  },

  
];




const Technologies = () => {
  return <section className="technologies container section" id="technologies">
    <h2 className="section-title">Technologies</h2>
    <div className="technologies-container grid">
      {data.map(({id, image, title}) => {
        return(
          <div className="technologies-card" key={id}>
            <img src={image} alt="" className="technologies-img" />
            <h3 className="technologies-title">{title}</h3>
          </div>
        )
      })}
    </div>
 
  </section>;
};

export default Technologies;
