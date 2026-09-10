import type { Metadata } from "next";
import { Mail, MapPin, Clock } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { site } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Horizon Automate about a project, partnership, or general question.",
};

const details = [
  { icon: Mail, label: site.email },
  { icon: MapPin, label: site.location },
  { icon: Clock, label: "Typical reply time: 1–2 business days" },
];

export default function ContactPage() {
  return (
    <section className="section">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="section-title">Contact</h1>
        <p className="section-subtitle mx-auto">
          Whether it's a project, a partnership idea, or just a question —
          this goes straight to me, not a team or ticketing system.
        </p>
      </div>

      <div className="mx-auto mt-12 grid max-w-4xl gap-10 md:grid-cols-2">
        <div>
          <ContactForm />
        </div>
        <div className="space-y-4">
          {details.map((d) => (
            <div
              key={d.label}
              className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4"
            >
              <d.icon size={20} className="text-brand-600" aria-hidden="true" />
              <span className="text-sm text-slate-700">{d.label}</span>
            </div>
          ))}
          <p className="pt-2 text-sm text-slate-500">
            No payment or financial details are ever requested through this
            form. Any agreed payment is discussed separately, in writing, as
            part of a project scope.
          </p>
        </div>
      </div>
    </section>
  );
}
