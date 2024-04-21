import React,{useState} from 'react'
import '../Css/LogIn.css'
import { FaFacebookF } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa6";

const SignIn = () => {
    const [user,setUser] = useState({
        name:"",
        password:""
    }) 
    const postForm = (e)=>{
        const {name,value} = e.target
        setUser({
           ...user,
            [name]:value
        })
    }
    console.log(user.name)
    console.log(user.password)
    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log(user)
    }

  return (
   <>
        <div className="login-container" id='container'>
        <div className="login">
            <div className="login-title"><h3>Welcome to Daraz! Please login.</h3>
        <div className="login-other">New member? <a href="register">Register</a> here.</div>
        </div>
        <form onSubmit={handleSubmit}>
            <div className="mod-login">
                <div className="mod-login-col1">
                    <div className="mod-input mod-input-login">
                        <label htmlFor="">Phone Number or Email</label>
                        <input onChange={postForm} name='name'  type="text" placeholder="Please enter your Phone Number or Email" data-meta="Field" />
                    </div>
                    <br />
                    <div className="mod-input mod-input-password">
                        <label htmlFor="">Password</label>
                        <input onChange={postForm} name='password' type="password" placeholder="Please enter your password" data-meta="Field" ></input>
                    </div>
                    <div className="mod-login-forgot">
                        <a href="#">Forgot your password?</a>
                    </div>
                </div>
                <div className="mod-login-col2">
                    <div className="mod-login-btn">
                    <button type="submit" className="mod-button login-btn">LOGIN</button>
                    </div>
                    <div className="mod-third-party-login">
                        <span>Or, login with</span>
                        <div class="mod-third-party-login-bd"><button class="mod-button mod-third-party-login-fb"><FaFacebookF />Facebook</button><button class="mod-button mod-third-party-login-google"><FaGooglePlusG />Google</button></div>
                    </div>
                </div>
            </div>
        </form>
        </div>
        </div>
   </>
  )
}

export default SignIn