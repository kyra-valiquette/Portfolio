import React, { useState } from 'react';
import './Carousel.css'

export default function Carousel({projets}) {
  const [index, setIndex] = useState(0);

  function handlePrevious(){
    setIndex((index - 1) < 0 ? projets.length - 1 : index - 1);
  };
  
  function handleNext(){
    setIndex(index + 1 >= projets.length ? 0 : index + 1);
  };
  
  return (
    <div className="carousel">
      
      {projets[index] != undefined ? 
      <div className="projet">
        <button onClick={handlePrevious} className="carousel-prev">Previous</button>
        <img src={projets[index].img != undefined ? projets[index].img : "https://www.seekpng.com/png/full/423-4235598_no-image-for-noimage-icon.png"} alt="Image de projet"/>
        <div>
            <h3>{projets[index].nom}</h3>
            <p>{projets[index].desc}</p>
            <p>{projets[index].techno}</p>
            <a href={projets[index].lien} target="_blank">Lien vers Github</a>
        </div>
        <button onClick={handleNext} className="carousel-next">Next</button>
      </div>
      :
      <div className="projet">
        <button onClick={handlePrevious} className="carousel-prev">Previous</button>
        <img src="https://static.thenounproject.com/png/4385680-512.png" alt="no-project"/>
        <button onClick={handleNext} className="carousel-next">Next</button>
      </div>
      }
      
    </div>
  );
};

//inspire by https://browsee.io/blog/creating-a-carousel-in-reactjs/