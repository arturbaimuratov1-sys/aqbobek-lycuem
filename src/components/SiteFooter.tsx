import Image from "next/image";
import Link from "next/link";
import { site } from "@/content/kk/site";
import { programmeSubjects } from "@/content/kk/programs";

/**
 * Institutional footer: full-width English wordmark band, ruled link
 * zone, contact + legal bottom bar. Designed, not templated columns.
 */
export function SiteFooter() {
  return (
    <footer className="bg-abyss text-white">
      <div className="mx-auto max-w-[1440px] px-5 pt-16 md:px-10 lg:pt-20">
        <div className="flex flex-wrap items-end justify-between gap-8 border-b border-line-dark pb-10">
          <div className="flex items-center gap-5">
            <Image
              src={site.brand.logo}
              alt=""
              width={120}
              height={120}
              className="h-16 w-16 object-cover md:h-20 md:w-20"
            />
            <div>
              <p className="font-display text-3xl font-medium tracking-tight text-white md:text-4xl">
                Aqbobek Lyceum
              </p>
              <p className="mt-2 text-[10px] uppercase tracking-[0.28em] text-frost-500">
                Boarding Lyceum · Aktobe
              </p>
            </div>
          </div>
          <div className="flex gap-6 text-[14px] font-medium">
            <a
              href={site.contacts.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="border border-line-dark px-5 py-2.5 text-white/80 transition-colors duration-150 hover:border-white hover:text-white"
            >
              WhatsApp
            </a>
            <a
              href={site.contacts.instagram}
              target="_blank"
              rel="noreferrer"
              className="border border-line-dark px-5 py-2.5 text-white/80 transition-colors duration-150 hover:border-white hover:text-white"
            >
              Instagram
            </a>
          </div>
        </div>

        <div className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="max-w-[38ch] text-[14.5px] leading-relaxed text-white/65">
              {site.tagline}
            </p>
          </div>
          <nav aria-label="Төменгі деректеме">
            <p className="border-t-2 border-steel-500 pt-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-frost-500">
              Навигация
            </p>
            <ul className="mt-5 grid grid-cols-1 gap-2.5 text-[14.5px]">
              <li>
                <Link href="/" className="text-white/75 transition-colors duration-150 hover:text-white">
                  Басты бет
                </Link>
              </li>
              {site.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-white/75 transition-colors duration-150 hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <p className="border-t-2 border-steel-500 pt-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-frost-500">
              Бағдарламалар
            </p>
            <ul className="mt-5 space-y-2.5 text-[14.5px] text-white/75">
              {programmeSubjects.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="border-t-2 border-steel-500 pt-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-frost-500">
              Байланыс
            </p>
            <ul className="mt-5 space-y-2.5 text-[14.5px] text-white/75">
              <li className="font-display text-lg text-white">
                <a href={`tel:${site.contacts.phonePrimary.replace(/[^+\d]/g, "")}`} className="transition-colors duration-150 hover:text-white">
                  {site.contacts.phonePrimary}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.contacts.email}`} className="transition-colors duration-150 hover:text-white">
                  {site.contacts.email}
                </a>
              </li>
              <li>{site.contacts.address}</li>
              <li className="text-white/50">{site.contacts.hours}</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-line-dark">
          <div className="flex flex-col gap-2 py-6 text-[13px] text-white/45 sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 Aqbobek Lyceum. Барлық құқықтар қорғалған.</p>
            <p className="flex gap-6">
              <Link href="/contact" className="transition-colors duration-150 hover:text-white">
                Құпиялылық саясаты
              </Link>
              <Link href="/contact" className="transition-colors duration-150 hover:text-white">
                Пайдалану шарттары
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
