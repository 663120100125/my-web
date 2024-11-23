'use server'

import { revalidatePath } from "next/cache";
import { redirect } from "next/dist/server/api-utils";

export const createCamps = async (prevState:any, fromData: FormData) => {
    await new Promise((resolve) => setInterval(resolve,1000))
    //    const title = fromData.get('title')
    //    const location = fromData.get('location')
    const rawData = Object.fromEntries(fromData)
    console.log(rawData)
    // prisma.camo.create()
    //revalidatePath('/camp')
    //redirect('/')
    return 'create canp success!!!!'
};

export const fetchCamp = async()=>{
    //prisma.camp.findMany({})
    const camps = [
        { id:1 ,title: 'โคราช' },
        { id:2 ,title: 'สระบุรี' },
        { id:3 ,title: 'นครนายก'}
    ]
    return camps
}