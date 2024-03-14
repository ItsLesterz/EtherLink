import { createContext, useState, useContext, useEffect } from "react";
import { register, login, verifytoken } from "../middleware/Users.js";
import { getRoleData } from "../middleware/Roles.js";
import { toast } from "react-toastify";
import Cookies from "js-cookie";

export const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("J:useAuth must be used within an AuthProvider");
  }

  return context;
};
function getCookie(name) {
  const cookies = document.cookie.split(";");
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();
    if (cookie.startsWith(name + "=")) {
      return cookie.substring(name.length + 1);
    }
  }
  return null;
}

//un elemento global
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setloading] = useState(true);
  const [message, setMessage] = useState("");

  const signup = async (username, email, password, imagePath) => {
    try {
      const data = await register(username, email, password, imagePath);

      if (data) {
        toast.success("Email Sent!", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        toast.info("Please Verify your Account", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }
    } catch (err) {
      toast.error(err.response.data.msg, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  const signin = async (email, password) => {
    try {
      const data = await login(email, password);
      setUser(data.datareturned);
      setMessage(data.msg);
      const roledata = await getRoleData(data.datareturned.role);
      setRole(roledata);

      document.cookie = "token=" + data.tokencookie + ";";
      console.log(data.tokencookie);
      setIsAuthenticated(true);
    } catch (err) {
      toast.error(err.response.data.msg, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      setMessage(err.response.data.msg);
    }
  };

  const logout = () => {
    Cookies.remove("token");
    setUser(null);
    setIsAuthenticated(false);
  };

  useEffect(() => {
    const checkLogin = async () => {
      const cookies = Cookies.get();

      if (!cookies.token) {
        setIsAuthenticated(false);
        setUser(null);
        setloading(false);
      }

      try {
        const res = await verifytoken(getCookie("token"));

        if (!res.userdata) {
          setIsAuthenticated(false);

          setloading(false);
          return;
        }
        setIsAuthenticated(true);
        setUser(res.userdata);
        setloading(false);
      } catch (error) {
        setIsAuthenticated(false);
        setUser(null);
        setloading(false);
      }
    };

    checkLogin();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        message,
        signup,
        signin,
        logout,
        isAuthenticated,
        loading,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
