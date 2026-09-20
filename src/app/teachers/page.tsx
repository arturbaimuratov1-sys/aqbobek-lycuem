import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { TeacherCard } from "@/components/TeacherCard";
import { teachers } from "@/content/kk/teachers";
import { site } from "@/content/kk/site";

export const metadata: Metadata = { title: "Мұғалімдер" };

function Group({ title, ids }: { title: string; ids: string[] }) {
  const list = ids
    .map((id) => teachers.find((t) => t.id === id))
    .filter((t): t is NonNullable<typeof t> => Boolean(t));
  if (list.length === 0) return null;
  return (
    <section aria-label={title} className="mt-14 first:mt-0">
      <h2 className="border-b border-line pb-4 font-display text-2xl text-navy-900">{title}</h2>
      <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
        {list.map((t, i) => (
          <Reveal key={t.id} delay={Math.min(i * 0.04, 0.12)}>
            <div id={t.id} className="scroll-mt-32">
              <TeacherCard teacher={t} />
              {t.education && (
                <ul className="mt-2 space-y-1">
                  {t.education.map((e) => (
                    <li key={e} className="text-[12.5px] leading-relaxed text-ink-500">{e}</li>
                  ))}
                </ul>
              )}
              <p className="mt-2 text-[13.5px] leading-relaxed text-ink-600">{t.bio}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export default function TeachersPage() {
  return (
    <>
      <PageHero
        kicker="Ұжым"
        title="Мұғалімдер мен кураторлар"
        lead="Өз ісіне адал, шәкірт тәрбиелеуге құштар тәжірибелі ұстаздар. Әр мұғалім тек білім беріп қана қоймай, оқушының тұлғалық дамуына үлес қосады."
      />
      <div className="bg-white">
        <div className="mx-auto max-w-[1400px] px-5 py-14 md:px-8 lg:py-20">
          <Group title="Пән мұғалімдері" ids={["baktygulov_a", "utenova_k", "matigulova_g", "zholaman_m", "esalina_a", "nazhmadinov_m", "dauletbaeva_s", "suleimanov_b", "sungarieva_a", "nazarov_d", "amangazy_s", "kaiyrkulov_n", "karayeva_a", "akhmetova_i", "akyrap_a", "tanatar_m", "kaiyrzhanova_a", "zhadyrassyn_y", "karabai_a"]} />
          <Group title="Әкімшілік" ids={["baidirahmanova_b", "dushmanova_a", "kopzhasarova_t", "maratkyzy_d"]} />
          <Group title="Кураторлар" ids={["kydyrbayeva_g", "sharafadinova_a", "zhomartova_a", "khalelova_a", "salamatuly_a"]} />

          <Reveal className="mt-16 border border-line bg-mist p-8 md:p-10">
            <h2 className="font-display text-2xl text-navy-900">Біздің командаға қосылыңыз</h2>
            <p className="mt-3 max-w-[68ch] text-[15px] leading-relaxed text-ink-600">
              Математика, ағылшын тілі, информатика мұғалімдерін, кураторлар мен әкімшілік
              қызметкерлерді шақырамыз. Бәсекеге қабілетті жалақы мен әлеуметтік жеңілдіктер
              қарастырылған.
            </p>
            <a
              href={site.contacts.jobs}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex bg-navy-900 px-6 py-3 text-[14.5px] font-semibold text-white transition-all duration-150 ease-out hover:bg-navy-800 active:scale-[0.97]"
            >
              Ашық вакансиялар
            </a>
          </Reveal>
        </div>
      </div>
    </>
  );
}
