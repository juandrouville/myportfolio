import React from "react";

export const Language = React.createContext();

export default function LanguageProvider({children}){
    const [language , setLanguage] = React.useState('esp');

    return (
        <Language.Provider value={{language,setLanguage}}>
            {children}
        </Language.Provider>
    )
};