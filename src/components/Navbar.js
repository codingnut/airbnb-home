import React from 'react';

export default function Navbar(props){
    return(
        <nav>
            <img className='logo' src="/images/airbnb.png" alt="Airbnd logo" />
            <span className='saveditems'>{props.items}</span>
        </nav>
    )
}
