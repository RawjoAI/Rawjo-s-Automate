import type { Metadata } from "next";
import { site } from "@/lib/data";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Horizon Automate: an independent freelance AI automation practice, its background, and what it is not.",
};

export default function AboutPage() {
  return (
    <section className="section">
      <div className="mx-auto max-w-3xl">
        <h1 className="section-title">About {site.name}</h1>

        <div className="mt-8 space-y-6 text-slate-700">
          <p>
            {site.name} is the freelance practice of one independent
            operator with an IT background, currently based in{" "}
            {site.location}. The work is centered on helping small
            businesses and solo founders remove repetitive, manual tasks
            from their day using AI tools and no-code/low-code automation
            platforms — primarily Make.com paired with mainstream AI APIs.
          </p>

          <p>
            This practice started as focused, hands-on learning: building
            small working automations rather than only studying theory.
            That approach carried into how projects are run today — every
            engagement is scoped around a concrete, testable outcome rather
            than vague promises.
          </p>

          <h2 className="pt-4 text-xl font-semibold text-slate-900">
            What This Is
          </h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>An independent, individual freelance service provider.</li>
            <li>
              Focused specifically on workflow automation, AI assistants,
              and reporting pipelines for small businesses.
            </li>
            <li>
              Run on a project-by-project basis, with written scope and
              pricing agreed before work begins.
            </li>
          </ul>

          <h2 className="pt-4 text-xl font-semibold text-slate-900">
            What This Is Not
          </h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>Not a registered company, agency, or corporation.</li>
            <li>Not a bank, lender, or financial institution.</li>
            <li>Not a charity or nonprofit organization.</li>
            <li>Not a crowdfunding platform or investment vehicle.</li>
          </ul>

          <p className="pt-4">
            If anything on this site is unclear about what you'd be paying
            for or agreeing to, the right move is to ask directly on the{" "}
            <a href="/contact" className="text-brand-600 underline">
              Contact
            </a>{" "}
            page before committing to anything.
          </p>
        </div>
      </div>
    </section>
  );
}
