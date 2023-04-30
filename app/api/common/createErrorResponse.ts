import { NextResponse } from "next/server";

function createErrorResponse(error: any, status: number = 500) {
    return NextResponse.json({
        error: error
    }, { status })
}

export default createErrorResponse

