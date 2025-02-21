import { GlobeIcon, MoveUpRight } from "lucide-react";

export function ExperiencesSection({ data }) {
  return (
    <div className="section text-sm w-full flex flex-col justify-start gap-2 rounded-xl">
      {/* <h2 className="font-semibold text-neutral-500 dark:text-neutral-400">{data?.experiences?.label || data?.experiences?.label}</h2> */}
      <div className="w-full flex flex-col gap-4 items-start text-neutral-700 dark:text-neutral-200 text-left">
        {(data?.experiences.values || []).map((experience, index) => (
          <div
            key={index}
            className="w-full p-5 border dark:border-neutral-600/50 border-neutral-400/25 rounded-xl bg-neutral-200/[0.4] dark:bg-neutral-700/[0.4]"
          >
            <div className="flex flex-wrap justify-between gap-2 items-center mb-2">
              <h3 className="font-bold text-base text-neutral-900 dark:text-white">
                {experience.workplace}
              </h3>
              {experience.website && (
                <a
                  href={experience.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full truncate max-w-48 group flex items-center h-8 font-medium text-primary-700 dark:text-primary-500 transition-all duration-500 px-3 py-2 rounded-lg bg-neutral-200/[0.5] dark:bg-neutral-700/[0.5] hover:bg-primary-100 dark:hover:bg-primary-900"
                  title={`Open ${experience.workplace} website`}
                >
                  <MoveUpRight className="w-0 h-0 group-hover:w-4 group-hover:h-4 transition-all duration-500" />
                  <GlobeIcon
                    strokeWidth={1.5}
                    className="w-4 h-4 group-hover:w-0 group-hover:h-0 transition-all duration-500"
                  />
                  <p className="ml-2 transition-all duration-500 w-full truncate">
                    {experience.website
                      .replace(/^https?:\/\/(www\.)?/, "")
                      .replace(/\/.*$/, "")}
                  </p>
                </a>
              )}
            </div>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2">
              <p className="font-medium text-neutral-700 dark:text-neutral-200">
                {experience.designation}
              </p>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                {experience.start} - {experience.end}
              </p>
            </div>
            <div className="flex gap-2 flex-wrap mb-2">
              <span className="section bg-neutral-200 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 px-2 py-1 rounded text-xs">
                {experience.shift}
              </span>
              <span className="section bg-neutral-200 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 px-2 py-1 rounded text-xs">
                {experience.nature}
              </span>
              <span className="section bg-neutral-200 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 px-2 py-1 rounded text-xs">
                {experience.location}
              </span>
            </div>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-1">
              {experience?.responsibilities_label}
            </p>
            <ul className="list-disc pl-5 text-neutral-600 dark:text-neutral-300">
              {Array.isArray(experience.responsibilities) ? (
                experience.responsibilities.map((responsibility, index) => (
                  <li key={index} className="text-sm leading-relaxed">
                    {responsibility}
                  </li>
                ))
              ) : (
                <li className="text-sm leading-relaxed">
                  {experience.responsibilities}
                </li>
              )}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
