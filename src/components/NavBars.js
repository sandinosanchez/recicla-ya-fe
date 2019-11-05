import React from 'react';
import {Link} from 'react-router-dom';

export default function NavBars() {
    return (
        <>
            <nav className="navbar navbar-expand-lg" style={{background:"#04B404"}}>
                <Link className="navbar-brand text-white" to="#">Recicla YA</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav  ml-auto">
                    <li className="nav-item active">
                        <Link className="nav-link text-white" to="/">Home<span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white" to="/login">Log In</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white" to="/registro">Sing Up</Link>
                    </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}
