import React from 'react'

const NavBar = () => (
    <nav
        className="navbar navbar-expand-sm navbar-light bg-light sticky-top"
        style={{ backgroundColor: `#fff` }}
    >
        <button
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#collapse_target"
        >
            <span className="navbar-toggler-icon"></span>
        </button>
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
                        <a className="dropdown-item navlist-item" href="#">
                            Conseils
                        </a>
                        <a className="dropdown-item navlist-item" href="#">
                            News
                        </a>
                    </div>
                </li>
                <li className="nav-item dropdown">
                    <a
                        className="nav-link dropdown-toggle"
                        data-toggle="dropdown"
                        data-target="dropdown_target"
                        href="#"
                    >
                        Les Boxs
                    </a>
                    <div
                        className="dropdown-menu"
                        aria-labelledby="dropdown_target"
                    >
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
                    <a className="nav-link" href="#">
                        Atelier nutrition
                    </a>
                </li>

                <li className="nav-item">
                    <a className="nav-link" href={`/src/pages/about.js`}>
                        Contact
                    </a>
                </li>
            </ul>
        </div>
    </nav>
)

export default NavBar
