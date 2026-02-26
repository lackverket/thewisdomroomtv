import MainNavigation from "@/components/MainNavigation";
import MainNavMenu from "@/components/MainNavMenu";
import MainFooter from "./[components]/MainFooter";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="w-screen min-h-screen flex flex-col">
        <MainNavigation />
        {/* <MainNavMenu /> */}
        {children}
        <MainFooter />
    </main>
  )
}
