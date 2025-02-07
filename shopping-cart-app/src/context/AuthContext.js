import { createContext, useContext, useState } from "react";

// ✅ Create Auth Context
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

// ✅ Export AuthContext hook
export const useAuth = () => useContext(AuthContext);
