import React from "react";

const CardTestimonial = ({ item }) => {
  return (
    <>
      <div
        id={item.testimonials_aid}
        className="testimonial w-full flex shrink-0 px-4"
      >
        <div className="bg-white p-8 rounded-xl shadow-md text-center w-full">
          <img
            src={item.testimonials_image}
            alt={item.testimonials_name}
            className="w-20 h-20 rounded-full mx-auto mb-4 object-cover "
          />
          <p className="text-gray italic mb-4">{item.testimonials_text}</p>
          <h4 className="font-bold">{item.testimonials_name}</h4>
          <p className="text-gray-500 text-sm">{item.testimonials_position}</p>
        </div>
      </div>
    </>
  );
};

export default CardTestimonial;
