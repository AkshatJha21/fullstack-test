import { BrowserRouter,  Navigate,  Route, Routes } from "react-router-dom";
import LandingPage from "./pages/landing/landing_page";
import LoginPage from "./pages/auth/login_page";
import SignupPage from "./pages/auth/signup_page";
import { useEffect, useState } from "react";

function App() {
  const [session, setSession] = useState(false);

  useEffect(() => {
    const checkAuth = () => {
      const token = localStorage.getItem("token");
      setSession(Boolean(token));
    }

    checkAuth();
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LandingPage />} path="/"/>
        <Route element={<LoginPage />} path="/login"/>
        <Route element={<SignupPage />} path="/signup"/>
        <Route element={session ? <>Dashboard</> : <Navigate to={"/login"} />} path="/dashboard" />
      </Routes>
    </BrowserRouter>
  )
}

export default App
