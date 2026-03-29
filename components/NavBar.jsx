
import Link from "next/link";
export default function NavBar({ brand="GlobalDock" }){
  return <header className="site-header"><div className="container nav-wrap"><Link href="/" className="brand-mark"><span className="brand-icon">G</span><span><strong>{brand}</strong><small>Premium digital marketplace</small></span></Link><nav className="nav-links"><Link href="/">Home</Link><Link href="/products">Products</Link><Link href="/search">Search</Link><Link href="/categories">Categories</Link><Link href="/admin/login">Admin</Link></nav><Link href="/search" className="nav-cta">Browse now</Link></div></header>
}
