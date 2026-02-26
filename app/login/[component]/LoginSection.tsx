"use client"

import { Button } from "@/components/ui/button"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import { UserAuth } from "@/app/context/auth-context";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

const LoginSection = () => {
  const { user, googleSignIn, logOut, emailPasswordSignIn } = UserAuth();
   const emailInputRef = useRef<HTMLInputElement | null>(null)
    const passwordInputRef = useRef<HTMLInputElement | null>(null)
    const router = useRouter();
    console.log(user?.displayName);
  
    const handleSignIn = async () => {
      try {
        await googleSignIn();
      } catch (error) {
        console.log(error);
      }
    };

    const emailPasswordSignInHandler = async () => {
   if (!emailInputRef.current?.value || !passwordInputRef.current?.value) return

    try {
      const response = await emailPasswordSignIn(emailInputRef.current?.value, passwordInputRef.current?.value)
      console.log(response)
      emailInputRef.current.value = ""
      passwordInputRef.current.value = ""
    } catch(error: any) {
      console.log(error.message)
    }
  }

  
    useEffect(() => {
      if (user) {
        router.push("/main")
      }
    }, [user, router])
  

  return (
    <FieldSet
      className="
        w-full
        max-w-sm sm:max-w-md
        mx-auto
        px-4 sm:px-6
        py-8 sm:py-10
        rounded-lg
        shadow-2xl
        bg-background
      "
    >
      <FieldGroup className="space-y-2">
        <Field>
          <FieldLabel htmlFor="email">Email</FieldLabel>
          <Input
            id="email"
            type="email"
            placeholder="example@gmail.com"
            ref={emailInputRef}
          />
          <FieldDescription>
            Choose a unique email for your account.
          </FieldDescription>
        </Field>

        <Field>
          <FieldLabel htmlFor="password">Password</FieldLabel>
          <Input
            id="password"
            type="password"
            placeholder="••••••••"
            ref={passwordInputRef}
          />
          <FieldDescription>
            Must be at least 8 characters long.
          </FieldDescription>
        </Field>

        <Field>
          <Button className="w-full" onClick={emailPasswordSignInHandler}>
            Submit
          </Button>
        </Field>

        <Field>
          <Button
            className="w-full flex items-center gap-2"
            onClick={handleSignIn}
          >
            <Image
              src="/search.png"
              width={16}
              height={16}
              alt="Google Logo"
            />
            <span>Continue with Google</span>
          </Button>
        </Field>
      </FieldGroup>
    </FieldSet>
  )
}

export default LoginSection
