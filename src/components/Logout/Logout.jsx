import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { LoggedInCtx } from '../../App'

function Logout() {
    const {loggedIn, setLoggedIn} = useContext(LoggedInCtx)
    const navigate = useNavigate()

    useEffect(() => {
        localStorage.removeItem("token")
        localStorage.removeItem("userId")
        setLoggedIn(false)
        navigate("/")
    })
}

export default Logout
