import Post from "@/modal/Post"
import connect from "@/utils/db"
import { NextResponse } from "next/server"

export const GET= async()=>{
  try{
    await connect()
    const posts= await Post.find() 
    
    return new NextResponse(JSON.stringify(posts),{
      status:202
    })

  }catch(err){
    return new NextResponse("Database Error", {
      status:500
    })
  }
}