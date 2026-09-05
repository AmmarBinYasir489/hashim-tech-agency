import { NextRequest, NextResponse } from "next/server";
import { verifyToken } from "@/lib/auth";
import { getTestimonials, setTestimonials, Testimonial } from "@/lib/redis";

function authCheck(req: NextRequest): boolean {
  const token = req.cookies.get("admin-token")?.value;
  return !!token;
}

export async function GET(req: NextRequest) {
  if (!authCheck(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const data = await getTestimonials();
  return NextResponse.json(data);
}

export async function POST(req: NextRequest) {
  if (!authCheck(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const incoming: Testimonial[] = await req.json();
  await setTestimonials(incoming);
  return NextResponse.json({ success: true });
}
