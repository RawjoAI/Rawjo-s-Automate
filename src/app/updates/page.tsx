import type { Metadata } from "next";
import Timeline from "@/components/Timeline";
import { timeline } from "@/lib/data";

export const metadata: Metadata = {
  title: "Updates",
  description:
    "Progress updates from Horizon Automate — what's been built, learned, and shipped so far.",
};

export default function UpdatesPage() {
  return (
    <section className="section">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="section-title">Updates</h1>
        <p className="section-subtitle mx-auto">
          A running, honest log of progress — not a highlight reel.
        </p>
      </div>
      <div className="mx-auto mt-12 max-w-2xl">
        <Timeline items={timeline} />
      </div>
    </section>
  );
}
