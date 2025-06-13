import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@repo/db/generated/prisma";

const client = new PrismaClient();

export const GET = () => {
  return NextResponse.json({
    message: "hi there",
  });
};

export const POST = async (req: NextRequest, res: NextResponse) => {
  const body = await req.json();
  const { name, email } = body;
  await client.user.create({
    data: {
      name: name,
      email: email,
    },
  });
};
