import React from "react";

export default function Card(cardprops) {
  return (
    <div className="card">
    <span className='card--status'>Sold out</span>
      <img className='card-image' src="/images/featured.png" alt='featured'/>
      <div className="card-rating">
        <img src="images/star.png" alt='star'/>
        <span>4.4</span>
        <span>(33)</span>
        <span className='grey'>4.4</span>
        <span className='grey'>USA</span>
      </div>
      <p> {cardprops.title} </p>
      <p><span className='bold'>From $120</span> / Person</p>
    </div>
  );
}
