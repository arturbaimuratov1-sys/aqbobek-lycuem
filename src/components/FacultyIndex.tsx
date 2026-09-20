"use client";

import { useMemo, useState } from "react";
import { Reveal } from "@/components/Reveal";
import { teachers } from "@/content/kk/teachers";
import { site } from "@/content/kk/site";
import { cn } from "@/lib/cn";

type Group = "all" | "subjects" | "admin" | "curators";

const GROUPS: { id: Group; label: string }[] = [
  { id: "all", label: "Барлығы" },
  { id: "subjects", label: "Пән мұғалімдері" },
  { id: "admin", label: "Әкімшілік" },
  { id: "curators", label: "Кураторлар" },
];

function groupOf(role: string): Exclude<Group, "all"> {
  if (role.includes("Куратор")) return "curators";
  if (role.includes("орынбасары") || role.includes("меңгерушісі")) return "admin";
  return "subjects";
}

function initials(name: string): string {
  const parts = name.split(" ").filter(Boolean);
  return `${parts[0]?.slice(0, 1) ?? ""}${parts[1]?.slice(0, 1) ?? ""}`;
}

/**
 * Faculty index: subject filters + dense typographic rows.
 * Real staff data only; initials tiles instead of portrait wall.
 */
export function FacultyIndex() {
  const [group, setGroup] = useState<Group>("all");
  const list = useMemo(
    () => teachers.filter((t) => group === "all" || groupOf(t.role) === group),
    [group],
  );

  return (
    <div className="bg-paper">
      <div className="mx-auto max-w-[1440px] px-5 py-14 md:px-10 lg:py-20">
        <div role="group" aria-label="Санат бойынша сүзгі" className="flex flex-wrap gap-2">
          {GROUPS.map((g) => (
            <button
              key={g.id}
              type="button"
              aria-pressed={group === g.id}
              onClick={() => setGroup(g.id)}
              className={cn(
                "border px-5 py-2.5 text-[14px] font-semibold outline-none transition-colors duration-150",
                "focus-visible:border-navy-900",
                group === g.id
                  ? "border-navy-900 bg-navy-900 text-white"
                  : "border-ink-900/20 bg-transparent text-ink-600 hover:border-navy-900 hover:text-navy-900",
              )}
            >
              {g.label}
            </button>
          ))}
        </div>
        <p aria-live="polite" className="mt-6 text-[13.5px] text-ink-500">
          {list.length} қызметкер көрсетілді
        </p>
        <ul className="mt-4 border-t border-ink-900/10">
          {list.map((t) => (
            <li
              key={t.id}
              id={t.id}
              className="grid scroll-mt-32 grid-cols-[auto_1fr] items-start gap-4 border-b border-ink-900/10 py-5 sm:grid-cols-[auto_1fr_1fr] sm:items-center sm:gap-6"
            >
              <span
                aria-hidden="true"
                className="flex h-12 w-12 items-center justify-center bg-navy-900 font-display text-[15px] font-medium text-white"
              >
                {initials(t.name)}
              </span>
              <div className="min-w-0">
                <p className="font-display text-[19px] leading-snug font-medium break-words text-navy-900">
                  {t.name}
                </p>
                <p className="mt-0.5 text-[13.5px] text-ink-500">{t.role}</p>
              </div>
              <p className="col-span-2 max-w-[62ch] text-[14px] leading-relaxed text-ink-600 sm:col-span-1">
                {t.bio}
              </p>
            </li>
          ))}
        </ul>

        <Reveal className="mt-14 border border-line bg-mist p-8 md:p-10">
          <h2 className="font-display text-2xl font-medium text-navy-900">
            Біздің командаға қосылыңыз
          </h2>
          <p className="mt-3 max-w-[68ch] text-[15px] leading-relaxed text-ink-600">
            Математика, ағылшын тілі, информатика мұғалімдерін, кураторлар мен
            әкімшілік қызметкерлерді шақырамыз. Бәсекеге қабілетті жалақы мен
            әлеуметтік жеңілдіктер қарастырылған.
          </p>
          <a
            href={site.contacts.jobs}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex bg-navy-900 px-6 py-3 text-[14.5px] font-semibold text-white transition-[background-color,transform] duration-150 ease-out hover:bg-navy-800 active:scale-[0.97]"
          >
            Ашық вакансиялар
          </a>
        </Reveal>
      </div>
    </div>
  );
}
