import React, { useEffect } from "react";
import "./History.css"; 

function History() {
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

    const historySection = document.querySelector(".history-text");
    if (historySection) {
      observer.observe(historySection);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="history-section">
      <div className="history-text">
        Halloween's origins date back over 2,000 years to the ancient Celtic
        festival of Samhain, celebrated on November 1. The Celts, who lived in
        Ireland, the United Kingdom, and northern France, believed that the
        night before the new year (October 31) marked a time when the boundary
        between the worlds of the living and the dead became blurred. On the
        night of Samhain, people gathered to light bonfires and wear costumes to
        ward off roaming ghosts. Over the centuries, these customs evolved, and
        Halloween merged with other cultural and religious traditions, giving
        birth to the modern holiday celebrated today.
      </div>
    </div>
  );
}

export default History;
