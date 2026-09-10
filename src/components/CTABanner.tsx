import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTABanner({
  title,
  description,
  ctaLabel,
  ctaHref,
}: {
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
}) {
  return (
    <div className="rounded-3xl bg-brand-900 px-6 py-12 text-center sm:px-12 sm:py-16">
      <h2 className="text-2xl font-bold text-white sm:text-3xl">{title}</h2>
      <p className="mx-auto mt-3 max-w-xl text-brand-100">{description}</p>
      <Link
        href={ctaHref}
        className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-medium text-brand-900 transition hover:bg-brand-50"
      >
        {ctaLabel} <ArrowRight size={18} />
      </Link>
    </div>
  );
}
