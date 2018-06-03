import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="sidebar">Sidebar</div>
        <header className="header">Header</header>
        <div className="realtors">Meet the team</div>
        <section className="features">
          <div className="feature">
            <svg className="feature__icon">
              <use xlinkHref="img/sprite.svg#icon-global" />
            </svg>
            <h4 className="heading-4 heading-4--dark">
              World's best luxury homes
            </h4>
            <p className="feature__text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              distinctio necessitatibus pariatur voluptatibus.
            </p>
          </div>

          <div className="feature">
            <svg className="feature__icon">
              <use xlinkHref="img/sprite.svg#icon-trophy" />
            </svg>
            <h4 className="heading-4 heading-4--dark">
              Only the best properties
            </h4>
            <p className="feature__text">
              Voluptatum mollitia quae. Vero ipsum sapiente molestias accusamus
              rerum sed a eligendi aut quia.
            </p>
          </div>

          <div className="feature">
            <svg className="feature__icon">
              <use xlinkHref="img/sprite.svg#icon-map-pin" />
            </svg>
            <h4 className="heading-4 heading-4--dark">Top locations</h4>
            <p className="feature__text">
              Tenetur distinctio necessitatibus pariatur voluptatibus quidem
              consequatur harum.
            </p>
          </div>

          <div className="feature">
            <svg className="feature__icon">
              <use xlinkHref="img/sprite.svg#icon-key" />
            </svg>
            <h4 className="heading-4 heading-4--dark">Immediate ownership</h4>
            <p className="feature__text">
              Vero ipsum sapiente molestias accusamus rerum. Lorem, ipsum dolor
              sit amet consectetur adipisicing elit.
            </p>
          </div>

          <div className="feature">
            <svg className="feature__icon">
              <use xlinkHref="img/sprite.svg#icon-presentation" />
            </svg>
            <h4 className="heading-4 heading-4--dark">Market's best agents</h4>
            <p className="feature__text">
              Quidem consequatur harum, voluptatum mollitia quae. Tenetur
              distinctio necessitatibus pariatur voluptatibus.
            </p>
          </div>

          <div className="feature">
            <svg className="feature__icon">
              <use xlinkHref="img/sprite.svg#icon-lock" />
            </svg>
            <h4 className="heading-4 heading-4--dark">Secure transaction</h4>
            <p className="feature__text">
              Pariatur voluptatibus quidem consequatur harum, voluptatum
              mollitia quae.
            </p>
          </div>
        </section>
        <div className="story__pictures">story pictures</div>
        <div className="story__content">Story content</div>
        <section className="homes">homes</section>
        <section className="gallery">gallery</section>
        <footer className="footer">footer</footer>
      </div>
    );
  }
}

export default App;
