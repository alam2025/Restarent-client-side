import React, { useContext } from 'react';

import { Navigate, useLocation } from 'react-router-dom';
import useAdmin from '../../../CustomHooks/UseAdmin';
import { AuthContext } from '../../../providers/AuthoProvider';




const AdminRoute = ({children}) => {
      const location=useLocation();
     const {user, loading}= useContext(AuthContext);
     const [isAdmin,isAdminLoading]=useAdmin();
     

     
      
      if(loading || isAdminLoading){
            return  <><progress className="progress progress-accent w-56" value="0" max="100"></progress>
            <progress className="progress progress-accent w-56" value="10" max="100"></progress>
            <progress className="progress progress-accent w-56" value="40" max="100"></progress>
           </>
      }

    
      if(user && isAdmin) {
            return children
      }

      return <Navigate to="/" state={{from:location}} replace></Navigate>
};

export default AdminRoute;