import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

const HomePage = ({data}) => { 
  console.log(data)
    return (
      <Layout>
        <div style={{ background: '#fff' }}>
          <div className="wrapper">
            <h2 className="section">Recent articles</h2>
            <ul className="section">
              {data.allContentstackBlogpost.edges.map(({ node }) => {
                return (
                  <li key={node.url}>
                    <a href={node.url}><h3>{node.title}</h3></a>
                    <span>{node.publish_details.time}</span>
                    {node.excerpt}
                    <ul>
                    {node.tags.map((tag) => {
                      return (<li>{tag}</li>)
                    })}
                    </ul>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </Layout>
    )
  }

export default HomePage

export const pageQuery = graphql`
 query HomeQuery {
  allContentstackBlogpost(sort: {fields: [title], order: DESC}) {
    edges {
      node {
        title
        url
        publish_details {
          time(formatString: "MMMM Do, YYYY")
        }
        tags
        excerpt
      }
    }
  }
}
`
