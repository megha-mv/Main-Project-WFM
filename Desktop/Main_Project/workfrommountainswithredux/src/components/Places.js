import React from 'react';
import "./Places.css"
import {Link} from "react-router-dom"
import Shimla from './Shimla';
import Manali from './Manali';

const Places = () => {
    return (
        <div>
            <h1 className="secondTitle">Experience a Home with Local People in Mountains.......</h1>
            <div className = "side">
            <h1 className = "sideHeading_first">Find a Perfect Home in Mountains......</h1>
            <hr className = "line"></hr>
            <h1 className = "sideHeading_second">A Perfect Escape</h1>
            </div>

            <Link to={`/Shimla`} onClick={Shimla}>
                <button className="shimla">Shimla</button>
            </Link>

            <Link to={`/Manali`} onClick={Manali}>
            <button className = "manali">Manali</button>
            </Link>

            {/* <button className="shimla">Shimla</button> */}
            {/* <button className = "manali">Manali</button> */}
            
        </div>
    )
}

export default Places;