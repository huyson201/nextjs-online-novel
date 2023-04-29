import { NextResponse } from 'next/server'
import prisma from '../../../../prisma/prismaClient'

export async function GET(request: Request) {

    try {
        const recommends = await prisma.recommend.findMany({
            include: {
                book: {
                    include: {
                        categories: {
                            select: {
                                id: true,
                                name: true,
                                slug: true
                            }
                        }
                    }
                }
            }
        })

        const books = recommends.map(recommend => recommend.book)

        return NextResponse.json(books, { status: 200 })
    } catch (error) {

        return NextResponse.json(error, { status: 500 })
    }
}