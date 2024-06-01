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
import useFetch from "../useFetch"




export default function ExamTable({rooms, subjects, date, monitorings}) {

    return(        
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
          {rooms.map((rom) => (
            <TableRow key={rom.idRoom}>
              <TableCell className="font-medium" key={0}>
                {rom.nameRoom}
              </TableCell>
              <TableCell key={1}>
                {monitorings.find(monitoring => monitoring.room.idRoom == rom.idRoom && monitoring.exam.startTime == 8) ? <PopOver monitoring={monitorings.find(monitoring => monitoring.room.idRoom == rom.idRoom)} /> : <ExamForm subjects={subjects} room={rom} startTime={8} date={date}/>}
              </TableCell>
              <TableCell key={2}>
              {monitorings.find(monitoring => monitoring.room.idRoom == rom.idRoom && monitoring.exam.startTime == 10) ? <PopOver monitoring={monitorings.find(monitoring => monitoring.room.idRoom == rom.idRoom)} /> : <ExamForm subjects={subjects} room={rom} startTime={10} date={date}/>}
              </TableCell>
              <TableCell key={3}>
              {monitorings.find(monitoring => monitoring.room.idRoom == rom.idRoom && monitoring.exam.startTime == 14) ? <PopOver monitoring={monitorings.find(monitoring => monitoring.room.idRoom == rom.idRoom)} /> : <ExamForm subjects={subjects} room={rom} startTime={14} date={date}/>}
              </TableCell>
              <TableCell key={4}>
              {monitorings.find(monitoring => monitoring.room.idRoom == rom.idRoom && monitoring.exam.startTime == 16) ? <PopOver monitoring={monitorings.find(monitoring => monitoring.room.idRoom == rom.idRoom)} /> : <ExamForm subjects={subjects} room={rom} startTime={16} date={date}/>}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>

      </Table>
    )
  }