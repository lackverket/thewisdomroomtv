"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { X } from "lucide-react";
import { cn } from "@/lib/utils"; // Ensure you have cn utility (standard in shadcn)
import { UserAuth } from "@/app/context/auth-context";
import { redirect } from "next/navigation";

interface MainNavMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MainNavMenu = ({ isOpen, onClose }: MainNavMenuProps) => {
  if (!isOpen) return null;
  const { logOut } = UserAuth();

  const logUserOut = () => {
    onClose();
    logOut();
    localStorage.removeItem("adminStatus");
    redirect("/login")
  };

  return (
    // Full viewport overlay with dark semi-transparent bg
    <div
      className={cn(
        "fixed inset-0 z-50 bg-black/70 transition-opacity",
        "backdrop-blur-sm",
        "md:hidden", // Only show overlay on mobile; desktop handled differently
      )}
      onClick={onClose}
      aria-hidden="true"
    >
      {/* White menu container - 40% width on mobile, full height */}
      <div
        className={cn(
          "fixed top-0 left-0 h-full w-[40vw] min-w-[200px] max-w-[400px]",
          "bg-white shadow-2xl flex flex-col",
          "animate-in slide-in-from-left-5 duration-300",
          "border-r border-gray-200",
        )}
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking menu
        role="dialog"
        aria-modal="true"
        aria-label="Main navigation menu"
      >
        {/* Header Section */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            aria-label="Close menu"
            className="rounded-full hover:bg-gray-100"
          >
            <X className="h-5 w-5 text-gray-700" />
          </Button>
          <h1 className="text-xl font-bold text-gray-800 tracking-tight">
            The Wisdom Room
          </h1>
        </div>

        {/* Scrollable Content Section */}
        <div className="flex-1 overflow-y-auto py-4 px-6">
          <p className="text-sm font-medium text-gray-500 mb-3 pl-1">Go To</p>
          <nav className="flex flex-col space-y-1">
            {[
              { href: "/main/Interpretations", label: "Interpretation" },
              { href: "/main/Questions", label: "Questions" },
              { href: "/main/AskAQuestion", label: "Ask a Question" },
              { href: "/main/ViewTeachings", label: "View Teachings" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center py-3 px-4 rounded-lg",
                  "text-gray-700 hover:bg-gray-50 hover:text-gray-900",
                  "transition-colors font-medium",
                  "focus:outline-none focus:bg-gray-100 focus:ring-2 focus:ring-blue-500",
                )}
                onClick={onClose}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Footer Section - Sticks to bottom */}
        <div className="p-6 border-t border-gray-200">
          <Button
            variant="destructive"
            className="w-full py-6 text-base font-medium"
            onClick={logUserOut}
          >
            Log Out
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MainNavMenu;
