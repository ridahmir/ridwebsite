import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[50vh] flex-col items-center justify-center px-5 py-24 text-center">
      <h1 className="font-display text-3xl text-ink md:text-4xl">Not found</h1>
      <p className="mt-4 max-w-md text-sm text-muted">
        That page doesn’t exist or the project slug is invalid.
      </p>
      <Link
        href="/"
        className="mt-8 text-sm font-semibold uppercase tracking-[0.12em] text-ink underline-offset-4 hover:text-accent hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
      >
        Back to home
      </Link>
    </section>
  );
}
