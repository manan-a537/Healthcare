import "./globals.css";

export const metadata = {
  title: "Meet Elivia | AI Mental Health Companion - Docure",
  description: "Elivia is a new space for writing out your thoughts, finding gratitude, and seeing things from a new perspective.",
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
