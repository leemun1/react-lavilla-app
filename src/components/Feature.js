import React from "react";

const Feature = ({ feature }) => (
  <div className="feature">
    <svg className="feature__icon">
      <use xlinkHref={`img/sprite.svg#icon-${feature.icon}`} />
    </svg>
    <h4 className="heading-4 heading-4--dark">{feature.title}</h4>
    <p className="feature__text">{feature.description}</p>
  </div>
);

export default Feature;
