import React, { useContext } from 'react'
import { GlobalContext } from '../../Context/GlobalContext'
import { Navigate } from "react-router-dom";

function PrivateRoute({children}) {
    const {user}=useContext(GlobalContext)
    if (!user) {
        return <Navigate to="/login" replace />;
      }
    
  return children;
}

export default PrivateRoute