import Image from "next/image";
import Link from "next/link";
import { site } from "@/content/kk/site";
import { programmeSubjects } from "@/content/kk/programs";

export function SiteFooter() {
  return (
    <footer className="bg-abyss text-white">
      <div className="mx-auto grid max-w-[1440px] gap-12 px-5 py-16 md:grid-cols-2 md:px-10 lg:grid-cols-[1.4fr_1fr_1fr_1.1fr] lg:py-20">
        <div>
          <div className="flex items-center gap-4">
            <Image
              src={site.brand.logo}
              alt={`${site.brand.latin} логотипі`}
              width={140}
              height={56}
              className="h-12 w-auto"
            />
            <div className="flex flex-col leading-tight">
              <span className="font-display text-[15px] font-medium">{site.brand.full}</span>
              <span className="mt-1 text-[10px] uppercase tracking-[0.22em] text-frost-500">
                Лицей-интернат · Ақтөбе
              </span>
            </div>
          </div>
          <p className="mt-6 max-w-[42ch] text-[14.5px] leading-relaxed text-white/65">
            {site.tagline}
          </p>
          <div className="mt-6 flex gap-6 text-[14px] font-medium">
            <a
              href={site.contacts.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="text-white/75 underline-offset-4 transition-colors duration-150 hover:text-white hover:underline"
            >
              WhatsApp
            </a>
            <a
              href={site.contacts.instagram}
              target="_blank"
              rel="noreferrer"
              className="text-white/75 underline-offset-4 transition-colors duration-150 hover:text-white hover:underline"
            >
              Instagram
            </a>
          </div>
        </div>

        <nav aria-label="Төменгі деректеме">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-frost-500">
            Навигация
          </p>
          <ul className="mt-5 space-y-3 text-[14.5px]">
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
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-frost-500">
            Бағдарламалар
          </p>
          <ul className="mt-5 space-y-3 text-[14.5px] text-white/75">
            {programmeSubjects.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-frost-500">
            Байланыс
          </p>
          <ul className="mt-5 space-y-3 text-[14.5px] text-white/75">
            <li>
              <a href={`tel:${site.contacts.phonePrimary.replace(/[^+\d]/g, "")}`} className="transition-colors duration-150 hover:text-white">
                {site.contacts.phonePrimary}
              </a>
            </li>
            <li>
              <a href={`tel:${site.contacts.phoneSecondary.replace(/[^+\d]/g, "")}`} className="transition-colors duration-150 hover:text-white">
                {site.contacts.phoneSecondary}
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
        <div className="mx-auto flex max-w-[1440px] flex-col gap-2 px-5 py-6 text-[13px] text-white/45 sm:flex-row sm:items-center sm:justify-between md:px-10">
          <p>© 2026 {site.brand.full}. Барлық құқықтар қорғалған.</p>
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
    </footer>
  );
}
