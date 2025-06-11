import { NextResponse } from "next/server";
import { PrismaClient } from "@repo/db/client";

const client = new PrismaClient();

export const GET = async () => {
  await client.create({
    data: {
      name: "dfsfd",
      email: "fsfe",
    },
  });

  return NextResponse.json({
    message: "Done",
  });
};
