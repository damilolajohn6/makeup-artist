import { Baloo_2 } from "next/font/google";
import "./globals.css";
import Footer from "../components/Footer";

const baloo2 = Baloo_2({
  variable: "--font-baloo-2",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Danna Makeup World",
  description: "Beauty made perfect",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${baloo2.variable} antialiased`}>{children}</body>
      <Footer />
    </html>
  );
}
