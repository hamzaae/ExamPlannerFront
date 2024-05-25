"use client"

import {
    File,
    ListFilter,
    MoreHorizontal,
    Search,
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
import { SubjectForm } from "./SubjectForm";
import { CarouselCard } from "./CarouselCard"
import { TabsCard } from "./TabsCard"
import { Departements } from "./Departements"
import useFetch from "../useFetch"
import { Sub } from "@radix-ui/react-dropdown-menu"
import SubjectTable from "./SubjectTable"
import { Input } from "@/components/ui/input"
import { Skeleton } from "@/components/ui/skeleton"
  
  
  
  
  export default function Subjects() {
    const { error, isPending, data: subjects } = useFetch('http://localhost:4001/subjects')
    const { data: users } = useFetch('http://localhost:4002/users')
    
    
      return (
          <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
              {/* <div className="justify-center items-center">
                
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
                  <Departements />
                  {users && <SubjectForm users={users} />}
                </div>
                {subjects && <Card x-chunk="dashboard-06-chunk-0">
                  <CardHeader>
                    <CardTitle>Subjects</CardTitle>
                    <CardDescription>
                      Manage subjects.
                    </CardDescription>
                    <div className="relative ml-auto flex-1 md:grow-0">
                      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input
                        type="search"
                        placeholder="Search..."
                        className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
                      />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Title</TableHead>
                          <TableHead>Type</TableHead>
                          <TableHead>Level</TableHead>
                          <TableHead className="hidden md:table-cell">
                            Professor
                          </TableHead>
                          <TableHead className="hidden md:table-cell">
                            Coordinator
                          </TableHead>
                          <TableHead>
                            <span className="sr-only">Actions</span>
                          </TableHead>
                        </TableRow>
                      </TableHeader>
                       <SubjectTable subjects={subjects} />
                    </Table>
                  </CardContent>
                  <CardFooter>
                    <div className="text-xs text-muted-foreground">
                      Showing <strong>all</strong> of <strong>{subjects && subjects.length}</strong>{" "}
                      subjects.
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
      )
    }