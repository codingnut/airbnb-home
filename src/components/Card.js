import React from "react";

export default function Card(cardprops) {
  return (
    <div className={`card ${cardprops.classkey}`}>
    <span className='card--status'>{ cardprops.booked ? "Sold out" : "Available"}</span>
      <img className='card-image' src={`/images/${cardprops.img}`} alt='featured'/>
      <div className="card-rating">
        <img src="images/star.png" alt='star'/>
        <span>{cardprops.rating}</span>
        <span>({cardprops.reviewCount})</span>
        <span className='grey'>USA</span>
      </div>
      <p> {cardprops.title} </p>
      <div className='card-price'>
        <span className='bold'>From ${cardprops.price}</span> 
      </div>
    </div>
  );
}
