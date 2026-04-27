import Image from "next/image";
import Link from "next/link";

const photos = [
  {
    src: "/photography/hongkong-1.jpeg",
    title: "Hong Kong Street",
    location: "Hong Kong",
    category: "Street / Travel",
    desc: "Street moments and city atmosphere captured during my time in Hong Kong.",
  },
  {
    src: "/photography/hongkong-2.jpeg",
    title: "Hong Kong Night",
    location: "Hong Kong",
    category: "Cityscape",
    desc: "Night lights, urban density, and the visual rhythm of Hong Kong.",
  },
  {
    src: "/photography/hongkong-3.jpeg",
    title: "Quiet Hong Kong",
    location: "Hong Kong",
    category: "Daily Life",
    desc: "Small details and quiet moments from everyday life in the city.",
  },
  {
    src: "/photography/sydney-1.jpeg",
    title: "Sydney City",
    location: "Sydney",
    category: "Cityscape",
    desc: "A clean visual record of Sydney’s streets, buildings, and open spaces.",
  },
  {
    src: "/photography/sydney-2.jpeg",
    title: "Sydney Walk",
    location: "Sydney",
    category: "Street",
    desc: "Street photography and travel memories from Sydney.",
  },
  {
    src: "/photography/sydney-3.jpeg",
    title: "Australia Memory",
    location: "Australia",
    category: "Travel",
    desc: "Travel moments and personal visual memories from Australia.",
  },
];

const locations = ["Hong Kong", "Sydney", "Australia"];
const styles = ["Street", "Cityscape", "Travel", "Daily Life", "Architecture"];

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

export default function PhotographyPage() {
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

      <div className="mx-auto max-w-6xl px-6 py-10">
        <Link
          href="/"
          className="inline-flex rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-medium text-slate-200 backdrop-blur-xl transition hover:-translate-y-0.5 hover:bg-white/15"
        >
          ← Back to Home
        </Link>

        {/* Hero */}
        <section className="py-20">
          <p className="mb-5 text-sm uppercase tracking-[0.35em] text-cyan-200/80">
            Photography Portfolio
          </p>

          <h1 className="max-w-4xl text-5xl font-semibold leading-tight tracking-tight text-white md:text-7xl">
            Moments from Hong Kong, Sydney and my travels.
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl">
            This page collects my photography work, including city views, street
            moments, architecture details, and travel memories. I use photography
            to record places I have visited and the feeling of everyday life.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            {locations.map((location) => (
              <span
                key={location}
                className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-slate-200 backdrop-blur-xl"
              >
                {location}
              </span>
            ))}
          </div>
        </section>

        {/* Featured */}
        <section className="mb-10 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.07] shadow-[0_20px_80px_rgba(0,0,0,0.3)] backdrop-blur-xl">
          <div className="grid gap-0 lg:grid-cols-2">
            <div className="relative min-h-[420px] bg-slate-900">
              <Image
                src="/photography/hongkong-1.jpeg"
                alt="Featured Hong Kong photography"
                fill
                priority
                loading="eager"
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-slate-950/10" />
            </div>

            <div className="flex flex-col justify-center p-8 md:p-10">
              <p className="mb-4 text-sm uppercase tracking-[0.3em] text-cyan-200/70">
                Featured Story
              </p>

              <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
                Hong Kong through my lens.
              </h2>

              <p className="mt-5 leading-8 text-slate-300">
                Hong Kong is one of the main places I want to document. The city
                has a strong mix of density, movement, light, and daily life. I
                want this photography page to become a visual diary of my exchange
                journey and personal experience.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {styles.map((style) => (
                  <span
                    key={style}
                    className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-slate-200"
                  >
                    {style}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Photo Grid */}
        <section className="py-10">
          <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="mb-3 text-sm uppercase tracking-[0.3em] text-cyan-200/70">
                Gallery
              </p>
              <h2 className="text-3xl font-semibold tracking-tight text-white">
                Selected Photos
              </h2>
            </div>

            <p className="max-w-xl leading-7 text-slate-300">
              A simple gallery layout for my current and future photography work.
              More photos can be added by placing images in the public folder.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {photos.map((photo) => (
              <article
                key={photo.src}
                className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.07] shadow-[0_20px_80px_rgba(0,0,0,0.25)] backdrop-blur-xl transition hover:-translate-y-1 hover:bg-white/[0.11] hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-slate-900">
                  <Image
                    src={photo.src}
                    alt={photo.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-5">
                  <p className="text-xs uppercase tracking-[0.25em] text-cyan-200/60">
                    {photo.category}
                  </p>

                  <h3 className="mt-3 text-xl font-semibold text-white">
                    {photo.title}
                  </h3>

                  <p className="mt-2 text-sm text-slate-400">
                    {photo.location}
                  </p>

                  <p className="mt-4 leading-7 text-slate-300">
                    {photo.desc}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Add More */}
        <section className="mb-20 mt-10 rounded-3xl border border-white/10 bg-white/[0.07] p-8 shadow-[0_20px_80px_rgba(0,0,0,0.25)] backdrop-blur-xl md:p-10">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-cyan-200/70">
            How I update this page
          </p>

          <h2 className="text-3xl font-semibold tracking-tight text-white">
            More photos coming soon.
          </h2>

          <p className="mt-5 max-w-3xl leading-8 text-slate-300">
            I will continue adding new photography work from Hong Kong, Sydney,
            China, and future travel destinations. This page is designed to grow
            with my personal portfolio.
          </p>
        </section>
      </div>
    </main>
  );
}
