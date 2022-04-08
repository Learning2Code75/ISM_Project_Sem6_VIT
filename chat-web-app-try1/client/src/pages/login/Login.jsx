import './login.css'

export default function Login(){
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
          <div className = "loginBox">
            <input placeholder="email" className="loginInput" />
            <input placeholder="password" className="loginInput" />
            <button className ="loginButton">Login</button>
            <span className = "loginForgot">Forgot Password?</span>
            <button className = "loginRegisterButton"> Create new Account </button>

          </div>
        </div>
      </div>
    </div>
  )
}
