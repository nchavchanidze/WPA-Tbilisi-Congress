import { useState, useEffect, useContext, createContext,} from "react";
import AuthService from "../../services/auth.service";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();

  const getToken = () => {
    return localStorage.getItem("user");
  };


  useEffect(() => {
    setUser();
  }, []);

  const value = {
    user,
  };

  return (
    <AuthContext.Provider value={[user, setUser]}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
