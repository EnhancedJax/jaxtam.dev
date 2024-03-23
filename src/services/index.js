import { request, gql } from 'graphql-request';

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
  
    `
    const result = await request('https://api-ap-northeast-1.hygraph.com/v2/clu02tgq901ar07wgk8vzgj2i/master', query);


    return result.postsConnection.edges;
}

export const getPostDetails = async (slug) => {
    const query = gql`
      query GetPostDetails($slug : String!) {
        post(where: {slug: $slug}) {
          title
          excerpt
          heroImage {
            url
          }
          author{
            name
          }
          createdAt
          slug
          content {
            raw
          }
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


export const getFeaturedPosts = async () => {
    const query = gql`
      query GetCategoryPost() {
        posts(where: {featuredPost: true}) {
          author {
            name
          }
          heroImage {
            url
          }
          title
          slug
          createdAt
        }
      }   
    `;

    const result = await request('https://api-ap-northeast-1.hygraph.com/v2/clu02tgq901ar07wgk8vzgj2i/master', query);

    return result.posts;
};

export const submitComment = async (obj) => {
    const result = await fetch('/api/comments', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(obj),
    });

    return result.json();
};

export const getComments = async (slug) => {
    const query = gql`
      query GetComments($slug:String!) {
        comments(where: {post: {slug:$slug}}){
          name
          createdAt
          comment
        }
      }
    `;

    const result = await request('https://api-ap-northeast-1.hygraph.com/v2/clu02tgq901ar07wgk8vzgj2i/master', query, { slug });

    return result.comments;
};