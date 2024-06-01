"use client"

import Image from "next/image"
import Link from "next/link"
import {
  Car,
  File,
  Home,
  LineChart,
  ListFilter,
  MoreHorizontal,
  Package,
  Package2,
  PanelLeft,
  PlusCircle,
  Search,
  Settings,
  ShoppingCart,
  Users2,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter
  } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { PopOver } from "./PopOver"
import ExamForm from "./ExamForm"
import { DatePicker } from "./DatePicker"
import { Checkbox } from "@/components/ui/checkbox"
import { useEffect, useState } from "react"
import { format } from "date-fns"
import LayoutAuthenticated from "@/components/AuthenticatedLayout"
import ExamTable from "./ExamTable"
import useFetch from "../useFetch"

  


export default function Exams() {

  function getTodayDate() {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0'); 
    const mm = String(today.getMonth() + 1).padStart(2, '0'); 
    const yyyy = today.getFullYear();
  
    return `${dd}-${mm}-${yyyy}`;
  }

  const [date, setDate] = useState(getTodayDate);


  // setDate(getTodayDate());

  const { error, isPending, data: rooms } = useFetch('http://localhost:8080/api/Room')
  const { errorm, isPendingm, data: monitorings } = useFetch('http://localhost:8080/api/monitorings/'+ date)
  const { errors, isPendings, data: subjects } = useFetch('http://localhost:8080/api/Educationalelement')


    return (
      <LayoutAuthenticated>
        <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">

            <form className="flex items-center gap-4">
              <DatePicker date={date} setDate={setDate}/>
              <Button >Search Date</Button> 
            </form>

            <div className="ml-auto flex items-center gap-2">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="sm" className="h-8 gap-1">
                      <ListFilter className="h-3.5 w-3.5" />
                      <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                        Filter
                      </span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Filter by type</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuCheckboxItem checked>
                      Amphie
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem>Room</DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem>
                      Tp
                    </DropdownMenuCheckboxItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <Button size="sm" variant="outline" className="h-8 gap-1">
                  <File className="h-3.5 w-3.5" />
                  <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                    Export
                  </span>
                </Button>
              </div>

              <Card x-chunk="dashboard-06-chunk-0">
                <CardHeader>
                  <CardTitle>Exams</CardTitle>
                  <CardDescription>
                    Manage Exams by clicking on free times to create new exam or on full ones to get details.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {subjects && date && monitorings && rooms && <ExamTable rooms={rooms} monitorings={monitorings} subjects={subjects} date={date}/>}
                </CardContent>
              </Card>

        </div>
      </LayoutAuthenticated>
    )
  }