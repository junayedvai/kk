import { getProducts, getSiteContent } from "@/lib/data-store";
import AdminClient from "./AdminClient";
export default function AdminPage(){ return <AdminClient initialProducts={getProducts()} initialSite={getSiteContent()} />; }