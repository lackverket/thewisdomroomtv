"use client";

import { useState } from "react";
import { TableCell, TableRow } from "@/components/ui/table";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

import { toast } from "sonner";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Button } from "@/components/ui/button";
import { MoreHorizontalIcon } from "lucide-react";
import { deleteTeaching } from "@/actions/teaching-actions";
import Link from "next/link";

interface TeachingElements {
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

const TeachingTableElement = ({
  id,
  title,
  bannerColour,
  description,
  updatedAt,
}: TeachingElements) => {
  const [open, setOpen] = useState(false);

  const deleteTeachingHandler = async () => {

    toast.promise(
      async () => await deleteTeaching(id),
      {
        loading: "Loading...",
        success: () => "Item has been deleted",
        error: "Error",
      },
    );
  };

  return (
    <>
      <TableRow key={id} className="py-5">
        <TableCell className="font-medium  max-sm:hidden">
          <Link href={`/teacher/viewTeaching/${id}`} className="w-full"><div
            className="w-5 h-5 rounded-[2rem]"
            style={{ backgroundColor: bannerColour }}
          /></Link>
          
        </TableCell>

        <TableCell className="w-40 truncate">
          <Link href={`/teacher/viewTeaching/${id}`} className="w-full">{title}</Link>
        </TableCell>

        <TableCell className="w-40 truncate"><Link href={`/teacher/viewTeaching/${id}`} className="w-full">{description}</Link></TableCell>

        <TableCell className="w-40 truncate text-right">
          <Link href={`/teacher/viewTeaching/${id}`} className="w-full">{new Date(updatedAt).toLocaleString()}</Link>
        </TableCell>

        <TableCell className="text-right">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="size-8">
                <MoreHorizontalIcon />
                <span className="sr-only">Open menu</span>
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end">
              <DropdownMenuItem>
                <Link className="w-full" href={`/teacher/edit/${id}`}>Edit</Link>
              </DropdownMenuItem>

              <DropdownMenuSeparator />

              <DropdownMenuItem
                variant="destructive"
                onSelect={(e) => {
                  e.preventDefault(); // prevent dropdown from auto-closing before state update
                  setOpen(true);
                }}
              >
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </TableCell>
      </TableRow>

      {/* AlertDialog MUST be outside DropdownMenu */}
      <AlertDialog open={open} onOpenChange={setOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              Are you sure you want to delete this teaching
            </AlertDialogTitle>
            <AlertDialogDescription>
              It will be permanently removed from the database
            </AlertDialogDescription>
          </AlertDialogHeader>

          <AlertDialogFooter>
            <AlertDialogCancel>Go Back</AlertDialogCancel>
            <AlertDialogAction onClick={deleteTeachingHandler}>
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default TeachingTableElement;
