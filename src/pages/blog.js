import React from 'react'
import { Link, graphql } from 'gatsby'

import Bio from '../components/bio'
import Layout from '../components/layout'
import SEO from '../components/seo'

import Button from '../components/button'
import BlogList from '../components/blog-list'
import NavBar from '../components/navbar'

class Blog extends React.Component {
    render() {
        const { data } = this.props
        const siteTitle = data.site.siteMetadata.title
        const posts = data.allMdx.edges

        return (
            <Layout location={this.props.location} title={siteTitle}>
                <SEO title="All posts" />
                <Bio />
                <NavBar />
                <BlogList posts={posts} />
                <Link to="/">
                    <Button marginTop="85px">Go Home</Button>
                </Link>
            </Layout>
        )
    }
}

export default Blog

export const pageQuery = graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
        allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
            edges {
                node {
                    excerpt
                    fields {
                        slug
                    }
                    frontmatter {
                        date(formatString: "MMMM DD, YYYY")
                        title
                        description
                    }
                }
            }
        }
    }
`
