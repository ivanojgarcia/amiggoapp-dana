import "./globals.css";
import Layout from "./components/Layout";
import Footer from "./components/Footer";

export const metadata = {
  title: "Amiggo Coche DANA",
  description:
    "Amiggo Coche DANA es una comunidad solidaria para ayudar a las víctimas de la DANA.",
  icons: {
    icon: "/assets/favicon_io/favicon.ico",
    apple: "/assets/favicon_io/apple-touch-icon.png",
  },
  author: "Ivabo Junior Garcia, @ivanojgarcia",
  manifest: "/assets/favicon_io/site.webmanifest",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased bg-body text-body font-body`}
      >
        <div className="min-h-screen flex flex-col">
            <section
              data-from-ai="false"
              className="px-4 pt-6 pb-8 lg:px-18 lg:pb-18 bs-section-dragged"
            >
              <Layout />
                <main className="flex-grow">{children}</main>
              <Footer />
            </section>
        </div>
      </body>
    </html>
  );
}