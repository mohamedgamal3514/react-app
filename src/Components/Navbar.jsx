import React, { Component } from 'react'

export default class Home extends Component {
    render() {
        return (
            <>
                <nav className="navbar navbar-expand-lg p-4 fixed-top">
                    <div className="container">
                        <a className="navbar-brand fw-bolder fs-3 text-white" href="#">START FRAMEWORK</a>
                        <button className="navbar-toggler border-0 box-shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <i className='fa fa-bars text-white fs-3'></i>
                        </button>
                        <div className="collapse navbar-collapse menu_links" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item ps-md-3">
                                    <a className="nav-link active text-white fs-5 fw-bolder" aria-current="page" href="#">ABOUT</a>
                                </li>
                                <li className="nav-item ps-md-3">
                                    <a className="nav-link text-white fs-5 fw-bolder" href="#">PORTFOLIO</a>
                                </li>
                                <li className="nav-item ps-md-3">
                                    <a className="nav-link text-white fs-5 fw-bolder" href="#">CONTACT</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </>
        )
    }
}
