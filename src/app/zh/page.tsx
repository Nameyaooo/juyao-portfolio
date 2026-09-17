import type { Metadata } from "next";
import { HomePage } from "@/app/components/home-page";

export const metadata: Metadata = {
  title: "Juyao Li | 个人网站",
  description:
    "Juyao Li 的个人网站，展示 Web 应用、AI 工具、摄影与个人项目。",
};

export default function Page() {
  return <HomePage locale="zh" />;
}
