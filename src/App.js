import "./App.css";
import ScrollToTop from "./components/ScrolltoTop";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import Create from "./pages/Create";
import Contact from "./pages/Contact";
import About from "./pages/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="create" element={<Create />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
