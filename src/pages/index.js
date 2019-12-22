import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Button from '../components/button'

import rabbit from '../images/lapin_04.jpg'

class IndexPage extends React.Component {
    render() {
        const siteTitle = 'Le blog de Léopoldine'

        return (
            <Layout location={this.props.location} title={siteTitle}>
                <SEO
                    title="Home"
                    keywords={[`blog`, `gatsby`, `javascript`, `react`]}
                />
                <img src={rabbit} alt="" />
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
                <Link to="/blog/">
                    <Button marginTop="35px">Go to Blog</Button>
                </Link>
            </Layout>
        )
    }
}

export default IndexPage
