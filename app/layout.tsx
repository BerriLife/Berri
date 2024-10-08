import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const MaximaNouvaNormal = localFont({
  src: './fonts/maxima_nouva/MaximaNouva-Regular-AF65d8537f25976.otf',
  weight: '100 900',
  variable: '--maxima-nouva-normal',
  display: 'swap',
});

const MaximaNouvaItalic = localFont({
  src:'./fonts/maxima_nouva/MaximaNouva-Italic-AF65d8537f1ef1f.otf',
  weight: '100 900',
  variable: '--maxima-nouva-italic',
  display: 'swap',
})

const MaximaNouvaBold = localFont({
  src:'./fonts/maxima_nouva/MaximaNouva-Bold-AF65d8537f09f63.otf',
  weight: '100 900',
  variable: '--maxima-nouva-bold',
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Berri",
  description: "Berri Life",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${MaximaNouvaNormal.variable} ${MaximaNouvaItalic.variable} ${MaximaNouvaBold.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
