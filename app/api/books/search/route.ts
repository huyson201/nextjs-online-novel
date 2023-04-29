import { NextResponse } from "next/server"
import createErrorResponse from "../../common/createErrorResponse"
import prisma from "@/prisma/prismaClient"


export async function GET(request: Request) {
    const { searchParams } = new URL(request.url)
    const q = searchParams.get("q")

    if (!q) {
        return NextResponse.json([], { status: 200 })
    }

    try {
        const searchedBooks = await prisma.book.findMany({
            where: {
                title: {
                    search: q
                }
            },
            include: {
                categories: {
                    select: {
                        id: true,
                        slug: true,
                        name: true
                    }
                }
            }
        })

        return NextResponse.json(searchedBooks, { status: 200 })
    } catch (error) {
        console.log(error)
        return createErrorResponse(error)
    }

}