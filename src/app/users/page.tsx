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
import { Skeleton } from "@/components/ui/skeleton"

import { UserForm } from "./UserForm"
import { GroupForm } from "./GroupForm"
import useFetch from "../useFetch"
import UserTable from "./UserTable"
import AuthenticatedLayout from "@/components/AuthenticatedLayout"
import GroupTable from "./GroupTable"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { toast } from "@/components/ui/use-toast"


export default function Users() {

    const [filterType, setFilter] = useState("All")
    const [loading, setLoading] = useState(false)
    
    const { error, isPending, data: users } = useFetch('http://localhost:8080/api/personnel')
    const { errorGr, isPendingGr, data: groups } = useFetch('http://localhost:8080/api/Group')
    const { errorSec, isPendingSec, data: sectors } = useFetch('http://localhost:8080/api/utils/sectors')

    const handleDownload = async (e) => {
      e.preventDefault();
      setLoading(true);
  
      try {
          const response = await fetch("http://localhost:8080/api/personnel/exportPersons", {
              method: "GET",
              headers: {
                  "Authorization": "Bearer " + localStorage.getItem("token")
              },
              // Make sure the response type is set to "blob" to handle binary data (file)
              responseType: 'blob'
          });
  
          if (!response.ok) {
              throw new Error("Failed to download file");
          }
  
          // Convert response to blob
          const blob = await response.blob();
  
          // Create a URL for the blob data
          const url = window.URL.createObjectURL(blob);
  
          // Create a temporary <a> element to trigger the download
          const link = document.createElement('a');
          link.href = url;
          link.setAttribute('download', 'downloaded_file.csv'); // Default filename
  
          // Append the <a> element to the document body and click it to start download
          document.body.appendChild(link);
          link.click();
  
          // Cleanup: remove the <a> element and revoke the URL
          document.body.removeChild(link);
          window.URL.revokeObjectURL(url);
  
          // Set loading to false after successful download
          setLoading(false);
      } catch (error) {
          setLoading(false);
          console.error("Error:", error);
          const errorMessage = error.message || "An error occurred";
          toast({
              title: "Uh oh! Something went wrong.",
              description: errorMessage
          });
      }
  }
  
  


    return (
      <AuthenticatedLayout>
        <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
            <div className="flex items-center">
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
                    <DropdownMenuCheckboxItem checked={filterType == 'Professor'} onSelect={() => setFilter('Professor')}>
                      Professors
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem checked={filterType == 'Administrator'} onSelect={() => setFilter('Administrator')}>
                      Administrators
                    </DropdownMenuCheckboxItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <Button size="sm" variant="outline" className="h-8 gap-1" onClick={handleDownload} disabled={loading}>
                  <File className="h-3.5 w-3.5" />
                  <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                    Export
                  </span>
                </Button>
                {sectors && <UserForm sectors={sectors}/>}
                <GroupForm users={users} />

              </div>
            </div>
            {users && 
            <Card x-chunk="dashboard-06-chunk-0">
            <CardHeader>
                <CardTitle>Users</CardTitle>
                <CardDescription>
                Manage users.
                </CardDescription>
                {/* <div className="relative ml-auto flex-1 md:grow-0">
                      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input
                        type="search"
                        placeholder="Search..."
                        className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
                      />
                    </div> */}
            </CardHeader>
            <CardContent>
                <Table>
                <TableHeader>
                    <TableRow>
                    <TableHead>Full Name</TableHead>
                    <TableHead className="hidden md:table-cell">Type</TableHead>
                    <TableHead className="hidden md:table-cell">
                        Speciality / Grade
                    </TableHead>
                    <TableHead className="hidden md:table-cell">
                        CIN
                    </TableHead>
                    <TableHead className="hidden md:table-cell">
                        Email
                    </TableHead>
                    <TableHead>
                        <span className="sr-only">Actions</span>
                    </TableHead>
                    </TableRow>
                </TableHeader>
                  {users && <UserTable users={filterType=="All"? users : users.filter(user => user.type == filterType)} sectors={sectors}/>}
                </Table>
            </CardContent>
            <CardFooter>
                <div className="text-xs text-muted-foreground">
                Showing <strong>all</strong> of <strong>{users && users.length}</strong>{" "}
                users.
                </div>
            </CardFooter>
            </Card> }
            {groups && 
            <Card x-chunk="dashboard-06-chunk-0">
            <CardHeader>
                <CardTitle>Groups</CardTitle>
                <CardDescription>
                Manage groups.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Table>
                <TableHeader>
                    <TableRow>
                    <TableHead>Group Name</TableHead>
                    <TableHead className="hidden md:table-cell">Description</TableHead>
                    <TableHead>
                        Count
                    </TableHead>
                    <TableHead>
                        <span className="sr-only">Actions</span>
                    </TableHead>
                    </TableRow>
                </TableHeader>
                  <GroupTable groups={groups}/>
                </Table>
            </CardContent>
            <CardFooter>
                <div className="text-xs text-muted-foreground">
                Showing <strong>all</strong> of <strong>{groups && groups.length}</strong>{" "}
                groups.
                </div>
            </CardFooter>
            </Card> }
            {error && <div>{error}</div>}
            {(isPending || isPendingGr) && (
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