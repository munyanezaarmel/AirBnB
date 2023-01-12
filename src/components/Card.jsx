import React from "react"
import '../styles/index.css';
import {FaStar}  from 'react-icons/fa';

export default function Card(props){
    return(
        <div className="card">
           <img src={props.image} className='card-image' alt="swimming image" />
           <div className="ratings">
         <FaStar className="star" />
          <span>{props.ratings}</span>
          <span>.</span>
           <span>{props.country}</span>
           </div>
           <div className="quotes">
           <p>{props.quotes}</p>
           <p>{props.price}</p>
           </div>
        </div>
    )
}