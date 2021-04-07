import axios from 'axios'
import React, { useState } from 'react'
import './login.css'
import {useHistory} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {userLogin} from '../actions/user.login'
import { useSelector } from 'react-redux'
function Login() {
    const isLogin=useSelector((state) => state.userData.isUserLoggedIn)
    console.log("from login",isLogin);
    var history=useHistory()
    var dispatch=useDispatch()
    const [credentials,setCredentials]=useState({})
    const capture=(event)=>{
        setCredentials({...credentials,[event.target.name]:event.target.value})
    }
    const loginUser=()=>{
        console.log(credentials)
        dispatch(userLogin(credentials))
        if(isLogin){
            alert("user logged in ")
            localStorage.setItem("emailId",credentials.emailId)
            history.push("/dashboard")
        }
        else{
            alert("user login failed")
        }
    }
    return (
        <div>
            <div className="row">
                <div className="col"></div>
            <div className="col">
                    <h3><span style={{color:'tomato'}}>Kona</span>digital.ai</h3>
                        <br></br>
                <div className="loginbox">
                    <h5>SignIn</h5>
                        <br /><br />
                    <div className="input-field col s12">
                        <input  id="emailId" type="text" name="emailId" onChange={capture}/>
                        <label class="active" for="emailId">EmailId</label>
                    </div>
                        <br/><br/><br/><br/>
                    <div className="input-field col s12">
                        <input  id="password" type="password" name="password" onChange={capture}/>
                        <label className="active" for="password">Password</label>
                    </div>
                    <br/><br/><br/><br/><br/><br/>
                    <div className="input-field col s12">
                    <button  className="waves-effect waves-light btn-large red" onClick={loginUser}>Sign In</button>
                    </div>
                </div>
            </div>
                <div className="col"></div>
            </div>
        </div>
    )
}

export default Login
