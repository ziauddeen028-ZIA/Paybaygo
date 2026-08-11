import { HiOutlineSparkles, HiOutlineCreditCard, HiOutlineTruck, HiOutlineShieldCheck } from "react-icons/hi";

const products = [
  {
    title: "PayBayGo Park",
    description:
      "PayBayGo Park is a cutting-edge wallet-based platform revolutionizing the way parking payments are collected and managed. Designed to streamline urban mobility, PayBayGo offers an automated, secure, and user-friendly solution for parking fee collection.",
    image:
      "https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=900&q=80",
    icon: HiOutlineSparkles,
    status: null,
  },
  {
    title: "PayBayGo Pass",
    description:
      "PayBayGo Pass is a subscription-based parking solution designed for car owners who value convenience, safety, and affordability. Whether you're commuting daily or planning long-term parking, our pass ensures you always have a secure spot waiting for you.",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80",
    icon: HiOutlineCreditCard,
    status: null,
  },
  {
    title: "PayBayGo Fleet",
    description: "Coming Soon...",
    image:
      "https://images.unsplash.com/photo-1517142089942-ba376ce32a2e?auto=format&fit=crop&w=900&q=80",
    icon: HiOutlineTruck,
    status: "Coming Soon",
  },
  {
    title: "PayBayGo Valet",
    description: "Coming Soon...",
    image:
      "https://images.unsplash.com/photo-1499492525486-3c2c48c9a6d5?auto=format&fit=crop&w=900&q=80",
    icon: HiOutlineShieldCheck,
    status: "Coming Soon",
  },
];

export default function ProductSection() {
  return (
    <section id="products" className="page-container py-16 lg:py-24">
      <div className="mx-auto flex max-w-6xl flex-col gap-8">
        <div className="max-w-2xl">
          <p className="text-xl font-bold uppercase tracking-[0.35em] text-[#4169E1]">OUR PRODUCT</p>
          <h2 className="mt-4 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl">
            With us, you can expect a transparent and trustworthy partnership.
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((item) => {
            const Icon = item.icon;
            return (
              <article
                key={item.title}
                className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="overflow-hidden rounded-t-3xl">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-52 object-cover transition duration-500 ease-out hover:scale-105"
                  />
                </div>
                <div className="space-y-4 p-5">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#EEF3FF] text-[#4169E1] transition duration-300 hover:scale-105">
                      <Icon className="h-6 w-6" />
                    </div>
                    {item.status ? (
                      <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700">
                        {item.status}
                      </span>
                    ) : null}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.description}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
