import { Route, createRoutesFromElements } from "react-router-dom";

import Layout from "./Components/Layout";
import Collections from "./Components/Collections";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Blog from "./Pages/Blog";
import NotFound from "./Pages/NotFound";
import Login from "./Pages/Auth/Login";
import Register from "./Pages/Auth/Register";

const routes = createRoutesFromElements(
  <Route path="/">
    <Route path="architecture" element={<Layout />}>
    
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="blog" element={<Blog />} />

      <Route path="auth">
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
      
      <Route path="collections" element={<Collections />}>
        <Route />
      </Route>
      
      <Route path="plans" element={<Collections />}>
        <Route />
      </Route>
      
      <Route path="*" element={<NotFound />} />
    </Route>
  </Route>
);

export default routes;
