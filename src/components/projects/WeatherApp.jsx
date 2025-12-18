import React from 'react'
import './WeatherApp.css';
import searchImg from '../../assets/search.png';

export default function WeatherApp() {
  return (
    <>
    <div className="container">
        <div className='search_input'>
           <input type="text" placeholder='Search City' />
        </div>
        <div className='search_icon'> 
            <img src={searchImg} alt="Search" />
        </div>
    </div>
    
    
    </>
  )
}
