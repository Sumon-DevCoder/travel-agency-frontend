import type { Metadata } from "next";
import Navbar from "../../components/Shared/Navbar";
import Footer from "../../components/Shared/Footer";

export const metadata: Metadata = {
  title: "Travel Agency",
  description: "Best travel agency in the world",
};

export default async function CommonLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
