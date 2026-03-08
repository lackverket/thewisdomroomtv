"use server"

import db from "@/lib/db"
import { Prisma } from "@/lib/generated/prisma/client";
import { revalidatePath } from "next/cache"

interface UserComment {
    userid: string | undefined | null;
    name: string | undefined | null;
    usercomment: string;
    createdAt: string;
}

export const addComment = async(teachingId:string, commentPayload: UserComment) => {
    const teaching = await db.teachings.findUnique({
        where: {
            id: teachingId
        }
    })

    const updatedUsersComment = (teaching?.usersComments as unknown as UserComment[]) ?? []
    updatedUsersComment.push(commentPayload)

    await db.teachings.update({
        where: {
            id: teachingId
        },
        data: {
            usersComments: updatedUsersComment as unknown as Prisma.InputJsonValue, 
        }
    })
}

export const updateComment = async(teachingId: string, userId: string, comment: string) => {
    const teaching = await db.teachings.findUnique({
        where: {
            id: teachingId,
        }
    })

    const usersComments = (teaching?.usersComments as unknown as UserComment[]) ?? []

    const updated = usersComments.map((item: any) => {
        if (item.userid === userId) {
            return {...item, usercomment: comment}
        } else {
            return item
        }
    })
    await db.teachings.update({
        where: {
            id: teachingId
        },
        data: {
            usersComments: updated
        }
    })
}

export const getComments = async (teachingId: string) => {
    const teaching = await db.teachings.findUnique({
        where: {
            id: teachingId,
        }
    })

    const usercomments = (teaching?.usersComments as unknown as UserComment[]) ?? []
    return usercomments
}

export const deleteComment = async(teachingId: string, userId: string) => {
    const teaching = await db.teachings.findUnique({
        where: {
            id: teachingId
        }
    })

    const usercomments = (teaching?.usersComments as unknown as UserComment[]) ?? []

    const updatedComments = usercomments.filter(item => item.userid !== userId)

    await db.teachings.update({
        where: {
            id: teachingId
        },
        data: {
            usersComments: updatedComments as unknown as Prisma.InputJsonValue
        }
    })
}