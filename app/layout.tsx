import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Slack Productivity Leak Detector – Find Productivity Killers in Slack",
  description:
    "Analyze your Slack workspace to identify time-wasting channels, notification overload, and meeting-heavy members. Built for team leads and remote-first companies."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          defer
          src="https://umami.microtool.dev/script.js"
          data-website-id="314dc593-2775-46b7-a968-fa384f01f4bf"
        />
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
