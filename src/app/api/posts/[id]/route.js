import connect from "@/utils/db"
import Post from "@/modal/Post"
import { NextResponse } from "next/server"

export const DELETE = async(request,{params}) =>{
    const {id}= params
    try{
        await connect()
        await Post.findByIdAndDelete(id)

        return new NextResponse("Post has been created", {
            status:200
        })

    }catch(err){
        return new NextResponse("Failed to delete", {
            status:520
        })
    }
}