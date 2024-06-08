"use client"

import {
  File,
  ListFilter,
  MoreHorizontal,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
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
} from "@/components/ui/tabs"
import RoomForm from "./RoomForm";
import useFetch from "../useFetch"
import RoomTable from "./RoomTable"
import { Skeleton } from "@/components/ui/skeleton"
import AuthenticatedLayout from "@/components/AuthenticatedLayout"
import { useState } from "react"



export default function Rooms() {

  const { error, isPending, data: rooms } = useFetch('http://localhost:8080/api/Room')
  const [filterType, setFilter] = useState("All")


    return (
      <AuthenticatedLayout>
        <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
            {/* <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">

            </div> */}

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
                    <DropdownMenuCheckboxItem checked={filterType == 'All'} onSelect={() => setFilter('All')}>
                      All
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem checked={filterType == 'Amphie'} onSelect={() => setFilter('Amphie')}>
                      Amphie
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem checked={filterType == 'Room'} onSelect={() => setFilter('Room')}>
                      Room
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem checked={filterType == 'Tp'} onSelect={() => setFilter('Tp')}>
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
                <RoomForm />
              </div>


              {rooms && <Card x-chunk="dashboard-06-chunk-0">
                <CardHeader>
                  <CardTitle>Rooms</CardTitle>
                  <CardDescription>
                    Manage rooms.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Type</TableHead>
                        <TableHead className="hidden md:table-cell">
                          Place
                        </TableHead>
                        <TableHead className="hidden md:table-cell">
                          Size
                        </TableHead>
                        <TableHead>
                          <span className="sr-only">Actions</span>
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <RoomTable rooms={filterType == "All" ? rooms : rooms.filter(room => room.type == filterType)} />
                  </Table>
                </CardContent>
                <CardFooter>
                  <div className="text-xs text-muted-foreground">
                    Showing <strong>all</strong> of <strong>{rooms && rooms.length}</strong>{" "}
                    rooms.
                  </div>
                </CardFooter>
              </Card> }
              {error && <div className="text-red-500">{error}</div>}
              {isPending && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-200 ">
                  <div className="flex flex-col items-center space-y-3">
                    <Skeleton className="h-[325px] w-[750px] rounded-xl" />
                    <div className="space-y-2">
                      <Skeleton className="h-4 w-[750px]" />
                      <Skeleton className="h-4 w-[700px]" />
                    </div>
                  </div>
                </div>
              )}
        </div>
        </AuthenticatedLayout>
    )
  }