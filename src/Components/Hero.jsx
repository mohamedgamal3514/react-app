import React, { Component } from 'react'
import logo from '../Assets/avataaars.svg'

export default class Hero extends Component {
    render() {
        return (
            <>
                <div className="hero">
                    <div className="container h-100 d-flex justify-content-center align-items-center">
                        <div className="content d-flex justify-content-center align-items-center text-white flex-column">
                            <img src={logo} className='w-50 d-block' alt="" />
                            <h1 className='mt-3 fw-bold'>START FRAMEWORK</h1>
                            <div className="star d-flex justify-content-center align-items-center mt-3">
                                <div className='bg-white line'></div>
                                <i className='fa-solid fa-star mx-3'></i>
                                <div className='bg-white line'></div>
                            </div>
                            <ul className='list-unstyled d-flex justify-content-center align-items-center gap-1 mt-3'>
                                <li>Graphic Artist</li>
                                <li>-</li>
                                <li> Web Designer</li>
                                <li>-</li>
                                <li>Illustrator</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
