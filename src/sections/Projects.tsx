import { AnimatePresence, motion } from "framer-motion";
import { BarChart3, FileText, GraduationCap, Workflow } from "lucide-react";
import { projectsByRole, type Project, type Role } from "../data/profile";
import { ui } from "../data/ui";
import { useLang } from "../i18n";
import { Magnetic, SectionHeader } from "../components/ui";
import { CvButton } from "../components/Cv";
import ProjectCard from "../components/ProjectCard";

const TABS: { role: Role; Icon: typeof BarChart3 }[] = [
  { role: "da", Icon: BarChart3 },
  { role: "ba", Icon: Workflow },
];

export default function Projects({ role, setRole }: { role: Role; setRole: (r: Role) => void }) {
  const { t } = useLang();
  const list = projectsByRole(role);
  // work projects first; coursework gets its own group underneath
  const work = list.filter((p) => !p.university);
  const uni = list.filter((p) => p.university);
  // a lone non-featured card at the end of a group stretches across the row instead of leaving a gap
  const loneLast = (group: Project[]) => {
    const regular = group.filter((p) => !p.featured);
    return regular.length % 2 === 1 ? regular[regular.length - 1] : null;
  };
  const lastWork = loneLast(work);
  const lastUni = loneLast(uni);

  return (
    <section id="projects" data-role={role} className="scroll-mt-24">
      <SectionHeader n="03" title={t(ui.projectsTitle)} aside={<span className="label">{t(ui.projectsCount, { n: list.length })} · {t(ui.roleLabel[role])}</span>} />

      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div role="tablist" aria-label={t(ui.projectsTitle)} className="grid grid-cols-2 gap-1 rounded-2xl border border-line bg-card/70 p-1.5 backdrop-blur sm:inline-grid">
          {TABS.map(({ role: r, Icon }) => {
            const on = role === r;
            return (
              <button
                key={r}
                role="tab"
                id={`tab-${r}`}
                aria-selected={on}
                aria-controls="project-panel"
                data-role={r}
                onClick={() => setRole(r)}
                className={`group relative cursor-pointer rounded-xl px-4 py-3 text-left transition-colors duration-300 sm:min-w-[13.75rem] ${
                  on ? "text-fg" : "text-muted-fg hover:bg-fg/[0.04] hover:text-fg"
                }`}
              >
                {on && (
                  <motion.span
                    layoutId="tab-pill"
                    className="absolute inset-0 rounded-xl border border-accent/50 bg-accent/10 shadow-[0_0_30px_-8px_hsl(var(--accent)/0.6)]"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                <span className="relative flex items-center gap-2 text-sm font-medium">
                  <Icon size={16} className={`transition-colors ${on ? "text-accent" : "group-hover:text-accent"}`} />
                  {t(ui.roleLabel[r])}
                </span>
                <span className="relative mt-0.5 block font-mono text-[0.625rem] uppercase tracking-wider opacity-70">{t(ui.roleHint[r])}</span>
              </button>
            );
          })}
        </div>

        <Magnetic>
          <CvButton role={role} className="btn btn-accent w-full sm:w-auto" wrapClassName="w-full sm:w-auto">
            <FileText size={15} /> {t(ui.viewCv, { role: role.toUpperCase() })}
          </CvButton>
        </Magnetic>
      </div>

      <div id="project-panel" role="tabpanel" aria-labelledby={`tab-${role}`}>
        <AnimatePresence mode="wait">
          <motion.div
            key={role}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="grid gap-4 md:grid-cols-2"
          >
            {list.length === 0 && (
              <div className="tile grid-bg flex min-h-[12rem] flex-col items-center justify-center gap-3 p-8 text-center md:col-span-2">
                <span className="label !text-accent">{t(ui.roleLabel[role])}</span>
                <p className="max-w-md text-sm leading-relaxed text-muted-fg">{t(ui.projectsSoon)}</p>
              </div>
            )}
            {work.map((p, i) => (
              <ProjectCard key={p.slug} project={p} index={i} wide={!!p.featured || p === lastWork} />
            ))}

            {uni.length > 0 && (
              <div className="mt-8 flex flex-wrap items-end justify-between gap-2 border-t border-line pt-6 md:col-span-2">
                <p className="flex items-center gap-2 font-display text-xl font-semibold">
                  <GraduationCap size={18} className="text-accent" /> {t(ui.universityProjects)}
                </p>
                <span className="label">{t(ui.universityHint)}</span>
              </div>
            )}
            {uni.map((p, i) => (
              <ProjectCard key={p.slug} project={p} index={work.length + i} wide={!!p.featured || p === lastUni} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
