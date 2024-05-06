import React, { Component } from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import About from './Components/About'
import Portfolio from './Components/Portfolio'
import Contacts from './Components/Contacts'
import Footer from './Components/Footer'

export default class App
    extends Component {
    render() {
        return (
            <>
                <Navbar />
                <Hero />
                <About />
                <Portfolio />
                <Contacts />
                <Footer/>
            </>
        )
    }
}
