import { Newsreader } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import "./styles/fonts.css";
import Sidebar from "./common/Sidebar";
import Footer from "./common/Footer";
import { CSPostHogProvider } from "@/providers/postHog-providers";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const sohne = localFont({
  src: "./fonts/Sohne-Regular.otf",
  variable: "--font-sohne",
  weight: "100 900",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
});

export const metadata = {
  title: "Sam Sobhan", // Change to your app's title
  description: "Personal website and blog",
};

//added metadata to the layout

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <CSPostHogProvider>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${newsreader.variable} ${sohne.variable} antialiased font-sohne`}
      >
        <main className="p-4 pt-32 grid items-center justify-items-center min-h-screen overflow-auto ">
          <nav className="h-12 md:h-28 w-full bg-gradient-to-t from-transparent to-stone-50 dark:to-[#1e1e1e]  mix-blend-normal backdrop-grayscale fixed top-0 z-10"></nav>
          <Sidebar />
          {children}
          <Footer />
        </main>
      </body>
      </CSPostHogProvider>
    </html>
  );
}
