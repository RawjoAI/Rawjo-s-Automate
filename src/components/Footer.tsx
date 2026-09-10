import Link from "next/link";
import { site } from "@/lib/data";

const columns = [
  {
    title: "Explore",
    links: [
      { href: "/services", label: "Services" },
      { href: "/about", label: "About" },
      { href: "/updates", label: "Updates" },
    ],
  },
  {
    title: "Get Involved",
    links: [
      { href: "/support", label: "Support" },
      { href: "/contact", label: "Contact" },
      { href: "/faq", label: "FAQ" },
    ],
  },
  {
    title: "Legal",
    links: [{ href: "/privacy-policy", label: "Privacy Policy" }],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          <div className="col-span-2">
            <p className="text-lg font-bold text-slate-900">{site.name}</p>
            <p className="mt-2 max-w-sm text-sm text-slate-600">
              {site.description}
            </p>
            <p className="mt-4 text-xs text-slate-500">
              Horizon Automate is an independent freelance practice. It is not
              a bank, lender, charity, crowdfunding platform, or investment
              company.
            </p>
          </div>
          {columns.map((col) => (
            <div key={col.title}>
              <p className="text-sm font-semibold text-slate-900">
                {col.title}
              </p>
              <ul className="mt-3 space-y-2">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-600 hover:text-brand-600"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-6 sm:flex-row">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p className="text-xs text-slate-500">{site.email}</p>
        </div>
      </div>
    </footer>
  );
}
