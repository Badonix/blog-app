import "./App.css";
import ScrollToTop from "./components/ScrolltoTop";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import Create from "./pages/Create";
import Contact from "./pages/Contact";
import About from "./pages/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SinglePost from "./pages/SinglePost";
import { useState } from "react";
import Settings from "./pages/Settings";
import Login from "./pages/Login";
import Register from "./pages/Register";
function App() {
  const [user, setUser] = useState(false);
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="create" element={<Create />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
          <Route path="blog/:id" element={<SinglePost />} />
          <Route path="profile" element={<Settings />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
