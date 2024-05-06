import React, { Component } from 'react'
import port1 from '../Assets/poert1.png'
import port2 from '../Assets/port2.png'
import port3 from '../Assets/port3.png'
export default class Portfolio extends Component {
    render() {
        return (
            <>
                <div className="portfolio">
                    <div className="container py-5">
                        <div className="content d-flex justify-content-center align-items-center text-white flex-column py-5">
                            <h2 className='mt-3 fw-bold'>PORTFOLIO COMPONENT</h2>
                            <div className="star d-flex justify-content-center align-items-center my-4">
                                <div className='bg-white line'></div>
                                <i className='fa-solid fa-star mx-3'></i>
                                <div className='bg-white line'></div>
                            </div>
                        </div>
                        <div className="row mt-2">
                            <div className="col-md-4 p-3">
                                <div className="inner rounded-2 position-relative shadow-lg">
                                    <img src={port1} className='w-100 d-block rounded-2' alt="" />
                                    <div className="layer rounded-2 position-absolute start-0 top-0 h-100 w-100 d-flex justify-content-center align-items-center">
                                        <i className='fa-solid fa-solid fa-plus text-white'></i>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 p-3">
                                <div className="inner rounded-2 position-relative shadow-lg">
                                    <img src={port2} className='w-100 d-block rounded-2' alt="" />
                                    <div className="layer rounded-2 position-absolute start-0 top-0 h-100 w-100 d-flex justify-content-center align-items-center">
                                        <i className='fa-solid fa-solid fa-plus text-white'></i>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 p-3">
                                <div className="inner rounded-2 position-relative shadow-lg">
                                    <img src={port3} className='w-100 d-block rounded-2' alt="" />
                                    <div className="layer rounded-2 position-absolute start-0 top-0 h-100 w-100 d-flex justify-content-center align-items-center">
                                        <i className='fa-solid fa-solid fa-plus text-white'></i>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 p-3">
                                <div className="inner rounded-2 position-relative shadow-lg">
                                    <img src={port1} className='w-100 d-block rounded-2' alt="" />
                                    <div className="layer rounded-2 position-absolute start-0 top-0 h-100 w-100 d-flex justify-content-center align-items-center">
                                        <i className='fa-solid fa-solid fa-plus text-white'></i>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 p-3">
                                <div className="inner rounded-2 position-relative shadow-lg">
                                    <img src={port2} className='w-100 d-block rounded-2' alt="" />
                                    <div className="layer rounded-2 position-absolute start-0 top-0 h-100 w-100 d-flex justify-content-center align-items-center">
                                        <i className='fa-solid fa-solid fa-plus text-white'></i>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 p-3">
                                <div className="inner rounded-2 position-relative shadow-lg">
                                    <img src={port3} className='w-100 d-block rounded-2' alt="" />
                                    <div className="layer rounded-2 position-absolute start-0 top-0 h-100 w-100 d-flex justify-content-center align-items-center">
                                        <i className='fa-solid fa-solid fa-plus text-white'></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
