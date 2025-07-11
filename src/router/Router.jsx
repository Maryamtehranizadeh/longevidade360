import React from "react";
import { Routes, Route } from "react-router-dom";
import NotFound from "../pages/NotFound";
import HomePage from "../pages/Homepage";
import BookAppointment from "../pages/BookAppointment";
import About from "../pages/About";
import Blog from "../pages/Blog";
import TermsConditions from "../pages/TermsConditions";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import BlogTopic from "../pages/BlogTopic";
function Router() {
  return (
    <Routes>
      <Route index path="/" element={<HomePage />} replace />
      <Route path="/*" element={<NotFound />} />
      <Route path="/book-your-appointment" element={<BookAppointment />} />
      <Route path="/about" element={<About />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/terms-and-conditions" element={<TermsConditions />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/blog/topic/:topicId" element={<BlogTopic />} />
    </Routes>
  );
}

export default Router;
