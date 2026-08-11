import { useEffect, useState } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/LOGO.png";

const LINKS = [
  { label: "Home", href: "/" },
  { label: "Our Vision", href: "#vision" },
  { label: "Our Products", href: "#products" },
  { label: "How PayBayGo Works", href: "#how-it-works" },
  { label: "About", href: "/about" },
  { label: "Contact Us", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  function handleNavClick(e, href) {
    e.preventDefault();
    if (!href) return setOpen(false);

    // route path
    if (href.startsWith("/")) {
      if (location.pathname === href) {
        window.scrollTo({ top: 0, behavior: "smooth" });
        setOpen(false);
        return;
      }
      navigate(href);
      setOpen(false);
      return;
    }

    // anchor within home
    if (href.startsWith("#")) {
      if (location.pathname === "/") {
        const el = document.getElementById(href.slice(1));
        if (el) el.scrollIntoView({ behavior: "smooth" });
        setOpen(false);
      } else {
        navigate("/");
        setOpen(false);
        setTimeout(() => {
          const el = document.getElementById(href.slice(1));
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }, 120);
      }
    }
  }

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-shadow duration-300 ${scrolled ? "bg-white/95 shadow-[0_1px_0_0_theme(colors.pattern)] backdrop-blur" : "bg-white/80 backdrop-blur"
        }`}
    >
      <nav className="page-container flex h-18 items-center justify-between py-3">
        <a href="/" onClick={(e) => handleNavClick(e, "/")} className="flex items-center gap-2 font-display text-xl font-semibold tracking-tight text-ink">
          <img
            src={logo}
            alt="PayBayGo"
            className="h-9 w-9 object-contain"
          />          PayBayGo
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="group relative py-2 text-sm font-medium text-ink/80 transition-colors hover:text-primary"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 h-[2px] w-0 bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="https://play.google.com/store/apps/details?id=com.rimsolutions.paybaygo"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-primary px-5 py-2.5 text-sm font-semibold text-primary transition-all hover:bg-primary hover:text-white"
          >
            Get the App ↗
          </a>

          <a
            href="#partner"
            onClick={(e) => handleNavClick(e, "#partner")}
            className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-sm shadow-primary/20 transition-all hover:bg-primary-dark hover:shadow-md"
          >
            Partner With Us
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-lg border border-pattern text-ink lg:hidden"
        >
          {open ? <HiOutlineX size={22} /> : <HiOutlineMenu size={22} />}
        </button>
      </nav>

      {/* Mobile panel */}
      <div
        className={`lg:hidden overflow-hidden bg-white transition-all duration-300 ${open ? "max-h-[calc(100vh-72px)] opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <div className="max-h-[calc(100vh-72px)] overflow-y-auto">
          <ul className="page-container flex flex-col gap-1 border-t border-pattern py-4 pb-8">

            {LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="flex items-center gap-3 rounded-lg px-2 py-4 text-base font-medium text-ink transition-colors hover:bg-surface-blue hover:text-primary"
                >
                  <span
                    className="h-[2px] w-4 bg-primary/40"
                    aria-hidden="true"
                  />

                  {link.label}
                </a>
              </li>
            ))}

            {/* Get the App */}
            <li className="mt-4">
              <a
                href="https://play.google.com/store/apps/details?id=com.rimsolutions.paybaygo"
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center rounded-full border-2 border-primary px-5 py-3.5 text-base font-semibold text-primary transition-all hover:bg-primary hover:text-white"
              >
                Get the App ↗
              </a>
            </li>

            {/* Partner With Us */}
            <li className="mt-3">
              <a
                href="#partner"
                onClick={(e) => handleNavClick(e, "#partner")}
                className="flex w-full items-center justify-center rounded-full bg-primary px-5 py-3.5 text-base font-semibold text-white shadow-sm shadow-primary/20 transition-all hover:bg-primary-dark"
              >
                Partner With Us
              </a>
            </li>

          </ul>
        </div>
      </div>
    </header>
  );
}
