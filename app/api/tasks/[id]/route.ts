import { NextResponse } from "next/server";
import prisma from "@/app/utils/connect"
import { auth } from "@clerk/nextjs";
export async function DELETE(req:Request,{params}:{params:{id:string}}){
    try {
        const {userId} =auth();
        const {id}=params;
        if(!userId){
            return NextResponse.json({error:"Unauthorized"})}
            const task=await prisma.task.delete({
                where:{
                    id,},});
        return NextResponse.json(task);

        
    } catch (error) {
        console.log("ERROR IN DELETING TASK",error);
        return NextResponse.json({error:"error in deleting the task"})
        }
    }