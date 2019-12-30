import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

import BlogList from '../components/blog-list'
import Banner from '../components/banner'
import banner from '../images/banner.jpeg'
import PostCategoriesNav from '../components/postcategoriesnav'

class BlogNews extends React.Component {
    render() {
        const { data } = this.props
        const posts = data.allMdx.edges

        return (
            <Layout location={this.props.location}>
                <SEO title="News" />
                <Banner title="News" image={banner} />
                <PostCategoriesNav />
                <div class="row mb-2 justify-content-center">
                    <BlogList posts={posts} columnWidth={3} category={'news'} />
                </div>
            </Layout>
        )
    }
}

export default BlogNews

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
