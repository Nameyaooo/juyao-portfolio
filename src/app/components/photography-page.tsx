import Image from "next/image";
import Link from "next/link";
import { Locale, SiteHeader, StarField } from "./site-chrome";

const copy = {
  en: {
    back: "← Back to Home",
    eyebrow: "Photography Portfolio",
    title: "Moments from Hong Kong, Sydney and my travels.",
    intro:
      "This page collects my photography work, including city views, street moments, architecture details, and travel memories. I use photography to record places I have visited and the feeling of everyday life.",
    locations: ["Hong Kong", "Sydney", "Australia"],
    featuredLabel: "Featured Story",
    featuredTitle: "Hong Kong through my lens.",
    featuredBody:
      "Hong Kong is one of the main places I want to document. The city has a strong mix of density, movement, light, and daily life. I want this photography page to become a visual diary of my exchange journey and personal experience.",
    styles: ["Street", "Cityscape", "Travel", "Daily Life", "Architecture"],
    galleryLabel: "Gallery",
    galleryTitle: "Selected Photos",
    galleryBody:
      "A simple gallery layout for my current and future photography work. More photos can be added by placing images in the public folder.",
    updateLabel: "How I update this page",
    updateTitle: "More photos coming soon.",
    updateBody:
      "I will continue adding new photography work from Hong Kong, Sydney, China, and future travel destinations. This page is designed to grow with my personal portfolio.",
    featuredAlt: "Featured Hong Kong photography",
    photos: [
      ["/photography/hongkong-1.jpeg", "Hong Kong Street", "Hong Kong", "Street / Travel", "Street moments and city atmosphere captured during my time in Hong Kong."],
      ["/photography/hongkong-2.jpeg", "Hong Kong Night", "Hong Kong", "Cityscape", "Night lights, urban density, and the visual rhythm of Hong Kong."],
      ["/photography/hongkong-3.jpeg", "Quiet Hong Kong", "Hong Kong", "Daily Life", "Small details and quiet moments from everyday life in the city."],
      ["/photography/sydney-1.jpeg", "Sydney City", "Sydney", "Cityscape", "A clean visual record of Sydney’s streets, buildings, and open spaces."],
      ["/photography/sydney-2.jpeg", "Sydney Walk", "Sydney", "Street", "Street photography and travel memories from Sydney."],
      ["/photography/sydney-3.jpeg", "Australia Memory", "Australia", "Travel", "Travel moments and personal visual memories from Australia."],
    ],
  },
  zh: {
    back: "← 返回首页",
    eyebrow: "摄影作品集",
    title: "记录香港、悉尼与旅途中的瞬间。",
    intro:
      "这里收录了我的摄影作品，包括城市景观、街头瞬间、建筑细节和旅行记忆。我用摄影记录到访过的地方，以及日常生活中的真实感受。",
    locations: ["香港", "悉尼", "澳大利亚"],
    featuredLabel: "精选故事",
    featuredTitle: "我镜头里的香港。",
    featuredBody:
      "香港是我最想持续记录的城市之一。这里汇集了密度、流动、光线与日常生活的独特节奏。我希望这个摄影页面能够成为交换经历和个人体验的视觉日记。",
    styles: ["街头", "城市景观", "旅行", "日常生活", "建筑"],
    galleryLabel: "相册",
    galleryTitle: "精选照片",
    galleryBody:
      "这里以简洁的相册形式展示我现在和未来的摄影作品，之后也会持续加入新的照片。",
    updateLabel: "页面更新",
    updateTitle: "更多照片即将上线。",
    updateBody:
      "我会继续加入来自香港、悉尼、中国及未来旅行目的地的摄影作品，让这个页面随着我的个人作品集一起成长。",
    featuredAlt: "香港摄影精选作品",
    photos: [
      ["/photography/hongkong-1.jpeg", "香港街头", "香港", "街头 / 旅行", "在香港生活期间捕捉到的街头瞬间与城市氛围。"],
      ["/photography/hongkong-2.jpeg", "香港夜色", "香港", "城市景观", "记录香港的夜间灯光、城市密度与视觉节奏。"],
      ["/photography/hongkong-3.jpeg", "静谧香港", "香港", "日常生活", "城市日常里容易被忽略的细节与安静时刻。"],
      ["/photography/sydney-1.jpeg", "悉尼城市", "悉尼", "城市景观", "对悉尼街道、建筑与开放空间的简洁视觉记录。"],
      ["/photography/sydney-2.jpeg", "悉尼漫步", "悉尼", "街头", "来自悉尼的街头摄影与旅行记忆。"],
      ["/photography/sydney-3.jpeg", "澳洲记忆", "澳大利亚", "旅行", "我在澳大利亚旅行与生活中的个人影像记忆。"],
    ],
  },
} as const;

export function PhotographyPage({ locale }: { locale: Locale }) {
  const content = copy[locale];
  const homeHref = locale === "zh" ? "/zh" : "/";

  return (
    <main
      lang={locale === "zh" ? "zh-CN" : "en"}
      className="relative min-h-screen overflow-x-hidden text-white"
    >
      <StarField />
      <SiteHeader
        locale={locale}
        englishHref="/projects/photography"
        chineseHref="/zh/projects/photography"
      />

      <div className="mx-auto max-w-6xl px-6 py-10">
        <Link
          href={homeHref}
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
          <div className="mt-10 flex flex-wrap gap-3">
            {content.locations.map((location) => (
              <span
                key={location}
                className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-slate-200 backdrop-blur-xl"
              >
                {location}
              </span>
            ))}
          </div>
        </section>

        <section className="mb-10 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.07] shadow-[0_20px_80px_rgba(0,0,0,0.3)] backdrop-blur-xl">
          <div className="grid gap-0 lg:grid-cols-2">
            <div className="relative min-h-[420px] bg-slate-900">
              <Image
                src="/photography/hongkong-1.jpeg"
                alt={content.featuredAlt}
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
                {content.featuredLabel}
              </p>
              <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
                {content.featuredTitle}
              </h2>
              <p className="mt-5 leading-8 text-slate-300">{content.featuredBody}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                {content.styles.map((style) => (
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

        <section className="py-10">
          <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="mb-3 text-sm uppercase tracking-[0.3em] text-cyan-200/70">
                {content.galleryLabel}
              </p>
              <h2 className="text-3xl font-semibold tracking-tight text-white">
                {content.galleryTitle}
              </h2>
            </div>
            <p className="max-w-xl leading-7 text-slate-300">{content.galleryBody}</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {content.photos.map(([src, title, location, category, desc]) => (
              <article
                key={src}
                className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.07] shadow-[0_20px_80px_rgba(0,0,0,0.25)] backdrop-blur-xl transition hover:-translate-y-1 hover:bg-white/[0.11] hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-slate-900">
                  <Image
                    src={src}
                    alt={title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <p className="text-xs uppercase tracking-[0.25em] text-cyan-200/60">
                    {category}
                  </p>
                  <h3 className="mt-3 text-xl font-semibold text-white">{title}</h3>
                  <p className="mt-2 text-sm text-slate-400">{location}</p>
                  <p className="mt-4 leading-7 text-slate-300">{desc}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mb-20 mt-10 rounded-3xl border border-white/10 bg-white/[0.07] p-8 shadow-[0_20px_80px_rgba(0,0,0,0.25)] backdrop-blur-xl md:p-10">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-cyan-200/70">
            {content.updateLabel}
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-white">
            {content.updateTitle}
          </h2>
          <p className="mt-5 max-w-3xl leading-8 text-slate-300">
            {content.updateBody}
          </p>
        </section>
      </div>
    </main>
  );
}
