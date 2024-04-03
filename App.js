import React, { useContext } from "react";
import Navigation from "./src/config/navigation/Navigation";
import { Login } from "./src/modules/auth/login/adapters/screens/Login";
import { AuthContext, UserLogged } from "./src/config/user-logged/UserLogged";

function AppContent() {
  const { isAuthenticated } = useContext(AuthContext);
  return isAuthenticated ? <Navigation /> : <Login />;
}
//<Login /> : <Navigation />

export default function App() {
  return (
    <UserLogged>
      <AppContent />
    </UserLogged>
  );
}
