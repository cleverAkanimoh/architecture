import { Route, createRoutesFromElements } from "react-router-dom";

import Layout from "./Components/Layout";
import Collections from "./Components/Collections";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Blog from "./Pages/Blog";
import NotFound from "./Pages/NotFound";

const routes = createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="architecture-website" element={<Home />} />

    <Route path="about" element={<About />} />
    <Route path="contact" element={<Contact />} />
    <Route path="blog" element={<Blog />} />

    <Route path="collections" element={<Collections />}>
      <Route />
    </Route>

    <Route path="*" element={<NotFound />} />
  </Route>
);

export default routes;
