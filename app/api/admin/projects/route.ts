import { NextRequest, NextResponse } from "next/server";
import { verifyToken } from "@/lib/auth";
import { getProjects, setProjects, Project } from "@/lib/redis";

function authCheck(req: NextRequest): boolean {
  const token = req.cookies.get("admin-token")?.value;
  return !!token;
}

export async function GET(req: NextRequest) {
  if (!authCheck(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const data = await getProjects();
  return NextResponse.json(data);
}

export async function POST(req: NextRequest) {
  if (!authCheck(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const incoming: Project[] = await req.json();
  await setProjects(incoming);
  return NextResponse.json({ success: true });
}
