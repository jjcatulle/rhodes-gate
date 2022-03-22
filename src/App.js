import { Routes, Route } from "react-router-dom";

import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer/footer";

import Home from "./pages/home";
import ProjectPage from "./pages/project/project";
import ContactPage from "./pages/contact/contact";
import ScrollToTop from "./components/scrollToTop";
import AboutPage from "./pages/about/about";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height:'100vh',
        overflow:'scroll'
      }}
    >
      <Header />
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:id" element={<ProjectPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
