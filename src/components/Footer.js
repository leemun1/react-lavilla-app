import React from "react";

const Footer = () => (
  <footer className="footer">
    <ul className="nav">
      <li className="nav__item">
        <a href="#" className="nav__link">
          <span> Home</span>
        </a>
      </li>
      <li className="nav__item">
        <a href="#" className="nav__link">
          <span> Listings</span>
        </a>
      </li>
      <li className="nav__item">
        <a href="#" className="nav__link">
          <span> About La Villa</span>
        </a>
      </li>
      <li className="nav__item">
        <a href="#" className="nav__link">
          <span> Contact</span>
        </a>
      </li>
      <li className="nav__item">
        <a href="#" className="nav__link">
          <span> Careers</span>
        </a>
      </li>
    </ul>
    <p className="copyright">
      Create by <a href="https://github.com/leemun1">@leemun1</a>
    </p>
  </footer>
);

export default Footer;
