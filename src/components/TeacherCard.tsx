import Image from "next/image";
import Link from "next/link";
import type { Teacher } from "@/content/kk/teachers";

/** Restrained staff card: portrait, name, role. Links to the staff directory anchor. */
export function TeacherCard({ teacher }: { teacher: Teacher }) {
  return (
    <Link
      href={`/teachers#${teacher.id}`}
      className="group block min-w-0"
      aria-label={`${teacher.name} — ${teacher.role}`}
    >
      <div className="overflow-hidden bg-steel-100">
        <Image
          src={teacher.photo}
          alt={`${teacher.name} портреті`}
          width={600}
          height={800}
          loading="lazy"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="aspect-[3/4] w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03] motion-reduce:group-hover:scale-100"
        />
      </div>
      <p className="mt-4 font-display text-[19px] leading-snug font-medium break-words text-navy-900 underline-offset-4 group-hover:underline">
        {teacher.name}
      </p>
      <p className="mt-1 text-[13.5px] leading-relaxed text-ink-500">{teacher.role}</p>
    </Link>
  );
}
