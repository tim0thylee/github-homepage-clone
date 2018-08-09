import React from 'react';
import './Header.css';
import Navbarlist from '../Navbarlist/Navbarlist';
import Dropdown from '../Dropdown/Dropdown'

const Header = () => {
    return (
        <div className="header">
            <div className="row header-row">
                <Navbarlist />
                <div>
                    <ul className="right-side d-flex flex-row pull-right" style={{ alignItems: "center" }}>
                        <li className="p-2">
                            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                                <i className="fas fa-bell"></i>
                            </a>
                        </li>
                        <li className="p-2">
                            <div className="btn-group">
                                <button type="button" className="btn btn-secondary dropdown-toggle fas fa-plus" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                </button>
                                <div className="dropdown-menu dropdown-menu-right">
                                    <button className="dropdown-item" type="button">New repository</button>
                                    <button className="dropdown-item" type="button">Import repository</button>
                                    <button className="dropdown-item" type="button">New gist</button>
                                    <button className="dropdown-item" type="button">New organization</button>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="btn-group">
                                <button type="button" className="btn btn-secondary dropdown-toggle fas fa-user-tie" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                </button>
                                <div className="dropdown-menu dropdown-menu-right">
                                    <button className="dropdown-item" type="button">New repository</button>
                                    <button className="dropdown-item" type="button">Import repository</button>
                                    <button className="dropdown-item" type="button">New gist</button>
                                    <button className="dropdown-item" type="button">New organization</button>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;