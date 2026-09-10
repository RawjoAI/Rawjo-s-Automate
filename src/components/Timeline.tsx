"use client";

import { motion } from "framer-motion";
import type { TimelineItem } from "@/types";

export default function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <ol className="relative border-l border-slate-200 pl-6">
      {items.map((item, i) => (
        <motion.li
          key={item.title}
          initial={{ opacity: 0, x: -12 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.4, delay: i * 0.06 }}
          className="mb-10 last:mb-0"
        >
          <span className="absolute -left-[7px] mt-1.5 h-3.5 w-3.5 rounded-full border-2 border-white bg-brand-600" />
          <p className="text-xs font-semibold uppercase tracking-wide text-brand-600">
            {item.date}
          </p>
          <h3 className="mt-1 text-lg font-semibold text-slate-900">
            {item.title}
          </h3>
          <p className="mt-1 text-sm text-slate-600">{item.description}</p>
        </motion.li>
      ))}
    </ol>
  );
}
