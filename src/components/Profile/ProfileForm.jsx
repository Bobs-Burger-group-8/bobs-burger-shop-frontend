import React, { useState } from 'react';
import ProfileFormInput from './ProfileFormInput';
import { useMutation } from 'react-query';
import { putContact } from '../../services/PostService';
import './Profile.css';

const ProfileForm = ({ user }) => {
  const [form, setForm] = useState(user);
  const [updateSuccessful, setUpdateSuccessful] = useState(false);
  const { mutateAsync: updateContactAsync } = useMutation('putContact', putContact);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUpdateSuccessful(false);
    
    try {
      const updatedForm = await updateContactAsync(form);
      setForm(updatedForm);
      setUpdateSuccessful(true);
      // Reset updateSuccessful state after 2 seconds
      setTimeout(() => {
        setUpdateSuccessful(false);
      }, 2000); //2 seconds
    } 
      catch (error) {
      console.error('Error updating contact:', error);
      setUpdateSuccessful(false);
    }
  };
  

  return (
    <form className="user-info-form" onSubmit={handleSubmit}>
      <ProfileFormInput name="First Name" value={form.firstName} onChange={handleChange} />
      <ProfileFormInput name="Last Name" value={form.lastName} onChange={handleChange} />
      <ProfileFormInput name="Email" value={form.email} onChange={handleChange} />
      <ProfileFormInput name="Street" value={form.street} onChange={handleChange} />
      <ProfileFormInput name="City" value={form.city} onChange={handleChange} />

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
