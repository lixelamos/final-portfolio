import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "Kipkorir Amos — Full Stack Developer",
  description:
    "I build websites and applications that make complex things feel simple. Explore full stack projects, frontend development, and developer tools by Kipkorir Amos.",
  openGraph: {
    title: "Kipkorir Amos — Full Stack Developer",
    description: "Full stack developer based in Nairobi, Kenya.",
    type: "website",
  },
  icons: { icon: "/icon.svg" },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
