import Link from "next/link";

export type Locale = "en" | "zh";

type LanguageSwitcherProps = {
  locale: Locale;
  englishHref: string;
  chineseHref: string;
};

export function LanguageSwitcher({
  locale,
  englishHref,
  chineseHref,
}: LanguageSwitcherProps) {
  const itemClass =
    "rounded-full px-3 py-1.5 text-xs font-semibold transition sm:text-sm";

  return (
    <div
      className="inline-flex shrink-0 rounded-full border border-white/15 bg-white/10 p-1 backdrop-blur-xl"
      aria-label={locale === "zh" ? "语言切换" : "Language switcher"}
    >
      <Link
        href={englishHref}
        lang="en"
        hrefLang="en"
        aria-current={locale === "en" ? "page" : undefined}
        style={locale === "en" ? { color: "#020617" } : undefined}
        className={`${itemClass} ${
          locale === "en"
            ? "bg-white shadow-sm"
            : "text-slate-300 hover:bg-white/10 hover:text-white"
        }`}
      >
        EN
      </Link>
      <Link
        href={chineseHref}
        lang="zh-CN"
        hrefLang="zh-CN"
        aria-current={locale === "zh" ? "page" : undefined}
        style={locale === "zh" ? { color: "#020617" } : undefined}
        className={`${itemClass} ${
          locale === "zh"
            ? "bg-white shadow-sm"
            : "text-slate-300 hover:bg-white/10 hover:text-white"
        }`}
      >
        中文
      </Link>
    </div>
  );
}

type SiteHeaderProps = LanguageSwitcherProps & {
  homePage?: boolean;
};

export function SiteHeader({
  locale,
  englishHref,
  chineseHref,
  homePage = false,
}: SiteHeaderProps) {
  const homeHref = locale === "zh" ? "/zh" : "/";
  const labels =
    locale === "zh"
      ? homePage
        ? [
            ["#about", "关于我"],
            ["#skills", "技能"],
            ["#projects", "项目"],
            ["#contact", "联系"],
          ]
        : [
            [homeHref, "首页"],
            [`${homeHref}#projects`, "项目"],
            [`${homeHref}#contact`, "联系"],
          ]
      : homePage
        ? [
            ["#about", "About"],
            ["#skills", "Skills"],
            ["#projects", "Projects"],
            ["#contact", "Contact"],
          ]
        : [
            [homeHref, "Home"],
            [`${homeHref}#projects`, "Projects"],
            [`${homeHref}#contact`, "Contact"],
          ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/50 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
        <Link
          href={homeHref}
          className="text-sm font-semibold tracking-wide text-white"
        >
          Juyao Li
        </Link>

        <div className="flex items-center gap-4 md:gap-8">
          <nav className="hidden gap-8 text-sm text-slate-300 md:flex">
            {labels.map(([href, label]) => (
              <Link key={href} href={href} className="transition hover:text-white">
                {label}
              </Link>
            ))}
          </nav>

          <LanguageSwitcher
            locale={locale}
            englishHref={englishHref}
            chineseHref={chineseHref}
          />
        </div>
      </div>
    </header>
  );
}

export function StarField() {
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

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.28),transparent_32%),radial-gradient(circle_at_80%_30%,rgba(168,85,247,0.28),transparent_30%),radial-gradient(circle_at_50%_80%,rgba(14,165,233,0.18),transparent_35%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/80 to-slate-950" />
      <div className="absolute left-[-120px] top-[120px] h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl" />
      <div className="absolute right-[-120px] top-[260px] h-96 w-96 rounded-full bg-violet-500/20 blur-3xl" />
      <div className="absolute bottom-[180px] left-1/3 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
    </div>
  );
}
