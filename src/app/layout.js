import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/Navbar";
import ClientWrapper from "@/app/components/ClientWrapper";
import LoadWords from "@/app/components/LoadWords";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata = {
    title: "Mod 7 ",
    description: "Mod 7 second instance ",
};

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ClientWrapper>
            <LoadWords />  {/* Load words into Redux state */}
            <Navbar/>
            {children}
        </ClientWrapper>
        </body>
        </html>
    );
}
