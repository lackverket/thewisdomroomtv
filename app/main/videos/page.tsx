import React from "react";
import NoContentText from "../[components]/NoContentText";
import IndexNavigation from "@/components/IndexNavigation";
import PersonalMessageSection from "../[components]/PersonalMessageSection";

const VideosPage = () => {
  return (
    <>
      <IndexNavigation />
      <div className="flex-1 w-full flex justify-center items-center">
        <PersonalMessageSection />
      </div>
    </>
  );
};

export default VideosPage;
