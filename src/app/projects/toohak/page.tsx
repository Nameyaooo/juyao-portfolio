import Link from "next/link";

const techStack = [
  "JavaScript",
  "Node.js",
  "Express",
  "Jest",
  "Git",
  "CI/CD",
  "API Design",
  "Input Validation",
  "Testing",
];

const responsibilities = [
  "Designed and implemented backend logic for core quiz features.",
  "Built and tested REST-style API endpoints.",
  "Worked on input validation, error handling, and data management.",
  "Used automated testing to verify expected behaviour.",
  "Collaborated in a team environment using Git and project planning.",
];

export default function ToohakPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-slate-950 text-white">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[-120px] top-[100px] h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="absolute right-[-120px] top-[260px] h-96 w-96 rounded-full bg-violet-500/20 blur-3xl" />
        <div className="absolute bottom-[180px] left-1/3 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
      </div>

      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/60 backdrop-blur-xl">
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
          href="/#projects"
          className="inline-flex rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-medium text-slate-200 backdrop-blur-xl transition hover:-translate-y-0.5 hover:bg-white/15"
        >
          ← Back to Projects
        </Link>

        {/* Hero */}
        <section className="py-20">
          <p className="mb-5 text-sm uppercase tracking-[0.35em] text-cyan-200/80">
            Private Academic Project
          </p>

          <h1 className="max-w-4xl text-5xl font-semibold leading-tight tracking-tight text-white md:text-7xl">
            UNSW Project: Toohak
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl">
            A private academic web application project developed at UNSW. This
            case study focuses on my role, technical responsibilities, and learning
            outcomes. The source code is not public due to academic integrity and
            course policy.
          </p>
        </section>

        {/* Overview Cards */}
        <section className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/[0.07] p-8 shadow-[0_20px_80px_rgba(0,0,0,0.25)] backdrop-blur-xl">
            <p className="mb-3 text-sm uppercase tracking-[0.28em] text-cyan-200/70">
              Project Type
            </p>

            <h2 className="text-3xl font-semibold text-white">
              Private Academic Project
            </h2>

            <p className="mt-5 leading-8 text-slate-300">
              This project was completed as part of my university coursework at
              UNSW. It is presented here as a high-level case study only, without
              exposing implementation details or source code.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.07] p-8 shadow-[0_20px_80px_rgba(0,0,0,0.25)] backdrop-blur-xl">
            <p className="mb-3 text-sm uppercase tracking-[0.28em] text-cyan-200/70">
              My Role
            </p>

            <h2 className="text-3xl font-semibold text-white">
              Backend / API / Testing
            </h2>

            <p className="mt-5 leading-8 text-slate-300">
              I focused on backend logic, API behaviour, input validation, testing,
              and team collaboration. The project helped me improve both technical
              implementation and software engineering workflow.
            </p>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="mt-8 rounded-3xl border border-white/10 bg-white/[0.07] p-8 shadow-[0_20px_80px_rgba(0,0,0,0.25)] backdrop-blur-xl md:p-10">
          <p className="mb-3 text-sm uppercase tracking-[0.28em] text-cyan-200/70">
            Tech Stack
          </p>

          <h2 className="text-3xl font-semibold text-white">
            Tools and technologies
          </h2>

          <div className="mt-8 flex flex-wrap gap-3">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-slate-200 backdrop-blur-xl"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Responsibilities */}
        <section className="mt-8 rounded-3xl border border-white/10 bg-white/[0.07] p-8 shadow-[0_20px_80px_rgba(0,0,0,0.25)] backdrop-blur-xl md:p-10">
          <p className="mb-3 text-sm uppercase tracking-[0.28em] text-cyan-200/70">
            Responsibilities
          </p>

          <h2 className="text-3xl font-semibold text-white">
            What I worked on
          </h2>

          <div className="mt-8 grid gap-4">
            {responsibilities.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/10 p-5 text-slate-300"
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        {/* Academic Integrity */}
        <section className="mb-20 mt-8 rounded-3xl border border-cyan-200/20 bg-cyan-200/[0.08] p-8 shadow-[0_20px_80px_rgba(0,0,0,0.25)] backdrop-blur-xl md:p-10">
          <p className="mb-3 text-sm uppercase tracking-[0.28em] text-cyan-200/80">
            Source Code Status
          </p>

          <h2 className="text-3xl font-semibold text-white">
            Source code is private.
          </h2>

          <p className="mt-5 max-w-3xl leading-8 text-slate-300">
            The source code for this project is not published because it was part
            of an academic course project. Keeping the repository private helps
            protect academic integrity, course policy, and future students.
          </p>
        </section>
      </div>
    </main>
  );
}