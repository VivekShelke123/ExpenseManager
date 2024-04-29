import React, { createContext } from 'react';

type MyContextData = {
  logged: Boolean;
  setLogged: React.Dispatch<React.SetStateAction<Boolean>>;
  userName:String;
  setUserName : React.Dispatch<React.SetStateAction<string>>;
};

export const UserDetails = createContext<MyContextData | undefined>(undefined);
