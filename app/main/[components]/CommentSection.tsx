"use client"

import { Separator } from "@/components/ui/separator";
import React, { useEffect, useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { SendHorizonal, ThumbsDown, ThumbsUp, UserRound } from "lucide-react";
import { ButtonGroupSeparator } from "@/components/ui/button-group";
import CommentItem from "./CommentItem";
import { UserAuth } from "@/app/context/auth-context";
import { addComment, getComments } from "@/actions/comment-actions";
import { redirect, useRouter } from "next/navigation";

interface UserComment {
    userid: string | undefined | null;
    name: string | undefined | null;
    usercomment: string;
    createdAt: string;
}


const CommentSection = ({ teachingId }: { teachingId: string }) => {
  const { user } = UserAuth();
  const router = useRouter()
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [userComments, setUserComments] = useState<UserComment[] | []>([])
  const [clientCommentArr, setClientCommentArr] = useState<UserComment[] | []>([])


  const onPostComment = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
     if (!user) {
      setIsOpen(true)
      return 
    }

    const formData = new FormData(e.currentTarget);
    const commentValue = formData.get("comment") as string;
    const form = e.currentTarget;
    const currentDate = new Date();
    const commentData = {
      userid: user?.uid,
      name: user?.displayName,
      usercomment: commentValue,
      createdAt: currentDate.toISOString(),
    };
    setClientCommentArr((prevState) => {
      return [...prevState, commentData]
    })

    await addComment(teachingId, commentData);
    form.reset();
  };

  const sendToLogin = () => {
    router.push("/login")
  }

  useEffect(() => {
    const getAllComments = async () => {
      try {
        const response = await getComments(teachingId)
        setUserComments(response.reverse())
      } catch(error) {
        console.log(error)
      }
    }

    getAllComments()
  }, [clientCommentArr, teachingId])

  return (
    <section className="w-full flex flex-col items-start">
      <div className="w-full flex flex-col justify-between items-start mb-3">
        <p className="w-full flex gap-3 font-bold text-[1.2rem] text-[#333]">
          <span className="">Questions / Comments</span>{" "}
          <span className="">{`(${userComments.length})`}</span>
        </p>
        <div className="w-full"></div>
      </div>
      <div className="w-full flex flex-col gap-5 items-start sm:px-5 my-2">
        <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Login to add comments</AlertDialogTitle>
              <AlertDialogDescription>
                Quickly login or register to add a comment
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogAction onClick={sendToLogin}>
                Submit
              </AlertDialogAction>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
        <form
          onSubmit={onPostComment}
          className="w-full flex justify-between items-center"
        >
          <div className="bg-gray-400 rounded-full px-3 py-3 border">
            <UserRound />
          </div>
          <input
            type="text"
            className="block w-[60%] sm:w-[80%] border-b-2 border-[#333] outline-none"
            placeholder="leave a comment"
            name="comment"
          />

          <Button className="sm:hidden hover:bg-black/25 transition-all duration-75 ease-initial">
            <SendHorizonal />
          </Button>
          <Button className="hidden sm:block w-[10%] hover:bg-black/25 transition-all duration-75 ease-initial">
            Post
          </Button>
        </form>
        <div className="w-full flex flex-col justify-between gap-3 items-start sm:px-5 px-1">
          {userComments?.map((item) => (
             <CommentItem key={Math.random()} {...item}/>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommentSection;
