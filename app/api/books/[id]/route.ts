import prisma from "@/prisma/prismaClient"
import createErrorResponse from "../../common/createErrorResponse"
import { NextResponse } from "next/server"

interface Props {
    params: {
        id: string
    }
}
export async function GET(request: Request, { params }: Props) {
    if (!Number(params.id)) {
        return createErrorResponse("id must be number", 400)
    }
    try {
        const book = await prisma.book.findUnique({
            where: { id: +params.id },
            include: {
                categories: {
                    select: {
                        id: true,
                        name: true,
                        slug: true
                    }
                }
            }
        })

        return NextResponse.json(book, { status: 200 })
    } catch (error) {
        return createErrorResponse(error)
    }
}