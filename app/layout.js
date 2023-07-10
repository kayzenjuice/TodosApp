import NavBar from "@/components/NavBar";
import "./globals.css";
import { Inter, Luckiest_Guy } from "next/font/google";

const luckiestGuy = Luckiest_Guy({
  subsets: ["latin"],
  variable: "--font-luckiest-guy",
  weight: "400",
});

export const metadata = {
  title: "Todo Creator",
  description: "Create a todo list with ease",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${luckiestGuy.variable}`}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
