export const metadata = {
  title: "IICTDS 2025",
  description: "IICTDS NMIMS DATA SCIENCE CONFERENCE",
};
import Navbar from "@/components/Navbar";
import Ribbon from "@/components/Ribbon";
import "./global.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <Navbar />
        <Ribbon />
        {children}
      </body>
    </html>
  );
}
