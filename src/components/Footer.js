/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import logo from "../assets/logo.png"
import lenguageContent from '../languages/languagesContent';

function Footer({lenguage}) {
    return (
        <>
            <footer className="border-top">
               <div className="container">
                    <div className="d-flex flex-wrap justify-content-between align-items-center py-3">
                        <p className="col-md-4 mb-0 text-muted">© {new Date().getFullYear()} Company, Inc</p>

                        <a href="/" className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
                            <img src={logo} alt=""  style={{width: "60px", height: "60px"}}/>
                        </a>

                        <ul className="nav col-md-4 justify-content-end">
                            <li className="nav-item">
                                <a href="#" className="nav-link px-2 text-muted">{lenguageContent[lenguage].footer.item1}</a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link px-2 text-muted">{lenguageContent[lenguage].footer.item2}</a>
                            </li>
                        </ul>
                    </div>
               </div>
            </footer>
        </>
    );
}

export default Footer;