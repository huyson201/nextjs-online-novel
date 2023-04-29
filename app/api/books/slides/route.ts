import { NextResponse } from "next/server";
import createErrorResponse from "../../common/createErrorResponse";
import prisma from '@/prisma/prismaClient'


export async function GET(request: Request) {
    try {

        const slides = await prisma.slider.findMany({
            include: {
                book: {
                    select: {
                        id: true,
                        slug: true
                    }
                }
            }
        })

        return NextResponse.json(slides, { status: 200 })
    } catch (error) {
        return createErrorResponse(error)
    }
}

