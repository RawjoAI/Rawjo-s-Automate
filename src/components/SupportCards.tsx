"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { SupportOption } from "@/types";
import { getIcon } from "./IconMap";

export default function SupportCards({ options }: { options: SupportOption[] }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {options.map((option, i) => {
        const Icon = getIcon(option.icon);
        return (
          <motion.div
            key={option.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className="card flex flex-col"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
              <Icon size={22} aria-hidden="true" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-slate-900">
              {option.title}
            </h3>
            <p className="mt-2 flex-1 text-sm text-slate-600">
              {option.description}
            </p>
            <Link
              href={option.href}
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-brand-600 hover:text-brand-700"
            >
              {option.cta} <ArrowRight size={16} />
            </Link>
          </motion.div>
        );
      })}
    </div>
  );
}
