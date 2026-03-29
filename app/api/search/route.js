
import { NextResponse } from "next/server";
import { getProducts } from "@/lib/data-store";
import { searchProducts } from "@/lib/search";
export async function GET(request){ const q = new URL(request.url).searchParams.get("q") || ""; return NextResponse.json(searchProducts(getProducts(), q)); }
