import Image from "next/image";
import Link from "next/link";
import React from "react";
const AboutUsSection = () => {
  return (
    <section className="mt-5 mb-10 py-5 px-7">
      <div className="flex items-center gap-4">
        <div className="flex flex-col gap-3 w-full max-w-2xl">
          <div className="relative w-full max-w-2xl aspect-square">
            <Image
              src="/icon.png"
              alt="Hero image"
              fill
              className="object-contain rounded-full ring-1 ring-offset-4"
              sizes="(max-width: 640px) 192px,
                (max-width: 768px) 256px,
                (max-width: 1024px) 384px,
                576px"
              priority
            />
          </div>
          <div className="font-bold text-[#333] font-fira w-full flex justify-center items-center">
            Apostle Abraham
          </div>
        </div>

        <div className="flex flex-col gap-3 font-manrope">
          <div className="font-fraunces  font-bold text-[1.1rem] underline underline-offset-4">
            TheWisdomRoom
          </div>
          <div className="text-[#555] max-sm:text-[0.6rem] line-clamp-3 relative">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit
            voluptates nulla voluptatibus accusamus porro nam. Eos provident
            inventore recusandae laboriosam maiores amet! Aspernatur, rerum
            tempore aperiam vero illo quia laborum repudiandae molestiae
            consectetur reprehenderit accusantium ipsum perferendis quidem harum
            amet facere fugiat, soluta ad architecto quisquam recusandae,
            delectus qui! Sit laudantium delectus eos at dicta laborum assumenda
            blanditiis pariatur provident voluptas maxime aperiam id voluptatum
            temporibus, perferendis voluptatem laboriosam nobis?
            <div className="absolute bottom-0 right-0 px-2 bg-gray-50/50 font-bold font-hanken">
              Read more...
            </div>
          </div>
          <div className="flex justify-start items-center gap-6">
            <Link href="">
              <Image
                src="/fbsvg.svg"
                width={40}
                height={40}
                alt="facebook svg"
              />
            </Link>
            <Link href="">
              <Image
                src="/igsvg.svg"
                width={35}
                height={35}
                alt="instagram svg"
              />{" "}
            </Link>
            <Link href="">
              <Image src="/xsvg.svg" width={35} height={35} alt="X svg" />
            </Link>
            <Link href="">
              <Image
                src="/ytsvg.svg"
                width={35}
                height={35}
                alt="youtube svg"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
