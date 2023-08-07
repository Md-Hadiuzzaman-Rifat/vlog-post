import Post from "@/modal/Post"
import connect from "@/utils/db"
import { NextResponse } from "next/server"

export const GET= async(request)=>{

  const url = new URL(request.url);
  const username = url.searchParams.get("username");

  try{
    await connect()
    const posts= await Post.find( username && {username}) 
    return new NextResponse(JSON.stringify(posts),{
      status:202
    })

  }catch(err){
    return new NextResponse("Database Error", {
      status:500
    })
  }
}

export const POST = async(request)=>{
  const body= await request.json()
  console.log(body);
  const newPost= new Post(body)
  try{
    connect()
    newPost.save()
    return new NextResponse("Post has been created", {
      status: 202
    })
  }catch(err){
    return new NextResponse("Failed to create post", {
      status:500
    })
  }
}
