import React from 'react'
import Header from '../components/header'
import Footer from '../components/Footer'
import CardCarousel from '../components/CardCarousel'
import logo from '../images/logo.png'

export default function Home() {
    return (
        <>
            <Header />
            <section className="homesection1">
                <div className="homediv1 text-center">
                    <div className="row container-fluid"><div className="col"><img src={logo} alt="logo" className="homelogo" /></div></div>
                    <div className="row container-fluid"><p id="homebrandname">Vallée De Lyon</p></div>
                    <div className="row container-fluid"><p id="brandslogan">Fashion as unique as you are.</p></div>
                </div>
            </section>
            <CardCarousel />
            <Footer />
        </>
    )
}
