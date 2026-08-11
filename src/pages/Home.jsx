import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  HiOutlinePhone,
  HiOutlineMail,
  HiOutlineLocationMarker,
  HiOutlineCreditCard,
  HiOutlineChartBar,
  HiOutlineCalendar,
  HiOutlineShieldCheck,
} from "react-icons/hi";
import {
  AiOutlineGoogle,
  AiOutlineApple,
  AiOutlineInstagram,
  AiOutlineX,
  AiOutlineLinkedin,
  AiOutlineFacebook,
} from "react-icons/ai";
import Hero from "../components/Hero";
import About from "../components/About";
import Vision from "./Vision";
import ProductSection from "../components/ProductSection";
import HowItWorks from "../components/HowItWorks";
import logo from "../assets/LOGO.png";

const initialContactState = {
  name: "",
  email: "",
  mobile: "",
  subject: "General Query",
  message: "",
};

export default function Home() {
  const location = useLocation();
  const [contactForm, setContactForm] = useState(initialContactState);
  const [contactErrors, setContactErrors] = useState({});
  const [contactSuccess, setContactSuccess] = useState(false);

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      // try immediate scroll
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        // element might not be painted yet; retry shortly
        const t = setTimeout(() => {
          const el2 = document.getElementById(id);
          if (el2) el2.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 120);
        return () => clearTimeout(t);
      }
    }
  }, [location]);

  const handleContactChange = (event) => {
    const { name, value } = event.target;
    setContactForm((prev) => ({ ...prev, [name]: value }));
    if (contactErrors[name]) {
      setContactErrors((prev) => ({ ...prev, [name]: !value.trim() }));
    }
  };

  const handleContactSubmit = (event) => {
    event.preventDefault();
    const requiredFields = ["name", "email", "mobile", "subject", "message"];
    const newErrors = {};

    requiredFields.forEach((field) => {
      if (!contactForm[field]?.trim()) newErrors[field] = true;
    });

    setContactErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      setContactSuccess(false);
      return;
    }

    setContactSuccess(true);
    setContactForm(initialContactState);
  };

  return (
    <>
      <Hero />
      <About showTeam={false} />

      <section id="reserve" className="page-container py-20 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-primary">SMART PARKING</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Reserve Your Spot Easy
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              Everything you need for a smarter, simpler parking experience.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            <article className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="flex items-center justify-between gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#EEF3FF] text-[#4169E1]">
                  <HiOutlineCreditCard className="h-6 w-6" />
                </div>
                <span className="text-sm font-semibold text-slate-400">01</span>
              </div>
              <h3 className="mt-6 text-xl font-semibold text-slate-950">Automated Payment Collection</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">Effortless Transactions</p>
            </article>

            <article className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="flex items-center justify-between gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#EEF3FF] text-[#4169E1]">
                  <HiOutlineChartBar className="h-6 w-6" />
                </div>
                <span className="text-sm font-semibold text-slate-400">02</span>
              </div>
              <h3 className="mt-6 text-xl font-semibold text-slate-950">Real Time Monitoring</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">Live Parking Insights</p>
            </article>

            <article className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="flex items-center justify-between gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#EEF3FF] text-[#4169E1]">
                  <HiOutlineCalendar className="h-6 w-6" />
                </div>
                <span className="text-sm font-semibold text-slate-400">03</span>
              </div>
              <h3 className="mt-6 text-xl font-semibold text-slate-950">Flexible Subscription Plans</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">Plans That Fit</p>
            </article>

            <article className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="flex items-center justify-between gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#EEF3FF] text-[#4169E1]">
                  <HiOutlineShieldCheck className="h-6 w-6" />
                </div>
                <span className="text-sm font-semibold text-slate-400">04</span>
              </div>
              <h3 className="mt-6 text-xl font-semibold text-slate-950">Reserved & Ready</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">Park with Confidence</p>
            </article>
          </div>
        </div>
      </section>

      <Vision />
      <ProductSection />
      <HowItWorks />

      <section id="partner" className="relative overflow-hidden bg-slate-50 py-20 sm:py-24">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-56 overflow-hidden opacity-30">
          <div className="absolute left-1/2 top-10 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/30 blur-3xl" />
          <div className="absolute right-10 top-24 h-48 w-48 rounded-full border border-primary/25" />
        </div>

        <div className="relative page-container">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-xl font-bold uppercase tracking-[0.32em] text-primary">TO REGISTER WITH US</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Partner with PayBayGo and transform parking into a smarter, simpler, and more profitable experience.
            </h2>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-2 lg:items-stretch">
            <article className="flex flex-col justify-between rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/60 transition-transform duration-300 hover:-translate-y-1">
              <div>
                <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">
                  Partner Benefits
                </div>
                <h3 className="mt-6 text-2xl font-semibold text-slate-950">Convert Your Empty Parking Space into Revenue</h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  Have an empty parking lot, garage, or spare warehouse? Put it to work with PAYBAYGO PASS!
                </p>

                <ul className="mt-8 space-y-3 text-sm text-slate-700">
                  <li className="flex gap-3"><span className="mt-1 h-2.5 w-2.5 rounded-full bg-primary" />Easy sign-up and quick listing process — no fuss, no hassle</li>
                  <li className="flex gap-3"><span className="mt-1 h-2.5 w-2.5 rounded-full bg-primary" />List any unused space, be it a spot, a floor, or an entire facility</li>
                  <li className="flex gap-3"><span className="mt-1 h-2.5 w-2.5 rounded-full bg-primary" />Reach fleet operators, businesses and customers looking for secure, reliable parking</li>
                  <li className="flex gap-3"><span className="mt-1 h-2.5 w-2.5 rounded-full bg-primary" />Connect instantly with trusted customers and fleet managers near you</li>
                  <li className="flex gap-3"><span className="mt-1 h-2.5 w-2.5 rounded-full bg-primary" />Secure, enterprise-grade platform keeps your space and earnings protected</li>
                  <li className="flex gap-3"><span className="mt-1 h-2.5 w-2.5 rounded-full bg-primary" />Unlock a steady income stream from underused spaces</li>
                  <li className="flex gap-3"><span className="mt-1 h-2.5 w-2.5 rounded-full bg-primary" />24/7 Customer support</li>
                </ul>
              </div>

              <div className="mt-8">
                <a
                  href="#contact"
                  className="inline-flex w-full items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/20 transition hover:bg-primary-dark"
                >
                  List Your Space
                </a>
              </div>
            </article>

            <article className="flex flex-col justify-between rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/60 transition-transform duration-300 hover:-translate-y-1">
              <div>
                <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">
                  Smart Operations
                </div>
                <h3 className="mt-6 text-2xl font-semibold text-slate-950">Partner with us for simplified parking fee collection management</h3>
                <ul className="mt-8 space-y-3 text-sm text-slate-700">
                  <li className="flex gap-3"><span className="mt-1 h-2.5 w-2.5 rounded-full bg-primary" />Automate parking fee collection by replacing manual ticketing and cash handling with a digital system</li>
                  <li className="flex gap-3"><span className="mt-1 h-2.5 w-2.5 rounded-full bg-primary" />Improve operational efficiency through streamlined, error-free parking management</li>
                  <li className="flex gap-3"><span className="mt-1 h-2.5 w-2.5 rounded-full bg-primary" />Enhance customer experience with fast, ticketless, and cashless parking</li>
                  <li className="flex gap-3"><span className="mt-1 h-2.5 w-2.5 rounded-full bg-primary" />Access to PayBayGo analytics to improve parking system</li>
                  <li className="flex gap-3"><span className="mt-1 h-2.5 w-2.5 rounded-full bg-primary" />Deliver a modern, scalable solution suitable for malls, events, and commercial properties</li>
                  <li className="flex gap-3"><span className="mt-1 h-2.5 w-2.5 rounded-full bg-primary" />24/7 Customer support</li>
                </ul>
              </div>

              <div className="mt-8">
                <a
                  href="#contact"
                  className="inline-flex w-full items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/20 transition hover:bg-primary-dark"
                >
                  Start Seamless Parking
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#4169E1] py-20 sm:py-24">
        <div className="pointer-events-none absolute inset-0 opacity-50">
          <div className="absolute -left-16 top-10 h-40 w-40 rounded-full bg-white/10 blur-3xl animate-float-slow" />
          <div className="absolute right-10 top-12 h-32 w-32 rounded-full border border-white/10" />
          <div className="absolute inset-y-0 right-1/2 h-full w-full bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.15),_transparent_24%),radial-gradient(circle_at_bottom_right,_rgba(255,255,255,0.08),_transparent_20%)]" />
          <div className="absolute left-1/2 bottom-6 h-24 w-24 rounded-full bg-slate-900/10 blur-2xl" />
        </div>

        <div className="relative page-container">
          <div className="mx-auto max-w-4xl text-center text-white animate-fade-in-up">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-200">Partner With Us</p>
            <h2 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Smart Parking for Modern Cities
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-200 sm:text-lg">
              Make parking easier, faster, and more efficient with PayBayGo intelligent parking solutions.
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="relative overflow-hidden bg-white py-20 sm:py-24">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-48 overflow-hidden opacity-30">
          <div className="absolute left-1/4 top-10 h-48 w-48 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute right-0 top-20 h-28 w-28 rounded-full border border-primary/20" />
        </div>

        <div className="relative page-container">
          <div className="mx-auto grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div className="relative overflow-hidden rounded-4xl bg-[#0B1638] p-8 sm:p-10 shadow-2xl shadow-slate-900/10">
              <div className="absolute -right-10 top-16 h-44 w-44 rounded-full bg-primary/10 blur-3xl" />
              <div className="absolute left-6 bottom-12 h-24 w-24 rounded-full border border-primary/20" />
              <div className="relative z-10">
                <p className="text-xl font-bold uppercase tracking-[0.32em] text-[#3982f1]">Contact Us</p>
                <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Have a question?</h2>
                <p className="mt-5 max-w-xl text-base leading-7 text-slate-300">
                  Reach out to our team for partnership, platform, or integration support. We're here to help your operations run smarter.
                </p>

                <div className="mt-10 space-y-5 rounded-[1.75rem] border border-white/10 bg-white/5 p-6">
                  <div className="flex items-start gap-4">
                    <span className="mt-1 inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-primary/10 text-[#7AB0FF]">
                      <HiOutlinePhone size={22} />
                    </span>
                    <div>
                      <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Phone</p>
                      <p className="mt-1 text-lg font-semibold text-white">9071137979</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="mt-1 inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-primary/10 text-[#7AB0FF]">
                      <HiOutlineMail size={22} />
                    </span>
                    <div>
                      <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Email</p>
                      <p className="mt-1 text-lg font-semibold text-white">support@paybaygo.com</p>
                      <p className="mt-1 text-lg font-semibold text-white">Onboarding.partners@paybaygo.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="mt-1 inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-primary/10 text-[#7AB0FF]">
                      <HiOutlineLocationMarker size={22} />
                    </span>
                    <div>
                      <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Address</p>
                      <p className="mt-1 max-w-xs text-base leading-7 text-slate-200">
                        47, Kumarga Krupa Towers, 2nd Cross, 1st Block, Dr Kumars Layout, Nagayanapalya, Maruthisevanagar, Bangalore – 560033
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-4xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/60 sm:p-10">
              <div className="flex flex-col gap-3">
                <p className="text-sm uppercase tracking-[0.32em] font-semibold text-primary">Send a Message</p>
                <h3 className="text-3xl font-semibold text-slate-950">Let’s get your request moving.</h3>
                <p className="text-sm leading-6 text-slate-600">
                  Fill in your details and we’ll respond as soon as possible.
                </p>
                {contactSuccess && (
                  <div className="space-y-3 rounded-3xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-700">
                    <p className="font-semibold text-slate-950">Your inquiry has been received.</p>
                    <p>Still have questions?</p>
                    <a
                      href="https://wa.me/919071137979?text=Hi%20PayBayGo%2C%20I%20have%20an%20inquiry."
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex rounded-full bg-[#4169E1] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#294bb8]"
                    >
                      Chat With Us
                    </a>
                  </div>
                )}
              </div>

              <form onSubmit={handleContactSubmit} className="mt-8 space-y-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="space-y-2">
                    <span className="text-sm font-medium text-slate-700">Name *</span>
                    <input
                      type="text"
                      name="name"
                      value={contactForm.name}
                      onChange={handleContactChange}
                      aria-invalid={contactErrors.name ? "true" : "false"}
                      className={`w-full rounded-3xl border px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10 ${contactErrors.name ? "border-rose-500 ring-1 ring-rose-200" : "border-slate-200"}`}
                    />
                  </label>

                  <label className="space-y-2">
                    <span className="text-sm font-medium text-slate-700">Email *</span>
                    <input
                      type="email"
                      name="email"
                      value={contactForm.email}
                      onChange={handleContactChange}
                      aria-invalid={contactErrors.email ? "true" : "false"}
                      className={`w-full rounded-3xl border px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10 ${contactErrors.email ? "border-rose-500 ring-1 ring-rose-200" : "border-slate-200"}`}
                    />
                  </label>
                </div>

                <label className="space-y-2">
                  <span className="text-sm font-medium text-slate-700">Mobile Number *</span>
                  <input
                    type="tel"
                    name="mobile"
                    value={contactForm.mobile}
                    onChange={handleContactChange}
                    aria-invalid={contactErrors.mobile ? "true" : "false"}
                    className={`w-full rounded-3xl border px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10 ${contactErrors.mobile ? "border-rose-500 ring-1 ring-rose-200" : "border-slate-200"}`}
                  />
                </label>

                <label className="space-y-2">
                  <span className="text-sm font-medium text-slate-700">Choose Subject *</span>
                  <select
                    name="subject"
                    value={contactForm.subject}
                    onChange={handleContactChange}
                    aria-invalid={contactErrors.subject ? "true" : "false"}
                    className={`w-full rounded-3xl border bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10 ${contactErrors.subject ? "border-rose-500 ring-1 ring-rose-200" : "border-slate-200"}`}
                  >
                    <option>General Query</option>
                    <option>API Integration For real-time parking dashboard analysis</option>
                    <option>Automated parking solutions</option>
                    <option>List Your Space For Parking</option>
                  </select>
                </label>

                <label className="space-y-2">
                  <span className="text-sm font-medium text-slate-700">Message *</span>
                  <textarea
                    name="message"
                    rows="5"
                    value={contactForm.message}
                    onChange={handleContactChange}
                    aria-invalid={contactErrors.message ? "true" : "false"}
                    className={`w-full rounded-3xl border px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10 ${contactErrors.message ? "border-rose-500 ring-1 ring-rose-200" : "border-slate-200"}`}
                  />
                </label>

                <button
                  type="submit"
                  className="inline-flex h-14 w-full items-center justify-center rounded-full bg-primary px-6 text-sm font-semibold text-white shadow-lg shadow-primary/20 transition hover:bg-primary-dark"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#0B1638] text-white">
        <div className="page-container border-b border-white/10 py-16">
          <div className="grid gap-10 xl:grid-cols-5">
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-xl font-semibold text-white">
                <a href="/" className="inline-flex items-center">
                  <img
                    src={logo}
                    alt="PayBayGo"
                    className="h-10 w-auto object-contain"
                  />
                </a>
              </div>
              <p className="max-w-sm text-sm leading-6 text-slate-300">
                Smart, seamless and secure parking solutions for modern urban mobility.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">Product</h3>
              <ul className="mt-6 space-y-3 text-sm text-slate-300">
                <li><a href="#" className="transition hover:text-white">PayBayGo Park</a></li>
                <li><a href="#" className="transition hover:text-white">PayBayGo Pass</a></li>
                <li><a href="#" className="transition hover:text-white">PayBayGo Fleet</a></li>
                <li><a href="#" className="transition hover:text-white">PayBayGo Vault</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">Policies</h3>
              <ul className="mt-6 space-y-3 text-sm text-slate-300">
                <li><a href="#" className="transition hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="transition hover:text-white">Terms & Conditions</a></li>
                <li><a href="#" className="transition hover:text-white">Refund Policy</a></li>
                <li><a href="#" className="transition hover:text-white">Shipping & Delivery Policy</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">Quick Links</h3>
              <ul className="mt-6 space-y-3 text-sm text-slate-300">
                <li><a href="/" className="transition hover:text-white">Home</a></li>
                <li><a href="/about" className="transition hover:text-white">About Us</a></li>
                <li><a href="#vision" className="transition hover:text-white">Our Vision</a></li>
                <li><a href="#products" className="transition hover:text-white">Our Product</a></li>
                <li><a href="#partner" className="transition hover:text-white">Partner With Us</a></li>
                <li><a href="#contact" className="transition hover:text-white">Contact Us</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">Contact</h3>
              <div className="mt-6 space-y-4 text-sm text-slate-300">
                <p>support@paybaygo.com</p>
                <p>Onboarding.partners@paybaygo.com</p>
                <a
                  href="https://wa.me/919071150404?text=Hi%20PayBayGo%2C%20I%20have%20an%20inquiry."
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#294bb8]"
                >
                  Chat With Us
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="page-container border-t border-white/10 py-8 text-white">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-xl">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">Download the PayBayGo App</p>
              <div className="mt-4 flex flex-wrap items-center gap-3">
                <a
                  href="https://play.google.com/store/apps/details?id=com.rimsolutions.paybaygo"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:border-[#4169E1] hover:bg-slate-800"
                >
                  <AiOutlineGoogle className="h-5 w-5 text-[#4169E1]" />
                  Google Play
                </a>
                <button
                  type="button"
                  disabled
                  className="inline-flex items-center gap-2 rounded-2xl border border-slate-700 bg-slate-900/70 px-4 py-3 text-sm font-semibold text-slate-400"
                >
                  <AiOutlineApple className="h-5 w-5" />
                  App Store
                </button>
              </div>
            </div>

            <div className="max-w-xl">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">Follow Us</p>
              <div className="mt-4 flex flex-wrap items-center gap-3">
                <a
                  href="https://www.instagram.com/paybaygo/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-700 bg-slate-900 text-slate-200 transition hover:border-[#4169E1] hover:bg-slate-800 hover:text-white"
                >
                  <AiOutlineInstagram className="h-5 w-5" />
                </a>
                <a
                  href="https://x.com/paybaygo"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-700 bg-slate-900 text-slate-200 transition hover:border-[#4169E1] hover:bg-slate-800 hover:text-white"
                >
                  <AiOutlineX className="h-5 w-5" />
                </a>
                <a
                  href="https://www.linkedin.com/company/paybaygo/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-700 bg-slate-900 text-slate-200 transition hover:border-[#4169E1] hover:bg-slate-800 hover:text-white"
                >
                  <AiOutlineLinkedin className="h-5 w-5" />
                </a>
                <a
                  href="https://www.facebook.com/share/19MieWAtZX/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-700 bg-slate-900 text-slate-200 transition hover:border-[#4169E1] hover:bg-slate-800 hover:text-white"
                >
                  <AiOutlineFacebook className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="page-container py-6 text-sm text-slate-500">
          <p>© 2026 PayBayGo – RIM Solutions Private Limited. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
