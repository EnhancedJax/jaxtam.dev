import { gql, request } from "graphql-request";
import { API_URL } from "../utils/constants";

export const getNotes = async () => {
  const query = gql`
    query GetNotes {
      notesConnection(orderBy: createdAt_DESC) {
        edges {
          node {
            isWorkInProgress
            semester
            title
            code
            colorCode
            icon
            pdf {
              fileName
              updatedAt
              size
              url
            }
          }
        }
      }
    }
  `;
  const result = await request(API_URL, query);

  return result.notesConnection.edges;
};

export const getPosts = async () => {
  const query = gql`
    query MyQuery {
      postsConnection(orderBy: publishedAt_DESC) {
        edges {
          node {
            excerpt
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

export const getOtherPosts = async (slug) => {
  const query = gql`
    query GetOtherPosts($slug: String!) {
      postsConnection(orderBy: publishedAt_DESC, where: { slug_not: $slug }) {
        edges {
          node {
            createdAt
            title
            slug
            updatedAt
            heroImage {
              url
            }
            categories {
              slug
              type
            }
          }
        }
      }
    }
  `;
  const result = await request(API_URL, query, { slug });

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

export const getHomePage = async () => {
  const query = gql`
    query GetLatest3Work {
      postsConnection(
        orderBy: publishedAt_DESC
        where: { categories_every: { slug_contains: "project" } }
        first: 3
      ) {
        edges {
          node {
            slug
            heroImage {
              url
            }
            title
          }
        }
      }
      projectsConnection(first: 10, orderBy: monthYear_DESC) {
        edges {
          node {
            monthYear
            name
            techs
            link
            description
            image {
              url
            }
          }
        }
      }
      experiencesConnection(first: 10, orderBy: startDate_DESC) {
        edges {
          node {
            company
            position
            description
            tags
            link
            timeline
            startDate
          }
        }
      }
    }
  `;

  const result = await request(API_URL, query);

  return {
    latestWorks: result.postsConnection.edges,
    projects: result.projectsConnection.edges,
    experiences: result.experiencesConnection.edges,
  };
};
