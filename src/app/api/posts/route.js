import { NextResponse } from "next/server"

export const POST=async(request)=>{
    try{
        console.log(request.json());
        return new NextResponse("request");
    }catch(err){
        console.log(err);
    }
}
