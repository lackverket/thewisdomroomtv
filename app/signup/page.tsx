import AuthNavigation from "@/components/AuthNavigation"
import SignupSection from "./[components]/SignupSection"

const Signup = () => {
  return (
    <section className="min-h-screen flex flex-col">
        <AuthNavigation />
        <div className="flex-1 w-full flex justify-center items-center">
            <SignupSection />
        </div>
    </section>
  )
}

export default Signup