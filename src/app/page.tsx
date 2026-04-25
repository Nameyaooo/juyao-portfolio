const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Python",
  "C",
  "Rust",
  "CI/CD",
  "GitHub Actions",
  "Testing",
  "UI/UX Thinking",
];

const projects = [
  {
    title: "Photography Portfolio",
    href: "/projects/photography",
    desc: "A curated collection of my photography work, focusing on travel, city views, daily moments, and visual storytelling through a clean and minimal layout.",
  },
  {
    title: "UNSW Project: Toohak-Kahoot",
    href: "/projects/toohak",
    desc: "A real-time quiz application project developed at UNSW, where I worked on backend logic, API design, input validation, testing, and Agile team collaboration.",
  },
  {
    title: "HKU Exchange Journey",
    href: "/projects/hku-exchange",
    desc: "A personal showcase of my exchange experience at The University of Hong Kong, including academic life, international exposure, and personal growth.",
  },
];

function StarField() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden bg-slate-950">
      {/* 星空点 */}
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

      {/* 大面积高级渐变 */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.28),transparent_32%),radial-gradient(circle_at_80%_30%,rgba(168,85,247,0.28),transparent_30%),radial-gradient(circle_at_50%_80%,rgba(14,165,233,0.18),transparent_35%)]" />

      {/* 暗色遮罩，让文字更清楚 */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/80 to-slate-950" />

      {/* 柔光 */}
      <div className="absolute left-[-120px] top-[120px] h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl" />
      <div className="absolute right-[-120px] top-[260px] h-96 w-96 rounded-full bg-violet-500/20 blur-3xl" />
      <div className="absolute bottom-[180px] left-1/3 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
    </div>
  );
}

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden text-white">
      <StarField />

      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/45 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#" className="text-sm font-semibold tracking-wide text-white">
            Juyao Li
          </a>

          <nav className="hidden gap-8 text-sm text-slate-300 md:flex">
            <a href="#about" className="transition hover:text-white">
              About
            </a>
            <a href="#skills" className="transition hover:text-white">
              Skills
            </a>
            <a href="#projects" className="transition hover:text-white">
              Projects
            </a>
            <a href="#contact" className="transition hover:text-white">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6">
        {/* Hero */}
        <section className="flex min-h-[88vh] items-center py-24">
          <div className="max-w-4xl">
            <p className="mb-5 text-sm uppercase tracking-[0.35em] text-cyan-200/80">
              Portfolio
            </p>

            <h1 className="text-5xl font-semibold leading-tight tracking-tight text-white md:text-7xl">
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-cyan-200 via-white to-violet-200 bg-clip-text text-transparent">
                Juyao Li
              </span>
              .
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl">
              I am a Computer Science student at UNSW. I build practical web apps,
              AI tools, and personal projects around travel, photography, and finance.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-2xl border border-white/15 bg-white/10 px-6 py-3 text-sm font-medium text-white backdrop-blur-xl transition hover:-translate-y-0.5 hover:bg-white/15"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="rounded-2xl border border-white/15 bg-white/10 px-6 py-3 text-sm font-medium text-white backdrop-blur-xl transition hover:-translate-y-0.5 hover:bg-white/15"
              >
                Contact Me
              </a>
            </div>
          </div>
        </section>

        {/* About */}
        <section
          id="about"
          className="mb-8 rounded-3xl border border-white/10 bg-white/[0.07] p-8 shadow-[0_20px_80px_rgba(0,0,0,0.25)] backdrop-blur-xl md:p-10"
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.28em] text-cyan-200/70">
            About
          </p>

          <h2 className="text-3xl font-semibold tracking-tight text-white">
            Clean design, practical building.
          </h2>

          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-300">
            I enjoy building projects that are useful, visually clean, and easy to use.
            My interests include web development, AI tools, photography, travel,
            and finance. I want this website to be a simple place to present who I am
            and what I&apos;m working on.
          </p>
        </section>

        {/* Skills */}
        <section
          id="skills"
          className="mb-8 rounded-3xl border border-white/10 bg-white/[0.07] p-8 shadow-[0_20px_80px_rgba(0,0,0,0.25)] backdrop-blur-xl md:p-10"
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.28em] text-cyan-200/70">
            Skills
          </p>

          <h2 className="text-3xl font-semibold tracking-tight text-white">
            Tools I use
          </h2>

          <div className="mt-8 flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-slate-200 backdrop-blur-xl transition hover:-translate-y-0.5 hover:bg-white/15"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section
          id="projects"
          className="mb-8 rounded-3xl border border-white/10 bg-white/[0.07] p-8 shadow-[0_20px_80px_rgba(0,0,0,0.25)] backdrop-blur-xl md:p-10"
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.28em] text-cyan-200/70">
            Projects
          </p>

          <h2 className="text-3xl font-semibold tracking-tight text-white">
            Projects & Experience
          </h2>

          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {projects.map((project) => (
              <div
                key={project.title}
                className="rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur-xl transition hover:-translate-y-1 hover:bg-white/[0.14] hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                <h3 className="text-xl font-semibold text-white">
                  {project.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-300">
                  {project.desc}
                </p>

                <a
                  href={project.href}
                  className="mt-6 inline-block text-sm font-medium text-cyan-100 transition hover:translate-x-1 hover:text-white"
                >
                  Explore →
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="mb-20 rounded-3xl border border-white/10 bg-white/[0.07] p-8 shadow-[0_20px_80px_rgba(0,0,0,0.25)] backdrop-blur-xl md:p-10"
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.28em] text-cyan-200/70">
            Contact
          </p>

          <h2 className="text-3xl font-semibold tracking-tight text-white">
            Let&apos;s connect
          </h2>

          <p className="mt-5 max-w-2xl leading-8 text-slate-300">
            If you want to talk about web development, projects, travel, photography,
            or future collaboration, feel free to reach out.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="mailto:juyaoli@outlook.com"
              className="rounded-2xl border border-white/15 bg-white/10 px-6 py-3 text-sm font-medium text-white backdrop-blur-xl transition hover:-translate-y-0.5 hover:bg-white/15"
            >
              Email Me
            </a>

            <a
              href="https://github.com/Nameyaooo"
              target="_blank"
              className="rounded-2xl border border-white/15 bg-white/10 px-6 py-3 text-sm font-medium text-white backdrop-blur-xl transition hover:-translate-y-0.5 hover:bg-white/15"
            >
              GitHub
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
