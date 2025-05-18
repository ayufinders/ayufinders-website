import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toast, ToastProvider } from "@/components/ui/toast";
import Script from "next/script";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "AyuFinders - Your Guide to BAMS Education",
  description:
    "Find the best BAMS colleges, latest job updates, admissions information, and more.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} font-poppins`}
      suppressHydrationWarning
    >
      <head>
        <link rel="icon" href="/favicon.jpg" sizes="any" />
        <Script type="application/ld+json"
        id="schema-org"
        dangerouslySetInnerHTML={{__html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "AyuFinders",
            url: "https://ayufinders.com",
            logo: "https://ayufinders.com/favicon.jpg",
            sameAs: ["https://www.instagram.com/ayufinders"],
            description:
              "India's leading platform for BAMS college admissions, updates, and jobs.",
            
          }) }}
        ></Script>
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-S6WF3YW361" />
        <Script
          id="google-analytics"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-S6WF3YW361', { page_path: window.location.pathname });
            `,
          }}
        />
      </head>
      <body className={`${poppins.variable} font-poppins`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <ToastProvider>
            <div className="flex min-h-screen flex-col">
              <Navbar />
              <main className="flex-1">{children}</main>
              <Footer />
              <Toast />
            </div>
          </ToastProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
