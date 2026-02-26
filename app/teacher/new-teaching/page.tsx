"use client"

import TeacherNavigation from "@/components/TeacherNavigation"
import AddTeachingFirst from "./[components]/AddTeachingFirst"
import MainFooter from "@/app/main/[components]/MainFooter"
import { Button } from "@/components/ui/button"
import AddTeachingSecond from "./[components]/AddTeachingSecond"

import { useState, useEffect } from "react"
import { UserAuth } from "@/app/context/auth-context"
import { getAllTeachings } from "@/actions/teaching-actions"

const NewTeaching = () => {
    const { verifyTeacherStatus } = UserAuth()

  const [firstPageEnded, setFirstPageEnded] = useState<Boolean>(false)
  
  const pageSwitchHandler = (value: Boolean) => {
    setFirstPageEnded(value)
  }

  
  useEffect(() => {
      verifyTeacherStatus()
    }, [])
  return (
    <main className="min-h-screen flex flex-col items-center gap-10">
      <TeacherNavigation />
      <section className="relative flex-1 w-full flex flex-col items-center">
        <h1 className="w-full flex justify-center items-center font-bold text-2xl text-[#555] mb-5">
          Add a New Teaching
        </h1>
        <section className="w-full flex justify-center items-center">
          <div className="px-4 flex justify-between gap-8">
            <Button variant="outline" className={`rounded-lg bg-gray-300 ${firstPageEnded ? 'bg-green-400 text-white' : 'text-gray-500'}`}>1</Button>
            <Button variant="outline" className="rounded-lg bg-gray-300 text-gray-500" >2</Button>
          </div>
        </section>
        <AddTeachingFirst switchPage={pageSwitchHandler} firstPageEnded={firstPageEnded} />
        <AddTeachingSecond switchPage={pageSwitchHandler} firstPageEnded={firstPageEnded} />
      </section>
      <MainFooter />
    </main>
  )
}

export default NewTeaching