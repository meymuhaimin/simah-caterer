import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="even">
        <img src={"././about-us-image/our-story.jpeg"} alt="tigr" />
        <div className="text">
          <h1 data-text="Our Story"> </h1>
          <p>
            We are a premier catering service, proudly founded 12 years ago in
            the beautiful city of Karak. Over the years, we have established
            ourselves as a trusted name in the catering industry, providing
            exceptional culinary experiences for various events and occasions.
            Our commitment to quality, creativity, and customer satisfaction has
            earned us a loyal clientele and an outstanding reputation.
          </p>
        </div>
      </div>
      <div className="odd">
        <img src={"././about-us-image/dome.jpeg"} alt="tigr" />
        <div className="text">
          <h1 data-text="Traditional Delights"> </h1>
          <p>
            At our catering service, we believe that great food is the heart of
            any memorable event. Our team of talented chefs and culinary experts
            are dedicated to creating traditional culinary delights that not
            only please the palate but also leave a lasting impression on your
            guests. We honor the rich heritage of Karak and its surrounding
            regions by offering a diverse menu of traditional dishes, prepared
            with authentic recipes and using the finest locally sourced
            ingredients. From timeless favorites to regional specialties, our
            menu reflects the essence of our culture and traditions.
          </p>
          <Link to="/Menu">
            <button>Go to Menu</button>
          </Link>
        </div>
      </div>
      <div className="even">
        <img src={"././about-us-image/buffet.jpeg"} alt="tigr" />
        <div className="text">
          <h1 data-text="Personalized Service"> </h1>
          <p>
            We understand that every event is unique, and we take pride in our
            ability to deliver personalized service tailored to your specific
            needs. Whether you are hosting a corporate gathering, wedding
            reception, birthday celebration, or any other special occasion, our
            experienced event planners will work closely with you to create a
            customized menu and ambiance that reflects your vision. We pay
            meticulous attention to detail, ensuring that every aspect of your
            event is seamlessly executed, leaving you free to enjoy your special
            day.
          </p>
        </div>
      </div>
      <div className="odd">
        <img src={"././about-us-image/pelamin.jpeg"} alt="tigr" />
        <div className="text">
          <h1 data-text="Unforgettable Events"> </h1>
          <p>
            Over the years, we have had the privilege of being part of countless
            unforgettable events. From intimate gatherings to large-scale
            celebrations, we have the expertise and resources to handle events
            of any size and complexity. Our dedicated team of professionals will
            take care of all the logistics, including setup, decoration, and
            service, allowing you to relax and enjoy the company of your guests.
            We are committed to exceeding your expectations and making your
            event truly exceptional.
          </p>
          <Link to="/Portfolio">
            <button>Go to Portfolio</button>
          </Link>
        </div>
      </div>
      <div className="even">
        <img src={"././about-us-image/staff.jpeg"} alt="tigr" />
        <div className="text">
          <h1 data-text="Professional Staff"> </h1>
          <p>
            Our success is attributed to our team of professional and
            experienced staff. From our chefs to our event planners and service
            personnel, we have assembled a team of passionate individuals who
            are dedicated to delivering excellence. Our chefs bring a wealth of
            culinary expertise and creativity to the table, ensuring that every
            dish is crafted with precision and artistry. Our event planners are
            skilled in coordinating events of all sizes and are adept at
            customizing our services to meet your specific requirements. Our
            service staff is attentive, friendly, and trained to provide
            impeccable service, ensuring that your guests are well taken care of
            throughout the event.
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
