import React from 'react'
import './register.css'
function Register() {
    return (
        <div>
        <div className="row">
        <div className="col">
        </div>
        <div className="col">
            <h3>Konadigital.ai</h3>
                <br></br>
        <div className="registerbox">
            <h5>Register</h5>
                <br /><br />
            <div className="input-field col s12">
                <input  id="emailId" type="text" />
                <label className="active" for="emailId">EmailId</label>
            </div>
                <br/><br/><br/><br/>
                <div className="input-field col s12">
                <input  id="username" type="text" />
                <label className="active" for="username">Username</label>
            </div>
                <br/><br/><br/><br/>
            <div className="input-field col s12">
                <input  id="password" type="password" />
                <label className="active" for="password">Password</label>
            </div>
            <br/><br/><br/><br/>
            <div className="input-field col s12">
            <button  className="waves-effect waves-light btn-large red">Register</button>
            </div>
        </div>
        </div>
        <div className="col">
        </div>
        </div>
        </div>
    )
}

export default Register
