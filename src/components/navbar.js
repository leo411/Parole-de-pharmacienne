import React from 'react'
import Logo from '../components/logo'
import './navbar.css'

const NavBar = () => (
    <nav
        className="navbar navbar-expand-sm sticky-top"
        style={{ backgroundColor: `#e9ecef` }}
    >
        <button
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#collapse_target"
        >
            <span className="navbar-toggler-icon"></span>
        </button>
        <Logo />
        <div
            className="collapse navbar-collapse navBarText"
            id="collapse_target"
        >
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" href="/#/">
                        Home
                    </a>
                </li>
                <li className="nav-item dropdown">
                    <a
                        className="nav-link dropdown-toggle"
                        data-toggle="dropdown"
                        data-target="dropdown_target"
                        href="#"
                    >
                        Blog
                    </a>
                    <div
                        className="dropdown-menu"
                        aria-labelledby="dropdown_target"
                    >
                        <a
                            className="dropdown-item navlist-item"
                            href="../blog/"
                        >
                            Tous les posts
                        </a>
                        <a
                            className="dropdown-item navlist-item"
                            href="/blog-conseils/"
                        >
                            Conseils
                        </a>
                        <a
                            className="dropdown-item navlist-item"
                            href="/blog-news/"
                        >
                            News
                        </a>
                    </div>
                </li>
                <li className="nav-item dropdown">
                    <a
                        className="nav-link dropdown-toggle"
                        data-toggle="dropdown"
                        data-target="dropdown_target"
                    >
                        Les Boxs
                    </a>
                    <div
                        className="dropdown-menu"
                        aria-labelledby="dropdown_target"
                    >
                        <a className="dropdown-item navlist-item" href="/boxs/">
                            Toutes les boxs
                        </a>
                        <a className="dropdown-item navlist-item" href="#">
                            Thématiques
                        </a>
                        <div className="background-color"></div>
                        <a className="dropdown-item navlist-item" href="#">
                            Sur abonnement
                        </a>
                        <a className="dropdown-item navlist-item" href="#">
                            Boutique
                        </a>
                    </div>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/atelier-nutrition/">
                        Atelier nutrition
                    </a>
                </li>

                <li className="nav-item">
                    <a className="nav-link" href="/contact/">
                        Contact
                    </a>
                </li>
            </ul>
        </div>
    </nav>
)

export default NavBar
