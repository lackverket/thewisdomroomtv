import MainNavigation from "@/components/MainNavigation";
import { Button } from "@/components/ui/button";
import MainFooter from "./main/[components]/MainFooter";

export default function Home() {
  return (
    <main className="flex flex-col ">
      <MainNavigation />
      <section className="flex-1 w-full min-h-screen flex justify-center items-center font-bold text-[#333] text-[1.2rem]">The Wisdom Room</section>
      <MainFooter />
    </main>
  );
}
