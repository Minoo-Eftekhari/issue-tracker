// import { NextRequest, NextResponse } from "next/server";
// import prisma from "@/prisma/client";
// import { createIssueSchema } from "@/app/validationSchemas";

// export async function POST(request: NextRequest) {
//   const body = await request.json();
//   const validation = createIssueSchema.safeParse(body);
//   if (!validation.success)
//     return NextResponse.json(validation.error.format, { status: 400 });

//   const newIssue = prisma.issue.create({
//     data: { title: body.title, description: body.description },
//   });

//   return NextResponse.json(newIssue, { status: 201 });
// }

import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";
import { issueSchema } from "@/app/validationSchemas";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validation = issueSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json(validation.error.format, { status: 400 });
    }

    const newIssue = await prisma.issue.create({
      data: { title: body.title, description: body.description },
    });

    return NextResponse.json(newIssue, { status: 201 });
  } catch (error) {
    console.error("Error creating issue:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}