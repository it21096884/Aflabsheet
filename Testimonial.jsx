import React from "react";

const Testimonial = ({ quote, name, imageSrc }) => {
  return (
    <div className="testimonial">
      <p>{quote}</p>
      <div className="testimonial-info">
        <img src={imageSrc} alt={name} />
        <p>{name}</p>
      </div>
    </div>
  );
};

export default Testimonial;