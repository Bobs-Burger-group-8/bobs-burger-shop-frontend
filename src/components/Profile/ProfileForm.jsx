import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProfileFormInput from './ProfileFormInput';

import { useMutation } from 'react-query';
import { putContact } from '../../services/ContactService.jsx';

import './Profile.css';

const BASE_API_URL = 'https://boolean-api-server.fly.dev/henrikrosenkilde/';

const ProfileForm = ({ user }) => {
  const [form, setForm] = useState(user);
  const [updateSuccessful, setUpdateSuccessful] = useState(false);

  useEffect(() => {
    setForm(user);
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUpdateSuccessful(false);
  
    // Check if required fields are empty
    if (!form.firstName || !form.lastName || !form.email) {
      alert('Please fill out all required fields.');
      return;
    }
    
    try {
      const response = await axios.put(BASE_API_URL + 'contact/1', form);
      setForm(response.data);
      setUpdateSuccessful(true);
      
      // Reload the webpage after successful update
      window.location.reload();
    } catch (error) {
      console.error('Error updating contact:', error);
      setUpdateSuccessful(false);
    }
  };
  
  

  return (
    <form className="user-info-form" onSubmit={handleSubmit}>
      <ProfileFormInput name="First Name" value={form.firstName} onChange={handleChange} required />
      <ProfileFormInput name="Last Name" value={form.lastName} onChange={handleChange} required />
      <ProfileFormInput name="Email" value={form.email} onChange={handleChange} required />
      <ProfileFormInput name="Street" value={form.street} onChange={handleChange} />
      <ProfileFormInput name="City" value={form.city} onChange={handleChange} />
      {/*<ProfileFormInput name="Phone" value={form.phone} onChange={handleChange} />*/}

      <div className="succ-button-container">
        {updateSuccessful && (
          <span className="succ-button" style={{ color: '#00cc00' }}>
            Saved successfully!
          </span>
        )}
        <button type="submit" className="cm-button" style={{ height: '50px' }}>
          Update
        </button>
      </div>
    </form>
  );
};

export default ProfileForm;
