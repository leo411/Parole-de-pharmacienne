/**
 * Bio component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import decomaison from '../images/decomaison.jpg'

function Bio() {
    return (
        <StaticQuery
            query={bioQuery}
            render={data => {
                const { author, social } = data.site.siteMetadata
                return (
                    <Container>
                        {/* <Image
                            fixed={data.avatar.childImageSharp.fixed}
                            alt={author}
                            style={{
                                marginRight: 0,
                                marginBottom: 0,
                                minWidth: 50,
                                borderRadius: `100%`
                            }}
                            imgStyle={{
                                borderRadius: `50%`
                            }}
                        /> */}
                        <div>
                            <div
                                style={{
                                    marginRight: 0,
                                    marginBottom: 0,
                                    minWidth: 50,
                                    borderRadius: `100%`
                                }}
                            >
                                <img
                                    src={decomaison}
                                    imgStyle={{
                                        borderRadius: `50%`
                                    }}
                                />
                            </div>
                            <p>
                                Docteur en pharmacie. Maman de 3 grands enfants.
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat.
                            </p>
                        </div>
                    </Container>
                )
            }}
        />
    )
}

const bioQuery = graphql`
    query BioQuery {
        avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
            childImageSharp {
                fixed(width: 50, height: 50) {
                    ...GatsbyImageSharpFixed
                }
            }
        }
        site {
            siteMetadata {
                author
                social {
                    twitter
                }
            }
        }
    }
`

const Container = styled.div`
    display: flex;
`

export default Bio
