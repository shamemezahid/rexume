import { FileTextIcon, MoveUpRightIcon, TvMinimalPlayIcon } from "lucide-react";

export function ResearchSection({ data }) {
  return (
    <div className="section text-sm w-full flex flex-col justify-start gap-4 rounded-xl">
      {(data?.research?.values || []).map((research, index) => (
        <div
          key={index}
          className="w-full p-5 border dark:border-neutral-600/50 border-neutral-400/25 rounded-xl bg-neutral-200/[0.4] dark:bg-neutral-700/[0.4]"
        >
          <h3 className="font-bold text-base text-neutral-900 dark:text-white mb-2">
            {research.title}
          </h3>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-2">
            {research.conference} ({research.year})
          </p>
          <p className="text-sm text-neutral-700 dark:text-neutral-200 mb-2">
            {research.authors}
          </p>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-2">
            {research.abstract}
          </p>
          <div className="flex flex-wrap gap-3 mt-4 transition-all duration-200">
            {research.URL && (
              <a
                href={research.URL}
                target="_blank"
                rel="noopener noreferrer"
                className="truncate group flex items-center h-12 font-semibold text-primary-700 dark:text-primary-500 transition-all duration-500 px-4 py-3 rounded-lg bg-neutral-200/[0.5] dark:bg-neutral-700/[0.5] hover:bg-primary-100 dark:hover:bg-primary-900"
                title={`Open ${research.URL_label}`}
              >
                <MoveUpRightIcon strokeWidth={1.5} className="w-0 h-0 group-hover:w-6 group-hover:h-6 transition-all duration-500" />
                <FileTextIcon strokeWidth={1.5} className="w-6 h-6 group-hover:w-0 group-hover:h-0 transition-all duration-500" />
                <p className="ml-2 transition-all duration-500 overflow-hidden whitespace-nowrap">
                  {research.URL_label}
                </p>
              </a>
            )}
            {research.presentation && (
              <a
                href={research.presentation}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center h-12 font-semibold text-primary-700 dark:text-primary-500 transition-all duration-500 px-4 py-3 rounded-lg bg-neutral-200/[0.5] dark:bg-neutral-700/[0.5] hover:bg-primary-100 dark:hover:bg-primary-900"
                title="Open Presentation"
              >
                <MoveUpRightIcon strokeWidth={1.5} className="w-0 h-0 group-hover:w-6 group-hover:h-6 transition-all duration-500" />
                <TvMinimalPlayIcon strokeWidth={1.5} className="w-6 h-6 group-hover:w-0 group-hover:h-0 transition-all duration-500" />
                <p className="ml-2 transition-all duration-500 overflow-hidden whitespace-nowrap">
                  View Presentation
                </p>
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
