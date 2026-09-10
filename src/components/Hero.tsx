"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { site } from "@/lib/data";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 to-white">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white px-4 py-1.5 text-sm font-medium text-brand-700">
            <Sparkles size={16} /> Independent AI Automation Practice
          </span>

          <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            {site.tagline}
          </h1>

          <p className="mt-6 text-lg text-slate-600 sm:text-xl">
            {site.description}
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/contact" className="btn-primary">
              Start a Project <ArrowRight size={18} />
            </Link>
            <Link href="/services" className="btn-secondary">
              See Services
            </Link>
          </div>

          <p className="mt-6 text-sm text-slate-500">
            {site.location} · Not a bank, lender, or investment company
          </p>
        </motion.div>
      </div>
    </section>
  );
}
