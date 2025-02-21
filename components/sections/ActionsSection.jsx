import { ResumeDrawer } from "@/components/drawers/ResumeDrawer";
import { ContactDrawer } from "@/components/drawers/ContactDrawer";
import { ExperiencesDrawer } from "@/components/drawers/ExperiencesDrawer";
import { EducationDrawer } from "@/components/drawers/EducationDrawer";
import { SkillsDrawer } from "../drawers/SkillsDrawer";
import { ResearchDrawer } from "@/components/drawers/ResearchDrawer";

export default function ActionsSection({ data }) {
  return (
    data?.actions?.show && (
      <div className="text-sm w-full flex flex-col justify-start gap-2 p-4 rounded-xl">
        <div className="w-full grid grid-cols-2 sm:flex sm:flex-wrap gap-1 sm:gap-2 items-start -mx-4 transition-all">
          
          {data?.actions?.resume?.show && (
            <ResumeDrawer
              label={data?.actions?.resume?.label}
              data={data}
            />
          )}

          {data?.actions?.contact?.show && (
            <ContactDrawer
              label={data?.actions?.contact?.label}
              data={data}
            />
          )}

          {data?.actions?.experiences?.show && (
            <ExperiencesDrawer label="Experiences" data={data} />
          )}

          {data?.actions?.skills?.show && (
            <SkillsDrawer label="Skills" data={data} />
          )}

          {data?.actions?.educations?.show && (
            <EducationDrawer label="Education" data={data} />
          )}

          {data?.actions?.research?.show && (
            <ResearchDrawer label="Research" data={data} />
          )}
        </div>
      </div>
    )
  );
}
