import { NextResponse } from "next/server";
import redis, { DEFAULT_TESTIMONIALS } from "@/lib/redis";

export const dynamic = "force-dynamic";

const DATA_VERSION = 2;

export async function GET() {
  try {
    const version = await redis.get<number>("testimonials_version");
    const data = await redis.get("testimonials");
    if (version !== DATA_VERSION || !data || !Array.isArray(data) || data.length === 0) {
      await redis.set("testimonials_version", DATA_VERSION);
      await redis.set("testimonials", DEFAULT_TESTIMONIALS);
      return NextResponse.json(DEFAULT_TESTIMONIALS);
    }
    return NextResponse.json(data);
  } catch {
    return NextResponse.json(DEFAULT_TESTIMONIALS);
  }
}
