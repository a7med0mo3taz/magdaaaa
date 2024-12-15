import { createContext, useState } from "react";

export const UserContext = createContext();
export default function UserContextProvider({ children }) {
    const [token, setToken] = useState(null)
    return <UserContext.Provider value={ {token , setToken} }>
        {children}
    </UserContext.Provider>
}