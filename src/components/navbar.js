import React from 'react'
import logolapin from '../images/logolapin.jpg'

const NavBar = () => (
    <nav
        class="navbar navbar-expand-lg navbar-light bg-light"
        style={{ backgroundColor: '#e3f2fd' }}
    >
        <a
            class="navbar-brand"
            href="/"
            style={{ color: 'black', boxShadow: 'none' }}
        >
            <img src={logolapin} width="30" height="30" alt="" />
        </a>
        {/* <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
            <span class="navbar-toggler-icon"></span>
        </button> */}
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
                <a
                    class="nav-item nav-link active"
                    href="/"
                    style={{
                        paddingRight: 20,
                        color: 'black',
                        boxShadow: 'none'
                    }}
                >
                    Home <span class="sr-only"></span>
                </a>
                <a
                    class="nav-item nav-link"
                    href="/about/"
                    style={{
                        paddingRight: 20,
                        color: 'black',
                        boxShadow: 'none'
                    }}
                >
                    About
                </a>
                <div class="nav-item dropdown">
                    >
                    <a
                        class="nav-link dropdown-toggle"
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
                        class="dropdown-menu"
                        aria-labelledby="navbarDropdownMenuLink"
                    >
                        <a
                            class="dropdown-item"
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
                            class="dropdown-item"
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
                            class="dropdown-item"
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
                    class="nav-item nav-link disabled"
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
