"use client";

import { UserAuth } from "@/app/context/auth-context";
import AboutUsSection from "@/app/main/[components]/AboutUsSection";
import AskAQuestionSection from "@/app/main/[components]/AskAQuestionSection";
import MainPopularQuestions from "@/app/main/[components]/MainPopularQuestions";
import MainTeachings from "@/app/main/[components]/MainTeachings";
import MainTopicsSection from "@/app/main/[components]/MainTopicsSection";
import { WordSection } from "@/app/main/[components]/WordSection";
import YouTubeVideoSection from "@/app/main/[components]/YouTubeVideoSection";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const MainPageContent = () => {
  const { user } = UserAuth();
  const router = useRouter();
  console.log(user);

  return (
    <section className="max-w-290 mx-auto pb-8 w-full min-h-screen flex flex-col overflow-x-hidden">
      <MainTopicsSection />
      <div className="max-w-290 mx-auto w-full">
        <MainTeachings />
        <YouTubeVideoSection />
        <MainPopularQuestions />
        <AboutUsSection />
        
      </div>
    </section>
  );
};

export default MainPageContent;
