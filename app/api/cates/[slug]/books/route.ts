import { NextResponse } from "next/server";
import prisma from '@/prisma/prismaClient'
import createErrorResponse from "@/app/api/common/createErrorResponse";

interface Props {
    params: {
        slug: string
    }
}
export async function GET(request: Request, { params }: Props) {
    try {
        const cate = await prisma.category.findUnique({
            where: {
                slug: params.slug
            },
            include: {
                books: true
            }
        })
        return NextResponse.json(cate?.books || [], { status: 200 })
    } catch (error) {
        return createErrorResponse(error)
    }
}