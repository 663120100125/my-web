import { fetchCamp } from "@/utils/action"
import { NextResponse } from "next/server"

export const GET = async(req:NextResponse)=> {
    const  {searchParams} = new URL(req.url)
    const search = searchParams.get('serch')
    console.log(search)


    const camps = await fetchCamp()
    //return Response.json({camps})
    return NextResponse.redirect(new URL('/',req.url))
}
