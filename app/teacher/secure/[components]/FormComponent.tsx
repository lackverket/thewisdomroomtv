"use client";

import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { useRouter, redirect } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { UserAuth } from "@/app/context/auth-context";

const logTeacherIn = () => {
  const adminStatus = {
    isAdmin: true,
  };

  localStorage.setItem("adminStatus", JSON.stringify(adminStatus));
};

const FormComponent = () => {
  const router = useRouter();
  const passwordInputRef = useRef<HTMLInputElement | null>(null);
  const [passwordError, setPasswordError] = useState({
    errorState: false,
    errorMessage: "",
  });
  const { user, isLoading } = UserAuth();

  if (!user && !isLoading) {
      redirect("/login");
    }


  useEffect(() => {
    const userIsAdmin = JSON.parse(
      localStorage.getItem("adminStatus") ?? "false",
    );

    if (userIsAdmin) {
      router.push("/teacher");
    }
  }, []);

  const onClickHandler = () => {
    if (
      passwordInputRef.current?.value ===
      process.env.NEXT_PUBLIC_TEACHER_ACCESS_PASSWORD
    ) {
      logTeacherIn();
      router.push("/teacher");
    } else {
      setPasswordError({
        errorState: true,
        errorMessage: "Incorrect Password",
      });
    }
  };

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
        <FieldDescription className="font-bold text-xl flex justify-center items-center">
          Login with The Password
        </FieldDescription>

        <Field>
          <FieldLabel htmlFor="password">Password</FieldLabel>
          <Input
            id="password"
            type="password"
            placeholder="••••••••"
            ref={passwordInputRef}
          />
        </Field>

        {passwordError.errorState && (
          <FieldDescription className="text-destructive">
            {passwordError.errorMessage}
          </FieldDescription>
        )}

        <Field>
          <Button className="w-full" onClick={onClickHandler}>
            Submit
          </Button>
        </Field>
      </FieldGroup>
    </FieldSet>
  );
};

export default FormComponent;
