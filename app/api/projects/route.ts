import { NextResponse } from "next/server";
import { getProjects } from "@/lib/redis";

export async function GET() {
  try {
    const data = await getProjects();
    return NextResponse.json(data);
  } catch {
    return NextResponse.json([], { status: 500 });
  }
}
