"use client";

import { motion } from "framer-motion";

export default function ProgressBar({
  current,
  goal,
  label,
}: {
  current: number;
  goal: number;
  label: string;
}) {
  const percent = Math.min(100, Math.round((current / goal) * 100));

  return (
    <div>
      <div className="flex items-baseline justify-between">
        <p className="text-sm font-medium text-slate-700">{label}</p>
        <p className="text-sm text-slate-500">
          KSh {current.toLocaleString()} of KSh {goal.toLocaleString()}
        </p>
      </div>
      <div
        className="mt-2 h-3 w-full overflow-hidden rounded-full bg-slate-100"
        role="progressbar"
        aria-valuenow={percent}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={label}
      >
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${percent}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="h-full rounded-full bg-brand-600"
        />
      </div>
      <p className="mt-2 text-xs text-slate-500">
        This is a voluntary, informational tracker — not a commitment or
        deadline of any kind.
      </p>
    </div>
  );
}
