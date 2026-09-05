import { NextResponse } from "next/server";
import { getTestimonials } from "@/lib/redis";

export async function GET() {
  try {
    const data = await getTestimonials();
    return NextResponse.json(data);
  } catch {
    return NextResponse.json([], { status: 500 });
  }
}
