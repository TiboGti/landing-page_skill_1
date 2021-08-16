import React from 'react'
import './style/navbar.css'

 function navbar() {
    return (
        <div>
            <nav className="container">
                <img src="" alt="" className="img-fluid" />
                <div className="navb__cont">
                    <ul>
                        <li className="nav__item">

                        <a href="">Home</a>
                        </li>
                        <li className="nav__item">
                        <a href="">Why Us</a>
                             </li>
                        <li className="nav__item">

                        <a href="">Services</a>
                        </li>
                        <li className="nav__item">

                        <a href="">Testimonials</a>
                        </li>
                        <li className="nav__item">

                        <a href="">Pricing</a>
                        </li>
                    </ul>
                    <div>
                        <button className="btn-go">Free Quote</button>
                    </div>
                </div>
            </nav>
 
        </div>
    )
}

export default navbar