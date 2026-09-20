/**
 * Notice board — EVERGREEN, verified items only.
 *
 * Every item below is a standing fact from the Lyceum's official materials
 * (admissions process, grants, clubs, exam formats). No dates, no events,
 * no competitions, no achievements are claimed here. When the school has
 * dated newsroom articles, extend this file with dated entries or connect
 * a CMS returning the same shape plus `date`.
 *
 * Shape contract:
 * { slug, kicker, title, excerpt, body[] }
 */

export interface Notice {
  slug: string;
  kicker: string;
  title: string;
  excerpt: string;
  body: string[];
}

export const notices: Notice[] = [
  {
    slug: "admissions-open",
    kicker: "Қабылдау",
    title: "Оқуға қабылдау ашық",
    excerpt:
      "Лицейге қабылдау төрт кезең арқылы өтеді: өтініш, математикадан тестілеу, сұхбат, келісім-шарт.",
    body: [
      "Лицейге қабылдау келесі кезеңдер арқылы жүзеге асырылады: өтінішті қабылдау бөліміне тапсыру, математика пәнінен тестілеу, оқушы және ата-анамен сұхбат, келісім-шарт жасау.",
      "Қатысу үшін өтініш формасын толтырыңыз немесе қабылдау бөлімімен WhatsApp арқылы байланысыңыз.",
    ],
  },
  {
    slug: "grants",
    kicker: "Гранттар",
    title: "Дарынды оқушыларға гранттар мен жеңілдіктер",
    excerpt:
      "«Ақбөбек» лицейінде дарынды оқушыларға арналған гранттар мен жеңілдіктер қарастырылған.",
    body: [
      "Оқу ақысы айына 150 000 ₸: негізгі бағдарлама, қосымша сабақтар және күніне төрт мезгіл тамақтану кіреді.",
      "Гранттар мен жеңілдіктер шарттарын қабылдау бөлімінен нақтылаңыз.",
    ],
  },
  {
    slug: "clubs",
    kicker: "Үйірмелер",
    title: "IT үйірмелер: Web, Arduino, 3D-модельдеу",
    excerpt:
      "Лицейде IT бағытында үш тегін үйірме, Art Club және «Şyraq» волонтерлар қозғалысы жұмыс істейді.",
    body: [
      "Web-бағдарламалау: HTML, CSS және JavaScript негіздері. Arduino: робототехника және электроника. 3D-модельдеу: үш өлшемді нысандарды жобалап, басып шығару.",
      "Бұдан бөлек шығармашылыққа арналған Art Club және «Şyraq» волонтерлар қозғалысы бар.",
    ],
  },
  {
    slug: "exams",
    kicker: "Емтихандар",
    title: "Қабылдау емтихандарының құрылымы",
    excerpt:
      "Математика — 90 минут, 30 тапсырма. Ағылшын тілі — 60 минут, 40 тапсырма. Қазақ тілі — 90 минут, 25 тапсырма.",
    body: [
      "Қабылдау емтиханы үш пәннен тұрады: математика (90 минут, 30 тапсырма), ағылшын тілі (60 минут, 40 тапсырма), қазақ тілі (90 минут, 25 тапсырма).",
      "Мұқият дайындалуға кеңес береміз: сұрақтарыңыз болса, қабылдау бөліміне жазыңыз.",
    ],
  },
];

export function getNotice(slug: string): Notice | undefined {
  return notices.find((n) => n.slug === slug);
}
