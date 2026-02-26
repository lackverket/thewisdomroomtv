"use client";

import { useEffect, useState } from "react";
import { getTeachingQty } from "@/actions/teaching-actions";
import Link from "next/link";
import ViewTeachingsItem from "./(components)/ViewTeachingsItem";

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

const ViewTeachings = () => {
  const [teachings, setTeachings] = useState<particularTeachingItem[] | undefined>(undefined);

  useEffect(() => {
    const getTeaching = async () => {
      const getfiveTeachings = await getTeachingQty(5);
      setTeachings(getfiveTeachings);
    };

    getTeaching();
  }, []);
  return (
    <section className="w-full flex-1 px-2 py-4 max-w-[800px] mx-auto">
      {/* Scroll wrapper */}
      <div className="w-full my-2">
        <div
          className="
            flex flex-col gap-4 px-1 pb-6
            w-full items-center
            sm:grid sm:grid-cols-2 sm:gap-6
          "
        >
          {teachings?.map((item) => (
            <ViewTeachingsItem key={item.id} id={item.id} title={item.title} description={item.description} mainContent={item.mainContent} bannerColour={item.bannerColour} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ViewTeachings;
