"use client";

import { MoveRight } from "lucide-react";
import MainTeachingItem from "./MainTeachingItem";
import { useEffect, useState } from "react";
import { getTeachingQty } from "@/actions/teaching-actions";
import Link from "next/link";

interface particularTeachingItem {
  id: string;
  title: string;
  image: string | null;
  description: string;
  mainContent: string;
  comment: string;
  bannerColour: string | null;
  teacherId: string | null;
  teacherName: string | null;
  createdAt: Date;
  updatedAt: Date;
}

const MainTeachings = () => {
  const [teachings, setTeachings] = useState<particularTeachingItem[] | undefined>(undefined);

  useEffect(() => {
    const getTeaching = async () => {
      const getfiveTeachings = await getTeachingQty(5);
      setTeachings(getfiveTeachings);
    };

    getTeaching();
  }, []);
  return (
    <section className="w-full">
      {/* Header */}
      <div className="w-full">
        <Link href="/main/ViewTeachings/" className="flex justify-between items-center px-5 py-3 my-3">
          <p className="font-bold text-[#222] text-xl">Explore Teachings</p>
          <MoveRight />
        </Link>
      </div>

      {/* Scroll wrapper */}
      <div className="w-full overflow-x-auto md:overflow-visible">
        {/* Inner content */}
        <div
          className="
            flex gap-4 px-5 pb-6
            snap-x snap-mandatory
            md:grid md:grid-cols-2 md:gap-6
          "
        >
          {teachings?.map((item) => (
            <MainTeachingItem key={item.id} id={item.id} title={item.title} description={item.description} mainContent={item.mainContent} bannerColour={item.bannerColour} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MainTeachings;
