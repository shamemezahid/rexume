"use client";

import { ResumeDrawer } from "@/components/drawers/ResumeDrawer";
import { ContactFormSection } from "@/components/sections/ContactFormSection";
import { ExperiencesSection } from "@/components/sections/ExperiencesSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { ResearchSection } from "@/components/sections/ResearchSection";
import IntroSection from "@/components/sections/IntroSection";
import AboutSection from "@/components/sections/AboutSection";
import LinksSection from "@/components/sections/LinksSection";
import AccessibilityAccordion from "@/components/utils/AccessibilitySettings";
import SectionWithTitle from "@/components/utils/SectionTitle";
import default_data from "@/public/default";
import Navigator from "@/components/utils/Navigator";
import FooterSection from "@/components/sections/FooterSection";
import SeparatorLine from "@/components/utils/SeparatorLine";

export default function AltPage() {
  const data = default_data;
  return (
    <>
      <div className="pt-8 flex flex-col md:justify-center min-h-screen dark:bg-neutral-900 transition-all duration-200 ease-in">
        <main className="animate-fadeIn flex flex-col gap-6 w-full h-full max-w-6xl p-2 sm:p-6 pt-6 mx-auto relative">
          {data?.intro?.show && (
            <div id="intro" className="flex flex-col">
              <IntroSection data={data} />
              {data?.about?.show && <AboutSection data={data} />}
            </div>
          )}

          <LinksSection data={data} />

          {data?.experiences?.show && (
            <>
              <SeparatorLine />
              <div id="experiences" className="animate-fade-in-up">
                <SectionWithTitle
                  pagetitle={data?.experiences?.label}
                  content={<ExperiencesSection data={data} />}
                />
              </div>
            </>
          )}

          {data?.skills?.show && (
            <>
              <SeparatorLine />
              <div id="skills" className="animate-fade-in-up">
                <SectionWithTitle
                  pagetitle={data?.skills?.label}
                  content={<SkillsSection data={data} />}
                />
              </div>
            </>
          )}

          {data?.education?.show && (
            <>
              <SeparatorLine />
              <div id="education" className="animate-fade-in-up">
                <SectionWithTitle
                  pagetitle={data?.education?.label}
                  content={<EducationSection data={data} />}
                />
              </div>
            </>
          )}

          {data?.research?.show && (
            <>
              <SeparatorLine />
              <div id="research" className="animate-fade-in-up">
                <SectionWithTitle
                  pagetitle={data?.research?.label}
                  content={<ResearchSection data={data} />}
                />
              </div>
            </>
          )}

          {data?.contact?.show && (
            <>
              <SeparatorLine />
              <div id="contact" className="animate-fade-in-up">
                <SectionWithTitle
                  pagetitle={data?.contact?.label}
                  content={<ContactFormSection />}
                />
              </div>
            </>
          )}
        </main>
        <SeparatorLine />
        <FooterSection data={data} />
      </div>
      <div className="fixed z-30 bottom-8 right-8">
        <AccessibilityAccordion />
      </div>
      <div className="fixed z-30 top-8 right-8">
        <Navigator data={data}/>
      </div>
    </>
  );
}
