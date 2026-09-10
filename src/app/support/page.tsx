import type { Metadata } from "next";
import ProgressBar from "@/components/ProgressBar";
import SupportCards from "@/components/SupportCards";
import { equipmentFund, supportOptions } from "@/lib/data";

export const metadata: Metadata = {
  title: "Support",
  description:
    "Ways to support Horizon Automate — from hiring for a project to voluntarily contributing toward an equipment upgrade.",
};

export default function SupportPage() {
  return (
    <>
      <section className="section">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="section-title">Support</h1>
          <p className="section-subtitle mx-auto">
            The main way to support this work is simple: hire me for a
            project. Everything below is optional, and none of it is a
            condition of any service.
          </p>
        </div>

        <div className="mt-12">
          <SupportCards options={supportOptions} />
        </div>
      </section>

      <section className="section bg-slate-50">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="section-title">About the Equipment Wishlist</h2>
        </div>
        <div className="mx-auto mt-6 max-w-2xl space-y-4 text-slate-700">
          <p>{equipmentFund.purpose}</p>
          <p>
            This is disclosed openly because it's true, not because it's a
            pitch. If a client, past collaborator, or anyone else wants to
            contribute toward it, that's genuinely appreciated — but it is
            entirely optional, has no deadline, no fixed "campaign," and
            confers no special treatment, ownership, return, or obligation
            of any kind. It is not an investment, loan, or donation to a
            registered charity.
          </p>
        </div>
        <div className="mx-auto mt-8 max-w-xl rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <ProgressBar
            current={equipmentFund.currentAmountKsh}
            goal={equipmentFund.goalAmountKsh}
            label={equipmentFund.goalLabel}
          />
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-sm text-slate-500">
          Interested in contributing, or want to ask questions first? Use the{" "}
          <a href="/contact" className="text-brand-600 underline">
            Contact
          </a>{" "}
          page — payment details are shared directly and individually, never
          posted publicly on this site.
        </p>
      </section>
    </>
  );
}
