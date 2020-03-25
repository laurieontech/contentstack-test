const Promise = require('bluebird')
const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const blogPost = path.resolve('./src/templates/blog-post.js')
    resolve(
      graphql(
        `
          {
            allContentstackBlogpost {
              edges {
                node {
                  title
                  url
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        const posts = result.data.allContentstackBlogpost.edges
        posts.forEach(post => {
          createPage({
            path: `/blog/${post.node.url}/`,
            component: blogPost,
            context: {
              slug: post.node.url,
            },
          })
        })
      })
    )
  })
}