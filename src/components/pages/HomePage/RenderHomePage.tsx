import React from 'react';
import HomePageInfo from './HomePageInfo';

const RenderHomePage = (): React.ReactElement => {
  return (
    <div className="home-page-wrapper">
      <h1>home</h1>
      <HomePageInfo />
    </div>
  );
};

export default RenderHomePage;
