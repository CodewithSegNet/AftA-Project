import { lazy, Suspense } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./utils/ScrollToTop.jsx";
import { DownloadModalProvider } from "./utils/DownloadModalContext.jsx";
import logoDark from "./assets/logodark.png";


// Dynamic imports — each page becomes its own chunk
const HomePage  = lazy(() => import("./pages/homepage/index.jsx"));
const About     = lazy(() => import("./pages/about/index.jsx"));
const Features  = lazy(() => import("./pages/features/index.jsx"));
const Community = lazy(() => import("./pages/community/index.jsx"));
const Privacy   = lazy(() => import("./pages/policy/index.jsx"));
const FAQPage   = lazy(() => import("./pages/faq/index.jsx"));

// Minimal loading fallback — keeps layout stable
const PageLoader = () => (
  <div style={{
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    background: "rgba(255, 247, 230, 1)",
  }}>
    <style>{`
      @keyframes pulseBeat {
        0% {
          transform: scale(0.95);
          opacity: 0.75;
        }
        50% {
          transform: scale(1.08);
          opacity: 1;
        }
        100% {
          transform: scale(0.95);
          opacity: 0.75;
        }
      }
      .loader-pulse-beat {
        animation: pulseBeat 1.5s ease-in-out infinite;
        will-change: transform, opacity;
      }
    `}</style>
    <img
      src={logoDark}
      alt="Loading..."
      className="loader-pulse-beat"
      style={{
        width: "135px",
        height: "auto",
        display: "block"
      }}
    />
  </div>
);



function App() {
  return (
    <DownloadModalProvider>
      <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <ScrollToTop />
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/"          element={<HomePage />} />
            <Route path="/about"     element={<About />} />
            <Route path="/features"  element={<Features />} />
            <Route path="/course"    element={<Features />} />
            <Route path="/courses"   element={<Features />} />
            <Route path="/community" element={<Community />} />
            <Route path="/circle"    element={<Community />} />
            <Route path="/circles"   element={<Community />} />
            <Route path="/privacy"   element={<Privacy />} />
            <Route path="/faq"       element={<FAQPage />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </DownloadModalProvider>
  );
}

export default App;