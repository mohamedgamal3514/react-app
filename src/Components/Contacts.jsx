import React, { Component } from 'react'

export default class Contacts extends Component {
    render() {
        return (
            <>
                <div className="about">
                    <div className="container py-5">
                        <div className="content d-flex justify-content-center align-items-center text-white flex-column py-5">
                            <h2 className='mt-3 fw-bold'>CONTACT COMPONENT</h2>
                            <div className="star d-flex justify-content-center align-items-center my-4">
                                <div className='bg-white line'></div>
                                <i className='fa-solid fa-star mx-3'></i>
                                <div className='bg-white line'></div>
                            </div>
                        </div>
                        <form action="" className='p-2 p-md-5'>
                            <input type="text" className='form-control border-0 bg-transparent border-bottom border-white' placeholder='User Name' />
                            <input type="text" className='form-control mt-5 border-0 bg-transparent border-bottom border-white' placeholder='User Age' />
                            <input type="text" className='form-control mt-5 border-0 bg-transparent border-bottom border-white' placeholder='User Email' />
                            <input type="text" className='form-control mt-5 border-0 bg-transparent border-bottom border-white' placeholder='User Password' />
                            <button className='btn btn-success my-4'>Submit</button>
                        </form>
                    </div>
                </div>
            </>
        )
    }
}
