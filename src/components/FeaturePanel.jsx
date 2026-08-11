import {
  HiOutlineLightningBolt,
  HiOutlineCreditCard,
  HiOutlineSupport,
} from "react-icons/hi";

function FeatureGroup({ title, subtitle, items = [], Icon }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[#8ba3ec] hover:shadow-lg">
      {Icon ? (
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#EEF3FF] text-[#4169E1]">
          <Icon size={24} />
        </div>
      ) : null}

      <p className="text-xs font-semibold tracking-wide text-slate-500">
        {title}
      </p>

      <h3 className="mt-2 text-base font-medium text-slate-900">
        {subtitle}
      </h3>

      {items.length > 0 && (
        <ul className="mt-3 space-y-2 text-sm text-slate-600">
          {items.map((it, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="mt-2 h-2 w-2 flex-none rounded-full bg-[#4169E1]" />
              <span>{it}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function FeaturePanel() {
  return (
    <div className="space-y-6">
      <FeatureGroup
        Icon={HiOutlineLightningBolt}
         title="ONBOARDING & SETUP"
        subtitle="Lightning-Fast Onboarding"
        items={["Plug & Play Setup", "Zero Signup Fee"]}
      />

      <FeatureGroup
        Icon={HiOutlineCreditCard}
        title="PRICING & REVENUE"
        subtitle="Purely Commission-Based"
        items={[
          "Pay-Per-Car/Bike Successful Transaction",
          "Same-Day Settlements",
        ]}
      />

      <FeatureGroup
        Icon={HiOutlineSupport}
        title="OPERATIONS & SUPPORT"
        subtitle="Crystal-Clear Tracking"
        items={[
          "Monitor every transaction and balance in real-time.",
          "100% Ticketless Transactions",
          "24/7 Merchant Support",
        ]}
      />
    </div>
  );
}