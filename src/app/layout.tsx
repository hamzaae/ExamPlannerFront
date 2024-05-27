import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { TooltipProvider } from "@/components/ui/tooltip";
import SideBar from "@/components/SideBar";
import HeaderBar from "@/components/HeaderBar";
import Login from "@/components/Login";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "ExamPlanner",
  description: "Manage Exams Easily",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {


  // return (
  //   <html lang="en">
  //     <body className={inter.className}>
  //       <TooltipProvider>
  //         {isLoggedIn ? (
  //         <div className="flex min-h-screen w-full flex-col bg-muted/40 font-sans">
  //             <SideBar />
  //             <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
  //                 <HeaderBar />
  //                 <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-2 xl:grid-cols-2">
  //                   { children }
  //               </main>
  //             </div>
  //         </div>
  //         ) : (
  //           <Login onLoginSuccess={handleLoginSuccess}/>
  //         )}
  //       </TooltipProvider>
  //     </body>
  //   </html>
  // );

  return (
    <html lang="en">
      <body className={inter.className}>
        { children }
      </body>
    </html>
  );
}
