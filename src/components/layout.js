import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import Footer from '../components/footer'
import NavBar from '../components/navbar'

class Layout extends React.Component {
    render() {
        const { children } = this.props
        return (
            <Wrapper>
                <NavBar />
                <main>{children}</main>
                <Footer />
            </Wrapper>
        )
    }
}

const Wrapper = styled.div`
    min-height: 100vh;
`

export default Layout
