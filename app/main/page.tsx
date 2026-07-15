import MainGreeting from "./[components]/MainGreeting";
import MainTeachings from "./[components]/MainTeachings";
import MainPopularQuestions from "./[components]/MainPopularQuestions";
import IndexNavigation from "@/components/IndexNavigation";
import AboutUsSection from "./[components]/AboutUsSection";
import MainTopicsSection from "./[components]/MainTopicsSection";
import YouTubeVideoSection from "./[components]/YouTubeVideoSection";

const MainPage = () => {
  return (
    <>
    <IndexNavigation />
      <section className="max-w-290 mx-auto pb-8 w-full min-h-screen flex flex-col overflow-x-hidden">
      <MainTopicsSection />
      <div className="max-w-290 mx-auto w-full">
        {/* <MainGreeting /> */}
        <MainTeachings />
        <YouTubeVideoSection />
        <MainPopularQuestions />
        <AboutUsSection />
        
      </div>
    </section>
    </>
  );
};

export default MainPage;
