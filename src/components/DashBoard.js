import React from 'react'
import {useHistory} from 'react-router-dom'
import './dashboard.css'
import {NavLink} from 'react-router-dom'
function DashBoard() {
    var history=useHistory()
    if(!localStorage.getItem("token")||!localStorage.getItem("emailId")){
        history.push('/')
    }
    return (
        <div>
            <h1>Welcome to DashBoard</h1>
                <div className="dashboard">
                    <div className="sideNav">
                        <NavLink to="/dashboard" style={{color:"whitesmoke"}}><h5>DashBoard</h5></NavLink>
                        <hr></hr>
                        <NavLink to="/updatePassword" style={{color:"#5B647F"}}><h5>UpdatePassword</h5></NavLink>
                        <hr></hr>
                    </div>
            <div className="body"></div>
            </div>
        </div>
    )
}

export default DashBoard
