import Link from "next/link";
import { Locale, SiteHeader, StarField } from "./site-chrome";

const copy = {
  en: {
    back: "← Back to Projects",
    eyebrow: "HKU Exchange Journey",
    title: "Coming Soon.",
    intro:
      "This page will document my exchange journey at The University of Hong Kong, including academic life, campus experience, city exploration, photography, and personal growth.",
    tags: ["Hong Kong", "Exchange", "Study Abroad", "Photography", "Personal Growth"],
    soonLabel: "Coming Soon",
    soonTitle: "More content will be added later.",
    soonBody:
      "I will update this page after adding more photos, notes, and reflections from my HKU exchange experience.",
  },
  zh: {
    back: "← 返回项目",
    eyebrow: "香港大学交换经历",
    title: "即将上线。",
    intro:
      "这个页面将记录我在香港大学交换期间的学习生活、校园体验、城市探索、摄影作品与个人成长。",
    tags: ["香港", "交换学习", "海外学习", "摄影", "个人成长"],
    soonLabel: "敬请期待",
    soonTitle: "更多内容将在之后更新。",
    soonBody:
      "当我整理好更多香港大学交换期间的照片、笔记和感想后，会继续更新这个页面。",
  },
} as const;

export function HKUExchangePage({ locale }: { locale: Locale }) {
  const content = copy[locale];
  const projectsHref = locale === "zh" ? "/zh#projects" : "/#projects";

  return (
    <main
      lang={locale === "zh" ? "zh-CN" : "en"}
      className="relative min-h-screen overflow-x-hidden text-white"
    >
      <StarField />
      <SiteHeader
        locale={locale}
        englishHref="/projects/hku-exchange"
        chineseHref="/zh/projects/hku-exchange"
      />

      <div className="mx-auto flex min-h-[calc(100vh-65px)] max-w-6xl flex-col justify-center px-6 py-16">
        <Link
          href={projectsHref}
          className="mb-12 inline-flex w-fit rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-medium text-slate-200 backdrop-blur-xl transition hover:-translate-y-0.5 hover:bg-white/15"
        >
          {content.back}
        </Link>

        <section className="max-w-4xl">
          <p className="mb-5 text-sm uppercase tracking-[0.35em] text-cyan-200/80">
            {content.eyebrow}
          </p>
          <h1 className="text-5xl font-semibold leading-tight tracking-tight text-white md:text-7xl">
            {content.title}
          </h1>
          <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl">
            {content.intro}
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            {content.tags.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-slate-200 backdrop-blur-xl"
              >
                {item}
              </span>
            ))}
          </div>
        </section>

        <section className="mt-16 rounded-3xl border border-white/10 bg-white/[0.07] p-8 shadow-[0_20px_80px_rgba(0,0,0,0.25)] backdrop-blur-xl md:p-10">
          <p className="mb-3 text-sm uppercase tracking-[0.28em] text-cyan-200/70">
            {content.soonLabel}
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-white">
            {content.soonTitle}
          </h2>
          <p className="mt-5 max-w-3xl leading-8 text-slate-300">
            {content.soonBody}
          </p>
        </section>
      </div>
    </main>
  );
}
