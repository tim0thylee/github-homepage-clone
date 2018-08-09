import React from "react";
import "./Bodysection.css";
import Leftbodydiv from "../Leftbodydiv/Leftbodydiv";

const Bodysection = () => {
    return (      
        <div className="row body-section">           
            <div className="col-sm-4">
                <Leftbodydiv/>
            </div>
            <div className="col-sm-8 right-side-body">
                <div className="dashboard-div">
                    <h6>
                        <span role="img"><g-emoji alias="wave" fallback-src="https://assets-cdn.github.com/images/icons/emoji/unicode/1f44b.png">👋</g-emoji></span>
                        Introducing Dashboard
                        <span className="dashboard-beta-span">Beta</span>
                    </h6>
                    <p>Opt-in by clicking below. You can opt out of these changes at any time from your dashboard. <a href="github.com">Learn more about our public beta</a></p>
                    <button className="btn btn-success body-section-button" type="submit">Opt-in</button> <button className="btn btn-light no-thanks-button" type="submit">No thanks</button>
                </div> 
                <div className="middle-heading">
                    <h6>Browse Activity</h6>
                    <a href="#">Discover Repositories </a>
                </div>
                <div className="explore-div">
                    <h4>Discover interesting projects and people to populate your personal news feed.</h4>
                    <p>Your new feed helps you keep up with recent activity on repositories you <a href="watch">watch</a> and people you <a href="follow">follow</a>.</p>
                    <button className="btn btn-light explore-github-button" type="submit">Explore Github</button>
                </div>
            </div>
        </div>  
    )
}

export default Bodysection;