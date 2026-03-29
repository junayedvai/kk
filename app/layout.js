
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { getSiteContent } from "@/lib/data-store";
export const metadata = { title:"GlobalDock", description:"Premium manual-import marketplace built with Next.js" };
export default function RootLayout({ children }){ const site=getSiteContent(); return <html lang="en"><body><div className="page-bg" /><NavBar brand={site.brand} />{children}<Footer /></body></html>; }
