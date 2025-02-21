import { createContext, useState } from "react";

// Create a context for user data
export const UserContext = createContext();

// Create a provider component
export function UserProvider({ children }) {
  const [user, setUser] = useState({
    username: "JohnDoe",
    avatar: "https://via.placeholder.com/150",
    bio: "I love minimalist design!",
  });
  
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}