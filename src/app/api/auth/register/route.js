import connect from "@/utils/db";
import { NextResponse } from "next/server";
import User from "@/modal/User"
import bcrypt from "bcryptjs"
 
export const POST= async(request)=>{
    const {name,email,password}=await request.json()

    await connect()
    const hashedPassword= await bcrypt.hash(password,5)
    const newUser = new User({
        name,email,password:hashedPassword
    })
 
    try{
        await newUser.save()
        return new NextResponse("User Has been created",{
            status:201
        })
    }catch(err){
        return new NextResponse("failed to create",{
            status:500
        })
    }
} 

