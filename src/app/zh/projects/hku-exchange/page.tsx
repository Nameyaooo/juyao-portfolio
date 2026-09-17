import type { Metadata } from "next";
import { HKUExchangePage } from "@/app/components/hku-exchange-page";

export const metadata: Metadata = {
  title: "香港大学交换经历 | Juyao Li",
  description: "记录香港大学交换期间的学习、校园生活、摄影与个人成长。",
};

export default function Page() {
  return <HKUExchangePage locale="zh" />;
}
