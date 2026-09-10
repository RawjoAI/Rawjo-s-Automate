import type { Metadata } from "next";
import Hero from "@/components/Hero";
import StatCards from "@/components/StatCards";
import ServiceCards from "@/components/ServiceCards";
import SupportCards from "@/components/SupportCards";
import ProgressBar from "@/components/ProgressBar";
import CTABanner from "@/components/CTABanner";
import { ShieldCheck, Eye, Lock } from "lucide-react";
import {
  stats,
  services,
  process,
  supportOptions,
  equipmentFund,
} from "@/lib/data";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Horizon Automate helps small businesses automate repetitive workflows using AI and no-code tools. See services, progress, and how to get involved.",
};

const commitments = [
  {
    icon: ShieldCheck,
    title: "Clear Scope, Written Terms",
    description:
      "Every project starts with a written proposal covering deliverables, timeline, and price — before any payment changes hands.",
  },
  {
    icon: Eye,
    title: "Open About What This Is",
    description:
      "This is one independent freelancer's practice, not a registered company, financial institution, or charity. That's stated plainly everywhere on this site.",
  },
  {
    icon: Lock,
    title: "Your Data Stays Yours",
    description:
      "Contact and project information is used only to deliver the work you asked for. See the Privacy Policy for specifics.",
  },
];

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="section">
        <h2 className="section-title text-center">By the Numbers</h2>
        <p className="section-subtitle mx-auto text-center">
          A snapshot of where this practice stands today.
        </p>
        <div className="mt-10">
          <StatCards stats={stats} />
        </div>
      </section>

      <section className="section bg-slate-50">
        <h2 className="section-title text-center">What I Offer</h2>
        <p className="section-subtitle mx-auto text-center">
          Four focused service areas — not a scattershot list of everything
          "AI."
        </p>
        <div className="mt-10">
          <ServiceCards services={services} />
        </div>
      </section>

      <section className="section">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="section-title">Equipment Upgrade — Optional Support</h2>
          <p className="section-subtitle mx-auto">
            {equipmentFund.purpose}
          </p>
        </div>
        <div className="mx-auto mt-8 max-w-xl rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <ProgressBar
            current={equipmentFund.currentAmountKsh}
            goal={equipmentFund.goalAmountKsh}
            label={equipmentFund.goalLabel}
          />
        </div>
      </section>

      <section className="section bg-slate-50">
        <h2 className="section-title text-center">Ways to Get Involved</h2>
        <p className="section-subtitle mx-auto text-center">
          Most people just hire me for a project. A few options for everyone
          else:
        </p>
        <div className="mt-10">
          <SupportCards options={supportOptions} />
        </div>
      </section>

      <section className="section">
        <h2 className="section-title text-center">Transparency Commitment</h2>
        <p className="section-subtitle mx-auto text-center">
          What you can expect from working with this practice.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {commitments.map((item) => (
            <div key={item.title} className="card text-center">
              <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                <item.icon size={22} aria-hidden="true" />
              </div>
              <h3 className="mt-4 font-semibold text-slate-900">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="section bg-slate-50">
        <h2 className="section-title text-center">How a Project Runs</h2>
        <p className="section-subtitle mx-auto text-center">
          A simple, four-step roadmap for any engagement.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {process.map((step) => (
            <div key={step.step} className="card">
              <span className="text-sm font-bold text-brand-600">
                {step.step}
              </span>
              <h3 className="mt-2 font-semibold text-slate-900">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <CTABanner
          title="Have repetitive work eating your week?"
          description="Tell me what's slowing you down. I'll tell you honestly whether automation is a good fit — and what it would take."
          ctaLabel="Get in Touch"
          ctaHref="/contact"
        />
      </section>
    </>
  );
}
