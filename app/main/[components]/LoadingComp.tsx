import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Spinner } from "@/components/ui/spinner";


export const TeachingSkeletonLoader = () => {
  return (
    <Card className="snap-start w-[230px] shrink-0 md:w-full md:shrink">
      <CardHeader className="my-3">
        <Skeleton className="h-[100px] w-full" />
      </CardHeader>
      <CardContent className="flex flex-col gap-3 justify-start">
        <div className="space-y-1">
          <Skeleton className="h-4 w-3/3" />
          <Skeleton className="h-4 w-2/3" />
        </div>
        <div className="space-y-1">
          <Skeleton className="h-2 w-3/3" />
          <Skeleton className="h-2 w-1/2" />
        </div>
      </CardContent>
      <CardContent className="my-3">
        <Skeleton className="h-[40px] w-full" />
      </CardContent>
    </Card>
  );
};

export const TeachingLoaders = () => {
  return (
    <>
      {Array.from({ length: 6 }, (_, index) => (
        <TeachingSkeletonLoader key={index} />
      ))}
    </>
  );
};

export const LoadingSpinner = () => {
  return (
    <div className="w-full h-full relative snap-start flex justify-center items-center">
      <p className="flex items-center gap-2 font-bold">
        <span>Loading</span>{" "}
        <span>
          <Spinner />
        </span>
      </p>
    </div>
  );
};
