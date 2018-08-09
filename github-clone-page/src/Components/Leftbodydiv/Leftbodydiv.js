import React from 'react';
import "./Leftbodydiv.css"

const Leftbodydiv = () => {
    return (
        <div className="left-body-div">
            <div className="top-box">
                Repositories <button class="btn btn-success" type="submit">New Repository</button>
            </div>
            <div className="bottom-box">
                    <div className="form-group left-body-form">
                        <input type="text" className="form-control" id="searchLeftBox" placeholder="Find a repository..." />
                    </div>
                <ul class="fa-ul">
                    <li><i class="fas fa-book"></i><a href="#"> mygithubpage</a></li>
                    <li><i class="fas fa-book"></i><a href="#"> mygithubpage</a></li>
                    <li><i class="fas fa-book"></i><a href="#"> mygithubpage</a></li>
                    <li><i class="fas fa-book"></i><a href="#"> mygithubpage</a></li>
                    <li><i class="fas fa-book"></i><a href="#"> mygithubpage</a></li>
                    <li><i class="fas fa-book"></i><a href="#"> mygithubpage</a></li>
                    <li><i class="fas fa-book"></i><a href="#"> mygithubpage</a></li>
                    <li><i class="fas fa-book"></i><a href="#"> mygithubpage</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Leftbodydiv;