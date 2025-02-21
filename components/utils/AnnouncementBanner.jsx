import { InfoIcon } from "lucide-react";
import Link from "next/link";

export default function AnnouncementBanner({
  message,
  action_url,
  action_text,
}) {
  return (
    <div className="text-xs flex flex-col sm:flex-row items-start sm:items-center gap-1 sm:gap-3 fixed top-3 left-3 right-3 w-fit mx-auto z-[9999] pr-6 p-3 bg-opacity-80 rounded-xl bg-primary-100 border border-primary-300">
      <div className="flex gap-2 items-center">
        <InfoIcon strokeWidth={1.5} className="text-primary-800 w-6 h-6" />
        <p className="text-primary-800 text-left sm:text-center">{message}</p>
      </div>

      {action_url && action_text && (
        <a
          href={action_url}
          className="ml-6 sm:inset-0 text-primary-800 font-bold hover:text-primary-900"
        >
          {action_text}
        </a>
      )}
    </div>
  );
}
