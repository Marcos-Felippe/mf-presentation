import Footer from "@/components/Footer/Footer";
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar/Navbar";
import { ThemeProvider } from "@/context/ThemeContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "MF Presentation",
    description: "This is a site made with the intention of providing information about my knowledge about programming",
};

export default function RootLayout({
    children,
}: {
  children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <ThemeProvider>
                    <div className="container">
                        <Navbar />
                        {children}
                         <Footer />
                    </div>
                </ThemeProvider>
            </body>
        </html>
    );
}
