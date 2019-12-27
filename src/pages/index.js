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
                    <h3 style={{ paddingLeft: '3rem' }}>Conseils</h3>
                    <hr />
                    <div class="col-md-6">
                        <div class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250">
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
                        <div class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250">
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
                        <div class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250">
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
                </div>
                <div class="row mb-2">
                    <h3 style={{ paddingLeft: '3rem' }}>News</h3>
                    <hr />
                    <div class="col-md-6">
                        <div class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250">
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
                        <div class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250">
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
                        <div class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250">
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
                </div>
                <div class="row mb-2">
                    <h3 style={{ paddingLeft: '3rem' }}>About</h3>
                    <hr />
                    <div class="col-md-6">
                        <div class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250">
                            <div class="col p-4 d-flex flex-column position-static">
                                <h4 class="font-italic">About</h4>
                                <p class="mb-0">
                                    Docteur en pharmacie. Maman de 3 grands
                                    enfants. Lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna
                                    aliqua. Ut enim ad minim veniam, quis
                                    nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        )
    }
}

export default IndexPage
