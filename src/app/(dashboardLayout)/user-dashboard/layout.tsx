import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard - Travel Agency",
  description: "Best travel agency in the world!",
};

export default function UserDashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
