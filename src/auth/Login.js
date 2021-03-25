import React from 'react'
import './login.css'
function Login() {
    return (
        <div>
            <div className="row">
                <div className="col">
                </div>
            <div className="col">
                    <h3>Konaldigital.ai</h3>
                        <br></br>
                <div className="loginbox">
                    <h5>SignIn</h5>
                        <br /><br />
                    <div class="input-field col s12">
                        <input  id="emailId" type="text" />
                        <label class="active" for="emailId">EmailId</label>
                    </div>
                        <br/><br/><br/><br/>
                    <div class="input-field col s12">
                        <input  id="password" type="password" />
                        <label class="active" for="password">Password</label>
                    </div>
                    <br/><br/><br/><br/><br/><br/>
                    <div class="input-field col s12">
                    <button  class="waves-effect waves-light btn-large red">Sign In</button>
                    </div>
                </div>
            </div>
                <div className="col">
                </div>
            </div>
        </div>
    )
}

export default Login
