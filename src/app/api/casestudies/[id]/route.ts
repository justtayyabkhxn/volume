import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/dbConnect";
import CaseStudy from "@/models/CaseStudy";
import { slugify } from "@/lib/slugify";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";

// Use env-stored secret
const JWT_SECRET = process.env.JWT_SECRET || "default_secret";

// Helper to verify token (only check for admin email)
function isAuthorized(req: NextRequest): boolean {
  const authHeader = req.headers.get("authorization");
  if (!authHeader?.startsWith("Bearer ")) return false;

  const token = authHeader.split(" ")[1];
  try {
    const decoded = jwt.verify(token, JWT_SECRET) as { email: string };
    return decoded.email === "admin@volume.in";
  } catch {
    return false;
  }
}

// Extract ObjectId from URL
function extractId(req: NextRequest): string | null {
  return req.nextUrl.pathname.split("/").pop() || null;
}

//  PATCH
function isValidObjectId(id: string) {
  return mongoose.Types.ObjectId.isValid(id);
}

export async function PATCH(req: NextRequest) {
  if (!isAuthorized(req))
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const id = extractId(req);

  if (!id || !isValidObjectId(id))
    return NextResponse.json({ error: "Invalid ID format" }, { status: 400 });

  await connectDB();
  const updates = await req.json();

  try {
    const updated = await CaseStudy.findByIdAndUpdate(id, updates, { new: true });
    if (!updated)
      return NextResponse.json({ error: "Case study not found" }, { status: 404 });

    return NextResponse.json({ success: true, caseStudy: updated }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Server error", detail: (error as Error).message },
      { status: 500 }
    );
  }
}

//  DELETE
export async function DELETE(req: NextRequest) {
  if (!isAuthorized(req)) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const id = extractId(req);
  if (!id) return NextResponse.json({ error: "Missing ID" }, { status: 400 });

  await connectDB();

  const deleted = await CaseStudy.findByIdAndDelete(id);
  if (!deleted) return NextResponse.json({ error: "Not found" }, { status: 404 });

  return NextResponse.json({ success: true, message: "Deleted" }, { status: 200 });
}

// GET
export async function GET(req: NextRequest) {
  if (!isAuthorized(req)) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const id = extractId(req);
  if (!id) return NextResponse.json({ error: "Missing ID" }, { status: 400 });

  await connectDB();
  const caseStudy = await CaseStudy.findById(id);
  if (!caseStudy) return NextResponse.json({ error: "Not found" }, { status: 404 });

  return NextResponse.json({ success: true, caseStudy }, { status: 200 });
}

//  PUT
export async function PUT(req: NextRequest) {
  if (!isAuthorized(req))
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const id = extractId(req);
  if (!id || !isValidObjectId(id))
    return NextResponse.json({ error: "Invalid ID format" }, { status: 400 });

  const { title, subtitle, description, image } = await req.json();
  const link = slugify(title);

  await connectDB();

  try {
    const updated = await CaseStudy.findByIdAndUpdate(
      id,
      { title, subtitle, description, image, link },
      { new: true }
    );

    if (!updated)
      return NextResponse.json({ error: "Case study not found" }, { status: 404 });

    return NextResponse.json({ success: true, caseStudy: updated }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Server error", detail: (error as Error).message },
      { status: 500 }
    );
  }
}
