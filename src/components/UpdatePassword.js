import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import './updatepassword.css'

function UpdatePassword() {
    const [emailId,setEmailId]=useState('')
    const [password,setPassword]=useState('')
    useEffect(
        ()=>{
        setEmailId(localStorage.getItem("emailId"))
    },[])
    const capturePassword=(event)=>{
            setPassword(event.target.value)
    }
    const sendToServer=(event)=>{
        event.preventDefault()
        var obj={
            emailId:emailId,
            password:password
        }
        console.log("from update password ",obj)
        
    }
    return (
        <div>
        <h1>{emailId}</h1>
        <div className="updatepassword">  
            <div className="sideNav">
                        <NavLink to="/dashboard" style={{color:"#5B647F"}}><h5>DashBoard</h5></NavLink>
                        <hr></hr>
                        <NavLink to="/updatePassword" style={{color:"whitesmoke"}}><h5>UpdatePassword</h5></NavLink>
                        <hr></hr>
            </div>
            <div className="body">
            <form>
            <div class="input-field col">
            <input type="text" name="password" onChange={capturePassword} />
            <label class="active" >New Password</label>
        </div>
        <div class="input-field col s12">
        <button  class="waves-effect waves-light btn-large red" onClick={sendToServer}>Update Password</button>
        </div>
        </form>
            </div>
        </div>
        </div>
    )
}

export default UpdatePassword
