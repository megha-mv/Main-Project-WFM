import React from 'react'
import Contact from './Contact';
import Hero from './Hero';
import { NavBar } from './NavBar';
import OwnerTenantFillForm from './OwnerTenantFillForm';
import Places from './Places';
import AllRightsReserved from './AllRightsReserved'



const LandingPage = () => {
    return (
        <div>   
            <NavBar/>
            <Hero/>
            <Places/>
            <OwnerTenantFillForm/>
            <Contact/>
            <AllRightsReserved/>
        </div>
    )
}

export default LandingPage;