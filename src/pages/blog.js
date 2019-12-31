import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

import BlogList from '../components/blog-list'
import Banner from '../components/banner'
import PostCategoriesNav from '../components/postcategoriesnav'

import banner from '../images/banner.jpeg'
import banner1 from '../images/banner1.jpg'

class Blog extends React.Component {
    render() {
        const { data } = this.props
        const posts = data.allMdx.edges

        return (
            <Layout location={this.props.location}>
                <SEO title="All posts" />
                <Banner title="All posts" image={banner1} />
                <PostCategoriesNav />
                <div class="row mb-2 justify-content-center">
                    <BlogList posts={posts} columnWidth={3} />
                </div>
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
                        categories
                        subCategories
                        featuredImage
                    }
                }
            }
        }
    }
`
