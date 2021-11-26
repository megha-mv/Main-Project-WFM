import React from 'react'
import './Hero.css'

import { GoSearch } from "react-icons/go";

const Hero = () => {
    return (
        <div>
          <img src="https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80" alt ="Main_Image"
          height='646px' width='1400px'/>
          <h3 className = 'heading_hero'>Its Time for New......</h3>
          <br/>
          <br/>
          <h1 className="experience">Work Experience</h1>

          <input className="search_hero" type="text" placeholder="               Enter Location"></input>
          <span className="heroSearchSpan"><GoSearch size={25} /></span>

          <span className = "herofooter">
            <span className="first">
            <h3>Best Travel Experience</h3>
            </span>
            <span className="second">
            <h3>Best Price Guaranteed</h3>
            </span>
            <span className="third">
            <h3>+1000  User Per Year</h3>
            </span>   
          </span>          

        </div>
    )
}

export default Hero