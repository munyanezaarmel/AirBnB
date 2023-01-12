import React from "react"
import one from '../images/1.png';
import star from '../images/star.png';
import '../styles/index.css';
import {FaStar}  from 'react-icons/fa';

export default function Card(){
    return(
        <div className="card">
           <img src={one} className='card-image' alt="swimming image" />
           <div className="ratings">
         <FaStar className="star" />
          <span>5.0</span>
          <span>6</span>
          <span>.</span>
           <span>(USA)</span>
           </div>
           <div className="quotes">
           <p>life resoans with katie lafae</p>
           <p>form $136/person</p>
           </div>
        </div>
    )
}