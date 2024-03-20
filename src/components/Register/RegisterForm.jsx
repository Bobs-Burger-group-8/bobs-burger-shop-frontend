import axios from 'axios';
import { useState } from 'react'
import './RegisterForm.css'
import FormInput from './FormInput';
import { useNavigate } from 'react-router-dom';

function RegisterForm() {
    const [form, setForm] = useState({
        firstName: "", 
        lastName: "", 
        email: "", 
        password: "",
        phone: "",
        street: "", 
        city: "", 
        })
    const navigate = useNavigate();

      const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prevForm) => ({ ...prevForm, [name]: value }));
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
      
        // Check if required fields are empty
        if (!form.firstName || !form.lastName || !form.email || !form.password || !form.street || !form.city || !form.phone) {
          alert('Please fill out all required fields.');
          return;
        }

        const authUser = {email: form.email, password: form.password, FirstName: form.firstName, LastName: form.lastName, Street: form.street, City: form.city, Phone: form.phone}
        try {
            await axios.post('https://localhost:7141/auth/register', authUser)
            navigate("/registerd")
        } catch(e) {
            if (e.response.data.length > 1) {
                alert(e.response.data[1].description)
            } else {
                alert(e.response.data[0].description)
            }
            return;
        }
        
      };

      return (
        <div className="register-form-container">
            <h1>Register</h1>
            <form className="user-info-form" onSubmit={handleSubmit}>
                <FormInput type="text" name="First Name" value={form.firstName} onChange={handleChange} required />
                <FormInput type="text" name="Last Name" value={form.lastName} onChange={handleChange} required />
                <FormInput type="email" name="Email" value={form.email} onChange={handleChange} required />
                <FormInput className="input-field" type={'password'} name="Password" value={form.password} onChange={handleChange} required />
                <FormInput type="text" name="Street" value={form.street} onChange={handleChange} />
                <FormInput type="text" name="City" value={form.city} onChange={handleChange} />
                <FormInput type="phone" name="Phone" value={form.phone} onChange={handleChange} />

                <div className="button-container">
                    <button type="submit" className="submit-button">
                        Register
                    </button>
                </div>
            </form>
        </div>
    )
}

export default RegisterForm
