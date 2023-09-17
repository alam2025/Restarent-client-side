
import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../providers/AuthoProvider';
import Loader from '../Componets/Loader';

const PrivateRoute = ({ children }) => {

      const {user,loading}=useContext(AuthContext)
    
      
      const location = useLocation()
      if (loading) {
            return <Loader/>
      }
      if (user) {
            return children
      }
      return <Navigate to='/login' state={{ from: location }} replace></Navigate>

};

export default PrivateRoute;