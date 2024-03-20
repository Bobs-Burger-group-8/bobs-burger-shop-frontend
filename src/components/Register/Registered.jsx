import React from 'react'
import { Link } from 'react-router-dom'

function Registered() {
  return (
    <div>
      <h1>Successfully Registered!</h1>
      <p>You can now login <Link to="/login">here</Link>.</p>
    </div>
  )
}

export default Registered
