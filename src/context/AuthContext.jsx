import { createContext, useContext, useEffect, useState } from "react";

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

  return (
    <AuthContext.Provider value={{ saveToken, state }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
