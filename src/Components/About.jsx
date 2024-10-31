import React, { useEffect } from "react";
import "./About.css"; 

function About() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("zoom-in");
          } else {
            entry.target.classList.remove("zoom-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    const aboutSection = document.querySelector(".about-text");
    if (aboutSection) {
      observer.observe(aboutSection);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="about-section">
      <div className="about-text">
        Halloween, a holiday observed on October 31 and noted for its pagan and
        religious roots and secular traditions. In much of Europe and most of
        North America, observance of Halloween is largely nonreligious,
        celebrated with parties, spooky costumes, jack-o’-lanterns, pumpkin
        carvings, and the giving of candy. But the holiday also marks the
        beginning of Allhallotide, a three-day Christian triduum dedicated to
        remembering the dead that begins with Halloween (October 31) and is
        followed by All Saints’ Day (November 1) and All Souls’ Day (November
        2).
      </div>
    </div>
  );
}

export default About;
