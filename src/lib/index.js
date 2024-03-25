import { request, gql } from 'graphql-request';

export const getNotes = async () => {
  const query = gql`
  query GetNotes {
    notesConnection(orderBy: isWorkInProgress_ASC) {
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
  const result = await request('https://api-ap-northeast-1.hygraph.com/v2/clu02tgq901ar07wgk8vzgj2i/master', query);

  return result.notesConnection.edges;
}

export const getPosts = async () => {
  const query = gql`
  query MyQuery {
    postsConnection(orderBy: publishedAt_DESC) {
      edges {
        node {
          author {
            name
            id
          }
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
  
    `
  const result = await request('https://api-ap-northeast-1.hygraph.com/v2/clu02tgq901ar07wgk8vzgj2i/master', query);


  return result.postsConnection.edges;
}

export const getOtherPosts = async (slug) => {
  const query = gql`
  query GetOtherPosts($slug : String!) {
    postsConnection(orderBy: publishedAt_DESC, where: {slug_not: $slug}) {
      edges {
        node {
          author {
            name
            id
          }
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
  const result = await request('https://api-ap-northeast-1.hygraph.com/v2/clu02tgq901ar07wgk8vzgj2i/master', query, { slug });

  return result.postsConnection.edges;
};

export const getPostDetails = async (slug) => {
  const query = gql`
      query GetPostDetails($slug : String!) {
        post(where: {slug: $slug}) {
          title
          heroImage {
            url
          }
          author{
            name
          }
          createdAt
          slug
          content
          categories {
            type
            slug
          }
        }
      }
    `;

  const result = await request('https://api-ap-northeast-1.hygraph.com/v2/clu02tgq901ar07wgk8vzgj2i/master', query, { slug });

  return result.post;
};


export const getFeaturedPostSlug = async () => {
  const query = gql`
  query GetFeaturedPostSlug {
    postsConnection(where: {isFeatured: true}) {
      edges {
        node {
          slug
        }
      }
    }
  }
  
    `;

  const result = await request('https://api-ap-northeast-1.hygraph.com/v2/clu02tgq901ar07wgk8vzgj2i/master', query);

  return result.postsConnection.edges[0].node.slug;
};
