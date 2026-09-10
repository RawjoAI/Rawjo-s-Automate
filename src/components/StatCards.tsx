"use client";

import { motion } from "framer-motion";
import type { StatItem } from "@/types";

export default function StatCards({ stats }: { stats: StatItem[] }) {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
      {stats.map((stat, i) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.08 }}
          className="rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-sm"
        >
          <p className="text-2xl font-bold text-brand-600 sm:text-3xl">
            {stat.value}
          </p>
          <p className="mt-1 text-xs text-slate-600 sm:text-sm">{stat.label}</p>
        </motion.div>
      ))}
    </div>
  );
}
