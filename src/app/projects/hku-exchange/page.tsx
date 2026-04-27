import Link from "next/link";

function StarField() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden bg-slate-950">
      <div
        className="absolute inset-0 opacity-70"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 30%, rgba(255,255,255,0.95) 0 1px, transparent 1.5px),
            radial-gradient(circle at 80% 20%, rgba(255,255,255,0.8) 0 1px, transparent 1.5px),
            radial-gradient(circle at 40% 70%, rgba(255,255,255,0.7) 0 1px, transparent 1.5px),
            radial-gradient(circle at 65% 55%, rgba(255,255,255,0.75) 0 1px, transparent 1.5px),
            radial-gradient(circle at 90% 80%, rgba(255,255,255,0.8) 0 1px, transparent 1.5px)
          `,
          backgroundSize: "220px 220px",
        }}
      />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.26),transparent_32%),radial-gradient(circle_at_80%_30%,rgba(168,85,247,0.24),transparent_30%),radial-gradient(circle_at_50%_85%,rgba(14,165,233,0.14),transparent_35%)]" />

      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/55 via-slate-950/85 to-slate-950" />

      <div className="absolute left-[-120px] top-[120px] h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl" />
      <div className="absolute right-[-120px] top-[260px] h-96 w-96 rounded-full bg-violet-500/20 blur-3xl" />
      <div className="absolute bottom-[180px] left-1/3 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
    </div>
  );
}

export default function HKUExchangePage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden text-white">
      <StarField />

      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/50 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="text-sm font-semibold tracking-wide text-white">
            Juyao Li
          </Link>

          <nav className="hidden gap-8 text-sm text-slate-300 md:flex">
            <Link href="/" className="transition hover:text-white">
              Home
            </Link>
            <Link href="/#projects" className="transition hover:text-white">
              Projects
            </Link>
            <Link href="/#contact" className="transition hover:text-white">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      <div className="mx-auto flex min-h-[calc(100vh-65px)] max-w-6xl flex-col justify-center px-6 py-16">
        <Link
          href="/#projects"
          className="mb-12 inline-flex w-fit rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-medium text-slate-200 backdrop-blur-xl transition hover:-translate-y-0.5 hover:bg-white/15"
        >
          ← Back to Projects
        </Link>

        <section className="max-w-4xl">
          <p className="mb-5 text-sm uppercase tracking-[0.35em] text-cyan-200/80">
            HKU Exchange Journey
          </p>

          <h1 className="text-5xl font-semibold leading-tight tracking-tight text-white md:text-7xl">
            Coming Soon.
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl">
            This page will document my exchange journey at The University of Hong Kong,
            including academic life, campus experience, city exploration, photography,
            and personal growth.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            {["Hong Kong", "Exchange", "Study Abroad", "Photography", "Personal Growth"].map(
              (item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-slate-200 backdrop-blur-xl"
                >
                  {item}
                </span>
              )
            )}
          </div>
        </section>

        <section className="mt-16 rounded-3xl border border-white/10 bg-white/[0.07] p-8 shadow-[0_20px_80px_rgba(0,0,0,0.25)] backdrop-blur-xl md:p-10">
          <p className="mb-3 text-sm uppercase tracking-[0.28em] text-cyan-200/70">
            敬请期待
          </p>

          <h2 className="text-3xl font-semibold tracking-tight text-white">
            More content will be added later.
          </h2>

          <p className="mt-5 max-w-3xl leading-8 text-slate-300">
            I will update this page after adding more photos, notes, and reflections
            from my HKU exchange experience.
          </p>
        </section>
      </div>
    </main>
  );
}
