import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

const BlogPostTemplate = ({data}) => {

    return (
      <Layout>
        <div style={{ background: '#fff' }}>
          <Helmet title={`${data.contentstackBlogpost.title}`} />
          <div className="wrapper">
            <h1 className="section-headline">{data.contentstackBlogpost.title}</h1>
            <p
              style={{
                display: 'block',
              }}
            >
              {data.contentstackBlogpost.publish_details.time}
            </p>
            <div
              dangerouslySetInnerHTML={{
                __html: data.contentstackBlogpost.body
              }}
            />
          </div>
        </div>
      </Layout>
    )
  }

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    contentstackBlogpost(url: {eq: $slug}) {
      title
      publish_details {
        time(formatString: "MMMM Do, YYYY")
    }
      body
    }
  }
`