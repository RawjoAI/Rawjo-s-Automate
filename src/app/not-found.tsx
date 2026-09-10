import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section text-center">
      <h1 className="section-title">Page Not Found</h1>
      <p className="section-subtitle mx-auto">
        The page you're looking for doesn't exist or may have moved.
      </p>
      <Link href="/" className="btn-primary mt-8 inline-flex">
        Back to Home
      </Link>
    </section>
  );
}
