import { createContext, useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [state, setState] = useState({
    token: null,
    loading: true,
  });

  const saveToken = (value) => {
    setState({
      token: value,
      loading: false,
    });

    localStorage.setItem("token", value);
  };

  useEffect(() => {
    const getToken = localStorage.getItem("token");

    setState({
      token: getToken,
      loading: false,
    });
  }, []);

  const Logout = () => {
    const removeToken = localStorage.removeItem("token");
    setState({
      token: null,
      loading: false,
    });
    return <Navigate to={"/login"} />;
  };
  return (
    <AuthContext.Provider value={{ saveToken, state, Logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
