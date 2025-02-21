export function SkillsSection({ data }) {
  const skillsData = data?.skills;
  return (
    <div className="text-sm w-full flex flex-col justify-start gap-2 rounded-xl">
      <div className="w-full flex flex-col gap-4 items-start text-neutral-700 dark:text-neutral-200 text-left">
        {(skillsData?.values || []).map((category, index) => (
          <div key={index} className="w-full">
            <h3 className="font-bold text-base text-neutral-900 dark:text-white mb-2">
              {category.category}
            </h3>
            <div className="flex flex-wrap gap-2 mb-2">
              {category.skills.map((skill, skillIndex) => (
                <span
                  key={skillIndex}
                  className="section px-4 py-2 text-xs font-medium border dark:border-neutral-600/50 border-neutral-400/25 bg-neutral-200/[0.4] dark:bg-neutral-700/[0.4] text-neutral-600 dark:text-neutral-300 rounded-lg"
                >
                  {skill}
                </span>
              ))}
            </div>
            {/* <SeparatorLine className="mt-4" /> */}
          </div>
        ))}
      </div>
    </div>
  );
}
