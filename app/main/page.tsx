import MainGreeting from "./[components]/MainGreeting";
import { WordSection } from "./[components]/WordSection";
import MainTeachings from "./[components]/MainTeachings";
import MainPopularQuestions from "./[components]/MainPopularQuestions";
import AskAQuestionSection from "./[components]/AskAQuestionSection";
import MainNavigation from "@/components/MainNavigation";
import BigTextSection from "./[components]/BigTextSection";

const MainPage = () => {
  return (
    <>
      <MainNavigation />
      <div className="max-w-200 mx-auto pb-8 w-full min-h-screen flex flex-col overflow-x-hidden">
        <MainGreeting />
        <BigTextSection />
        <MainTeachings />
        <MainPopularQuestions />
        <AskAQuestionSection />
        {/* <WordSection /> */}
      </div>
    </>
  );
};

export default MainPage;
