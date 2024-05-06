import React, { Component } from 'react'

export default class About extends Component {
    render() {
        return (
            <>
                <div className="about">
                    <div className="container py-5">
                        <div className="content d-flex justify-content-center align-items-center text-white flex-column py-5">
                            <h2 className='mt-3 fw-bold'>ABOUT COMPONENT</h2>
                            <div className="star d-flex justify-content-center align-items-center my-4">
                                <div className='bg-white line'></div>
                                <i className='fa-solid fa-star mx-3'></i>
                                <div className='bg-white line'></div>
                            </div>
                            <ul className='list-unstyled d-flex justify-content-center align-items-center gap-4 mt-3'>
                                <li><p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p></li>
                                <li><p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
