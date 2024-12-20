import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import Register from "./Components/Register/Register";
import Login from "./Components/Login/Login";
import CoordinatorSection from "./Components/CoordinatorSection/CoordinatorSection";

// A wrapper component to conditionally render Header and Navbar
const Layout = ({ children }) => {
  const location = useLocation();

  // Check if the current path is not "/register"
  const isRegisterPage = location.pathname === "/register";
  const isLoginPage = location.pathname === "/login";
  const isCoordinator = location.pathname === "/coordinator";

  return (
    <>
      {!isRegisterPage && !isLoginPage && !isCoordinator && <Header />}
      {!isRegisterPage && !isLoginPage && <Navbar />}

      {children}
      {/* <Footer /> */}
    </>
  );
};

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/coordinator" element={<CoordinatorSection />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
