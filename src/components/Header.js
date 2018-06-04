import React from "react";

const Header = () => (
  <header className="header">
    <div className="header__brand">
      <span>La Villa</span>
    </div>
    <h3 className="heading-3">The ultimate personal freedom</h3>
    <h1 className="heading-1">Brought to you by the professionals</h1>
    <button className="button header__button">View our listings</button>
    <div className="header__seenon-text">As seen on</div>
    <div className="header__seenon-logos">
      <img src="img/logo-bbc.png" alt="seen on logo" />
      <img src="img/logo-forbes.png" alt="seen on logo" />
      <img src="img/logo-techcrunch.png" alt="seen on logo" />
      <img src="img/logo-bi.png" alt="seen on logo" />
    </div>
  </header>
);

export default Header;
