import aboutImg from "../assets/image.png";
import { HiOutlineUser, HiOutlineUserGroup, HiOutlineCog, HiOutlineShieldCheck } from "react-icons/hi";

export default function About({ showTeam = true }) {
  return (
    <>
      <section id="about" className="page-container py-16 lg:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          {/* LEFT: Image with floating badge */}
          <div className="relative lg:order-none">
            <div className="relative overflow-hidden rounded-2xl shadow-lg">
              <img
                src={aboutImg}
                alt="Parking scene"
                className="w-full h-[420px] object-cover sm:h-[480px] lg:h-[560px]"
              />

              {/* floating badge */}
              <div className="absolute top-6 left-6 z-20 transform-gpu">
                <div className="rounded-lg bg-white/95 px-3 py-2 shadow-md" style={{ minWidth: 160 }}>
                  <div className="text-xs font-semibold tracking-widest text-[#4169E1]">SMART PARKING</div>
                  <div className="mt-0.5 text-[13px] font-medium text-slate-800">Powered by PayBayGo</div>
                </div>
              </div>

              {/* subtle royal blue decorative accent */}
              <div className="absolute right-4 bottom-6 h-14 w-2 rounded-md bg-[#4169E1]/80 opacity-90" />
            </div>
          </div>

          {/* RIGHT: Content */}
          <div className="lg:pl-10">
            <div className="max-w-xl">
              <div className="text-xl font-bold uppercase tracking-wide text-[#4169E1]">About PayBayGo</div>
              <h2 className="mt-4 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl">
                Making Parking &amp; Payments Smarter
              </h2>

              <p className="mt-6 text-base leading-relaxed text-slate-700">
                We are on a mission to simplify and modernize the way businesses and individuals manage
                payments, expenses, and fleet operations. Our goal is to make every financial and
                operational interaction smart, seamless, and secure.
              </p>

              <p className="mt-4 text-base leading-relaxed text-slate-700">
                From automated parking payments to comprehensive expense tracking and intelligent
                fleet/roster management, our solutions eliminate complexity and improve efficiency
                through real-time insights, automated workflows, and frictionless user experiences.
              </p>

              <p className="mt-4 text-base leading-relaxed text-slate-700">
                Ready to experience PayBayGo?
                Join the smart parking community across Bangalore & Chennai.
              </p>

              {/* Feature cards */}
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                <article className="rounded-lg border bg-white p-4 shadow-sm transition-transform hover:-translate-y-1 hover:shadow-md">
                  <h3 className="text-sm font-semibold text-slate-900">Smart Payment Solutions</h3>
                  <p className="mt-2 text-sm text-slate-600">Digital, wallet-based systems for fast and secure transactions.</p>
                </article>
                <article className="rounded-lg border bg-white p-4 shadow-sm transition-transform hover:-translate-y-1 hover:shadow-md">
                  <h3 className="text-sm font-semibold text-slate-900">Expense Management</h3>
                  <p className="mt-2 text-sm text-slate-600">Streamlined tools to track, control, and optimize spending.</p>
                </article>
                <article className="rounded-lg border bg-white p-4 shadow-sm transition-transform hover:-translate-y-1 hover:shadow-md">
                  <h3 className="text-sm font-semibold text-slate-900">Fleet &amp; Roster Management</h3>
                  <p className="mt-2 text-sm text-slate-600">Intelligent tools for modern fleet operations.</p>
                </article>
              </div>

              <div className="mt-8 inline-block rounded-md bg-[#f8fafc] px-4 py-2 text-sm font-semibold text-slate-900 shadow-sm">
                Built for smarter urban mobility
              </div>
            </div>
          </div>
        </div>
      </section>

      {showTeam && (
        <section className="page-container py-16 lg:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#4169E1]">MEET OUR TEAM</p>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                The People Behind PayBayGo
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
                Meet the team driving innovation, technology, and growth at PayBayGo.
              </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
              <article className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#EEF3FF] text-[#4169E1]">
                    <HiOutlineUser className="h-6 w-6" />
                  </div>
                  <span className="text-sm font-semibold text-slate-400">01</span>
                </div>
                <div className="mt-6">
                  <div className="inline-flex rounded-full bg-[#EEF3FF] px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-[#4169E1]">
                    Founder
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-slate-950">Mohammed Imran</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    Brings entrepreneurial vision and strategic leadership, shaping PayBayGo’s mission to simplify urban mobility through innovative SaaS solutions.
                  </p>
                </div>
              </article>

              <article className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#EEF3FF] text-[#4169E1]">
                    <HiOutlineUserGroup className="h-6 w-6" />
                  </div>
                  <span className="text-sm font-semibold text-slate-400">02</span>
                </div>
                <div className="mt-6">
                  <div className="inline-flex rounded-full bg-[#EEF3FF] px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-[#4169E1]">
                    Co-Founder
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-slate-950">Richard</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    Drives execution and growth, turning ideas into impactful products with a focus on scalability and customer success.
                  </p>
                </div>
              </article>

              <article className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#EEF3FF] text-[#4169E1]">
                    <HiOutlineCog className="h-6 w-6" />
                  </div>
                  <span className="text-sm font-semibold text-slate-400">03</span>
                </div>
                <div className="mt-6">
                  <div className="inline-flex rounded-full bg-[#EEF3FF] px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-[#4169E1]">
                    Head of Engineering
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-slate-950">Raghavendra</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    Leads the engineering team with technical expertise and a passion for building reliable, scalable systems.
                  </p>
                </div>
              </article>

              <article className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#EEF3FF] text-[#4169E1]">
                    <HiOutlineShieldCheck className="h-6 w-6" />
                  </div>
                  <span className="text-sm font-semibold text-slate-400">04</span>
                </div>
                <div className="mt-6">
                  <div className="inline-flex rounded-full bg-[#EEF3FF] px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-[#4169E1]">
                    Lead of DevOps
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-slate-950">Kiran Kumar</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    Bridges development and operations, ensuring smooth deployments, continuous integration, and reliable infrastructure.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
