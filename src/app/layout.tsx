import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Legal Work Platform — Manage Every Part of Your Legal Work",
  description:
    "A single platform to manage every part of your legal work. Track matters, coordinate schedules, manage clients, centralize documents, and handle communication – all in one system.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
