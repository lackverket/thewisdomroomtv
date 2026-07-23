import { MoveRight } from "lucide-react";
import Link from "next/link";

const YouTubeVideoSection = () => {
  return (
    <section className="w-full px-5 py-2 my-3 bg-amber-50/90">
      <div className="mb-4">
        <Link
          href="/main/videos"
          className="flex justify-between items-center pr-3 mt-2 mb-4"
        >
          <p className="font-bold text-[#222] text-xl font-hanken">Videos</p>
          <div>
            <MoveRight />
          </div>
        </Link>
        <div className="w-full overflow-x-auto md:overflow-visible">
          <div className="flex gap-4 snap-x snap-mandatory md:flex-wrap">
            <iframe
              className="rounded-xl"
              width="500"
              height="315"
              src="https://www.youtube.com/embed/dgF0otWAQrc?si=LIUVS5JlC2EFAj7K"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
            <iframe
              className="rounded-xl"
              width="500"
              height="315"
              src="https://www.youtube.com/embed/2D7HJ0M_gD4?si=KGZH3Aq20K-94sdo"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
            <iframe
              className="rounded-xl"
              width="500"
              height="315"
              src="https://www.youtube.com/embed/d-OXzLRtd8M?si=illVUqNCIQSpNevu"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
            <iframe
              className="rounded-xl"
              width="500"
              height="315"
              src="https://www.youtube.com/embed/filirSvXOYU?si=5PbcY1ilKYPCNdA-"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
            <div className="px-20 h-80 flex justify-center items-center md:hidden">
              <Link href="/main/videos" className="py-10 px-10 rounded-full bg-gray-100 flex justify-center items-center shadow-lg">
                <MoveRight className="size-7 text-[#777]" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YouTubeVideoSection;
