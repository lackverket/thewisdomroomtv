import IndexNavigation from "@/components/IndexNavigation";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const AboutUsPage = () => {
  return (
    <>
      <IndexNavigation />
      <div className="flex-1 max-w-290 max-2xl:px-5 mx-auto w-full flex flex-col gap-5 items-center font-manrope">
        <div className="w-full flex flex-col gap-5 my-5">
          <h1 className="w-full text-center text-3xl font-bold font-fraunces">
            TheWisdomRoom
          </h1>
          <div className="flex justify-between items-center md:space-x-8 max-md:flex-col max-md:space-y-8">
            <div className="max-sm:w-60 w-100 max-md:flex max-md:justify-center">
              <Image
                src="/icon.png"
                width="100"
                height="100"
                alt="TheWisdomroom logo"
              />
            </div>
            <div className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              reprehenderit iste, cum deserunt dolorum rem expedita magni nisi
              ducimus ut, excepturi totam dignissimos quam doloremque dolores
              sapiente? Similique, temporibus ut aut asperiores libero quo ullam
              perspiciatis debitis. Veniam, qui molestias molestiae illum nulla
              aspernatur eos obcaecati voluptatem corrupti ipsam tempore, minus
              quaerat earum optio officia culpa labore accusamus ab! Eveniet
              placeat voluptates temporibus impedit reprehenderit itaque cumque
              adipisci voluptate odio!
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6 w-full">
          <h2 className="font-bold text-2xl w-full text-center">Links</h2>
          <div className="w-full my-4 flex flex-col justify-between items-center space-y-7">
            <Link
              href="https://youtube.com/@thewisdomroom?si=E9f7si1zQbI1P0El"
              className="flex justify-center items-center gap-2 px-4 rounded-[2rem] font-bold bg-red-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/ytsvg.svg"
                width={45}
                height={45}
                alt="YouTube svg"
              />
              <div className="text-[#ff0000]">@TheWisdomRoom</div>
            </Link>

            <Link
              href="https://web.facebook.com/Thewisdomroomtv/videos/158231059711080?_rdc=1&_rdr#"
              className="flex justify-center items-center gap-2 px-4 rounded-[2rem] font-bold bg-blue-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/fbsvg.svg"
                width={45}
                height={45}
                alt="facebook svg"
              />
              <div className="text-[#1877F2]">The Wisdom Room</div>
            </Link>

            <Link
              href="https://www.instagram.com/the_wisdom_room_tv?igsh=MTM4cmU4MHByYzV5MQ=="
              className="flex justify-center items-center gap-2 px-4 py-1 rounded-[2rem] font-bold bg-purple-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/igsvg.svg"
                width={40}
                height={40}
                alt="Instagram svg"
              />
              <div className="text-[#962fbf]">
                the_wisdom_room_tv
              </div>
            </Link>

            <Link
              href="https://x.com/God2Evolution?s=20"
              className="flex justify-center items-center gap-2 px-4 rounded-[2rem] font-bold bg-gray-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src="/xsvg.svg" width={45} height={45} alt="X svg" />
              <div className="text-black">@God2Evolution</div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUsPage;
