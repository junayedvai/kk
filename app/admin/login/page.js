
"use client";
import { useState } from "react";
export default function AdminLoginPage(){ const [password,setPassword]=useState(""); const [error,setError]=useState(""); const [loading,setLoading]=useState(false);
 async function onSubmit(e){ e.preventDefault(); setLoading(true); setError(""); const res=await fetch("/api/admin/login", { method:"POST", headers:{"Content-Type":"application/json"}, body:JSON.stringify({password}) }); const data=await res.json(); if(!res.ok){ setError(data.error || "Login failed"); setLoading(false); return; } window.location.href="/admin"; }
 return <main className="section"><div className="container login-wrap"><form className="login-card card-surface" onSubmit={onSubmit}><div className="eyebrow">Protected workspace</div><h1>Admin login</h1><p>Use your admin password to manage listings and homepage content.</p><input type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder="Admin password" />{error ? <div className="error-text">{error}</div> : null}<button type="submit" className="nav-cta wide" disabled={loading}>{loading ? "Checking..." : "Enter admin"}</button></form></div></main>; }
