import type { Metadata } from "next";
import { site } from "@/lib/data";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Horizon Automate collects, uses, and protects information submitted through this website.",
};

export default function PrivacyPolicyPage() {
  return (
    <section className="section">
      <div className="mx-auto max-w-3xl">
        <h1 className="section-title">Privacy Policy</h1>
        <p className="mt-2 text-sm text-slate-500">Last updated: September 2026</p>

        <div className="mt-8 space-y-6 text-slate-700">
          <p>
            This Privacy Policy explains what information {site.name}{" "}
            collects through this website, how it's used, and the choices
            you have. This site is operated by an independent freelancer,
            not a company or institution, and this policy is written in
            plain language rather than dense legal boilerplate.
          </p>

          <h2 className="pt-2 text-xl font-semibold text-slate-900">
            1. Information Collected
          </h2>
          <p>
            When you use the contact form, the following is collected: your
            name, email address, the topic you select, and the content of
            your message. No payment or financial account information is
            collected through this website, because no payments are
            processed on this site.
          </p>

          <h2 className="pt-2 text-xl font-semibold text-slate-900">
            2. How Information Is Used
          </h2>
          <p>
            Information submitted through the contact form is used solely to
            respond to your inquiry and, if you proceed, to scope and
            deliver the requested project. It is not sold, rented, or shared
            with third parties for marketing purposes.
          </p>

          <h2 className="pt-2 text-xl font-semibold text-slate-900">
            3. Analytics and Cookies
          </h2>
          <p>
            This site may use basic, privacy-respecting analytics (such as
            aggregate page-view counts) to understand which pages are
            useful. No cross-site tracking or ad-network cookies are used.
            If analytics tooling changes, this section will be updated.
          </p>

          <h2 className="pt-2 text-xl font-semibold text-slate-900">
            4. Data Retention
          </h2>
          <p>
            Contact submissions are retained only as long as needed to
            respond to your inquiry or fulfill an agreed project, after
            which they may be deleted. You can request deletion of your
            information at any time by emailing {site.email}.
          </p>

          <h2 className="pt-2 text-xl font-semibold text-slate-900">
            5. Third-Party Services
          </h2>
          <p>
            If a project involves connecting third-party platforms (for
            example Make.com, an email provider, or an AI API) on your
            behalf, those platforms have their own privacy policies which
            will be disclosed and discussed with you as part of the project
            scope.
          </p>

          <h2 className="pt-2 text-xl font-semibold text-slate-900">
            6. Your Choices
          </h2>
          <p>
            You can choose not to submit any information through this site
            and instead reach out directly via email. You may request a copy
            of, or the deletion of, any information you've submitted.
          </p>

          <h2 className="pt-2 text-xl font-semibold text-slate-900">
            7. Contact
          </h2>
          <p>
            Questions about this policy can be sent to{" "}
            <a href={`mailto:${site.email}`} className="text-brand-600 underline">
              {site.email}
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
