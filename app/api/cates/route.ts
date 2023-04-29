
import prisma from '../../../prisma/prismaClient'
import { NextResponse, NextRequest } from 'next/server'

export async function GET(request: Request) {
    let req = new NextRequest(request.url)
    try {
        let cates = await prisma.category.findMany({
            select: {
                id: true,
                slug: true,
                name: true
            }
        })

        return NextResponse.json(cates, { status: 200 })
    } catch (error) {
        console.log(error)
        return NextResponse.json(error, { status: 500 })
    }
}
