# Horizon Automate

An independent freelance AI automation practice website — built with Next.js 15 (App Router), TypeScript, Tailwind CSS, Framer Motion, and Lucide Icons.

**What this is:** a personal portfolio/services site for freelance AI automation work, with an optional page for anyone who wants to voluntarily support an equipment upgrade.

**What this is not:** a bank, lender, charity, crowdfunding platform, or investment company. That's stated throughout the site on purpose — keep it that way if you edit the copy.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Before Going Live

1. **Edit `src/lib/data.ts`** — this is the single source of truth for all site copy: your name/brand, services, FAQ, timeline, and the equipment fund numbers. Update `currentAmountKsh` as it changes.
2. **Wire up the contact form** — `src/app/api/contact/route.ts` currently only logs submissions. Connect it to a real email service (e.g. [Resend](https://resend.com)) before launch, and store any API key in an environment variable (`.env.local`, never committed).
3. **Add a real OpenGraph image** at `public/og-image.png` (1200×630px) — referenced in `src/app/layout.tsx`.
4. **Update `site.url`** in `src/lib/data.ts` to your real deployed domain once you have one — this feeds the sitemap, robots.txt, and OpenGraph tags.
5. **Add a favicon** at `public/favicon.ico`.

## Deploying to Vercel

1. Push this project to a GitHub repository.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
3. Vercel auto-detects Next.js — no extra config needed.
4. Add any environment variables (e.g. email API key) under Project Settings → Environment Variables.
5. Deploy.

## Project Structure

```
src/
  app/            # Routes (App Router)
    api/contact/  # Contact form submission handler
    services/
    about/
    faq/
    privacy-policy/
    contact/
    updates/
    support/
  components/     # Reusable UI components
  lib/data.ts     # All site content/copy
  types/          # Shared TypeScript types
```

## Tech Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide Icons
