import React from 'react';

const HomePageInfo = (): React.ReactElement => {
  return (
    <>
      <div className="home-top-section">
        <h1>Making your life easier through technology.</h1>
        <button>Connect with us</button>
      </div>

      <div className="home-mid-section">
        <div className="home-mid-left">
          <p>Hi, We&aposre bigTechnology</p>
          <p>
            We bring your business to life all while saving you time and money.
          </p>
        </div>
        <div className="home-mid-right-sefction">
          <p>Our Team of experts can help your business grow.</p>
          <p>
            We build everything from elegant landing pages to business tools
            that make your days more efficient
          </p>
        </div>
      </div>

      <div className="home-bottom-section">
        <h2>What People Say</h2>
        <div className="carousel">
          <p>carousel here</p>
        </div>
      </div>
    </>
  );
};

export default HomePageInfo;
