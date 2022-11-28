import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import ProtifolioProvider from "./context/ProtifolioProvider";
import "./index.css";
import { Home, About, Contact, Projects, NotFound } from "./pages";

function App() {
  return (
    <ProtifolioProvider>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </ProtifolioProvider>
  );
}

export default App;
