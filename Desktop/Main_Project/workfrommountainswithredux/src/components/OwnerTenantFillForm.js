import React from 'react'
import './OwnerTenantFillForm.css'
import { FcHome,FcPortraitMode } from "react-icons/fc";
import {Link} from "react-router-dom"
import OwnerRegisteration from '../components/OwnerRegisteration'
import TenantPage from '../components/TenantPage'

const OwnerTenantFillForm = () => {
    return (
        <div>
            <div className="explore">
            <h1 className="heading_first">Lets Explore new way of Working</h1>  
            <hr className="line_fill"></hr>
            </div>
            <div className='owner_div'>
                <span className='home_icon'><FcHome size={85}/></span>                
                <label className='prop_own'>Property Owners</label>
                <br/>
                <label className='owner_text'>List your Property here and we ensure you best returns ,Personalised services,financial services </label>
                
                <Link to={`/OwnerRegisteration`} onClick={OwnerRegisteration}>
                <button className='owner_fill_button'>Fill Out Form</button>
                </Link>
                
                {/* <button className='owner_fill_button'>Fill Out Form</button> */}
            </div>    
            <div className='tenant_div'>
                <span className='tenant_icon'><FcPortraitMode size={85}/></span>                
                <label className='prop_tenant'>Tenants</label>
                <br/>
                <label className='tenant_text'>Rent property of local people and stay with them to expore more about their lifestyle in reasonable price </label>
                
                <Link to={`/TenantPage`} onClick={TenantPage}>
                <button className='tenant_prop_button'>Explore Property </button>
                </Link>
                
                {/* <button className='tenant_prop_button'>Explore Property </button> */}
            </div>         

        </div>
    )
}

export default OwnerTenantFillForm;