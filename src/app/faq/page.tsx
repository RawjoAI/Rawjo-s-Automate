import type { Metadata } from "next";
import FAQAccordion from "@/components/FAQAccordion";
import { faqs } from "@/lib/data";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about Horizon Automate's services, pricing, and the voluntary support option.",
};

export default function FAQPage() {
  return (
    <section className="section">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="section-title">Frequently Asked Questions</h1>
        <p className="section-subtitle mx-auto">
          Straight answers about what this is, how it works, and what to
          expect.
        </p>
      </div>
      <div className="mx-auto mt-12 max-w-3xl">
        <FAQAccordion faqs={faqs} />
      </div>
    </section>
  );
}
