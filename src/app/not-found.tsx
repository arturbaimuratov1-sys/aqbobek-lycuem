import Link from "next/link";

export default function NotFound() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1400px] px-5 py-20 text-center md:px-8 lg:py-28">
        <p className="font-display text-7xl text-navy-900">404</p>
        <h1 className="mt-4 font-display text-3xl text-navy-900">Бет табылмады</h1>
        <p className="mx-auto mt-3 max-w-[52ch] text-[15.5px] leading-relaxed text-ink-600">
          Сіз іздеген бет жылжытылған немесе өшірілген болуы мүмкін.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex bg-navy-900 px-7 py-3.5 text-[15px] font-semibold text-white transition-all duration-150 ease-out hover:bg-navy-800 active:scale-[0.97]"
        >
          Басты бетке оралу
        </Link>
      </div>
    </section>
  );
}
