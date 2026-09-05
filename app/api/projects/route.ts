import { NextResponse } from "next/server";
import redis, { DEFAULT_PROJECTS } from "@/lib/redis";

export const dynamic = "force-dynamic";

const DATA_VERSION = 2;

export async function GET() {
  try {
    const version = await redis.get<number>("projects_version");
    const data = await redis.get("projects");
    if (version !== DATA_VERSION || !data || !Array.isArray(data) || data.length === 0) {
      await redis.set("projects_version", DATA_VERSION);
      await redis.set("projects", DEFAULT_PROJECTS);
      return NextResponse.json(DEFAULT_PROJECTS);
    }
    return NextResponse.json(data);
  } catch {
    return NextResponse.json(DEFAULT_PROJECTS);
  }
}
