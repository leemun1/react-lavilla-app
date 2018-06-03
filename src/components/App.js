import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="sidebar">Sidebar</div>
        <header className="header">Header</header>
        <div className="realtors">Meet the team</div>
        <section className="features">Features</section>
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
