const projects = [
  {
    title: "Travel Photography Website",
    description:
      "A personal website for documenting my travel, photography, restaurants, and city experiences.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "AI Resume Helper",
    description:
      "A tool that helps students generate tailored resumes and cover letters based on job descriptions.",
    tech: ["React", "AI", "Web App"],
  },
  {
    title: "Exchange Course Planner",
    description:
      "A course planning tool for exchange students to track course mappings, credit transfer status, and graduation requirements.",
    tech: ["TypeScript", "Planning Tool", "Student App"],
  },
];

const skills = [
  "C",
  "Python",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "SQL",
  "Git",
  "GitHub",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black">
      <header className="fixed left-0 top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#" className="text-sm font-bold tracking-tight">
            Juyao Li
          </a>

          <div className="hidden gap-6 text-sm text-gray-600 md:flex">
            <a href="#about" className="hover:text-black">
              About
            </a>
            <a href="#skills" className="hover:text-black">
              Skills
            </a>
            <a href="#projects" className="hover:text-black">
              Projects
            </a>
            <a href="#contact" className="hover:text-black">
              Contact
            </a>
          </div>
        </nav>
      </header>

      <section className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 pt-20">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-gray-500">
          Portfolio
        </p>

        <h1 className="mb-6 max-w-4xl text-5xl font-bold tracking-tight md:text-7xl">
          Hi, I&apos;m Juyao Li.
        </h1>

        <p className="mb-8 max-w-2xl text-lg leading-8 text-gray-600">
          I am a Computer Science student at UNSW. I build practical web apps,
          AI tools, and personal projects around travel, photography, and
          finance.
        </p>

        <div className="flex flex-wrap gap-4">
          <a
            href="#projects"
            className="rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition hover:bg-gray-800"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="rounded-full border border-gray-300 px-6 py-3 text-sm font-medium transition hover:border-black"
          >
            Contact Me
          </a>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-10 md:grid-cols-3">
          <h2 className="text-3xl font-bold">About Me</h2>

          <div className="md:col-span-2">
            <p className="text-lg leading-8 text-gray-600">
              I am currently studying Computer Science at UNSW. I am interested
              in software engineering, web development, AI tools, and building
              useful products. Outside of coding, I enjoy golf, tennis,
              photography, travel, and learning about financial markets.
            </p>
          </div>
        </div>
      </section>

      <section id="skills" className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="mb-10 text-3xl font-bold">Skills</h2>

        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-gray-200 px-4 py-2 text-sm text-gray-700"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
        <div className="mb-10">
          <h2 className="mb-3 text-3xl font-bold">Projects</h2>
          <p className="max-w-2xl text-gray-600">
            These are the projects I am building to improve my technical skills
            and demonstrate my ability to create practical software.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="rounded-2xl border border-gray-200 p-6 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="mb-3 text-xl font-semibold">{project.title}</h3>

              <p className="mb-5 text-sm leading-6 text-gray-600">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-600"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
        <div className="rounded-3xl bg-black p-10 text-white md:p-16">
          <h2 className="mb-4 text-3xl font-bold">Let&apos;s connect.</h2>

          <p className="mb-8 max-w-2xl text-gray-300">
            I am open to software engineering internships, project
            collaborations, and opportunities to build practical web and AI
            products.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="mailto:juyaoli@outlook.com"
              className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black"
            >
              Email Me
            </a>

            <a
              href="https://github.com/Nameyaooo"
              className="rounded-full border border-white/30 px-6 py-3 text-sm font-medium text-white"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/juyao-li-341747399/"
              className="rounded-full border border-white/30 px-6 py-3 text-sm font-medium text-white"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-gray-100 px-6 py-8 text-center text-sm text-gray-500">
        © 2026 Juyao Li. Built with Next.js and Tailwind CSS.
      </footer>
    </main>
  );
}