import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/homepage/index.jsx";
import ScrollToTop from "./layouts/ScrollToTop.jsx";
import About from "./pages/about/index.jsx";
import Features from "./pages/features/index.jsx";
import Community from "./pages/community/index.jsx";
import Privacy from "./pages/policy/index.jsx";
import FAQPage from "./pages/faq/index.jsx";
import { DownloadModalProvider } from "./layouts/DownloadModalContext.jsx";

function App() {
  return (
    <DownloadModalProvider>
      <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About/>} />
          <Route path="/features" element={<Features />} />
          <Route path="/community" element={<Community />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/faq" element={<FAQPage />} />
        </Routes>
      </BrowserRouter>
    </DownloadModalProvider>
  );
}

export default App;