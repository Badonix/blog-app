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
  const [user, setUser] = useState(true);
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout user={user} />}>
          <Route index element={user ? <HomePage /> : <Login />} />
          <Route path="create" element={user ? <Create /> : <Login />} />
          <Route path="contact" element={user ? <Contact /> : <Login />} />
          <Route path="about" element={user ? <About /> : <Login />} />
          <Route path="blog/:id" element={user ? <SinglePost /> : <Login />} />
          <Route path="profile" element={user ? <Settings /> : <Login />} />
          <Route path="login" element={user ? <HomePage /> : <Login />} />
          <Route path="register" element={user ? <HomePage /> : <Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
