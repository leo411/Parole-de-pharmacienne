import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

import NavBar from '../components/navbar'

import banner from '../images/banner.jpeg'

class IndexPage extends React.Component {
    render() {
        const siteTitle = 'Le blog de Léopoldine'

        return (
            <Layout location={this.props.location} title={siteTitle}>
                <NavBar></NavBar>
                <SEO
                    title="Home"
                    keywords={[`blog`, `gatsby`, `javascript`, `react`]}
                />
                <div class="container">
                    <img src={banner} className="img-fluid" alt="" />
                    <div class="centered">{siteTitle}</div>
                </div>

                <h1>
                    Hey people{' '}
                    <span role="img" aria-label="wave emoji">
                        👋
                    </span>
                </h1>
                <p>
                    Bienvenue sur le blog de Léopoldine. Nous allons parler de
                    lapins. Vous êtes actuellement sur la page d'accueil.
                </p>
                <p>
                    Pour en découvrir plus sur les lapins je vous invite à
                    visiter mon blog.
                </p>
                <p>Bonne lecture!</p>
            </Layout>
        )
    }
}

export default IndexPage
