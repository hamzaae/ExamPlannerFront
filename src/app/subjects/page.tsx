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
import { SubjectForm } from "./SubjectForm";
import { CarouselCard } from "./CarouselCard"
import { TabsCard } from "./TabsCard"
import { Departements } from "./Departements"
  
  
    
  
  async function fetchSubjects() {
      const response = await fetch("http://localhost:4000/rooms", {
        next: {
          revalidate: 30,
        }
      })
      return response.json()
    }
  
  
  
  export default async function Subjects() {
      const rooms = await fetchSubjects()
  
      return (
          <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
              <div className="justify-center items-center">
                
              </div>
              <Tabs defaultValue="all">
              <div className="flex items-center">
                {/* <TabsList>
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="active">Active</TabsTrigger>
                  <TabsTrigger value="draft">Draft</TabsTrigger>
                  <TabsTrigger value="archived" className="hidden sm:flex">
                    Archived
                  </TabsTrigger>
                </TabsList> */}
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
                  <SubjectForm />
                </div>
              </div>
              <TabsContent value="all">
                <Card x-chunk="dashboard-06-chunk-0">
                  <CardHeader>
                    <CardTitle>Subjects</CardTitle>
                    <CardDescription>
                      Manage subjects.
                    </CardDescription>
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
                      <TableBody>
  
                      {rooms.map((room) => (
                          <TableRow>
                          <TableCell className="font-medium">
                            {room.name}
                          </TableCell>
                          <TableCell>
                            <Badge variant="outline">{room.type}</Badge>
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            {room.place}
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            {room.size}
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
                        ))}
  
                      </TableBody>
                    </Table>
                  </CardContent>
                  <CardFooter>
                    <div className="text-xs text-muted-foreground">
                      Showing <strong>all</strong> of <strong>{rooms.length}</strong>{" "}
                      subjects.
                    </div>
                  </CardFooter>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
      )
    }