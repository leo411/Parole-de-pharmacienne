import React from 'react'
import logolapin from '../images/logolapin.jpg'

const NavBar = () => (
    <nav
        className="navbar navbar-expand-lg navbar-light bg-light"
        style={{ backgroundColor: '#e3f2fd' }}
    >
        <a
            className="navbar-brand"
            href="/"
            style={{ color: 'black', boxShadow: 'none' }}
        >
            <img src={logolapin} width="30" height="30" alt="" />
        </a>
        {/* <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
            <span className="navbar-toggler-icon"></span>
        </button> */}
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
                <a
                    className="nav-item nav-link active"
                    href="/"
                    style={{
                        paddingRight: 20,
                        color: 'black',
                        boxShadow: 'none'
                    }}
                >
                    Home <span className="sr-only"></span>
                </a>
                <a
                    className="nav-item nav-link"
                    href="/about/"
                    style={{
                        paddingRight: 20,
                        color: 'black',
                        boxShadow: 'none'
                    }}
                >
                    About
                </a>
                <div className="nav-item dropdown">
                    >
                    <a
                        className="nav-link dropdown-toggle"
                        href="/blog/"
                        id="navbarDropdownMenuLink"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                        style={{
                            paddingRight: 20,
                            color: 'black',
                            boxShadow: 'none'
                        }}
                    >
                        Blog
                    </a>
                    <div
                        className="dropdown-menu"
                        aria-labelledby="navbarDropdownMenuLink"
                    >
                        <a
                            className="dropdown-item"
                            href="#"
                            style={{
                                paddingRight: 20,
                                color: 'black',
                                boxShadow: 'none'
                            }}
                        >
                            Lapin domestique
                        </a>
                        <a
                            className="dropdown-item"
                            href="#"
                            style={{
                                paddingRight: 20,
                                color: 'black',
                                boxShadow: 'none'
                            }}
                        >
                            Lapin sauvage
                        </a>
                        <a
                            className="dropdown-item"
                            href="#"
                            style={{
                                paddingRight: 20,
                                color: 'black',
                                boxShadow: 'none'
                            }}
                        >
                            Autre
                        </a>
                    </div>
                </div>
                <a
                    className="nav-item nav-link disabled"
                    href="#"
                    style={{
                        paddingRight: 20,
                        color: 'black',
                        boxShadow: 'none'
                    }}
                >
                    Store
                </a>
            </div>
        </div>
    </nav>
)

export default NavBar
