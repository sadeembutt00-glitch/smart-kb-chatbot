import { useState } from "react";
import { AuthContext } from "./AuthContext.js";

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("smartkb_user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const login = (email, password) => {
    const savedUser = JSON.parse(
      localStorage.getItem("smartkb_registered_user")
    );

    if (!savedUser) {
      return {
        success: false,
        message: "No account found. Please sign up.",
      };
    }

    if (savedUser.email !== email || savedUser.password !== password) {
      return {
        success: false,
        message: "Invalid email or password.",
      };
    }

    localStorage.setItem("smartkb_user", JSON.stringify(savedUser));
    setUser(savedUser);

    return { success: true };
  };

  const signup = (name, email, password) => {
    const newUser = {
      name,
      email,
      password,
    };

    localStorage.setItem(
      "smartkb_registered_user",
      JSON.stringify(newUser)
    );

    localStorage.setItem("smartkb_user", JSON.stringify(newUser));
    setUser(newUser);

    return { success: true };
  };

  const logout = () => {
    localStorage.removeItem("smartkb_user");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
}