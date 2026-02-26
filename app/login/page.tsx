import AuthNavigation from "../../components/AuthNavigation"
import LoginSection from "./[component]/LoginSection"


const Login = () => {
  return (
    <section className="min-h-screen flex flex-col">
        <AuthNavigation />
        <div className="flex-1 w-full flex justify-center items-center">
            <LoginSection />
        </div>
    </section>
  )
}

export default Login