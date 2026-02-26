"use client"

import { useEffect, useState } from "react"
import MainNavMenu from "./MainNavMenu"
import { Menu } from "lucide-react"
import { UserAuth } from "@/app/context/auth-context"

const TeacherNavigation = () => {
    const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false)
    const { user, isLoading, verifyUserStatus } = UserAuth()

    const onCloseMenu = () => {
        setMenuIsOpen(false)
    }

    const onOpenMenu = () => {
        setMenuIsOpen(true)
    }

    useEffect(() => {
        verifyUserStatus()
    }, [user, isLoading])

  return (
    <nav className="w-full px-2 py-2  h-[20%] border-b border-b-gray-300">
        <ul className="sm:max-2xl:max-w-[80%] m-auto flex justify-between items-center ">
            <li>
                <div className="font-bold text-[1.2rem] flex justify-between items-center gap-5">
                    <span className="md:hidden" onClick={onOpenMenu}><Menu /></span><span>The Wisdom Room</span>
                </div>
            </li>
        </ul>

        <MainNavMenu isOpen={menuIsOpen} onClose={onCloseMenu}/>
    </nav>
  )
}

export default TeacherNavigation