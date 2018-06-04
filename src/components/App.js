import React, { Component } from "react";

import Sidebar from "./Sidebar";
import Header from "./Header";
import Realtors from "./Realtors";
import Feature from "./Feature";
import Home from "./Home";
import StoryContent from "./StoryContent";
import Footer from "./Footer";

import seed from "../seed";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Sidebar />
        <Header />
        <Realtors />
        <section className="features">
          {seed.features.map(feature => <Feature feature={feature} />)}
        </section>
        <div className="story__picture" />
        <StoryContent />
        <section className="homes">
          {seed.homes.map(home => <Home home={home} />)}
        </section>
        <Footer />
      </div>
    );
  }
}

export default App;
