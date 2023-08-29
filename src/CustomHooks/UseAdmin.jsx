import { useContext } from "react";
import useUrl from "./URL/UseUrl"
import { AuthContext } from "../providers/AuthoProvider";
import { useQuery } from "@tanstack/react-query";

const useAdmin=()=>{
      const [url]=useUrl();
      const {user,loading}=useContext(AuthContext);
      if(loading){
            return <h2>asdas</h2>
      }

      const {data:isAdmin=[], isLoading:isAdminLoading}=useQuery({
            queryKey:['admin'],
            queryFn:async()=>{
                  const res= await fetch(`${url}/user/admin/${user?.id}`);
                  return res.json()
            }
      })
      
      return [isAdmin,isAdminLoading]
}

export default useAdmin