import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <>
                <footer className='footer p-5'>
                    <div className='container'>
                        <div className="row gy-5">
                            <div className="col-lg-4 py-3">
                                <div className="item shadow-lg p-3">
                                    <div className='text-center text-white'>
                                        <h4>LOCATION</h4>
                                        <span className='d-block mb-2'>2215 John Daniel Drive</span>
                                        <span className='d-block'>Clark, MO 65243</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 py-3">
                                <div className="item shadow-lg p-3">
                                    <div className='text-center text-white'>
                                        <h4>AROUND THE WEB</h4>
                                        <ul className='list-unstyled d-flex gap-3 justify-content-center align-items-center'>
                                            <li className='icons d-flex justify-content-center align-items-center'>
                                                <i className='fa-brands fa-facebook-f fs-5'></i>
                                            </li>
                                            <li className='icons d-flex justify-content-center align-items-center'>
                                                <i className='fa-brands fa-twitter fs-5'></i>
                                            </li>
                                            <li className='icons d-flex justify-content-center align-items-center'>
                                                <i className='fa-brands fa-linkedin-in fs-5'></i>
                                            </li>
                                            <li className='icons d-flex justify-content-center align-items-center'>
                                                <i className='fa-solid fa-globe mx-1 fs-5'></i>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 py-3">
                                <div className="item shadow-lg p-3">
                                    <div className='text-center text-white'>
                                        <h4>ABOUT FREELANCER</h4>
                                        <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer >
                <div className='w-100 copy_right py-4'>
                    <p className='text-white text-center m-0'>Copyright © Your Website 2021</p>
                </div>
            </>
        )
    }
}
