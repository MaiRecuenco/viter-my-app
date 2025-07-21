import React from "react";

const CardService = ({ item }) => {
  return (
    <>
      <div id={item.web_services_aid} className="card">
        <img src={item.web_services_image} alt={item.web_services_image} />
        <h3>{item.web_services_name}</h3>
        <p>{item.web_services_description}</p>
        <a href={item.web_services_link}>{item.web_services_text_url} &rarr;</a>
      </div>
    </>
  );
};

export default CardService;
