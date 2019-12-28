import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Bio from '../components/bio'
import Banner from '../components/banner'

import banner from '../images/banner.jpeg'

class IndexPage extends React.Component {
    render() {
        const siteTitle = 'Le blog de Léopoldine'

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
                        <div class="col p-4 d-flex flex-column border rounded shadow mx-2">
                            <strong class="d-inline-block mb-2 text-primary">
                                Santé
                            </strong>
                            <h3 class="mb=0">Title</h3>
                            <div class="mb-1 text-muted">Date</div>
                            <p class="card-text mb-auto">Description</p>
                            <a href="#" class="stretched-link">
                                Continuer à lire
                            </a>
                        </div>
                        <div class="col p-4 d-flex flex-column border rounded shadow">
                            <strong class="d-inline-block mb-2 text-primary">
                                Nutrition
                            </strong>
                            <h3 class="mb=0">Title</h3>
                            <div class="mb-1 text-muted">Date</div>
                            <p class="card-text mb-auto">Description</p>
                            <a href="#" class="stretched-link">
                                Continuer à lire
                            </a>
                        </div>
                        <div class="col p-4 d-flex flex-column border rounded shadow mx-2">
                            <strong class="d-inline-block mb-2 text-primary">
                                Beauté
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
                <div class="row mb-2">
                    <div class="col-md-6">
                        <h3 class="my-2" style={{ paddingLeft: '3rem' }}>
                            News
                        </h3>
                        <hr />
                        <div class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 ml-2">
                            <div class="col p-4 d-flex flex-column position-static">
                                <strong class="d-inline-block mb-2 text-primary">
                                    Santé
                                </strong>
                                <h3 class="mb=0">Title</h3>
                                <div class="mb-1 text-muted">Date</div>
                                <p class="card-text mb-auto">Description</p>
                                <a href="#" class="stretched-link">
                                    Continuer à lire
                                </a>
                            </div>
                        </div>
                        <div class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 ml-2">
                            <div class="col p-4 d-flex flex-column position-static">
                                <strong class="d-inline-block mb-2 text-primary">
                                    Nutrition
                                </strong>
                                <h3 class="mb=0">Title</h3>
                                <div class="mb-1 text-muted">Date</div>
                                <p class="card-text mb-auto">Description</p>
                                <a href="#" class="stretched-link">
                                    Continuer à lire
                                </a>
                            </div>
                        </div>
                        <div class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 ml-2">
                            <div class="col p-4 d-flex flex-column position-static">
                                <strong class="d-inline-block mb-2 text-primary">
                                    Beauté
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
