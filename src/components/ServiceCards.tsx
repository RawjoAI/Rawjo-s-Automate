"use client";

import { motion } from "framer-motion";
import type { ServiceItem } from "@/types";
import { getIcon } from "./IconMap";

export default function ServiceCards({ services }: { services: ServiceItem[] }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {services.map((service, i) => {
        const Icon = getIcon(service.icon);
        return (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="card"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
              <Icon size={22} aria-hidden="true" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-slate-900">
              {service.title}
            </h3>
            <p className="mt-2 text-sm text-slate-600">{service.description}</p>
          </motion.div>
        );
      })}
    </div>
  );
}
