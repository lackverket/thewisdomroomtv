import React from "react";
import NoContentText from "../[components]/NoContentText";
import IndexNavigation from "@/components/IndexNavigation";
import PersonalMessageSection from "../[components]/PersonalMessageSection";

const VideosPage = () => {
  return (
    <>
      <IndexNavigation />
      <div className="flex-1 w-full flex justify-center items-center font-fira bg-amber-50/90">
       <div className="flex flex-col space-y-5 my-5 py-5">
        <h2 className="w-full flex justify-center items-center text-3xl font-bold">Videos</h2>
         <div className="max-md:flex max-md:flex-col md:grid md:grid-cols-2 gap-4 justify-center items-center md:max-lg:px-4">
          <iframe
            className="rounded-xl max-md:w-[90vw] max-md:h-[40vh] md:max-lg:w-[45vw] md:max-lg:h-[40vh]"
            width="500"
            height="315"
            src="https://www.youtube.com/embed/dgF0otWAQrc?si=LIUVS5JlC2EFAj7K"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
          <iframe
            className="rounded-xl max-md:w-[90vw] max-md:h-[40vh] md:max-lg:w-[45vw] md:max-lg:h-[40vh]"
            width="500"
            height="315"
            src="https://www.youtube.com/embed/2D7HJ0M_gD4?si=KGZH3Aq20K-94sdo"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
          <iframe
            className="rounded-xl max-md:w-[90vw] max-md:h-[40vh] md:max-lg:w-[45vw] md:max-lg:h-[40vh]"
            width="500"
            height="315"
            src="https://www.youtube.com/embed/d-OXzLRtd8M?si=illVUqNCIQSpNevu"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
          <iframe
           className="rounded-xl max-md:w-[90vw] max-md:h-[40vh] md:max-lg:w-[45vw] md:max-lg:h-[40vh]"
            width="500"
            height="315"
            src="https://www.youtube.com/embed/filirSvXOYU?si=5PbcY1ilKYPCNdA-"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
         
        </div>
       </div>
      </div>
    </>
  );
};

export default VideosPage;
