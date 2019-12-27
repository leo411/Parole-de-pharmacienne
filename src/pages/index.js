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
                <div class="row mb-2">
                    <div class="col-md-4">
                        <div class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250">
                            <div class="col p-4 d-flex flex-column position-static">
                                <strong class="d-inline-block mb-2 text-primary">
                                    Conseil Santé
                                </strong>
                                <h3 class="mb=0">Title</h3>
                                <div class="mb-1 text-muted">Date</div>
                                <p class="card-text mb-auto">Description</p>
                                <a href="#" class="stretched-link">
                                    Continuer à lire
                                </a>
                            </div>
                        </div>
                        <div class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250">
                            <div class="col p-4 d-flex flex-column position-static">
                                <strong class="d-inline-block mb-2 text-primary">
                                    Conseil Nutrition
                                </strong>
                                <h3 class="mb=0">Title</h3>
                                <div class="mb-1 text-muted">Date</div>
                                <p class="card-text mb-auto">Description</p>
                                <a href="#" class="stretched-link">
                                    Continuer à lire
                                </a>
                            </div>
                        </div>
                        <div class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250">
                            <div class="col p-4 d-flex flex-column position-static">
                                <strong class="d-inline-block mb-2 text-primary">
                                    Conseil Beauté
                                </strong>
                                <h3 class="mb=0">Title</h3>
                                <div class="mb-1 text-muted">Date</div>
                                <p class="card-text mb-auto">Description</p>
                                <a href="#" class="stretched-link">
                                    Continuer à lire
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        )
    }
}

export default IndexPage
