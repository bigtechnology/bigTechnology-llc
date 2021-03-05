import React from 'react';
import { Header } from '../../common';
import RenderHomePage from './RenderHomePage';

const HomePageContainer = (): React.ReactElement => {
  return (
    <div className="home-page-container">
      <Header />
      <RenderHomePage />
    </div>
  );
};

export default HomePageContainer;
