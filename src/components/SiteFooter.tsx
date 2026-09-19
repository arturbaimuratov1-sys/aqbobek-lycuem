import Image from "next/image";
import Link from "next/link";
import { site } from "@/content/kk/site";
import { programmeSubjects } from "@/content/kk/programs";

export function SiteFooter() {
  return (
    <footer className="bg-navy-950 text-white">
      <div className="mx-auto grid max-w-[1400px] gap-10 px-5 py-14 md:grid-cols-2 md:px-8 lg:grid-cols-[1.3fr_1fr_1fr_1.1fr] lg:py-16">
        <div>
          <div className="flex items-center gap-3">
            <Image
              src={site.brand.logo}
              alt={`${site.brand.latin} логотипі`}
              width={120}
              height={44}
              className="h-10 w-auto brightness-0 invert"
            />
            <div className="flex flex-col leading-tight">
              <span className="font-display text-[17px]">{site.brand.full}</span>
              <span className="text-[11px] uppercase tracking-[0.14em] text-white/60">
                Лицей-интернат · Ақтөбе
              </span>
            </div>
          </div>
          <p className="mt-5 max-w-[42ch] text-[14.5px] leading-relaxed text-white/70">
            {site.tagline}
          </p>
          <div className="mt-5 flex gap-4 text-[14px]">
            <a
              href={site.contacts.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="text-gold-500 transition-colors duration-150 hover:text-white"
            >
              WhatsApp
            </a>
            <a
              href={site.contacts.instagram}
              target="_blank"
              rel="noreferrer"
              className="text-gold-500 transition-colors duration-150 hover:text-white"
            >
              Instagram
            </a>
          </div>
        </div>

        <nav aria-label="Төменгі деректеме">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/50">
            Навигация
          </p>
          <ul className="mt-4 space-y-2.5 text-[14.5px]">
            <li>
              <Link href="/" className="text-white/80 transition-colors duration-150 hover:text-white">
                Басты бет
              </Link>
            </li>
            {site.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-white/80 transition-colors duration-150 hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/50">
            Бағдарламалар
          </p>
          <ul className="mt-4 space-y-2.5 text-[14.5px] text-white/80">
            {programmeSubjects.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/50">
            Байланыс
          </p>
          <ul className="mt-4 space-y-2.5 text-[14.5px] text-white/80">
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
            <li className="text-white/60">{site.contacts.hours}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-2 px-5 py-5 text-[13px] text-white/50 sm:flex-row sm:items-center sm:justify-between md:px-8">
          <p>© 2026 {site.brand.full}. Барлық құқықтар қорғалған.</p>
          <p className="flex gap-5">
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
