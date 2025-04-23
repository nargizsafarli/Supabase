import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GlobalContext } from "../../Context/GlobalContext";

function Register() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const navigate = useNavigate();
  const {register}=useContext(GlobalContext)

  const validateForm = () => {
    let errors = {};

    if (!name) errors.name = "Ad daxil edilməlidir.";
    if (!surname) errors.surname = "Soyad daxil edilməlidir.";
    if (!phone || !/^\d{1,10}$/.test(phone))
      errors.phone = "Mobil nömrə düzgün deyil!";
    if (!email || !/\S+@\S+\.\S+/.test(email))
      errors.email = "Email (@gmail.com) formatinda olmalidir!";
    if (!password || password.length < 5)
      errors.password = "Şifrə ən azı 6 simvoldan ibarət olmalıdır.";
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };
   
  const handleSubmit=async(e)=>{
    e.preventDefault();
    if (!validateForm()) return;
    const { data, error } = await register({ name, surname, phone, email, password });
    if (error) {
        setError(error);
      } else {
        alert("Qeydiyyat uğurla başa çatdı.");
        navigate("/login");
      }

  }

  return (
    <div>
      <div className="form-container">
        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">
              Ad <span className="important">*</span>
            </label>
            <input
              type="text"
              id="name"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {formErrors.name && (
              <p className="error-message">{formErrors.name}</p>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="surname">
              Soyad <span className="important">*</span>
            </label>
            <input
              type="text"
              id="surname"
              placeholder="Surname"
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
            />
            {formErrors.surname && (
              <p className="error-message">{formErrors.surname}</p>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="phone">
              Mobil nömrə <span className="important">*</span>
            </label>
            <input
              type="text"
              id="phone"
              placeholder="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            {formErrors.phone && (
              <p className="error-message">{formErrors.phone}</p>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="email">
              E-poçt <span className="important">*</span>
            </label>
            <input
              type="email"
              id="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {formErrors.email && (
              <p className="error-message">{formErrors.email}</p>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="password">
              Şifrə <span className="important">*</span>
            </label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {formErrors.password && (
              <p className="error-message">{formErrors.password}</p>
            )}
          </div>

          <button type="submit" className="auth-button">
            Register
          </button>

          <p className="auth-redirect">
            Artıq hesabınız var? <Link to="/login">Giriş</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Register;
