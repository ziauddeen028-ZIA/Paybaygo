import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AiOutlineWhatsApp } from "react-icons/ai";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import AboutPage from "./pages/About";
import PrivacyPolicyPage from "./pages/PrivacyPolicy";
import TermsAndConditionsPage from "./pages/TermsAndConditions";
import PaymentPolicyPage from "./pages/PaymentPolicyPage";
import CancellationPolicyPage from "./pages/CancellationPolicyPage";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditionsPage />} />
        <Route path="/payment-policy" element={<PaymentPolicyPage />} />
        <Route path="/parking-space-cancellation-policy" element={<CancellationPolicyPage />} />
        {/* Other routes added in later phases. */}
      </Routes>

      <a
        href="https://wa.me/919071150404?text=Hi%20PayBayGo%2C%20I%20would%20like%20to%20know%20more."
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with PayBayGo on WhatsApp"
        className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-3 rounded-full  px-4 py-3 shadow-2xl shadow-slate-900/20 transition-transform duration-200 hover:-translate-y-0.5 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#25D366]/80 md:px-5 md:py-3"
      >
        <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-slate-900/25 transition-transform duration-200 group-hover:scale-105">
          <AiOutlineWhatsApp className="h-7 w-7" />
        </span>
        
      </a>
    </BrowserRouter>
  );
}
