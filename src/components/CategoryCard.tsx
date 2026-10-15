"use client";
import { useLanguage } from "@/components/LanguageProvider";
type CategoryCardProps = {
  emoji: string;
  title: string;
  count?: number;
  selected?: boolean;
  onSelect?: () => void;
};

export default function CategoryCard({
  emoji,
  title,
  count, selected, onSelect,
}: CategoryCardProps) {
  const { label, locale } = useLanguage();
  return (
    <a href="#recipe-search" onClick={onSelect} aria-current={selected ? 'true' : undefined} className={`flex min-h-32 flex-col items-center justify-center rounded-3xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md ${selected ? 'ring-2 ring-red-600' : ''}`}>
      <span className="text-4xl">{emoji}</span>

      <span className="mt-4 font-bold text-neutral-800">
        {label(title)}
      </span>
      {count !== undefined && <span className="mt-2 text-sm text-neutral-500">{locale === 'ko' ? `${count}개 레시피` : `${count} ${count === 1 ? 'recipe' : 'recipes'}`}</span>}
    </a>
  );
}
