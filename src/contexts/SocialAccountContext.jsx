import React, { createContext, useEffect, useState } from 'react'

const SocialAccountContext = createContext();

const SocialAccountContextProvider = ({children}) => {
    const [socialAccounts,setSocialAccounts] = useState([]);


    const getSocialAccounts = async() => {
    try {
        const response = await fetch("https://localhost:7110/api/SocialAccounts");
        const data = await response.json();
        setSocialAccounts(data);
        } catch (error) {
            console.error("Sosyal hesaplar listelenemedi...",error);
        }
    }

    useEffect(() => { 
               
        getSocialAccounts();
    },[]);

    const socialAccountsValues = {
        socialAccounts,
        setSocialAccounts
    }

  return <SocialAccountContext.Provider value={socialAccountsValues}>
    {children}
  </SocialAccountContext.Provider>
}

export { SocialAccountContext, SocialAccountContextProvider }