import { useContext, useState } from 'react'
import FormInput from './FormInput'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import { LoggedInCtx } from '../../App';
import './LoginForm.css';

function LoginForm() {
    const {setLoggedIn, setAdmin} = useContext(LoggedInCtx)
    const [form, setForm] = useState({
        email: "", 
        password: "",
    })
    const navigate = useNavigate();

    const handleChange = (e) => {
      const { name, value } = e.target;
      setForm((prevForm) => ({ ...prevForm, [name]: value }));
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
    
      // Check if required fields are empty
      if (!form.email || !form.password) {
        alert('Please fill out all required fields.');
        return;
      }

      const authUser = {email: form.email, password: form.password}
      try {
          const response = await axios.post('https://localhost:7141/auth/login', authUser)
          localStorage.setItem("token", response.data.token)
          localStorage.setItem("userId", response.data.id)
          localStorage.setItem("role", response.data.role)
          if (response.data.role == 0) {
            setAdmin(true)
          }
          setLoggedIn(true)
          navigate("/")
      } catch(e) {
          if (e.response.data.length > 1) {
              alert(e.response.data[1].description)
          } else if (e.response.data[0].description) {
              alert(e.response.data[0].description)
          } else {
            alert("User does not exist")
          }
          return;
      }
      
    };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form className="login-form" onSubmit={handleSubmit}>
        <FormInput type="email" name="Email" value={form.email} onChange={handleChange} required />
        <FormInput className="input-field" type={'password'} name="Password" value={form.password} onChange={handleChange} required />
        <div className="button-container">
          <button type="submit" className="submit-button">
            Login
          </button>
        </div>
      </form>
      <p>Don't have a user? Register <Link to="/register">here.</Link></p>
    </div>
  );
}

export default LoginForm
