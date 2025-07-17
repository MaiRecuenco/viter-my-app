import React from "react";

const CardService = ({ id, image, alt, title, description, link }) => {
  return (
    <>
      <div id={id} className="card">
        <img src={image} alt={alt} />
        <h3>{title}</h3>
        <p>{description}</p>
        <a href="#">{link} &rarr;</a>
      </div>
    </>
  );
};

export default CardService;
