import Link from "next/link";
import { Locale, SiteHeader, StarField } from "./site-chrome";

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

const copy = {
  en: {
    eyebrow: "Portfolio",
    greeting: "Hi, I’m",
    intro:
      "I am a Computer Science student at UNSW. I build practical web apps, AI tools, and personal projects around travel, photography, and finance.",
    viewProjects: "View Projects",
    contactMe: "Contact Me",
    aboutLabel: "About",
    aboutTitle: "Clean design, practical building.",
    aboutBody:
      "I enjoy building projects that are useful, visually clean, and easy to use. My interests include web development, AI tools, photography, travel, and finance. I want this website to be a simple place to present who I am and what I’m working on.",
    skillsLabel: "Skills",
    skillsTitle: "Tools I use",
    projectsLabel: "Projects",
    projectsTitle: "Projects & Experience",
    contactLabel: "Contact",
    contactTitle: "Let’s connect",
    contactBody:
      "If you want to talk about web development, projects, travel, photography, or future collaboration, feel free to reach out.",
    email: "Email Me",
    projects: [
      {
        title: "Photography Portfolio",
        slug: "photography",
        desc: "A personal photography collection featuring travel, city views, street moments, and visual storytelling through a clean portfolio layout.",
        label: "View Gallery",
      },
      {
        title: "UNSW Academic Project: Toohak",
        slug: "toohak",
        desc: "A private academic web application project developed at UNSW. I worked on backend logic, API design, validation, testing, and team collaboration. Source code is not public due to academic integrity and course policy.",
        label: "View Case Study",
      },
      {
        title: "HKU Exchange Journey",
        slug: "hku-exchange",
        desc: "A personal page documenting my exchange journey at The University of Hong Kong, including academic experience, campus life, cultural exposure, and personal growth.",
        label: "View Journey",
      },
    ],
  },
  zh: {
    eyebrow: "个人网站",
    greeting: "你好，我是",
    intro:
      "我是一名新南威尔士大学计算机科学专业的学生。我喜欢开发实用的 Web 应用、AI 工具，以及围绕旅行、摄影和金融展开的个人项目。",
    viewProjects: "查看项目",
    contactMe: "联系我",
    aboutLabel: "关于我",
    aboutTitle: "简洁设计，实用开发。",
    aboutBody:
      "我喜欢制作真正有用、视觉简洁并且容易使用的项目。我的兴趣包括 Web 开发、AI 工具、摄影、旅行和金融。我希望这个网站能用简单直接的方式介绍我自己，以及我正在做的事情。",
    skillsLabel: "技能",
    skillsTitle: "我使用的工具",
    projectsLabel: "项目",
    projectsTitle: "项目与经历",
    contactLabel: "联系",
    contactTitle: "欢迎交流",
    contactBody:
      "如果你想聊聊 Web 开发、个人项目、旅行、摄影或未来的合作，欢迎随时联系我。",
    email: "发送邮件",
    projects: [
      {
        title: "摄影作品集",
        slug: "photography",
        desc: "我的个人摄影作品集，记录旅行、城市景观、街头瞬间，并以简洁的作品集形式呈现视觉故事。",
        label: "查看作品",
      },
      {
        title: "UNSW 学术项目：Toohak",
        slug: "toohak",
        desc: "一个在 UNSW 完成的非公开学术 Web 应用项目。我负责后端逻辑、API 设计、输入验证、测试与团队协作。出于学术诚信和课程政策要求，源代码不公开。",
        label: "查看项目介绍",
      },
      {
        title: "香港大学交换经历",
        slug: "hku-exchange",
        desc: "记录我在香港大学交换期间的学习体验、校园生活、文化探索、摄影与个人成长。",
        label: "查看经历",
      },
    ],
  },
} as const;

