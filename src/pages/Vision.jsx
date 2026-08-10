import heroImg from "../assets/image.png";

const pillarCards = [
  {
    src: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=900&q=80",
    alt: "Smart parking technology",
    title: "01 — SMART",
    description: "Intelligent technology that simplifies parking and operations.",
  },
  {
    src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=80",
    alt: "Digital parking payment technology",
    title: "02 — SEAMLESS",
    description: "Frictionless digital experiences from entry to payment.",
  },
  {
    src: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=900&q=80",
    alt: "Secure urban mobility operations",
    title: "03 — SECURE",
    description: "Reliable and secure transactions users can trust.",
  },
];

export default function Vision() {
  return (
    <main className="page-container py-16 lg:py-24">
      {/* Hero */}
      <section id="vision" className="grid items-start gap-10 lg:grid-cols-2">
        <div className="order-2 lg:order-1 lg:pl-12">
          <div className="max-w-2xl">
            <div className="text-xl font-bold uppercase tracking-wide text-[#4169E1]">Our Vision</div>
            <h1 className="mt-4 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl">
              Building the Future of Smart Parking
            </h1>

            <p className="mt-6 text-base leading-relaxed text-slate-700">
              We are on a mission to simplify and modernize the way businesses and individuals manage
              payments, expenses, and fleet operations. Our goal is to make every financial and
              operational interaction smart, seamless, and secure.
            </p>

            <p className="mt-4 text-base leading-relaxed text-slate-700">
              From automated parking payments to comprehensive expense tracking and intelligent cab
              roster management, our solutions are designed to eliminate complexity and enhance
              efficiency. We combine intuitive technology with robust infrastructure to deliver
              real-time insights, automated workflows, and frictionless user experiences.
            </p>
          </div>
        </div>

        <div className="relative order-1 lg:order-2">
          <div className="overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-2xl transition-opacity duration-700 animate-fade-in-scale">
            <img
              src={heroImg}
              alt="PayBayGo parking visual"
              className="w-full h-[420px] object-cover sm:h-[480px] lg:h-[560px]"
            />
            <div className="absolute top-6 left-6 z-20">
              <div className="rounded-md bg-white/95 px-3 py-2 shadow">
                <div className="text-xs font-semibold tracking-wider text-[#4169E1]">SMART PARKING</div>
                <div className="mt-0.5 text-sm font-medium text-slate-800">Powered by PayBayGo</div>
              </div>
            </div>
            <div className="absolute right-6 bottom-8 hidden h-12 w-2 rounded-md bg-[#4169E1]/80 lg:block" />
          </div>
        </div>
      </section>

      <section className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {pillarCards.map((card) => (
          <article
            key={card.title}
            className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-md"
          >
            <div className="overflow-hidden rounded-t-3xl">
              <img
                src={card.src}
                alt={card.alt}
                className="w-full h-52 object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />
            </div>
            <div className="p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#4169E1]">{card.title}</p>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{card.description}</p>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
