import { SignJWT, jwtVerify } from "jose";

const SECRET = new TextEncoder().encode(process.env.ADMIN_PASSWORD || "hashim-tech-admin-2024");

export async function createToken(password: string): Promise<string | null> {
  if (password !== process.env.ADMIN_PASSWORD) return null;
  return new SignJWT({ admin: true })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(SECRET);
}

export async function verifyToken(token: string): Promise<boolean> {
  try {
    await jwtVerify(token, SECRET);
    return true;
  } catch {
    return false;
  }
}
