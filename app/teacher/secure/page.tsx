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

import TeacherNavigation from "@/components/TeacherNavigation"
import FormComponent from "./[components]/FormComponent"


const TeacherLogin = () => {
  return (
    <main className="min-h-screen w-full flex flex-col">
        <TeacherNavigation />
        <section className="flex-1 w-full flex justify-center items-center px-3">
            <FormComponent />
        </section>
    </main>
  )
}

export default TeacherLogin




