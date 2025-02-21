export default function AboutSection({ data }) {
  return (
    <div className="text-sm flex flex-col justify-start gap-2 p-4 rounded-xl" aria-label="About Shamim Bin Zahid">
      <h2 className="font-semibold text-neutral-500 dark:text-neutral-400">
        {data?.about?.label}
      </h2>
      <p className="text-neutral-700 dark:text-neutral-200 text text-left sm:text-justify">
        {data?.about?.value}
      </p>
    </div>
  );
}