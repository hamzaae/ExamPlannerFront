
import Link from "next/link";
import { Book, DoorOpen, File, Users2, Home, PanelLeft, Package2, User, School } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from "@/components/ui/tooltip";



const SideBar = () => {
    return (
        <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
            <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
                <Link
                    href="/"
                    className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
                >
                    <School className="h-4 w-4 transition-all group-hover:scale-110" />
                    <span className="sr-only">ExamPlanifier</span>
                </Link>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Link
                            href="/"
                            className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                        >
                            <Home className="h-5 w-5" />
                            <span className="sr-only">Home</span>
                        </Link>
                    </TooltipTrigger>
                    <TooltipContent side="right">Home</TooltipContent>
                </Tooltip>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Link
                            href="/users"
                            className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                        >
                            <User className="h-5 w-5" />
                            <span className="sr-only">Users</span>
                        </Link>
                    </TooltipTrigger>
                    <TooltipContent side="right">Users</TooltipContent>
                </Tooltip>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Link
                            href="/rooms"
                            className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                        >
                            <DoorOpen className="h-5 w-5" />
                            <span className="sr-only">Rooms</span>
                        </Link>
                    </TooltipTrigger>
                    <TooltipContent side="right">Rooms</TooltipContent>
                </Tooltip>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Link
                            href="/subjects"
                            className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                        >
                            <Book className="h-5 w-5" />
                            <span className="sr-only">Subjects</span>
                        </Link>
                    </TooltipTrigger>
                    <TooltipContent side="right">Subjects</TooltipContent>
                </Tooltip>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Link
                            href="/exams"
                            className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                        >
                            <File className="h-5 w-5" />
                            <span className="sr-only">Exams</span>
                        </Link>
                    </TooltipTrigger>
                    <TooltipContent side="right">Exams</TooltipContent>
                </Tooltip>
            </nav>
        </aside>
    );
};

export default SideBar;