import React from 'react'
import coeurNoir from '../images/coeurnoircopie.png'
import styled from 'styled-components'

const Footer = () => (
    <div style={{ textAlign: 'center', margin: 24 }}>
        © {new Date().getFullYear()}, Built with
        {` `}
        <img src={coeurNoir} /> in Paris
    </div>
)

export default Footer
