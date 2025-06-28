// app/api/admin-login/route.ts
import jwt from 'jsonwebtoken';


const JWT_SECRET = process.env.JWT_SECRET || 'secret';

export async function POST(req: Request) {
  const { password } = await req.json();

  if (password === process.env.ADMIN_PASSWORD) {
    const token = jwt.sign(
    {email: "admin@volume.in" },
    JWT_SECRET,
    { expiresIn: '7d' }
  );

    return new Response(JSON.stringify({ token }), { status: 200 });
  }

  return new Response(JSON.stringify({ error: "Invalid credentials" }), { status: 401 });
}
