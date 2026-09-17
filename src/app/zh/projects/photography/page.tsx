import type { Metadata } from "next";
import { PhotographyPage } from "@/app/components/photography-page";

export const metadata: Metadata = {
  title: "摄影作品集 | Juyao Li",
  description: "记录香港、悉尼与旅行中的城市景观、街头瞬间和个人记忆。",
};

export default function Page() {
  return <PhotographyPage locale="zh" />;
}
