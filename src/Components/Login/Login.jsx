import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { GlobalContext } from '../../Context/GlobalContext'

function Login() {
    const navigate=useNavigate()
    const {login}=useContext(GlobalContext)
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [formError, setFormError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormError("");
    
        if (!email || !password) {
          setFormError("Email və şifrə mütləqdir.");
          return;
        }
    
        const { data, error } = await login({ email, password });
    
        if (error) {
          setFormError(error);
        } else {
          navigate("/dashboard");
        }
      };

  return (


    <div className="login-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        {formError && <p className="error-message">{formError}</p>}

        <div className="form-group">
          <label htmlFor="email">E-poçt</label>
          <input
            type="email"
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Şifrə</label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit" className="auth-button">Login</button>
        <p className="auth-redirect">
             Hesabınız yoxdur? <Link to="/register">Register</Link>
          </p>
      </form>
    </div>
  )
}

export default Login