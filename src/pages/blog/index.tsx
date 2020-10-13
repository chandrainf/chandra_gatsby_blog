import React from 'react';
import { graphql } from 'gatsby';
import { Layout, Row, Col } from 'antd';
import Header from '../../components/PageLayout/Header';

import SidebarWrapper from '../../components/PageLayout/Sidebar';
import PostCard from '../../components/PostCard';
import SEO from '../../components/Seo';

type NodeType = {
  node: {
    frontmatter: {
      path: string;
      cover: {
        childImageSharp: {
          fluid: {
            src: string;
          };
        };
      };
      date: string;
      title: string;
      excerpt: string;
      tags: string[];
    };
  };
};

type BlogProps = {
  data: {
    allMarkdownRemark: {
      edges: NodeType[];
    };
  };
};

const Blog = ({ data }: BlogProps) => (
  <Layout className="outerPadding">
    <Layout className="container">
      <Header />
      <SEO
        title="Blog"
        description="I like blogging about various web technologies and other stuff related to
          javascript and other trends like graphql, prisma etc. This blog expresses my views of various technologies
          and scenarios I have come across in realtime."
        path="blog"
      />
      <SidebarWrapper>
        <div className="marginTopTitle">
          <h1 className="titleSeparate">Blog</h1>
        </div>
        <Row gutter={[20, 20]}>
          {data.allMarkdownRemark &&
            data.allMarkdownRemark.edges.map((val, key) => (
              // eslint-disable-next-line react/no-array-index-key
              <Col key={key} xs={24} sm={24} md={12} lg={8}>
                <PostCard data={val} />
              </Col>
            ))}
        </Row>
      </SidebarWrapper>
    </Layout>
  </Layout>
);

export const query = graphql`
  {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fileAbsolutePath: { regex: "/index.md$/" } }
    ) {
      edges {
        node {
          frontmatter {
            date
            path
            title
            tags
            excerpt
            cover {
              childImageSharp {
                fluid(maxWidth: 288) {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default Blog;
