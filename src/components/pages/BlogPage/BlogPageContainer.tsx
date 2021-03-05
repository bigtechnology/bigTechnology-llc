import React from 'react';
import { Header } from '../../common';
import RenderBlogPage from './RenderBlogPage';

const BlogPageContainer = (): React.ReactElement => {
  return (
    <div className="blog-page-container">
      <Header />
      <RenderBlogPage />
    </div>
  );
};

export default BlogPageContainer;
