import { createContext, useState, useContext } from "react";
// import { loginRequest, registerRequest } from "../api/auth";
import { useEffect } from "react";

export const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  // const [user, setUser] = useState(null);
  // const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [errors, setErrors] = useState([]);
  const [themma, setThemma] = useState("light")
  const [mostrarMenu, setMostrarMenu] = useState("ocultarMenu")

  // const singup = async (user) => {
  //   try {
  //     const res = await registerRequest(user);
  //     setUser(res.data);
  //     setIsAuthenticated(true);
  //   } catch (error) {
  //     console.log(error.response.data);
  //     setErrors(error.response.data);
  //   }
  // };

  // const signin = async (user) => {
  //   try {
  //     const res = await loginRequest(user);
  //     console.log(res);
  //   } catch (error) {
  //     if (Array.isArray(error.response.data)) {
  //       return setErrors(error.response.data);
  //     }
  //     setErrors([error.response.data.message]);
  //   }
    
  // };

  useEffect(() => {
    const logitudError = errors.length;
    if (logitudError > 0) {
      const timer = setTimeout(() => {
        setErrors([]);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [errors]);

  const onClickThemma = () => {
    if (themma == "dark") {
      setThemma("light");
    } else {
      setThemma("dark");
    }
  };

  const onclickMenu = () => {
    if (mostrarMenu == "ocultarMenu") {
      setMostrarMenu("menu");
    } else {
      setMostrarMenu("ocultarMenu");
    }
  };


  return (
    <AuthContext.Provider
      value={{ errors, themma, onClickThemma, mostrarMenu, onclickMenu }}
    >
      {children}
    </AuthContext.Provider>
  );
};
