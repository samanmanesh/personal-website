import localFont from "next/font/local";
import "./globals.css";
import "./styles/fonts.css";

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

export const metadata = {
  title: "Personal Website", // Change to your app's title
  description: "A brief description of your app",
  icons: {
    icon: "/personal-log.ico", // Path to your favicon
  },
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
        <link rel="icon" href="/personal-log.ico" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-soehne`}
      >
        {children}
      </body>
    </html>
  );
}
