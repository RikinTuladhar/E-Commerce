import React from 'react'
import '../Css/LogIn.css'
import { FaFacebookF } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa6";
const SignUp = () => {
  return (
 <>
  <div className="login-container" id='container'>
        <div className="login">
            <div className="login-title"><h3>Create your Daraz Account</h3>
        <div className="login-other">Already member? <a href="login">Login</a> here.</div>
        </div>
        <form action="">
            <div className="mod-login">
                <div className="mod-login-col1">
                    <div className="mod-input mod-input-login">
                        <label htmlFor="">Phone Number</label>
                        <input type="text" placeholder="Please enter your Phone Number" data-meta="Field" value=""/>
                    </div>
                    <div className="mod-input mod-input-login">
                        <label htmlFor="">Verification Code from whatsApp</label>
                        <input type="text" placeholder="Verification Code" data-meta="Field" value=""/>
                    </div>
                    {/* <span class="mod-login-change-sms-type">Get code via other methods </span> */}
                    <div className="mod-input mod-input-password">
                        <label htmlFor="">Password</label>
                        <input type="password" placeholder="Please enter your password" data-meta="Field" value=""></input>
                    </div>
                    <div className="mod-login-forgot">
                        <a href="#">Forgot your password?</a>
                    </div>
                </div>
                <div className="mod-login-col2">
                <div className="mod-input mod-input-full-name">
                        <label htmlFor="">Full name</label>
                        <input type="password" placeholder="Enter your first and last name" data-meta="Field" value=""></input>
                    </div>
                    <div className="mod-login-btn">
                    <button type="submit" className="mod-button signup-btn">SIGN UP</button>
                    <div>
                        <span>By clicking "SIGN UP", I agree to Daraz's <a href="">Terms of Use</a> and <a href="">Privacy Policy</a></span>
                    </div>
                    </div>
                    <div className="mod-third-party-login">
                        <span>Or, sign up with</span>
                        <div class="mod-third-party-signup-bd"><button class="mod-button-signup mod-third-party-login-fb"><FaFacebookF />Facebook</button><button class="mod-button-signup mod-third-party-login-google"><FaGooglePlusG />Google</button></div>
                    </div>
                </div>
            </div>
        </form>
        </div>
        </div>
 </>
  )
}

export default SignUp