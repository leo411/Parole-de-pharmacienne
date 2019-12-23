import React from 'react'
import { Link } from 'gatsby'
import Button from '../components/button'
import NavBar from '../components/navbar'
import Footer from '../components/footer'

const About = () => (
    <div>
        <NavBar></NavBar>
        <strong style={{ paddingLeft: 50 }}>About</strong>
        <p style={{ paddingTop: 15, paddingLeft: 50, paddingRight: 50 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <Link to="/">
            <Button marginTop="85px">Go Home</Button>
        </Link>
        <Footer></Footer>
    </div>
)

export default About
