"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"

const AuthNavigation = () => {
    

  return (
    <nav className="w-full px-2 py-2  h-[20%] border-b border-b-gray-300">
        <ul className="sm:max-2xl:max-w-[80%] m-auto flex justify-between items-center ">
            <li>
                <p className="font-bold text-[1.2rem]">The Wisdom Room</p>
            </li>
            <li className="flex justify-between items-center gap-5">
                <Link href="/signup"><Button>Sign up</Button></Link>
                <Link href="/login"><Button variant="outline" className="border-zinc-950 text-zinc-950">Login</Button></Link>
            </li>
        </ul>
    </nav>
  )
}

export default AuthNavigation