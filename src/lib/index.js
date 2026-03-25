import { gql, request } from "graphql-request";
import { API_URL } from "../utils/constants";
import { homeContent } from "../data/home-content";

export const getPosts = async () => {
  const query = gql`
    query MyQuery {
      postsConnection(orderBy: publishedAt_DESC) {
        edges {
          node {
            createdAt
            title
            slug
            updatedAt
            categories {
              slug
              type
            }
          }
        }
      }
    }
  `;
  const result = await request(API_URL, query);

  return result.postsConnection.edges;
};

export const getPostDetails = async (slug) => {
  const query = gql`
    query GetPostDetails($slug: String!) {
      post(where: { slug: $slug }) {
        title
        description
        heroImage {
          url
        }
        createdAt
        slug
        content
        categories {
          type
          slug
        }
        props
      }
    }
  `;

  const result = await request(API_URL, query, { slug });

  return result.post;
};

export const getFeaturedPostSlug = async () => {
  const query = gql`
    query GetFeaturedPostSlug {
      postsConnection(where: { isFeatured: true }) {
        edges {
          node {
            slug
          }
        }
      }
    }
  `;

  const result = await request(API_URL, query);

  return result.postsConnection.edges[0].node.slug;
};

/** Home page only: baked JSON from Hygraph. Run `npm run sync:home` to refresh. */
export const getHomePage = async () => homeContent;
