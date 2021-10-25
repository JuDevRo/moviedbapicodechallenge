import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/Header.css'

const Header = () => {
    return(
        <div className="color">
            <div className="container">
                <Link to="/" className="link">
                    <h1 className="container-title">MoviesMagic</h1>
                </Link>
            </div>
        </div>
    )
}

export default Header