import { NextResponse } from "next/server";
import redis, { DEFAULT_PROJECTS } from "@/lib/redis";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const data = await redis.get("projects");
    if (!data || !Array.isArray(data) || data.length === 0) {
      await redis.set("projects", DEFAULT_PROJECTS);
      return NextResponse.json(DEFAULT_PROJECTS);
    }
    return NextResponse.json(data);
  } catch {
    return NextResponse.json(DEFAULT_PROJECTS);
  }
}
