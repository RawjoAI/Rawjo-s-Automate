import type { Metadata } from "next";
import SupportCards from "@/components/SupportCards";
import { supportOptions } from "@/lib/data";

export const metadata: Metadata = {
  title: "Support",
  description:
    "Ways to support Rawjo's Automate — from hiring for a project to partnership, mentorship, and networking.",
};

export default function SupportPage() {
  return (
    <section className="section">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="section-title">Support</h1>
        <p className="section-subtitle mx-auto">
          The main way to support this work is simple: hire me for a
          project. Everything below is a way to get involved beyond that.
        </p>
      </div>

      <div className="mt-12">
        <SupportCards options={supportOptions} />
      </div>
    </section>
  );
}