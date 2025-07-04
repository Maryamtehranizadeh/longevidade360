import React from "react";
import { Routes, Route } from "react-router-dom";
import NotFound from "../pages/NotFound";
import HomePage from "../pages/Homepage";
import BookAppointment from "../pages/BookAppointment";
import About from "../pages/About";
import Blog from "../pages/Blog";
function Router() {
  return (
    <Routes>
      <Route index path="/" element={<HomePage />} replace />
      <Route path="/*" element={<NotFound />} />
      <Route path="/book-your-appointment" element={<BookAppointment />} />
      <Route path="/about" element={<About />} />
      <Route path="/blog" element={<Blog />} />
    </Routes>
  );
}

export default Router;
