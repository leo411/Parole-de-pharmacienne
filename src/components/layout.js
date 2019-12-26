import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import Footer from '../components/footer'

class Layout extends React.Component {
    render() {
        const { location, title, children } = this.props
        const rootPath = `${__PATH_PREFIX__}/`
        const blogPath = `${__PATH_PREFIX__}/blog/`
        let header

        if (location.pathname === rootPath || location.pathname === blogPath) {
            header = (
                <h1
                    style={{
                        marginBottom: 0,
                        marginTop: 0
                    }}
                >
                    <Link
                        style={{
                            boxShadow: `none`,
                            textDecoration: `none`,
                            color: `inherit`
                        }}
                        to={location.pathname === blogPath ? `/blog/` : `/`}
                    >
                        {title}
                    </Link>
                </h1>
            )
        } else {
            header = (
                <h3
                    style={{
                        fontFamily: `Montserrat, sans-serif`,
                        marginTop: 0
                    }}
                >
                    <Link
                        style={{
                            boxShadow: `none`,
                            textDecoration: `none`,
                            color: `inherit`
                        }}
                        to={`/blog/`}
                    >
                        {title}
                    </Link>
                </h3>
            )
        }
        return (
            <Wrapper>
                <div
                    style={{
                        marginLeft: `auto`,
                        marginRight: `auto`,
                        maxWidth: '500px',
                        padding: `1px`
                    }}
                >
                    <header>{header}</header>
                    <main>{children}</main>
                </div>
                <Footer></Footer>
            </Wrapper>
        )
    }
}

const Wrapper = styled.div`
    min-height: 100vh;
`

export default Layout
