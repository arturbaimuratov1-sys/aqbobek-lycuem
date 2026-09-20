/**
 * Site-wide facts for Aqbobek Lyceum.
 * Source: https://a1s.kz/ — do not invent new facts here.
 * Locale namespace: `kk`. Future `ru` / `en` dictionaries mirror this shape.
 */

export interface NavItem {
  label: string;
  href: string;
}

export const site = {
  locale: "kk" as const,
  brand: {
    short: "Ақбөбек",
    qualifier: "Лицей",
    full: "«Ақбөбек» лицейі",
    latin: "Aqbobek Lyceum",
    logo: "/brand/aqbobek-lyceum-loader-logo.jpg",
  },
  tagline:
    "Батыс өңірінде теңдесі жоқ, дарынды балаларға арналған IT бағытындағы лицей-интернат",
  mission:
    "Цифрлық дәуірде жаңалықтар ашуға шабыт береміз.",
  vision:
    "Цифрлық технологиялар арқылы білім беретін «үлкен әлеует» мектебі боламыз.",
  values: [
    "Сенім",
    "Ұйымшылдық",
    "Құрмет",
    "Жауапкершілік",
    "Адалдық",
    "Табандылық",
    "Ашықтық",
  ],
  contacts: {
    phonePrimary: "+7 (778) 680 0636",
    phoneSecondary: "+7 (747) 466 2973",
    email: "info@akbobek.kz",
    address: "Ақтөбе қ., Ораз Тәтеұлы 13Б",
    hours: "Дс–Жм: 9:00–18:00",
    whatsapp:
      "https://wa.me/77474662973?text=%D0%A1%D3%99%D0%BB%D0%B5%D0%BC%D0%B5%D1%82%D1%81%D1%96%D0%B7%20%D0%B1%D0%B5%2C%20%D0%BC%D0%B5%D0%BD%20%D0%BB%D0%B8%D1%86%D0%B5%D0%B9%D0%B4%D1%96%D2%A3%20%D1%80%D0%B5%D1%81%D0%BC%D0%B8%20%D1%81%D0%B0%D0%B9%D1%82%D1%8B%D0%BD%D0%B0%D0%BD%20%D0%B6%D0%B0%D0%B7%D1%8B%D0%BF%20%D0%BE%D1%82%D1%8B%D1%80%D0%BC%D1%8B%D0%BD",
    instagram: "https://instagram.com/aqbobek_lyceum/",
    examForm:
      "https://docs.google.com/forms/d/1QO9K-33s6NTNYglei-THTGYUMmiYuygRN6bJmFAf9Cs/edit",
    jobs: "https://lms.a1s.kz/hr/jobs",
  },
  nav: [
    { label: "Лицей туралы", href: "/about" },
    { label: "Білім беру", href: "/education" },
    { label: "Мұғалімдер", href: "/teachers" },
    { label: "Қабылдау", href: "/admissions" },
    { label: "Кампус", href: "/campus" },
    { label: "Жаңалықтар", href: "/news" },
    { label: "Байланыс", href: "/contact" },
  ] as NavItem[],
} as const;

export type Site = typeof site;
