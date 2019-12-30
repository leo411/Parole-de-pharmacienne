import React from 'react'

import './postcategoriesnav.css'

const PostCategoriesNav = () => (
    <nav
        className="navbar navbar-expand-lg"
        style={{ backgroundColor: `#e9ecef` }}
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
                    <a className="nav-link" href="/blog/">
                        All
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/blog-beauté/">
                        Beauté
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/blog-santé/">
                        Santé
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/blog-nutrition/">
                        Nutrition
                    </a>
                </li>
            </ul>
        </div>
    </nav>
)

export default PostCategoriesNav
