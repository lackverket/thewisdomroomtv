import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function WordSection() {
  return (
    <section className="w-full my-2 py-2 px-3 sm:max-2xl:px-0 flex flex-col justify-between start">
      <div className="w-full font-bold text-[1.1rem] md:px-5">Today's Word</div>
      <Card className="w-full sm:max-2xl:w-[95%] sm:max-2xl:mx-auto my-3 bg-linear-to-br from-gray-50 to-gray-100">
        <CardHeader>
          <CardTitle>The Word, understood</CardTitle>
          <CardDescription>Verses: John 1:1, Mark 16:20</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col justify-between gap-3 text-[#222]">
          <p>
            &quot;In the beginning was the Word, and the Word was with God, and
            the Word was God.&quot; - John 1:1
          </p>
          <p>
            &quot;And they went forth, and preached every where, the Lord
            working with them, and confirming the word with signs following.
            Amen.&quot; - Mark 16:20
          </p>
        </CardContent>
        <CardFooter>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="w-full">
                View
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuGroup>
                <DropdownMenuLabel>This action is in beta</DropdownMenuLabel>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
            </DropdownMenuContent>
          </DropdownMenu>
        </CardFooter>
      </Card>
    </section>
  );
}
