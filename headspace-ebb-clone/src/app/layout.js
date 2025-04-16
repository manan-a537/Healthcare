import "./globals.css";

export const metadata = {
  title: "Meet Ebb | AI Mental Health Companion - Headspace",
  description: "Ebb is a new space for writing out your thoughts, finding gratitude, and seeing things from a new perspective.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-headspace">
        {children}
      </body>
    </html>
  );
}
