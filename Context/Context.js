import { createContext, useContext, useState } from "react";

export const authContext = createContext();

const Context = ({ children }) => {
    const [user, setUser] = useState(null);
    

    const contextValue = {};
    return (
        <authContext.Provider value={contextValue}>
            {children}
        </authContext.Provider>
    );
};

export default Context;