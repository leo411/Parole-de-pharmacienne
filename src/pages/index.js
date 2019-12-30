import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Bio from '../components/bio'
import Banner from '../components/banner'
import BlogList from '../components/blog-list'

import banner from '../images/banner.jpeg'

class IndexPage extends React.Component {
    render() {
        const { data } = this.props
        const posts = data.allMdx.edges
        return (
            <Layout location={this.props.location}>
                <SEO
                    title="Home"
                    keywords={[`blog`, `gatsby`, `javascript`, `react`]}
                />
                <Banner title="Parole de pharmacienne" image={banner} />
                <div class="container-fluid">
                    <h3 class="my-2" style={{ paddingLeft: '3rem' }}>
                        Conseils
                    </h3>
                    <hr />
                    <div class="row mb-2">
                        <BlogList
                            category="conseils"
                            posts={posts}
                            columnWidth={3}
                        />
                    </div>
                </div>
                <div class="row mb-2">
                    <div class="col-md-6">
                        <h3 class="my-2" style={{ paddingLeft: '3rem' }}>
                            News
                        </h3>
                        <hr />
                        <div class="row mb-2 pl-3 mr-4">
                            <BlogList
                                category="news"
                                posts={posts}
                                columnWidth={12}
                            />
                        </div>
                    </div>
                    <div class="col-md-6">
                        <h3 class="my-2" style={{ paddingLeft: '3rem' }}>
                            About
                        </h3>
                        <hr />
                        <Bio />
                    </div>
                </div>
            </Layout>
        )
    }
}
export default IndexPage
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
