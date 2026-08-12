import BackgroundPattern from "../components/BackgroundPattern";
import Footer from "../components/Footer";
import { paymentPolicySections } from "../data/paymentPolicyContent";

function renderBlocks(blocks) {
  const elements = [];
  let bulletBuffer = [];
  let numberBuffer = [];

  const flushBuffers = () => {
    if (bulletBuffer.length) {
      elements.push(
        <ul key={`bullet-${elements.length}`} className="ml-5 list-disc space-y-3 text-slate-700">
          {bulletBuffer}
        </ul>
      );
      bulletBuffer = [];
    }

    if (numberBuffer.length) {
      elements.push(
        <ol key={`number-${elements.length}`} className="ml-5 list-decimal space-y-3 text-slate-700">
          {numberBuffer}
        </ol>
      );
      numberBuffer = [];
    }
  };

  blocks.forEach((block, index) => {
    if (block.type === "bullet") {
      bulletBuffer.push(
        <li key={`bullet-${index}`} className="pl-2 leading-7">
          {block.text}
        </li>
      );
      return;
    }

    if (block.type === "number") {
      numberBuffer.push(
        <li key={`number-${index}`} className="pl-2 leading-7">
          {block.text}
        </li>
      );
      return;
    }

    flushBuffers();

    if (block.type === "subheading") {
      elements.push(
        <h3 key={`subheading-${index}`} className="mt-7 text-lg font-semibold text-slate-900">
          {block.text}
        </h3>
      );
      return;
    }

    elements.push(
      <p key={`paragraph-${index}`} className="leading-8 text-slate-700">
        {block.text}
      </p>
    );
  });

  flushBuffers();
  return elements;
}

export default function PaymentPolicyPage() {
  return (
    <main className="bg-slate-50 text-slate-800">
      <section className="relative overflow-hidden bg-[#f4f7ff]">
        <BackgroundPattern variant="grid" opacity={0.18} className="text-primary/20" />

        <div className="page-container relative py-16 md:py-20">
          <div className="mx-auto max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary">Legal</p>

            <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              PAYBAYGO – PAYMENT POLICY
            </h1>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
              Please read the payment terms carefully before using the PayBayGo platform.
            </p>
          </div>
        </div>
      </section>

      <section className="page-container py-10 md:py-14">
        <article className="mx-auto max-w-4xl rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 lg:p-12">
          <div className="space-y-8 text-base leading-8 text-slate-700 sm:text-lg">
            {paymentPolicySections.map((section, index) => (
              <section
                key={`${section.heading}-${index}`}
                className="border-b border-slate-200 pb-10 last:border-0"
              >
                <h2 className="text-xl font-semibold leading-8 text-[#2563EB] sm:text-2xl">
                  {section.heading}
                </h2>

                <div className="mt-5 space-y-4">{renderBlocks(section.blocks)}</div>
              </section>
            ))}
          </div>
        </article>
      </section>

      <Footer />
    </main>
  );
}
