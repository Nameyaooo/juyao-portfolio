import Link from "next/link";
import { Locale, SiteHeader } from "./site-chrome";

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

const copy = {
  en: {
    back: "← Back to Projects",
    eyebrow: "Private Academic Project",
    title: "UNSW Project: Toohak",
    intro:
      "A private academic web application project developed at UNSW. This case study focuses on my role, technical responsibilities, and learning outcomes. The source code is not public due to academic integrity and course policy.",
    typeLabel: "Project Type",
    typeTitle: "Private Academic Project",
    typeBody:
      "This project was completed as part of my university coursework at UNSW. It is presented here as a high-level case study only, without exposing implementation details or source code.",
    roleLabel: "My Role",
    roleTitle: "Backend / API / Testing",
    roleBody:
      "I focused on backend logic, API behaviour, input validation, testing, and team collaboration. The project helped me improve both technical implementation and software engineering workflow.",
    techLabel: "Tech Stack",
    techTitle: "Tools and technologies",
    responsibilityLabel: "Responsibilities",
    responsibilityTitle: "What I worked on",
    responsibilities: [
      "Designed and implemented backend logic for core quiz features.",
      "Built and tested REST-style API endpoints.",
      "Worked on input validation, error handling, and data management.",
      "Used automated testing to verify expected behaviour.",
      "Collaborated in a team environment using Git and project planning.",
    ],
    sourceLabel: "Source Code Status",
    sourceTitle: "Source code is private.",
    sourceBody:
      "The source code for this project is not published because it was part of an academic course project. Keeping the repository private helps protect academic integrity, course policy, and future students.",
  },
  zh: {
    back: "← 返回项目",
    eyebrow: "非公开学术项目",
    title: "UNSW 项目：Toohak",
    intro:
      "这是一个在 UNSW 开发的非公开学术 Web 应用项目。本页重点介绍我在项目中的角色、技术职责与学习成果。出于学术诚信和课程政策要求，源代码不公开。",
    typeLabel: "项目类型",
    typeTitle: "非公开学术项目",
    typeBody:
      "该项目是我在 UNSW 大学课程中的团队作业。本页面仅以概述形式介绍项目，不展示具体实现细节或源代码。",
    roleLabel: "我的角色",
    roleTitle: "后端 / API / 测试",
    roleBody:
      "我主要负责后端逻辑、API 行为、输入验证、测试与团队协作。这个项目帮助我同时提升了技术实现能力和软件工程工作流程。",
    techLabel: "技术栈",
    techTitle: "工具与技术",
    responsibilityLabel: "主要职责",
    responsibilityTitle: "我负责的工作",
    responsibilities: [
      "设计并实现实时问答核心功能的后端逻辑。",
      "构建并测试 REST 风格的 API 接口。",
      "处理输入验证、错误处理与数据管理。",
      "使用自动化测试验证预期行为。",
      "通过 Git 和项目规划与团队成员协作。",
    ],
    sourceLabel: "源代码状态",
    sourceTitle: "源代码不公开。",
    sourceBody:
      "该项目属于大学课程作业，因此源代码不会公开。保持代码仓库私有，有助于维护学术诚信、遵守课程政策并保护未来学生。",
  },
} as const;

export function ToohakPage({ locale }: { locale: Locale }) {
  const content = copy[locale];
  const projectsHref = locale === "zh" ? "/zh#projects" : "/#projects";

  return (
    <main
      lang={locale === "zh" ? "zh-CN" : "en"}
      className="relative min-h-screen overflow-x-hidden bg-slate-950 text-white"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[-120px] top-[100px] h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="absolute right-[-120px] top-[260px] h-96 w-96 rounded-full bg-violet-500/20 blur-3xl" />
        <div className="absolute bottom-[180px] left-1/3 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
      </div>

      <SiteHeader
        locale={locale}
        englishHref="/projects/toohak"
        chineseHref="/zh/projects/toohak"
      />

      <div className="mx-auto max-w-6xl px-6 py-10">
        <Link
          href={projectsHref}
          className="inline-flex rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-medium text-slate-200 backdrop-blur-xl transition hover:-translate-y-0.5 hover:bg-white/15"
        >
          {content.back}
        </Link>

        <section className="py-20">
          <p className="mb-5 text-sm uppercase tracking-[0.35em] text-cyan-200/80">
            {content.eyebrow}
          </p>
          <h1 className="max-w-4xl text-5xl font-semibold leading-tight tracking-tight text-white md:text-7xl">
            {content.title}
          </h1>
          <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl">
            {content.intro}
          </p>
        </section>

        <section className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/[0.07] p-8 shadow-[0_20px_80px_rgba(0,0,0,0.25)] backdrop-blur-xl">
            <p className="mb-3 text-sm uppercase tracking-[0.28em] text-cyan-200/70">
              {content.typeLabel}
            </p>
            <h2 className="text-3xl font-semibold text-white">{content.typeTitle}</h2>
            <p className="mt-5 leading-8 text-slate-300">{content.typeBody}</p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.07] p-8 shadow-[0_20px_80px_rgba(0,0,0,0.25)] backdrop-blur-xl">
            <p className="mb-3 text-sm uppercase tracking-[0.28em] text-cyan-200/70">
              {content.roleLabel}
            </p>
            <h2 className="text-3xl font-semibold text-white">{content.roleTitle}</h2>
            <p className="mt-5 leading-8 text-slate-300">{content.roleBody}</p>
          </div>
        </section>

        <section className="mt-8 rounded-3xl border border-white/10 bg-white/[0.07] p-8 shadow-[0_20px_80px_rgba(0,0,0,0.25)] backdrop-blur-xl md:p-10">
          <p className="mb-3 text-sm uppercase tracking-[0.28em] text-cyan-200/70">
            {content.techLabel}
          </p>
          <h2 className="text-3xl font-semibold text-white">{content.techTitle}</h2>
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

        <section className="mt-8 rounded-3xl border border-white/10 bg-white/[0.07] p-8 shadow-[0_20px_80px_rgba(0,0,0,0.25)] backdrop-blur-xl md:p-10">
          <p className="mb-3 text-sm uppercase tracking-[0.28em] text-cyan-200/70">
            {content.responsibilityLabel}
          </p>
          <h2 className="text-3xl font-semibold text-white">
            {content.responsibilityTitle}
          </h2>
          <div className="mt-8 grid gap-4">
            {content.responsibilities.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/10 p-5 text-slate-300"
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="mb-20 mt-8 rounded-3xl border border-cyan-200/20 bg-cyan-200/[0.08] p-8 shadow-[0_20px_80px_rgba(0,0,0,0.25)] backdrop-blur-xl md:p-10">
          <p className="mb-3 text-sm uppercase tracking-[0.28em] text-cyan-200/80">
            {content.sourceLabel}
          </p>
          <h2 className="text-3xl font-semibold text-white">{content.sourceTitle}</h2>
          <p className="mt-5 max-w-3xl leading-8 text-slate-300">
            {content.sourceBody}
          </p>
        </section>
      </div>
    </main>
  );
}
