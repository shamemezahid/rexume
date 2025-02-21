export default function SeparatorLine({ className }) {
  return (
    <div aria-label="separator" className={`w-full min-h-[1px] my-2 rounded-full dark:bg-neutral-600/50 bg-neutral-200/50 ${className}`}></div>
  );
}