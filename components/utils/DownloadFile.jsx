import { ArrowDownIcon, DownloadIcon } from 'lucide-react';

export function DownloadFile({ download_url, label = "Download" }) {
  return (
    <a
      href={download_url}
      target="_blank"
      rel="noopener noreferrer"
      className="cursor-pointer hover:shadow-primary-700/10 dark:hover:shadow-primary-400/10 hover:shadow-2xl group flex items-center gap-2 w-fit text-sm text-left font-semibold text-primary-700 dark:text-primary-500 transition-all px-4 py-3 rounded-xl hover:bg-primary-50 dark:hover:bg-primary-950"
    >
      <div className="flex flex-col">
        <DownloadIcon strokeWidth={1.5} className="w-5 h-0 transition-all duration-500 group-hover:w-5 group-hover:h-5" />
        <ArrowDownIcon strokeWidth={1.5} className="w-5 h-5 transition-all duration-500 group-hover:h-0 stroke-neutral-500 dark:stroke-neutral-400" />
      </div>
      {label}
    </a>
  );
}
