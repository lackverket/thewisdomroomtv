import { getAllTeachings } from "@/actions/teaching-actions";
import { useState, useEffect } from "react";
import DisplayTeachings from "./DisplayTeachings";
import { Spinner } from "@/components/ui/spinner";

const PreviousTeachings = () => {
  const [allTeachings, setAllTeachings] = useState<{}[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  console.log(allTeachings);

  useEffect(() => {
    const getTeachings = async () => {
      setIsLoading(true);
      const teachings = await getAllTeachings();
      setAllTeachings(teachings);
      setIsLoading(false);
    };
    getTeachings();
  }, []);

  return (
    <div className="w-full flex justify-center items-center my-8 px-3">
      {!allTeachings[0] && isLoading && (
        <div className="flex-1 w-full h-full flex justify-center items-center">
          <p className="flex items-center gap-2 font-bold">
            <span>Loading</span>
            <span>
              <Spinner />
            </span>
          </p>
        </div>
      )}
      {!allTeachings[0] && !isLoading && (
        <p className="text-gray-600">You currently have no teachings</p>
      )}
      {allTeachings[0] && !isLoading && (
        <DisplayTeachings allTeachings={allTeachings} />
      )}
    </div>
  );
};

export default PreviousTeachings;
