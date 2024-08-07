import type {Metadata} from "next";
import "./globals.css";
import {roboto} from "@/app/font";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={`${roboto.className} flex flex-col min-h-screen m-0 p-0`}>
        <Header/>
        {children}
        <Footer/>
        </body>
        </html>
    );
}
