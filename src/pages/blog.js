import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

import Button from '../components/button'
import BlogList from '../components/blog-list'
import Banner from '../components/banner'
import banner from '../images/banner.jpeg'
import PostCategoriesNav from '../components/postcategoriesnav'

class Blog extends React.Component {
    render() {
        const { data } = this.props
        const siteTitle = data.site.siteMetadata.title
        const posts = data.allMdx.edges

        return (
            <Layout location={this.props.location}>
                <SEO title="All posts" />
                <Banner title="All posts" image={banner} />
                <PostCategoriesNav />
                <BlogList posts={posts} />
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
