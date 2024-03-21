import ProfileForm from '../components/Profile/ProfileForm';
import { useEffect, useState } from 'react';
import '../components/Profile/Profile.css';
import axios from 'axios';
import OrderHistory from '../components/Profile/OrderHistory.jsx';

export default function Profile() {
  const [id, setId] = useState(localStorage.getItem("userId"))
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  async function getUser() {
    await axios.get("https://localhost:7141/users/" + id).then(res => setUser(res.data))
    setLoading(false)
  }

  useEffect(() => {
    getUser()
  }, [])

  if(loading) {
    return <h1>Page is loading...</h1>
  }

  return (
    <div className="content">
      <h2>Bobber Eater</h2>
      <div className="content-formhist">
        <div className='history'>
          <ProfileForm id={id} user={user} />
          <h2>Order history</h2>
          <OrderHistory id={id} user={user} />
        </div>
      </div>
    </div>
  );
}
