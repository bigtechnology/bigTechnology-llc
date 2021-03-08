import React from 'react';
import { Header } from '../../common';
import { Footer } from '../../common/Footer';
import RenderBlogPage from './RenderBlogPage';

const BlogPageContainer = (): React.ReactElement => {
  return (
    <div className="blog-page-container">
      <Header />
      <RenderBlogPage />
      <Footer />
    </div>
  );
};

export default BlogPageContainer;
