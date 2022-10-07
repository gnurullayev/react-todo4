import React from 'react';
import lenguageContent from '../languages/languagesContent';
import logo from "../assets/logo.png"

function Header({setLenguage, lenguage}) {
    return (
        <header className='bg-dark'>
            <div className="container">
                <nav className="navbar navbar-expand-md navbar-dark ">
                    <a className="navbar-brand" href="#">
                        <img src={logo} alt=""  style={{width: "60px", height: "60px"}}/>
                    </a>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav me-auto mb-2 mb-md-0">
                        <li className="nav-item">
                            <a className="nav-link text-light" aria-current="page" href="#">{lenguageContent[lenguage].header.navItem}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">{lenguageContent[lenguage].header.navItem2}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">{lenguageContent[lenguage].header.navItem3}</a>
                        </li>
                        </ul>

                        <div className="d-flex">
                            <select className='form-select me-1' onChange={(e) => setLenguage(e.target.value)} style={{width: "80px"}}>
                                <option value="uz">UZ</option>
                                <option value="ru">RU</option>
                                <option value="en">EN</option>
                            </select>
                            <button className="btn btn-outline-success" type="button"style={{width: "100px"}}>{lenguageContent[lenguage].header.signIn}</button>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Header;