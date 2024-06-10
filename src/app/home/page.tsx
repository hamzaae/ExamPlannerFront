"use client"

import Link from "next/link"
import {
  File,
  ListFilter,
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
import { Progress } from "@/components/ui/progress"
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
import { TooltipProvider } from "@/components/ui/tooltip";
import SideBar from "@/components/SideBar";
import HeaderBar from "@/components/HeaderBar";
import Login from "@/components/Login";
import AuthenticatedLayout from "@/components/AuthenticatedLayout"
import useFetch from "../useFetch"



export default function Home() {

  const { error, isPending, data: user } = useFetch('http://localhost:8080/api/auth/profile')




    return (
    <AuthenticatedLayout>
        <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
                      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
                        <Card
                          className="sm:col-span-2" x-chunk="dashboard-05-chunk-0"
                        >
                          <CardHeader className="pb-3">
                            <CardTitle>Hello {user}</CardTitle>
                            <CardDescription className="max-w-lg text-balance leading-relaxed">
                              Introducing Our Dynamic Orders Dashboard for Seamless
                              Management and Insightful Analysis.
                            </CardDescription>
                          </CardHeader>
                          <CardFooter>
                            <Link href="/exams">
                              <Button>Planify New Exam</Button>
                            </Link>
                          </CardFooter>
                        </Card>
                        <Card x-chunk="dashboard-05-chunk-1">
                          <CardHeader className="pb-2">
                            <CardDescription>Disponible Rooms Today</CardDescription>
                            <CardTitle className="text-4xl">15</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <div className="text-xs text-muted-foreground">
                              / 20 rooms
                            </div>
                          </CardContent>
                          <CardFooter>
                            <Progress value={25} aria-label="25% increase" />
                          </CardFooter>
                        </Card>
                        <Card x-chunk="dashboard-05-chunk-2">
                          <CardHeader className="pb-2">
                            <CardDescription>Disponible Professors Today</CardDescription>
                            <CardTitle className="text-4xl">8</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <div className="text-xs text-muted-foreground">
                              / 16 professors
                            </div>
                          </CardContent>
                          <CardFooter>
                            <Progress value={12} aria-label="12% increase" />
                          </CardFooter>
                        </Card>
                      </div>

                          <Card x-chunk="dashboard-05-chunk-3">
                            <CardHeader className="px-7">
                              <CardTitle>Finished Exams</CardTitle>
                              <CardDescription>
                                Finished exams to check.
                              </CardDescription>
                              <div className="ml-auto flex items-center gap-2">
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button
                                  variant="outline"
                                  size="sm"
                                  className="h-7 gap-1 text-sm"
                                >
                                  <ListFilter className="h-3.5 w-3.5" />
                                  <span className="sr-only sm:not-sr-only">Filter</span>
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuLabel>Rooms at</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuCheckboxItem checked>
                                  Bloc A
                                </DropdownMenuCheckboxItem>
                                <DropdownMenuCheckboxItem>
                                  Bloc B
                                </DropdownMenuCheckboxItem>
                                <DropdownMenuCheckboxItem>
                                  Amphie
                                </DropdownMenuCheckboxItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                            <Button
                              size="sm"
                              variant="outline"
                              className="h-7 gap-1 text-sm"
                            >
                              <File className="h-3.5 w-3.5" />
                              <span className="sr-only sm:not-sr-only">Export</span>
                            </Button>
                          </div>
                            </CardHeader>
                            <CardContent>
                              <Table>
                                <TableHeader>
                                  <TableRow>
                                    <TableHead>Room</TableHead>
                                    <TableHead className="hidden sm:table-cell">
                                      8-10
                                    </TableHead>
                                    <TableHead className="hidden sm:table-cell">
                                      10-12
                                    </TableHead>
                                    <TableHead className="hidden md:table-cell">
                                      14-16
                                    </TableHead>
                                    <TableHead className="text-right">
                                      16-18
                                    </TableHead>
                                  </TableRow>
                                </TableHeader>
                                <TableBody>
                                  <TableRow className="bg-accent">
                                    <TableCell>
                                      <div className="font-medium">Bloc A</div>
                                      <div className="hidden text-sm text-muted-foreground md:inline">
                                        room 12
                                      </div>
                                    </TableCell>
                                    <TableCell className="hidden sm:table-cell">
                                      <Badge className="text-xs" variant="secondary">
                                        Empty
                                      </Badge>
                                    </TableCell>
                                    <TableCell className="hidden sm:table-cell">
                                      <Badge className="text-xs" variant="secondary">
                                        Empty
                                      </Badge>
                                    </TableCell>
                                    <TableCell className="hidden md:table-cell">
                                      <Badge className="text-xs" >
                                          Occupied
                                      </Badge>
                                    </TableCell>
                                    <TableCell className="text-right">
                                      <Badge className="text-xs" variant="secondary">
                                        Empty
                                      </Badge>
                                    </TableCell>
                                  </TableRow>
                                  <TableRow>
                                    <TableCell>
                                      <div className="font-medium">Olivia Smith</div>
                                      <div className="hidden text-sm text-muted-foreground md:inline">
                                        olivia@example.com
                                      </div>
                                    </TableCell>
                                    <TableCell className="hidden sm:table-cell">
                                      Refund
                                    </TableCell>
                                    <TableCell className="hidden sm:table-cell">
                                      <Badge className="text-xs" variant="outline">
                                        Declined
                                      </Badge>
                                    </TableCell>
                                    <TableCell className="hidden md:table-cell">
                                      2023-06-24
                                    </TableCell>
                                    <TableCell className="text-right">$150.00</TableCell>
                                  </TableRow>
                                  <TableRow>
                                    <TableCell>
                                      <div className="font-medium">Noah Williams</div>
                                      <div className="hidden text-sm text-muted-foreground md:inline">
                                        noah@example.com
                                      </div>
                                    </TableCell>
                                    <TableCell className="hidden sm:table-cell">
                                      Subscription
                                    </TableCell>
                                    <TableCell className="hidden sm:table-cell">
                                      <Badge className="text-xs" variant="secondary">
                                        Fulfilled
                                      </Badge>
                                    </TableCell>
                                    <TableCell className="hidden md:table-cell">
                                      2023-06-25
                                    </TableCell>
                                    <TableCell className="text-right">$350.00</TableCell>
                                  </TableRow>
                                </TableBody>
                              </Table>
                            </CardContent>
                          </Card>
                    </div>
    </AuthenticatedLayout>
    )
  }