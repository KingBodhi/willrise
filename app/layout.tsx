import "./../styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Willrise Unlimited — Kinetic Fall-Arrest System",
  description: "Licensing entity for advanced safety harness technology."
};

export default function RootLayout({ children }:{ children: React.ReactNode }){
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
