import createErrorResponse from "@/app/api/common/createErrorResponse"
import prisma from "@/prisma/prismaClient"
import { NextResponse } from "next/server"

interface Props {
    params: {
        id: string
    }
}


export async function GET(request: Request, { params }: Props) {
    const { searchParams } = new URL(request.url)
    const include = searchParams.get("include")

    try {
        let chapter = await prisma.chapter.findMany({
            where: {
                bookId: +params.id
            },
            select: {
                chapterNumber: true,
                title: true,
                bookId: true,
                createdAt: true,
                updatedAt: true,
                id: true,
                content: include === "content"
            },
            orderBy: {
                chapterNumber: "desc"
            },
            take: 1
        })

        return NextResponse.json(chapter.length > 0 ? chapter[0] : null, { status: 200 })
    } catch (error) {
        return createErrorResponse(error)
    }
}