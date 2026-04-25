const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Python",
  "C",
  "UI/UX Thinking",
];

const projects = [
  {
    title: "Photography Portfolio",
    desc: "A curated collection of my photography work, focusing on travel, city views, daily moments, and visual storytelling through a clean and minimal layout.",
  },
  {
    title: "UNSW Project: Toohak-Kahoot",
    desc: "A real-time quiz application project developed at UNSW, where I worked on backend logic, API design, input validation, testing, and Agile team collaboration.",
  },
  {
    title: "HKU Exchange Journey",
    desc: "A personal showcase of my exchange experience at The University of Hong Kong, including academic life, international exposure, and personal growth.",
  },
];

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* 背景光晕 */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[-120px] top-[80px] h-72 w-72 rounded-full bg-sky-200/40 blur-3xl" />
        <div className="absolute right-[-100px] top-[160px] h-72 w-72 rounded-full bg-violet-200/40 blur-3xl" />
        <div className="absolute left-1/3 top-[540px] h-60 w-60 rounded-full bg-cyan-100/40 blur-3xl" />
      </div>

      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-black/5 bg-white/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#" className="text-sm font-semibold tracking-wide">
            Juyao Li
          </a>

          <nav className="hidden gap-8 text-sm text-slate-600 md:flex">
            <a href="#about" className="transition hover:text-black">About</a>
            <a href="#skills" className="transition hover:text-black">Skills</a>
            <a href="#projects" className="transition hover:text-black">Projects</a>
            <a href="#contact" className="transition hover:text-black">Contact</a>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6">
        {/* Hero */}
        <section className="flex min-h-[88vh] items-center py-24">
          <div className="max-w-3xl">
            <p className="mb-5 text-sm uppercase tracking-[0.35em] text-slate-400">
              Portfolio
            </p>

            <h1 className="text-5xl font-semibold leading-tight tracking-tight text-slate-950 md:text-7xl">
              Hi, I&apos;m <span className="bg-gradient-to-r from-slate-900 to-slate-500 bg-clip-text text-transparent">Juyao Li</span>.
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-600 md:text-xl">
              I am a Computer Science student at UNSW. I build practical web apps,
              AI tools, and personal projects around travel, photography, and finance.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-2xl border border-slate-200 bg-white/90 px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm shadow-slate-900/5 transition hover:-translate-y-0.5 hover:border-slate-300 hover:bg-slate-50 hover:shadow-md"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="rounded-2xl border border-slate-200 bg-white/80 px-6 py-3 text-sm font-medium text-slate-700 transition hover:-translate-y-0.5 hover:border-slate-300 hover:bg-white"
              >
                Contact Me
              </a>
            </div>
          </div>
        </section>

        {/* About */}
        <section
          id="about"
          className="mb-8 rounded-3xl border border-black/5 bg-white/75 p-8 shadow-[0_10px_40px_rgba(15,23,42,0.08)] backdrop-blur-xl md:p-10"
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.28em] text-slate-400">
            About
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-950">
            Clean design, practical building.
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600">
            I enjoy building projects that are useful, visually clean, and easy to use.
            My interests include web development, AI tools, photography, travel,
            and finance. I want this website to be a simple place to present who I am
            and what I&apos;m working on.
          </p>
        </section>

        {/* Skills */}
        <section
          id="skills"
          className="mb-8 rounded-3xl border border-black/5 bg-white/75 p-8 shadow-[0_10px_40px_rgba(15,23,42,0.08)] backdrop-blur-xl md:p-10"
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.28em] text-slate-400">
            Skills
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-950">
            Tools I use
          </h2>

          <div className="mt-8 flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-700"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section
          id="projects"
          className="mb-8 rounded-3xl border border-black/5 bg-white/75 p-8 shadow-[0_10px_40px_rgba(15,23,42,0.08)] backdrop-blur-xl md:p-10"
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.28em] text-slate-400">
            Projects
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-950">
            Projects & Experience
          </h2>

          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {projects.map((project) => (
              <div
                key={project.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <h3 className="text-xl font-semibold text-slate-900">
                  {project.title}
                </h3>
                <p className="mt-3 leading-7 text-slate-600">
                  {project.desc}
                </p>
                <button className="mt-6 text-sm font-medium text-slate-900">
                  Explore →
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="mb-20 rounded-3xl border border-black/5 bg-white/75 p-8 shadow-[0_10px_40px_rgba(15,23,42,0.08)] backdrop-blur-xl md:p-10"
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.28em] text-slate-400">
            Contact
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-950">
            Let&apos;s connect
          </h2>
          <p className="mt-5 max-w-2xl leading-8 text-slate-600">
            If you want to talk about web development, projects, travel, photography,
            or future collaboration, feel free to reach out.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="mailto:juyaoli@outlook.com"
              className="rounded-2xl border border-slate-200 bg-white/90 px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm shadow-slate-900/5 transition hover:-translate-y-0.5 hover:border-slate-300 hover:bg-slate-50 hover:shadow-md"
            >
              Email Me
            </a>
            <a
              href="https://github.com/Nameyaooo"
              target="_blank"
              className="rounded-2xl border border-slate-200 bg-white px-6 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
            >
              GitHub
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
