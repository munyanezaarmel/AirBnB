import React from 'react'
import hero from '../images/hero.png';
import '../styles/index.css';
export default function Hero(){
    return (
     <section className='hero-container'>
        <div className="container-image">
        <img src={hero} alt="hero" className='hero-image' />
        </div>
        <h1 className='hero-title'>Online Experiences</h1>
        <p className='hero-paragraph'>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
</p>
     </section>
    )
}