import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import Layout from '../components/layout'

class BlogPostTemplate extends React.Component {
  render() {
    const post = get(this.props, 'data.contentstackBlogpost')
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')

    return (
      <Layout location={this.props.location}>
        <div style={{ background: '#fff' }}>
          <Helmet title={`${post.title} | ${siteTitle}`} />
          <div className="wrapper">
            <h1 className="section-headline">{post.title}</h1>
            <p
              style={{
                display: 'block',
              }}
            >
              {post.publish_details.time}
            </p>
            <div
              dangerouslySetInnerHTML={{
                __html: post.body
              }}
            />
          </div>
        </div>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    contentstackBlogpost(url: {eq: $slug}) {
      title
      publish_details {
        time
      }
      body
    }
  }
`