import type { Metadata } from "next";
import { FacultyIndex } from "@/components/FacultyIndex";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = { title: "Мұғалімдер" };

export default function TeachersPage() {
  return (
    <>
      <PageHero
        kicker="Ұжым"
        title="Мұғалімдер мен кураторлар"
        lead="Өз ісіне адал, тәжірибелі ұстаздар. Әр мұғалім тек білім беріп қана қоймай, оқушының тұлғалық дамуына үлес қосады."
      />
      <FacultyIndex />
    </>
  );
}
