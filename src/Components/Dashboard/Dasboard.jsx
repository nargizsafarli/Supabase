import React, { useContext } from 'react'
import { GlobalContext } from '../../Context/GlobalContext'
import { useNavigate } from 'react-router-dom'
import dash from "./Dashboard.module.css"

function Dasboard() {
    const{user,logout}=useContext(GlobalContext)
    const navigate = useNavigate()

    const handleLogout = async () => {
      await logout()
      navigate("/login")
    }
  return (
    <div className={dash.container}>
         <h1>Welcome Our Dashboard {user?.user_metadata.name} !</h1>
         <button onClick={handleLogout}>Çıxış</button>
    </div>
  )
}

export default Dasboard