import React from "react";
import Button from "../Button";
import yourData from "../../data/portfolio.json";

// Import des icônes dont tu as besoin (ajoute les autres si besoin)
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const iconMap = {
  linkedin: <FaLinkedin />,
  github: <FaGithub />,
  email: <FaEnvelope />,
};

const Socials = ({ className }) => {
  return (
    <div className={`${className} flex flex-wrap mob:flex-nowrap link`}>
      {yourData.socials.map((social, index) => {
        // On récupère la clé en minuscules pour faire le mapping des icônes
        const key = social.title.toLowerCase();
        return (
          <Button
            key={index}
            onClick={() => window.open(social.link)}
            aria-label={social.title}
            className="flex items-center space-x-2"
          >
            {iconMap[key] || null}
            <span>{social.title}</span>
          </Button>
        );
      })}
    </div>
  );
};

export default Socials;
