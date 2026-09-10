import type { Metadata } from "next";
import ServiceCards from "@/components/ServiceCards";
import Timeline from "@/components/Timeline";
import CTABanner from "@/components/CTABanner";
import { services, process } from "@/lib/data";

export const metadata: Metadata = {
  title: "Services",
  description:
    "AI automation services: workflow automation, AI-powered assistants, data pipelines, and process consulting for small businesses.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="section">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="section-title">Services</h1>
          <p className="section-subtitle mx-auto">
            Practical automation and AI tooling for businesses that are tired
            of doing the same manual task every single day.
          </p>
        </div>
        <div className="mt-12">
          <ServiceCards services={services} />
        </div>
      </section>

      <section className="section bg-slate-50">
        <h2 className="section-title text-center">How Engagements Work</h2>
        <p className="section-subtitle mx-auto text-center">
          No open-ended retainers. Every project has a defined start, scope,
          and end.
        </p>
        <div className="mx-auto mt-12 max-w-2xl">
          <Timeline
            items={process.map((p) => ({
              date: `Step ${p.step}`,
              title: p.title,
              description: p.description,
            }))}
          />
        </div>
      </section>

      <section className="section">
        <div className="mx-auto max-w-2xl">
          <h2 className="section-title">Pricing Approach</h2>
          <p className="mt-4 text-slate-600">
            Pricing depends entirely on scope — a single automation connecting
            two tools is very different from a multi-step AI assistant with
            custom logic. After a discovery call, you'll receive a written
            quote broken down by deliverable, so you know exactly what you're
            paying for before agreeing to anything. Typical projects for
            small businesses have started in the low tens of thousands of
            Kenyan shillings, but this varies and is never assumed in
            advance.
          </p>
        </div>
      </section>

      <section className="section bg-slate-50">
        <CTABanner
          title="Ready to scope your project?"
          description="A short discovery call is the first step — no obligation, no pressure."
          ctaLabel="Book a Discovery Call"
          ctaHref="/contact"
        />
      </section>
    </>
  );
}
