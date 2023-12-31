import Footer from "./Components/footer/Footer";
import { Navigation } from "./Components/navbar/Navigation";
import "./globals.css";
import { Inter } from "next/font/google";
import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  const navLinks = [
    {
      id: 1,
      name: "Home",
      href: "/",
    },

    {
      id: 2,
      name: "Portfolio",
      href: "/Pages/portfolio",
    },

    {
      id: 3,
      name: "Blog",
      href: "/Pages/blog",
    },

    {
      id: 4,
      name: "About",
      href: "/Pages/about",
    },

    {
      id: 5,
      name: "Contact",
      href: "/Pages/contact",
    },

    {
      id: 6,
      name: "Dashboard",
      href: "/Pages/dashboard",
    },
  ];
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="mainLayout">
          <Navigation navLinks={navLinks} />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
