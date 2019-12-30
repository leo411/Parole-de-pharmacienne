import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

import Banner from '../components/banner'
import banner from '../images/banner.jpeg'

class Contact extends React.Component {
    render() {
        const { data } = this.props

        return (
            <Layout location={this.props.location}>
                <SEO title="Contact" />
                <Banner title="Contact" image={banner} />
                <div class="row">
                    <div class="col-md-6">
                        <div>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum
                                dolore eu fugiat nulla pariatur. Excepteur sint
                                occaecat cupidatat non proident, sunt in culpa
                                qui officia deserunt mollit anim id est laborum.
                            </p>
                            <hr />
                            <p>Adresse</p>
                            <hr />
                            <hr />
                            <p>Téléphone</p>
                            <hr />
                            <hr />
                            <p>Mail</p>
                            <hr />
                        </div>
                    </div>
                    <div class="col-md-6">
                        <form>
                            <label>
                                Name:
                                <input type="text" name="name" />
                            </label>
                            <input type="submit" value="Submit" />
                        </form>
                    </div>
                </div>
            </Layout>
        )
    }
}

export default Contact

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
                }
            }
        }
    }
`
