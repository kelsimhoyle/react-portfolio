import React from 'react';
import NavBar from "./components/Nav";
import LandingPage from "./components/LandingPage";
import About from "./components/About"
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
    <NavBar />
   <LandingPage />
   <About />
   <Portfolio />
   <Contact />
   <Footer />
   </>
  );
}

export default App;
