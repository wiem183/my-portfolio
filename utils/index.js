import { useLayoutEffect, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

export function ISOToDate(date) {
  if (date) {
    let convertDate = new Date(date);
    // Format avec 2 chiffres pour mois et jour
    const year = convertDate.getFullYear();
    const month = String(convertDate.getMonth() + 1).padStart(2, "0");
    const day = String(convertDate.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }
  return null; // Retourne null si pas de date
}

export const portfolioData = {
  profileImage: "https://github.com/wiem183.png",
};

export function getRandomImage() {
  const randomImageUrl = [
    "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    "https://images.unsplash.com/photo-1638742385167-96fc60e12f59?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80",
    "https://images.unsplash.com/photo-1618367588411-d9a90fefa881?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    "https://images.unsplash.com/photo-1657295791913-5074c912398e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=996&q=80",
    "https://github.com/wiem183.png",
     "https://raw.githubusercontent.com/wiem183/potfolio-images-/main/Template%204.png",
     "https://raw.githubusercontent.com/wiem183/potfolio-images-/main/Templat%205.png",
        "https://raw.githubusercontent.com/wiem183/potfolio-images-/main/template%202.png",
        "https://raw.githubusercontent.com/wiem183/potfolio-images-/main/template%201.png",
        "https://raw.githubusercontent.com/wiem183/potfolio-images-/main/pwerbi.png",
        "https://raw.githubusercontent.com/wiem183/potfolio-images-/main/pwerbi%204.png",
        "https://raw.githubusercontent.com/wiem183/potfolio-images-/main/powerbi%202.png",
        "https://raw.githubusercontent.com/wiem183/potfolio-images-/main/pwerbi%203.png",
        "https://raw.githubusercontent.com/wiem183/potfolio-images-/main/pwer%20bi%205.png",
        "https://raw.githubusercontent.com/wiem183/potfolio-images-/main/powerbi6.png",
        "https://raw.githubusercontent.com/wiem183/potfolio-images-/main/power%20bi%207.png",
     "https://raw.githubusercontent.com/wiem183/potfolio-images-/main/ml6.png", 
       "https://raw.githubusercontent.com/wiem183/potfolio-images-/main/ml5.png", 
  "https://raw.githubusercontent.com/wiem183/potfolio-images-/main/ml1.png",
  "https://raw.githubusercontent.com/wiem183/potfolio-images-/main/ml2.png",
  "https://raw.githubusercontent.com/wiem183/potfolio-images-/main/ml3.png",
  "https://raw.githubusercontent.com/wiem183/potfolio-images-/main/ml4.png",

  
  "https://raw.githubusercontent.com/wiem183/potfolio-images-/main/ml7.png",
   "https://raw.githubusercontent.com/wiem183/potfolio-images-/main/ml%208.png",
     "https://raw.githubusercontent.com/wiem183/potfolio-images-/main/dewini9.png",
        "https://raw.githubusercontent.com/wiem183/potfolio-images-/main/dewini1.png",
    
            "https://raw.githubusercontent.com/wiem183/potfolio-images-/main/dewini3.png",
             
                "https://raw.githubusercontent.com/wiem183/potfolio-images-/main/dewini5.png",
                  "https://raw.githubusercontent.com/wiem183/potfolio-images-/main/dewini6.png",
                    "https://raw.githubusercontent.com/wiem183/potfolio-images-/main/dewini7.png",
                      "https://raw.githubusercontent.com/wiem183/potfolio-images-/main/dewini8.png"


  ];
  return randomImageUrl[Math.floor(Math.random() * randomImageUrl.length)];
}
