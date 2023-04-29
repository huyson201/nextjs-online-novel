import { NextResponse } from "next/server";
import createErrorResponse from "../../common/createErrorResponse";
import prisma from "@/prisma/prismaClient";

interface Props {
    params: {
        id: string
    }
}
export async function GET(request: Request, { params }: Props) {
    try {
        if (!Number(params.id)) {
            return createErrorResponse("id must be a number.", 400)
        }

        const chapter = await prisma.chapter.findUnique({
            where: {
                id: +params.id
            }
        })
        return NextResponse.json(chapter, { status: 200 })
    } catch (error) {
        return createErrorResponse(error)
    }
}