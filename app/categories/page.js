
import Link from "next/link";
import { getProducts } from "@/lib/data-store";
export default function CategoriesPage(){ const products=getProducts(); const groups=[...new Set(products.map(i=>i.category))].map(name=>({name, count:products.filter(i=>i.category===name).length, sample:products.find(i=>i.category===name)}));
 return <main className="section"><div className="container"><div className="section-head compact"><div><div className="eyebrow">Categories</div><h1>Shop by category</h1></div></div><div className="category-grid">{groups.map(group=><Link key={group.name} href={`/products?category=${encodeURIComponent(group.name)}`} className="category-card card-surface"><img src={group.sample?.imageUrl} alt={group.name} /><div><strong>{group.name}</strong><span>{group.count} product(s)</span></div></Link>)}</div></div></main>; }
