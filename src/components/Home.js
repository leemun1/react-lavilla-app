import React from "react";
import numeral from "numeral";

const Home = ({ home }) => (
  <div className="home">
    <img src={home.img} alt="house" className="home__img" />
    <svg className="home__like">
      <use xlinkHref="img/sprite.svg#icon-heart-full" />
    </svg>
    <h5 className="home__name">{home.name}</h5>
    <div className="home__location">
      <svg>
        <use xlinkHref="img/sprite.svg#icon-map-pin" />
      </svg>
      <p>{home.location}</p>
    </div>
    <div className="home__bedrooms">
      <svg>
        <use xlinkHref="img/sprite.svg#icon-profile-male" />
      </svg>
      <p>{home.bedrooms} bedrooms</p>
    </div>
    <div className="home__area">
      <svg>
        <use xlinkHref="img/sprite.svg#icon-expand" />
      </svg>
      <p>
        {home.area} m<sup>2</sup>
      </p>
    </div>
    <div className="home__price">
      <svg>
        <use xlinkHref="img/sprite.svg#icon-key" />
      </svg>
      <p>{numeral(home.price).format("$ 0,0[.]00")}</p>
    </div>
    <button className="button home__button">Contact Agent</button>
  </div>
);

export default Home;
