import { useState } from "react";
//import Register from "./Register.jsx";
import Login from "./Login.jsx";
//import Dashboard from "./Dashboard.jsx";



function App() {
  const [currentView, setCurrentView] = useState("login");
  const [currentUser, setCurrentUser] = useState(null);
  const handleLoginSuccess = (user) => {
    setCurrentUser(user);
    setCurrentView("dashboard");
  };



  const handleRegisterSuccess = () => {
    alert("Registration Successful");
    setCurrentView("login");
  };

  return (
    <div>
      {currentView === "login" && (
        <Login
          onRegisterClick={() => setCurrentView("register")}
          onLoginSuccess={handleLoginSuccess}
        />
      )}

    {currentView === "register" && (
        <Register
          onRegisterSuccess={handleRegisterSuccess}
          onLoginClick={() => setCurrentView("login")}
        />
      )}

      {currentView === "dashboard" && (
        <Dashboard user={currentUser} onLogout={()=>{
          setCurrentUser(null);
          setCurrentView('login');
        }}
        />
      )}
    </div>
  );
}

export default App;
