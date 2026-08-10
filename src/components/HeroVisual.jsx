import React, { useEffect, useState } from "react";
import heroImg from "../assets/image.png";

const STATUSES = ["Scanning", "Vehicle Detected", "Access Granted"];

export default function HeroVisual() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % STATUSES.length), 2600);
    return () => clearInterval(t);
  }, []);

  const status = STATUSES[idx];

  return (
    <div className="relative mx-auto w-full max-w-3xl">
      {/* Subtle radial blue glow behind the visual */}
      <div aria-hidden className="absolute inset-0 -z-10 flex items-center justify-center">
        <div
          className="rounded-2xl opacity-60 blur-3xl"
          style={{ width: 520, height: 380, background: "radial-gradient(closest-side,#e6f2ff,transparent 60%)" }}
        />
      </div>

      <div className="relative overflow-hidden rounded-2xl bg-white shadow-sm">
        <div className="relative">
          <img
            src={heroImg}
            alt="PayBayGo parking visual"
            className="block w-full h-auto object-cover"
          />

          {/* Scanning line overlay */}
          <div className="absolute inset-0 pointer-events-none">
            <div
              className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-sky-400/70 to-transparent opacity-90"
              style={{ animation: "scan 3s linear infinite" }}
            />
          </div>

          {/* Status badge that cycles through states */}
          <div className="absolute top-4 left-4 z-20 flex items-center gap-3 rounded-full bg-white/95 px-3 py-1.5 text-sm font-medium text-slate-800 shadow">
            <span className="relative flex h-3 w-3">
              <span
                className={`absolute inline-flex h-full w-full rounded-full ${
                  status === "Access Granted" ? "bg-emerald-400" : "bg-sky-500"
                } opacity-80`}
              />
              <span className="absolute inline-flex h-full w-full rounded-full bg-current opacity-30 animate-ping" />
            </span>
            <span>{status}</span>
          </div>

          {/* Small device/readout label */}
          <div className="absolute bottom-4 left-4 z-20 rounded-md bg-white/90 px-3 py-1 text-xs text-slate-700 shadow-sm">
            PBG-CAM-01
          </div>
        </div>
      </div>

      {/* Keyframes for the scanning line */}
      <style>{`@keyframes scan { 0% { transform: translateY(-120%); } 50% { transform: translateY(0%); } 100% { transform: translateY(120%); } }`}</style>
    </div>
  );
}
