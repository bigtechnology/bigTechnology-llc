import React from 'react';
import { Header } from '../../common';
import { Footer } from '../../common/Footer';
import RenderHomePage from './RenderHomePage';

const HomePageContainer = (): React.ReactElement => {
  return (
    <div className="home-page-container">
      <Header />
      <RenderHomePage />
      <Footer />
    </div>
  );
};

export default HomePageContainer;
