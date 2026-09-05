import { NextResponse } from "next/server";
import redis, { DEFAULT_TESTIMONIALS } from "@/lib/redis";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const data = await redis.get("testimonials");
    if (!data || !Array.isArray(data) || data.length === 0) {
      await redis.set("testimonials", DEFAULT_TESTIMONIALS);
      return NextResponse.json(DEFAULT_TESTIMONIALS);
    }
    return NextResponse.json(data);
  } catch {
    return NextResponse.json(DEFAULT_TESTIMONIALS);
  }
}
