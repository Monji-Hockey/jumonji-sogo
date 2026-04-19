type Props = {
  className?: string;
};

/** 公開から RECENT_PUBLISH_DAYS 日以内の記事向けラベル（呼び出し側で判定） */
export default function ArticleNewBadge({ className = "" }: Props) {
  return (
    <span
      className={`inline-flex shrink-0 items-center rounded-full bg-[#c2185b] px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white sm:text-xs ${className}`.trim()}
      aria-label="新着"
    >
      NEW
    </span>
  );
}
