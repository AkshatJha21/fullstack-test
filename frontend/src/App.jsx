import { BrowserRouter,  Route, Routes } from "react-router-dom";
import LandingPage from "./pages/landing/landing_page";
import LoginPage from "./pages/auth/login_page";
import SignupPage from "./pages/auth/signup_page";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LandingPage />} path="/"/>
        <Route element={<LoginPage />} path="/login"/>
        <Route element={<SignupPage />} path="/signup"/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
