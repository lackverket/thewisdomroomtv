import IndexNavigation from "@/components/IndexNavigation"
import NoContentText from "../[components]/NoContentText"
import PersonalMessageSection from "../[components]/PersonalMessageSection"

const AskAQuestionPage = () => {
  return (
    <>
      <IndexNavigation />
      <div className="flex-1 w-full flex justify-center items-center">
        <PersonalMessageSection />
      </div>
    </>
  )
}

export default AskAQuestionPage