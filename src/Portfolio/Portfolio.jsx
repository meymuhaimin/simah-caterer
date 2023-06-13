import React from "react";
import "./Portfolio.css";

const Portfolio = () => {
  return (
    <>
      <div className="portfolio">
        <h2>Majlis Berbuka Puasa</h2>
        <p>
          During the last Ramadan, as a caterer, we had the privilege of serving
          Al-Sultan Abdullah Ri'ayatuddin Al-Mustafa Billah Shah ibni Almarhum
          Sultan Haji Ahmad Shah Al-Musta'in Billah, Kebawah Duli Yang Maha
          Mulia Seri Paduka Baginda Raja Permaisuri Agong Tunku Hajah Azizah
          Aminah Maimunah Iskandariah Binti Almarhum Al-Mutawakkil Alallah
          Sultan Iskandar Al-Haj, Zahid Hamidi, and Tengku Hassanal on three
          different days for buka puasa.
        </p>
        <div className="gallery">
          <img src="././portfolio/raja.jpeg" alt="1" />
          <img src="././portfolio/buka-puasa-raja.jpeg" alt="2" />
          <img src="././portfolio/buka-puasa-raja2.jpeg" alt="3" />
          <img src="././portfolio/zahid-hamidi.jpeg" alt="4" />
        </div>
      </div>
      <div className="portfolio">
        <h2>Majlis Jamuan Kesyukuran Dun Pelangai</h2>
        <p>
          After the general election, UMNO's DUN Pelangai branch organized a
          celebratory event to commemorate their success. The event aimed to
          bring together party members, supporters, and key figures to express
          gratitude for their collective efforts. The celebration featured a
          lively atmosphere with music, speeches, and engaging activities. The
          venue was decorated in UMNO's signature colors, showcasing the party's
          identity and pride.{" "}
        </p>
        <div className="gallery">
          <img src="././portfolio/mb.jpeg" alt="1" />
          <img src="././portfolio/pelangai.jpeg" alt="2" />
        </div>
      </div>
    </>
  );
};

export default Portfolio;
