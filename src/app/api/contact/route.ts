import { NextResponse } from "next/server";

// This is a placeholder handler. It validates and logs the submission.
// Before going live, wire this up to a real email/CRM service, e.g.:
//   - Resend (https://resend.com)
//   - SendGrid
//   - Formspree (if you'd rather skip a backend integration entirely)
// and set any API keys as environment variables — never commit them.

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, topic, message } = body ?? {};

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    // TODO: replace with a real send (e.g. Resend's SDK) using env vars.
    console.log("New contact submission:", { name, email, topic, message });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "Invalid request." },
      { status: 400 }
    );
  }
}
