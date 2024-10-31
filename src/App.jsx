import React, { useEffect } from "react";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import History from "./Components/History";
import Celeberate from "./Components/Celeberate";
import "./App.css";

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          } else {
            entry.target.classList.remove("in-view");
          }
        });
      },
      { threshold: 0.1 }
    );

    const celebrateSection = document.querySelector("#celebration");
    if (celebrateSection) {
      observer.observe(celebrateSection);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="maincontainer">
      <Navbar />
      <section id="about" className="full-width-section">
        <About />
      </section>
      <section id="history" className="full-width-section">
        <History />
      </section>
      <section id="celebration" className="full-width-section celebrate-section">
        <Celeberate />
      </section>
    </div>
  );
}

export default App;
