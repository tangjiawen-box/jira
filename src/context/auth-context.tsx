import { FullPageErrorFallback, FullPageLoading } from "components/lib";
import React, { ReactNode, useContext, useState } from "react"
import { useAsync } from "utils/use-async";
import * as auth from '../auth-provider'
import { User } from "../screens/project-list/search-panel"
import { useMount } from "../utils";
import { http } from "../utils/http";


interface Propss {
    username: string,
    password: string,
    
}
const bootstrapUser = async () => {
     let user = null;
     const token = auth.getToken();
     if (token) {
       const data = await http("me", { token });
       user = data.user;
     }
     return user;
   };



const AuthContext = React.createContext<{
    user: User | null,
    login: (form: Propss) => Promise<void>,
    register: (form: Propss) => Promise<void>,
    
    logout: () => Promise<void>,
} | undefined>(undefined)
AuthContext.displayName = 'AuthContext'

export const AuthProvider = ({children}: { children: ReactNode}) => {
  const {
    data: user,
    error,
    isLoading,
    isIdle,
    isError,
    run,
    setData: setUser,
  } = useAsync<User | null>();
          
    const login = (form: Propss) => auth.login(form).then(user => setUser(user))
    const register = (form: Propss) => auth.register(form).then(user => setUser(user))
    const logout = () => auth.logout().then(user => setUser(null))

     useMount(() => {
      run(bootstrapUser());
    });
  
  if (isIdle || isLoading) {
    return <FullPageLoading />;
  }

  if (isError) {
    return <FullPageErrorFallback error={error} />;
  }

        
    return <AuthContext.Provider children={children} value={{user, login, register, logout}} ></AuthContext.Provider>
       
    
}


export const useAuth = () => {
   const context = useContext(AuthContext)
   if (!context) {
    throw new Error("请在use中使用useContext")
   }

   return context
}



