import { Inter } from "next/font/google";
import dbConnect from "../../dbConnect/dbConnect";
import Header from "../components/Header";
import AuthProvider from "../providers/AuthProvider";
import "../styles/global.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Eventry - Home",
  description: "All tech events in one place",
};

export default async function RootLayout({ children }) {
  await dbConnect()
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <Header />
          <main>
            {children}
          </main>
        </AuthProvider>
      </body>
    </html>
  );
}
