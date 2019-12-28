import React from 'react'
import { Link, graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import Layout from '../components/layout'
import SEO from '../components/seo'

class BlogPostTemplate extends React.Component {
    render() {
        const post = this.props.data.mdx
        const { previous, next } = this.props.pageContext

        return (
            <Layout location={this.props.location}>
                <SEO
                    title={post.frontmatter.title}
                    description={post.frontmatter.description || post.excerpt}
                />
                <div>
                    <h1>{post.frontmatter.title}</h1>
                    <p
                        style={{
                            display: `block`,
                            marginBottom: 0,
                            marginTop: 0
                        }}
                    >
                        {post.frontmatter.date}
                    </p>
                    <img src={post.frontmatter.featuredImage} alt="" />
                    <MDXRenderer>{post.body}</MDXRenderer>
                    <hr />
                </div>

                <ul
                    style={{
                        display: `flex`,
                        flexWrap: `wrap`,
                        justifyContent: `space-between`,
                        listStyle: `none`,
                        padding: 0
                    }}
                >
                    <li>
                        {previous && (
                            <Link to={`blog${previous.fields.slug}`} rel="prev">
                                ← {previous.frontmatter.title}
                            </Link>
                        )}
                    </li>
                    <li>
                        {next && (
                            <Link to={`blog${next.fields.slug}`} rel="next">
                                {next.frontmatter.title} →
                            </Link>
                        )}
                    </li>
                </ul>
            </Layout>
        )
    }
}

export default BlogPostTemplate

export const pageQuery = graphql`
    query BlogPostBySlug($slug: String!) {
        site {
            siteMetadata {
                title
                author
            }
        }
        mdx(fields: { slug: { eq: $slug } }) {
            id
            excerpt(pruneLength: 160)
            body
            frontmatter {
                title
                date(formatString: "DD MMMM, YYYY")
                description
                featuredImage
            }
        }
    }
`
