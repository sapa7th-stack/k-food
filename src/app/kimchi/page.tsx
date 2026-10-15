import type { Metadata } from "next";
import KimchiGuide from "@/components/KimchiGuide";

export const metadata: Metadata = {
  title: "Kimchi Guide | K-Food Table",
  description: "Detailed Korean kimchi recipes for napa cabbage kimchi, ponytail radish kimchi, kkakdugi, green onion kimchi, cucumber kimchi, and more.",
};

export default function KimchiPage() {
  return <KimchiGuide />;
}
