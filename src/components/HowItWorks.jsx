import { useEffect, useState } from "react";
import { HiOutlineUser, HiOutlineMap, HiOutlineCreditCard } from "react-icons/hi";

export default function HowItWorks() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  const steps = [
    {
      id: 1,
      title: "Customer Registers",
      desc: "User downloads PayBayGo and completes quick registration.",
      bullets: [
        "Logs in using mobile number + OTP.",
        "Adds vehicle details.",
        "Completes required vehicle/customer verification.",
      ],
      icon: HiOutlineUser,
    },
    {
      id: 2,
      title: "Customer Finds Parking",
      desc: "Discover and select nearby parking based on location.",
      bullets: [
        "Selects preferred parking location.",
        "Chooses hourly / weekly / monthly plans.",
        "Views location and navigates; books or selects a space.",
      ],
      icon: HiOutlineMap,
    },
    {
      id: 3,
      title: "Payment / Wallet",
      desc: "Top up wallet via Razorpay and pay securely.",
      bullets: [
        "Wallet stores parking balance for quick payments.",
        "Example: add ₹500 → Wallet balance ₹500.",
      ],
      icon: HiOutlineCreditCard,
    },
  ];

  return (
    <section id="how-it-works" className="relative py-20 sm:py-28">
      <div className="page-container">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.32em] text-primary">HOW PAYBAYGO WORKS</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">Parking Made Simple</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600">
            From registration to finding parking and making secure digital payments, PayBayGo makes every step simple, seamless, and convenient.
          </p>
        </div>

        <div className="relative mt-12">
          {/* connecting line for large screens */}
          <div className="hidden lg:block">
            <div className={`absolute left-6 right-6 top-1/2 z-0 h-px bg-primary/10 transition-all ${visible ? "opacity-100" : "opacity-0"}`} />
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {steps.map((s) => {
              const Icon = s.icon;
              return (
                <article
                  key={s.id}
                  className={`relative z-10 overflow-hidden rounded-2xl bg-white p-6 shadow-lg transition-transform duration-500 ${
                    visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon size={20} />
                    </div>
                    <div>
                      <div className="flex items-center gap-3">
                        <div className="text-2xl font-semibold text-primary">{String(s.id).padStart(2, "0")}</div>
                        <h3 className="text-lg font-semibold text-slate-900">{s.title}</h3>
                      </div>
                      <p className="mt-3 text-sm text-slate-600">{s.desc}</p>
                    </div>
                  </div>

                  <ul className="mt-4 space-y-2 text-sm text-slate-700">
                    {s.bullets.map((b, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="mt-1 h-2.5 w-2.5 rounded-full bg-primary" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  {s.id === 3 && (
                    <div className="mt-5 inline-block rounded-lg border border-slate-100 bg-slate-50 px-4 py-3 shadow-sm">
                      <div className="text-xs font-medium text-slate-500">PAYBAYGO WALLET</div>
                      <div className="mt-1 text-lg font-semibold text-slate-900">₹500</div>
                      <div className="text-xs text-slate-500">Available Parking Balance</div>
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
