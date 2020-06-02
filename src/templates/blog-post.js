import React from 'react';
import { Link, graphql } from 'gatsby';

function Template({ data }) {
  const post = data.markdownRemark;

  return (
    <div>
      <Link to="/blog">Go Back</Link>
      <hr />
      <h1>{post.frontmatter.title}</h1>
      <h4>
        Posted by
        {' '}
        {post.frontmatter.author}
        {' '}
        on
        {' '}
        {post.frontmatter.date}
      </h4>
      {/* eslint-disable-next-line react/no-danger */}
      <div dangerouslySetInnerHTML={{ __html: post.html }} />

    </div>
  );
}

export default Template;

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: {eq: $path } }){
      html
      frontmatter {
        path
        title
        author
        date
      }
    }
  }
`;
