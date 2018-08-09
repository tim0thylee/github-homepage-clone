import React from "react";
import "./Dropdown.css";

const Dropdown = () => {
    return (
        <div>
            <div className="btn-group">
                <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                </button>
                <div className="dropdown-menu dropdown-menu-right">
                    <button className="dropdown-item" type="button">New repository</button>
                    <button className="dropdown-item" type="button">Import repository</button>
                    <button className="dropdown-item" type="button">New gist</button>
                    <button className="dropdown-item" type="button">New organization</button>
                </div>
            </div>
        </div>
    )
}

export default Dropdown;