import { useEffect, useState } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { useLocation, useNavigate } from "react-router-dom";

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
      className={`sticky top-0 z-50 w-full transition-shadow duration-300 ${
        scrolled ? "bg-white/95 shadow-[0_1px_0_0_theme(colors.pattern)] backdrop-blur" : "bg-white/80 backdrop-blur"
      }`}
    >
      <nav className="page-container flex h-18 items-center justify-between py-3">
        <a href="/" onClick={(e) => handleNavClick(e, "/")} className="flex items-center gap-2 font-display text-xl font-semibold tracking-tight text-ink">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-primary text-white">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M4 21V7.5C4 5.567 5.567 4 7.5 4H14a5 5 0 0 1 5 5v3a5 5 0 0 1-5 5H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <circle cx="8" cy="21" r="1.4" fill="currentColor" />
            </svg>
          </span>
          PayBayGo
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

        <div className="hidden lg:block">
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
        className={`grid overflow-hidden bg-white transition-[grid-template-rows] duration-300 ease-out lg:hidden ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="min-h-0">
          <ul className="page-container flex flex-col gap-1 border-t border-pattern py-4">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="flex items-center gap-3 rounded-lg px-2 py-3 text-base font-medium text-ink transition-colors hover:bg-surface-blue hover:text-primary"
                >
                  <span className="h-[2px] w-4 bg-primary/40" aria-hidden="true" />
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="#partner"
                onClick={(e) => handleNavClick(e, "#partner")}
                className="block rounded-full bg-primary px-5 py-3 text-center text-sm font-semibold text-white"
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
