import React from 'react';
import ProfileForm from '../components/Profile/ProfileForm';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { getContact } from '../services/PostService';
import { useEffect, useState } from 'react';
import '../components/Profile/Profile.css';

export default function Profile() {
  const { id } = useParams();
  const { data: user, isLoading, error } = useQuery(["getContact", id], () => getContact(1)); //API still doesnt have a number 1
  const [fullname, setFullname] = useState("");

  useEffect(() => {
    if (user) {
      setFullname(`${user.firstName} ${user.lastName}`);
    }
  }, [user]);

  if (isLoading) return <h1>Page is loading...</h1>;
  if (error) return <h1>{error.message}</h1>;

  return (
    <div className="content">
      <h2>Bobber Eater</h2>
      <h3>{fullname}</h3>
      <ProfileForm user={user} />
    </div>
  );
}
