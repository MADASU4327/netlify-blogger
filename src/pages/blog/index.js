import React from 'react';
import { graphql, Link } from 'gatsby';

export default function Blog({ data }) {
  const posts = data.allMarkdownRemark.nodes;

  return (
    <div>
      <h1>Blog</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.fields.slug}>
            <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          title
        }
        fields {
          slug
        }
      }
    }
  }
`;