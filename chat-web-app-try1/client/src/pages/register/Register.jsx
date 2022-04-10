import './register.css'

export default function Register(){
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
            <input placeholder="username" className="loginInput" />
            <input placeholder="password" className="loginInput" minLength="6" />

            <input placeholder="confirm password" className="loginInput" />
            <button className ="loginButton">Register</button>
            <button className = "loginRegisterButton"> Login Here </button>

          </div>
        </div>
      </div>
    </div>
  )
}
