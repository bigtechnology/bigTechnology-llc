import React from 'react';
import { Link } from 'react-router-dom';

const HomePageInfo = (): React.ReactElement => {
  return (
    <>
      <div className="home-top-section">
        <h1>Making your life easier through technology.</h1>
        <Link className="home-contact-btn" to="/contact">
          Connect with us
        </Link>
      </div>

      <div className="home-mid-section">
        <div className="home-mid-left">
          <p className="welcome-message">Hi, We&apos;re bigTechnology</p>
          <p className="mission-message">
            We bring your business to life all while saving you the hassle.
          </p>
        </div>
        <div className="home-mid-right-section">
          <p>Our Team of experts can help your business grow.</p>
          <p>
            We build everything from elegant landing pages to business tools
            that make your days more efficient.
          </p>
        </div>
      </div>

      {/* <div className="home-bottom-section">
        <h2>What People Say</h2>
        <div className="carousel">
          <p>carousel here</p>
        </div>
      </div> */}
    </>
  );
};

export default HomePageInfo;
