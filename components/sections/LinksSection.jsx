import { LinkIcon, MoveUpRightIcon } from "lucide-react";
import Image from "next/image";

export default function LinksSection({ data }) {
  const links = data?.links?.values;
  return (
    <div
      className="text-sm w-full flex flex-col justify-start gap-2 p-4 rounded-xl"
      aria-label="Social Links of Shamim Bin Zahid"
    >
      <h2 className="font-semibold text-neutral-500 dark:text-neutral-400">
        {data?.links?.label}
      </h2>
      <div className="w-full grid grid-cols-2 sm:flex sm:flex-wrap gap-1 sm:gap-2 items-start -mx-4 transition-all duration-200">
        {links.map((link, index) => (
          <a
            key={index}
            className="hover:shadow-primary-700/25 hover:shadow-[0_0_2px_0_rgba(80,80,80,0.01)] group flex items-center h-12 font-semibold text-primary-700 dark:text-primary-500 transition-all duration-500 px-4 py-3 rounded-xl hover:bg-primary-50 dark:hover:bg-primary-950"
            target="_blank"
            href={link.url}
            rel="noopener noreferrer"
            title={"Open " + link.label}
          >
            <MoveUpRightIcon strokeWidth={1.5} className="w-0 h-0 group-hover:w-5 group-hover:h-5 transition-all duration-500" />

            {console.log(`${link?.icon}`)}

            {!!link?.icon && `/icons/${link?.icon}.svg` ? (
              <Image
                width={20}
                height={20}
                alt="Link Icon"
                src={`/icons/${link?.icon}.svg`}
                className="w-5 h-5 group-hover:w-0 group-hover:h-0 transition-all duration-500"
              />
            ) : (
              <LinkIcon
                strokeWidth={1.5}
                size={20}
                className="group-hover:w-0 group-hover:h-0 transition-all duration-500"
              />
            )}

            <p className="ml-2 transition-all duration-500 overflow-hidden whitespace-nowrap">
              {link.label}
            </p>
          </a>
        ))}
      </div>
    </div>
  );
}
