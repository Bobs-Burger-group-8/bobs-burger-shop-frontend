/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import ProfileFormInput from './ProfileFormInput';
import './Profile.css';

const userData = {
  id: '',
  firstName: 'Henrik',
  lastName: 'Rosenkilde',
  email: 'henrikrosenkilde@email.com',
  phone: '90909090',
  address: 'Karlsminnegata',
  city: 'Stavanger'
};

function ProfileForm() {
  const [ form, setForm ] = useState(userData);
  const [ updateSuccessful, setUpdateSuccessful ] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value}));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Your form submission logic here
  };

  return (
    <>
      {/* FORM SECTION */}
      <div className='profile-container'>
        <form className='user-info-form' onSubmit={(e) => handleSubmit(e)}>
          <section className='info-section'>
            <h1>Your Bob:</h1>
          <ProfileFormInput
            required // User has to have a first name
            name="Firstname: "
            value={form.firstName}
            onChange={handleChange}
          />
          <ProfileFormInput
            required // User has to have a last name
            name="Lastname: "
            value={form.lastName}
            onChange={handleChange}
          />
          <ProfileFormInput
            required // User has to have an email
            name="Email: "
            value={form.email}
            onChange={handleChange}
          />
          <ProfileFormInput
            name="Phone:"
            value={form.phone}
            onChange={handleChange}
          />
          <ProfileFormInput
            name="Address: "
            value={form.address}
            onChange={handleChange}
          />
          <ProfileFormInput
            name="City: "
            value={form.city}
            onChange={handleChange}
          />

            {/* UPDATE BUTTON */}
            <div className="succ-button-container">
              {updateSuccessful && (
                <span className="succ-button" style={{ color: "#00cc00"}}>
                  Saved successfully!
                </span>
              )}
              <button type="submit" className="cm-button" style={{ height: "50px"}}>
                Save
              </button>
            </div>
          </section>
        </form>
        </div>
    </>
  );
}

export default ProfileForm;