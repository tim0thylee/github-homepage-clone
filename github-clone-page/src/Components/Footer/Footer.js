import React from "react";
import "./Footer.css"

const Footer = () => {
    return (
        <div className="footer-list">
            <ul>
                <li>© 2018 GitHub, Inc.</li>
                <li><a href="#">Terms</a></li>
                <li><a href="#">Privacy</a></li>
                <li><a href="#">Security</a></li>
                <li><a href="#">Status</a></li>
                <li><a href="#">Help</a></li>
            </ul>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github footer-github"></i>
            </a>
            <ul>
                <li><a href="#">Contact GitHub</a></li>
                <li><a href="#">API</a></li>
                <li><a href="#">Shop</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">About</a></li>
            </ul>
        </div>
    )
}

export default Footer;