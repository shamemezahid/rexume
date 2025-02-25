import { useEffect, useRef, useState } from "react";
import { useAccessibility } from "../context/AccessibilityContext";
import {
  RotateCw,
  Menu,
  Home,
  Briefcase,
  Wrench,
  GraduationCap,
  BookOpen,
  Mail,
  MailIcon,
} from "lucide-react";

export const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  }
};

export default function Navigator({ data }) {
  const [isOpen, setIsOpen] = useState(false);
  const accordionRef = useRef(null);
  const { resetPreferences, hasPreferencesSet } = useAccessibility();
  const [isResetting, setIsResetting] = useState(false);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        accordionRef.current &&
        !accordionRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const SECTIONS = [
    {
      id: "intro",
      label: "Home",
      icon: Home,
      show: data?.intro?.show || false
    },
    {
      id: "experiences",
      label: data?.experiences?.label || "Experiences",
      icon: Briefcase,
      show: data?.experiences?.show || false
    },
    {
      id: "skills",
      label: data?.skills?.label || "Skills",
      icon: Wrench,
      show: data?.skills?.show || false
    },
    {
      id: "education",
      label: data?.education?.label || "Education",
      icon: GraduationCap,
      show: data?.education?.show || false
    },
    {
      id: "research",
      label: data?.research?.label || "Research",
      icon: BookOpen,
      show: data?.research?.show || false
    },
    {
      id: "contact",
      label: data?.contact?.label || "Contact",
      icon: Mail,
      show: data?.contact?.show || false
    },
  ];

  return (
    <div ref={accordionRef} className="flex flex-col items-end">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`shadow-primary-400 shadow-2xl border border-neutral-300 dark:border-neutral-700 flex justify-between items-center p-3 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-100 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-all duration-400 ease-[cubic-bezier(0.6,-0.4,0.5,1.5)] ${isOpen ? "w-full" : "w-11"
          }`}
      >
        <span
          className={`text-sm text-left overflow-hidden whitespace-nowrap ${isOpen ? "w-32 opacity-100 mx-2" : "w-0 opacity-0 mx-0"
            } transition-all duration-400`}
        >
          Navigation Menu
        </span>
        <Menu
          className={`w-5 h-5 transition-transform duration-500 ${isOpen ? "rotate-180" : ""
            }`}
        />
      </button>
      <div
        className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] w-full" : "grid-rows-[0fr] w-0"
          }`}
      >
        <div className="overflow-hidden">
          <div className="w-60 p-2 mt-1 bg-white/95 dark:bg-neutral-900/95 rounded-3xl flex flex-col gap-2">
            {SECTIONS.filter(section => section.show).map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className="w-full h-10 px-3 py-2 flex items-center bg-neutral-200 dark:bg-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-600 text-neutral-600 dark:text-neutral-300 rounded-full transition-all"
              >
                <section.icon strokeWidth={1.5} className="w-5 h-5" />
                <p className="text-sm mx-2">{section.label}</p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
