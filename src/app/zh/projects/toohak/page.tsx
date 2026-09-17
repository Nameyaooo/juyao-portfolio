import type { Metadata } from "next";
import { ToohakPage } from "@/app/components/toohak-page";

export const metadata: Metadata = {
  title: "Toohak 项目 | Juyao Li",
  description: "UNSW Toohak 学术项目的角色、技术职责与学习成果介绍。",
};

export default function Page() {
  return <ToohakPage locale="zh" />;
}
