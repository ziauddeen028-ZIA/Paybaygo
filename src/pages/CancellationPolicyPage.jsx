import BackgroundPattern from "../components/BackgroundPattern";
import Footer from "../components/Footer";
import { cancellationPolicySections } from "../data/cancellationPolicyContent";

function renderBlocks(blocks) {
  return blocks.map((block, index) => {
    if (block.type === "list") {
      return (
        <ul key={`list-${index}`} className="mt-4 list-disc space-y-3 pl-6 text-slate-700">
          {block.items.map((item, itemIndex) => (
            <li key={`${item}-${itemIndex}`} className="leading-8 text-slate-700 sm:text-lg">
              {item}
            </li>
          ))}
        </ul>
      );
    }

    return (
      <p key={`paragraph-${index}`} className="mt-5 text-base leading-8 text-slate-700 sm:text-lg">
        {block.text}
      </p>
    );
  });
}

export default function CancellationPolicyPage() {
  return (
    <main className="bg-slate-50 text-slate-800">
      <section className="relative overflow-hidden bg-[#f4f7ff]">
        <BackgroundPattern variant="grid" opacity={0.18} className="text-primary/20" />

        <div className="page-container relative py-16 md:py-20">
          <div className="mx-auto max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary">Legal</p>

            <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              PAYBAYGO - PARKING SPACE CANCELLATION POLICY
            </h1>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
              Please read the parking space cancellation terms carefully before using the PayBayGo platform.
            </p>
          </div>
        </div>
      </section>

      <section className="page-container py-10 md:py-14">
        <article className="mx-auto max-w-4xl rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 lg:p-12">
          <div className="space-y-8 text-base leading-8 text-slate-700 sm:text-lg">
            {cancellationPolicySections.map((section, index) => (
              <section
                key={`${section.heading}-${index}`}
                className="border-b border-slate-200 pb-10 last:border-0"
              >
                <h2 className="text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
                  {section.heading}
                </h2>

                <div className="mt-2">{renderBlocks(section.blocks)}</div>
              </section>
            ))}
          </div>
        </article>
      </section>

      <Footer />
    </main>
  );
}
