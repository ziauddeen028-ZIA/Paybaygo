import BackgroundPattern from "./BackgroundPattern";
import HeroVisual from "./HeroVisual";
import FeaturePanel from "./FeaturePanel";
import { HiArrowRight } from "react-icons/hi";
import { useLocation, useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();
  const location = useLocation();

  function handleHowWorksClick(e) {
    e.preventDefault();
    const id = "how-it-works";
    if (location.pathname === "/") {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
    navigate("/");
    setTimeout(() => {
      const el2 = document.getElementById(id);
      if (el2) el2.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 120);
  }
  return (
    <section id="home" className="relative overflow-hidden bg-white">
      <BackgroundPattern variant="bays" opacity={0.55} className="text-pattern" />

      <div className="page-container relative grid items-start gap-8 py-16 lg:grid-cols-[1fr_1.25fr_0.9fr] lg:gap-8 lg:py-24">
        {/* LEFT: Messaging */}
        <div className="order-1 max-w-xl animate-fade-in-up lg:order-none">
          <span className="inline-flex items-center gap-2 rounded-full border border-pattern bg-surface-blue px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wide text-primary">
            Smart Parking Infrastructure
          </span>

          <h1 className="mt-6 text-3xl font-semibold leading-[1.04] text-ink sm:text-4xl lg:text-5xl">
            PARK SAFE
            <br />
            WITH <span className="text-primary">PAYBAYGO</span>
          </h1>

          <p className="mt-5 text-base leading-relaxed text-ink/80 sm:text-lg">
            Enjoy secure parking and seamless digital payments designed for
            your convenience. Smart, reliable, and hassle-free parking—every time.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#partner"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-primary-dark hover:translate-x-0.5"
            >
              Get Started
              <HiArrowRight />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-white px-6 py-3.5 text-sm font-semibold text-ink transition-colors hover:border-primary hover:text-primary"
            >
              Contact Sales
            </a>
            <button
              onClick={handleHowWorksClick}
              aria-label="How PayBayGo Works"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-primary-dark"
            >
              How PayBayGo Works →
            </button>
          </div>

          <ul className="mt-8 grid max-w-md grid-cols-1 gap-3 text-sm">
            <li className="flex items-start gap-3">
              <span className="mt-1 inline-block h-2 w-2 flex-none rounded-full bg-primary" />
              <span className="text-ink/80">Seamless Entry &amp; Exit</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 inline-block h-2 w-2 flex-none rounded-full bg-primary" />
              <span className="text-ink/80">No Hidden Charges</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 inline-block h-2 w-2 flex-none rounded-full bg-primary" />
              <span className="text-ink/80">Instant Vehicle Recognition</span>
            </li>
          </ul>
        </div>

        {/* CENTER: Visual (dominant) */}
        <div className="order-3 mx-auto w-full lg:order-none lg:mx-0">
          <div className="mx-auto w-full max-w-3xl transform-gpu animate-fade-in-scale">
            <div className="relative">
              <div className="absolute -inset-12 -z-10 hidden rounded-3xl bg-gradient-to-br from-primary/6 to-transparent blur-3xl lg:block" />
              <HeroVisual />
            </div>
          </div>
        </div>

        {/* RIGHT: Feature panel */}
        <aside className="order-2 animate-fade-in-up lg:order-none">
          <FeaturePanel />
        </aside>
      </div>
    </section>
  );
}
