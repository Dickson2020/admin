import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yasser - Admin Dashboard",
  description: "Admin Panel for Yasser",
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
  <meta name="viewport" content="width=1920, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
</head>
      <body>
        {children}
      </body>
    </html>
  );
}
