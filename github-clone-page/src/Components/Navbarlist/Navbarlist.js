import React from 'react';
import "./Navbarlist.css"

const Navbarlist = () => {
    return (
        <div>
            <ul className="navbar-list">
                <li>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-github header-github"></i>
                    </a>
                </li>
                <li>
                    <div className="form-group" style={{ marginBottom: 0 }}>
                        <input type="text" className="form-control" id="searchInputForm" placeholder="Search or jump to..." />
                    </div>
                </li>
                <li><a href="google.com">Pull requests</a></li>
                <li><a href="google.com">Issues</a></li>
                <li><a href="google.com">Marketplace</a></li>
                <li><a href="google.com">Explore</a></li>
            </ul>
        </div>
    )
}

export default Navbarlist;