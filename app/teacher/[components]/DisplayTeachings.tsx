import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"


import { Button } from "@/components/ui/button";
import { MoreHorizontalIcon } from "lucide-react";
import TeachingTableElement from "./TeachingTableElement";

interface allTeachingElements {
    id: string;
    title: string;
    imageUrl: string;
    bannerColour: string;
    description: string;
    todaysWord: boolean;
    content: string;
    comment: string;
    updatedAt: string;
}

const DisplayTeachings = ({ allTeachings }: { allTeachings: allTeachingElements[] }) => {
  return <div>
    <p className="text-[#555] w-full flex justify-center items-center text-[1.2rem] font-bold py-2 mb-3">All Teachings</p>
    <div>
        <Table className="table-fixed w-full border-2">
      <TableCaption>A list of your teachings.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="max-sm:hidden">Image</TableHead>
          <TableHead>Title</TableHead>
          <TableHead>Description</TableHead>
          <TableHead className="text-right">Last Updated</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {allTeachings.map((teaching) => (
          <TeachingTableElement key={teaching.id} {...teaching}/>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total Teachings</TableCell>
          <TableCell className="text-right">{allTeachings.length}</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
    </div>
  </div>;
};

export default DisplayTeachings;


