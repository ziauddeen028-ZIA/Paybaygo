import React from "react";

function FeatureGroup({ title, subtitle, items = [] }) {
  return (
    <div className="mb-6 rounded-lg border border-ink/8 bg-white/60 p-4 shadow-sm transition hover:shadow-md">
      <h4 className="text-xs font-semibold uppercase tracking-wide text-ink/70">{title}</h4>
      <p className="mt-1 text-sm font-medium text-ink">{subtitle}</p>

      {items.length > 0 && (
        <ul className="mt-3 space-y-2 text-sm text-ink/80">
          {items.map((it, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="mt-1 inline-block h-2 w-2 flex-none rounded-full bg-primary" />
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
    <div className="w-full max-w-sm lg:max-w-xs">
      <FeatureGroup
        title="ONBOARDING & SETUP"
        subtitle="Lightning-Fast Onboarding"
        items={["Plug & Play Setup", "Zero Signup Fee"]}
      />

      <FeatureGroup
        title="PRICING & REVENUE"
        subtitle="Purely Commission-Based"
        items={["Pay-Per-Car/Bike Successful Transaction", "Same-Day Settlements"]}
      />

      <FeatureGroup
        title="OPERATIONS & SUPPORT"
        subtitle="Crystal-Clear Tracking"
        items={["Monitor every transaction and balance in real-time.", "100% Ticketless Transactions", "24/7 Merchant Support"]}
      />
    </div>
  );
}
