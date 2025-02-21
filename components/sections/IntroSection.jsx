import { MapPin } from "lucide-react";

export default function IntroSection({ data }) {
  return (
    <div className="relative flex flex-col justify-start sm:flex-row sm:items-center gap-4 p-4 rounded-tr-[64px] rounded-br-[64px] rounded-tl-[100px] rounded-bl-[100px]">
      <div className="flex w-full sm:w-fit justify-between items-start">
        <div
          className="relative w-32 rounded-full overflow-hidden"
          onContextMenu={(e) => e.preventDefault()}
        >
          <img
            alt={data?.intro?.name}
            src={data?.intro?.avatar}
            aria-label={data?.intro?.name}
            height={512}
            width={512}
            className="w-32 aspect-1 rounded-full border-2 border-primary-700 dark:border-primary-500"
            draggable="false"
            preload="true"
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100">
          {data?.intro?.greetings}
        </h1>
        <span className="text-base font-normal text-neutral-700 dark:text-neutral-200">
          {data?.intro?.tagline}
        </span>
        <span className="flex items-center gap-1">
          <MapPin className="w-4 text-neutral-500 dark:text-neutral-400" />
          <span className="text-sm font-light text-neutral-500 dark:text-neutral-400">
            {data?.intro?.location}
          </span>
        </span>
      </div>
    </div>
  );
}
