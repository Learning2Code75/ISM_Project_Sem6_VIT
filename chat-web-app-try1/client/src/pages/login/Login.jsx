import './login.css'
import {useRef} from 'react';

export default function Login(){
  const email = useRef();
  const password = useRef();

  const handleLoginSubmit= (e)=>{
    e.preventDefault();
    console.log(email.current.value);
    console.log(password.current.value)
  }


  return(
    <div className = "login">
      <div className = "loginWrapper">
        <div className = "loginLeft">
          <h3 className = "loginLogo">ISM Project</h3>
          <span className = "loginDesc">
              TLS Handshake done for End to End clients
           </span>
        </div>
        <div className = "loginRight">
          <form className = "loginBox" onSubmit={handleLoginSubmit}>
            <input type="email" placeholder="email" className="loginInput" ref ={email} required/>
            <input type="password" placeholder="password" className="loginInput" ref ={password} required/>
            <button className ="loginButton">Login</button>
            <span className = "loginForgot">Forgot Password?</span>
            <button className = "loginRegisterButton"> Create new Account </button>
          </form>
        </div>
      </div>
    </div>
  )
}
