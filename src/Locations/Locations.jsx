import React from "react";
import "./Locations.css";

const Locations = () => {
  return (
    <>
      <div className="card-container">
        <div className="flip-card">
          <div className="flip-card-inner">
            <div
              className="flip-card-front"
              style={{
                backgroundImage: "url('././bg-image/karak3.jpeg')",
                backgroundSize: "cover",
              }}
            >
              <p>Karak</p>
            </div>
            <div className="flip-card-back">
              <ul>
                <li>D'Teroh Villa</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flip-card">
          <div className="flip-card-inner">
            <div
              className="flip-card-front"
              style={{
                backgroundImage: "url('././bg-image/bentong3.jpeg')",
                backgroundSize: "cover",
              }}
            >
              <p>Bentong</p>
            </div>
            <div className="flip-card-back">
              <ul>
                <li>Dewan Majlis Pembandaran Bentong</li>
                <li>Dewan Arena Bentong</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flip-card">
          <div className="flip-card-inner">
            <div
              className="flip-card-front"
              style={{
                backgroundImage: "url('././bg-image/raub.jpeg')",
                backgroundSize: "cover",
              }}
            >
              <p>Raub</p>
            </div>
            <div className="flip-card-back">
              <ul>
                <li>Dewan Jubli Perak</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div
              className="flip-card-front"
              style={{
                backgroundImage: "url('././bg-image/bukit-tinggi.jpeg')",
                backgroundSize: "cover",
              }}
            >
              <p>Bukit Tinggi</p>
            </div>
            <div className="flip-card-back">
              <ul></ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Locations;
