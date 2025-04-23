import React, { useContext } from 'react'
import { GlobalContext } from '../../Context/GlobalContext'
import { useNavigate } from 'react-router-dom'

function Dasboard() {
    const{user,logout}=useContext(GlobalContext)
    const navigate = useNavigate()

    const handleLogout = async () => {
      await logout()
      navigate("/login")
    }
  return (
    <div>
         <h1>Salam, {user?.user_metadata.name}</h1>
         <button onClick={handleLogout}>Çıxış</button>
    </div>
  )
}

export default Dasboard