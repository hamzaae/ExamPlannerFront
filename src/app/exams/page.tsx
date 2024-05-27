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
import { useState } from "react"
import { format } from "date-fns"
  


export default function Exams() {
  const [date, setDate] = useState()
    return (
        <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">

            <form className="flex items-center gap-4">
              <DatePicker date={date} setDate={setDate}/>
              <Button >Search Date</Button> 
              {date ? (
          <h1>{format(date, 'yyyy-MM-dd')}</h1> // Or any desired format
        ) : (
          <h1>No date selected</h1>
        )}
            </form>

              <Card x-chunk="dashboard-06-chunk-0">
                <CardHeader>
                  <CardTitle>Exams</CardTitle>
                  <CardDescription>
                    Manage Exams by clicking on free times to create new exam or on full ones to get details.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Room</TableHead>
                        <TableHead>8-10</TableHead>
                        <TableHead>10-12</TableHead>
                        <TableHead>14-16</TableHead>
                        <TableHead>16-18</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">
                          Room 11
                        </TableCell>
                        <TableCell>
                          {/* <ExamForm /> */}
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          <PopOver />
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          <Checkbox />
                        </TableCell>
                        <TableCell>
                          <PopOver />
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">
                          Amphie A
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline">Amphie</Badge>
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          Amphie
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          <Checkbox />
                        </TableCell>
                        <TableCell>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button
                                aria-haspopup="true"
                                size="icon"
                                variant="ghost"
                              >
                                <MoreHorizontal className="h-4 w-4" />
                                <span className="sr-only">Toggle menu</span>
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuLabel>Actions</DropdownMenuLabel>
                              <DropdownMenuItem>Edit</DropdownMenuItem>
                              <DropdownMenuItem>Delete</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
                <CardFooter>
                  <ExamForm />
                </CardFooter>
              </Card>

        </div>
    )
  }