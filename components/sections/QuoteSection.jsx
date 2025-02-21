export default function QuoteSection({ data }) {
  return (
    <p className="p-4 text-sm font-medium text-neutral-700 dark:text-neutral-200 text-left sm:text-justify">
      {data?.intro?.quote}
    </p>
  );
}