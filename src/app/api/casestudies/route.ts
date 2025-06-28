// app/api/casestudies/route.ts
import CaseStudy from "@/models/CaseStudy";
import { slugify } from "@/lib/slugify";
import connectDB from "@/lib/dbConnect";
import { verifyToken } from "@/lib/auth";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const authHeader = req.headers.get("authorization");

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401 });
  }

  const token = authHeader.split(" ")[1];
  const decoded = verifyToken(token);

  if (!decoded) {
    return new Response(JSON.stringify({ error: "Invalid token" }), { status: 401 });
  }

  await connectDB();
  const { title, subtitle, description, image } = await req.json();
  const link = slugify(title);

  const newCaseStudy = await CaseStudy.create({
    title,
    subtitle,
    description,
    image,
    link,
  });

  return new Response(JSON.stringify(newCaseStudy), { status: 201 });
}


export async function GET() {
  try {
    await connectDB();
    const caseStudies = await CaseStudy.find().sort({ createdAt: -1 });
    return NextResponse.json(caseStudies);
  } catch (err) {
    console.error("Failed to fetch case studies:", err);
    return NextResponse.json({ error: "Failed to fetch case studies" }, { status: 500 });
  }
}