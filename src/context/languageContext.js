import React from "react";

export const Language = React.createContext();

export default function LanguageProvider({children}){
    const [language , setLanguage] = React.useState('por');

    return (
        <Language.Provider value={{language,setLanguage}}>
            {children}
        </Language.Provider>
    )
};