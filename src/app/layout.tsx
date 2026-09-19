import type { Metadata } from "next";
import { Inter, PT_Serif } from "next/font/google";
import "./globals.css";
import { IntroGate } from "@/components/Intro/IntroGate";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin", "cyrillic", "cyrillic-ext"],
  display: "swap",
});

const ptSerif = PT_Serif({
  variable: "--font-display",
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin", "cyrillic", "cyrillic-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Aqbobek Lyceum — «Ақбөбек» лицейі",
    template: "%s — Aqbobek Lyceum",
  },
  description:
    "Батыс өңірінде теңдесі жоқ, дарынды балаларға арналған IT бағытындағы лицей-интернат. Математика, ағылшын тілі және ақпараттық технологиялар.",
  metadataBase: new URL("https://a1s.kz"),
  openGraph: {
    siteName: "Aqbobek Lyceum",
    locale: "kk_KZ",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="kk" className={`${inter.variable} ${ptSerif.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-white text-ink-900">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[200] focus:bg-navy-900 focus:px-4 focus:py-2 focus:text-white"
        >
          Негізгі мазмұнға өту
        </a>
        <IntroGate>
          <SiteHeader />
          <main id="main" className="flex flex-1 flex-col">
            {children}
          </main>
          <SiteFooter />
        </IntroGate>
      </body>
    </html>
  );
}
