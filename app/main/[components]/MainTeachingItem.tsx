import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

interface MainTeachingItemProps {
  id: string;
  title: string;
  description: string;
  mainContent: string;
  bannerColour: string | null;
}

function limitWords(text: string, maxWords: number) {
  // Use trim() to remove leading/trailing whitespace
  const trimmedText = text.trim();

  // Split the string into an array of words using one or more spaces as a delimiter
  const words = trimmedText.split(/\s+/);

  // Check if the number of words exceeds the limit
  if (words.length > maxWords) {
    // Slice the array to keep only the first 'maxWords' words
    const limitedWords = words.slice(0, maxWords);

    // Join the limited words back into a single string with spaces
    return limitedWords.join(' ');
  }

  // Return the original text if it's within the limit
  return text;
}

const MainTeachingItem = ({ id, title, description, mainContent, bannerColour }: MainTeachingItemProps) => {
  return (
    <Card
      className="
        relative snap-start
        w-[230px]
        shrink-0
        md:w-full md:shrink
        flex flex-col justify-between items-center
      "
    >
      {/* <img
        src="https://avatar.vercel.sh/shadcn1"
        alt="Event cover"
        className="aspect-video w-full object-cover"
      /> */}

      <div style={{ backgroundColor: bannerColour ? bannerColour : "pink" }} className="w-full h-[100px]"></div>

      <CardHeader className="w-full">
        <CardAction />
        <CardTitle>{limitWords(title, 20)}</CardTitle>
        <CardDescription>
          {limitWords(description, 15)}
        </CardDescription>
      </CardHeader>

      <CardFooter className="w-full">
        <Button className="w-full">
          <Link href={`/main/ViewTeachings/${id}`} className="w-full">Open Teaching</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default MainTeachingItem;