export function HomePage({ locale }: { locale: Locale }) {
  const content = copy[locale];
  const projectPrefix = locale === "zh" ? "/zh/projects" : "/projects";

  return (
    <div
      lang={locale === "zh" ? "zh-CN" : "en"}
      className="relative min-h-screen overflow-x-hidden text-white"
    >
      <StarField />
      <SiteHeader
        locale={locale}
        englishHref="/"
        chineseHref="/zh"
        homePage
      />

      <main className="mx-auto max-w-6xl px-6">
        <section className="flex min-h-[88vh] items-center py-24">
          <div className="max-w-4xl">
            <p className="mb-5 text-sm uppercase tracking-[0.35em] text-cyan-200/80">
              {content.eyebrow}
            </p>

            <h1 className="text-5xl font-semibold leading-tight tracking-tight text-white md:text-7xl">
              {content.greeting}{" "}
              <span className="bg-gradient-to-r from-cyan-200 via-white to-violet-200 bg-clip-text text-transparent">
                Juyao Li
              </span>
              {locale === "en" ? "." : "。"}
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl">
              {content.intro}
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-2xl border border-white/15 bg-white/10 px-6 py-3 text-sm font-medium text-white backdrop-blur-xl transition hover:-translate-y-0.5 hover:bg-white/15"
              >
                {content.viewProjects}
              </a>
              <a
                href="#contact"
                className="rounded-2xl border border-white/15 bg-white/10 px-6 py-3 text-sm font-medium text-white backdrop-blur-xl transition hover:-translate-y-0.5 hover:bg-white/15"
              >
                {content.contactMe}
              </a>
            </div>
          </div>
        </section>

        <section
          id="about"
          className="mb-8 rounded-3xl border border-white/10 bg-white/[0.07] p-8 shadow-[0_20px_80px_rgba(0,0,0,0.25)] backdrop-blur-xl md:p-10"
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.28em] text-cyan-200/70">
            {content.aboutLabel}
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-white">
            {content.aboutTitle}
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-300">
            {content.aboutBody}
          </p>
        </section>

        <section
          id="skills"
          className="mb-8 rounded-3xl border border-white/10 bg-white/[0.07] p-8 shadow-[0_20px_80px_rgba(0,0,0,0.25)] backdrop-blur-xl md:p-10"
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.28em] text-cyan-200/70">
            {content.skillsLabel}
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-white">
            {content.skillsTitle}
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

        <section
          id="projects"
          className="mb-8 rounded-3xl border border-white/10 bg-white/[0.07] p-8 shadow-[0_20px_80px_rgba(0,0,0,0.25)] backdrop-blur-xl md:p-10"
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.28em] text-cyan-200/70">
            {content.projectsLabel}
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-white">
            {content.projectsTitle}
          </h2>
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {content.projects.map((project) => (
              <article
                key={project.slug}
                className="rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur-xl transition hover:-translate-y-1 hover:bg-white/[0.14] hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                <p className="mt-3 leading-7 text-slate-300">{project.desc}</p>
                <Link
                  href={`${projectPrefix}/${project.slug}`}
                  className="mt-6 inline-block text-sm font-medium text-cyan-100 transition hover:translate-x-1 hover:text-white"
                >
                  {project.label} →
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section
          id="contact"
          className="mb-20 rounded-3xl border border-white/10 bg-white/[0.07] p-8 shadow-[0_20px_80px_rgba(0,0,0,0.25)] backdrop-blur-xl md:p-10"
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.28em] text-cyan-200/70">
            {content.contactLabel}
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-white">
            {content.contactTitle}
          </h2>
          <p className="mt-5 max-w-2xl leading-8 text-slate-300">
            {content.contactBody}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="mailto:juyaoli@outlook.com"
              className="rounded-2xl border border-white/15 bg-white/10 px-6 py-3 text-sm font-medium text-white backdrop-blur-xl transition hover:-translate-y-0.5 hover:bg-white/15"
            >
              {content.email}
            </a>
            <a
              href="https://github.com/Nameyaooo"
              target="_blank"
              rel="noreferrer"
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
