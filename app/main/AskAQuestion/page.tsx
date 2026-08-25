"use client";

import IndexNavigation from "@/components/IndexNavigation";
import NoContentText from "../[components]/NoContentText";
import PersonalMessageSection from "../[components]/PersonalMessageSection";
import { UserAuth } from "@/app/context/auth-context";
import { useRouter } from "next/navigation";
import { AdminLoader } from "../[components]/LoadingComp";
import { useEffect } from "react";

const AskAQuestionPage = () => {
  const { user, isLoading } = UserAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user && !isLoading) {
      router.replace("/login");
    }
  }, [user, router, isLoading]);

  if (isLoading || !user) {
    return <AdminLoader />;
  }

  return (
    <>
      <IndexNavigation />
      <div className="flex-1 w-full flex justify-center items-center">
        <PersonalMessageSection />
      </div>
    </>
  );
};

export default AskAQuestionPage;
