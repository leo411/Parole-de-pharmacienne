import React from 'react'
import Logo from '../components/logo'
import './navbar.css'

const NavBar = () => (
    <nav
        class="navbar navbar-expand-md navbar-light sticky-top"
        style={{ backgroundColor: `#f0efed` }}
    >
        <button
            class="navbar-toggler"
            data-toggle="collapse"
            data-target="#collapse_target"
        >
            <span class="navbar-toggler-icon"></span>
        </button>
        <Logo />
        <div class="collapse navbar-collapse navBarText" id="collapse_target">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" href="/#/">
                        Home
                    </a>
                </li>
                <li class="nav-item dropdown">
                    <a
                        class="nav-link dropdown-toggle"
                        data-toggle="dropdown"
                        data-target="dropdown_target"
                        href="#"
                    >
                        Blog
                    </a>
                    <div
                        class="dropdown-menu"
                        aria-labelledby="dropdown_target"
                    >
                        <a class="dropdown-item navlist-item" href="../blog/">
                            Tous les posts
                        </a>
                        <a
                            class="dropdown-item navlist-item"
                            href="/blog-conseils/"
                        >
                            Conseils
                        </a>
                        <a
                            class="dropdown-item navlist-item"
                            href="/blog-news/"
                        >
                            News
                        </a>
                    </div>
                </li>
                <li class="nav-item dropdown">
                    <a
                        class="nav-link dropdown-toggle"
                        data-toggle="dropdown"
                        data-target="dropdown_target"
                    >
                        Les Boxs
                    </a>
                    <div
                        class="dropdown-menu"
                        aria-labelledby="dropdown_target"
                    >
                        <a class="dropdown-item navlist-item" href="/boxs/">
                            Toutes les boxs
                        </a>
                        <a class="dropdown-item navlist-item" href="#">
                            Thématiques
                        </a>
                        <div class="background-color"></div>
                        <a class="dropdown-item navlist-item" href="#">
                            Sur abonnement
                        </a>
                        <a class="dropdown-item navlist-item" href="#">
                            Boutique
                        </a>
                    </div>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/atelier-nutrition/">
                        Atelier nutrition
                    </a>
                </li>

                <li class="nav-item">
                    <a class="nav-link" href="/contact/">
                        Contact
                    </a>
                </li>
            </ul>
        </div>
    </nav>
)

export default NavBar
