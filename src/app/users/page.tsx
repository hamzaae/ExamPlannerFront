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


import { UserForm } from "./UserForm"
import { GroupForm } from "./GroupForm"
import useFetch from "../useFetch"
import UserTable from "./UserTable"


export default function Users() {

    const { error, isPending, data: users } = useFetch('http://localhost:4001/users')


    return (
      
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
                    <DropdownMenuCheckboxItem checked>
                      Professors
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem>
                      Administrators
                    </DropdownMenuCheckboxItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <Button size="sm" variant="outline" className="h-8 gap-1">
                  <File className="h-3.5 w-3.5" />
                  <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                    Export
                  </span>
                </Button>
                <UserForm />
                <GroupForm />

              </div>
            </div>
            {users && 
            <Card x-chunk="dashboard-06-chunk-0">
            <CardHeader>
                <CardTitle>Users</CardTitle>
                <CardDescription>
                Manage users.
                </CardDescription>
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
                  {users && <UserTable users={users}/>}
                </Table>
            </CardContent>
            <CardFooter>
                <div className="text-xs text-muted-foreground">
                Showing <strong>all</strong> of <strong>{users && users.length}</strong>{" "}
                users.
                </div>
            </CardFooter>
            </Card> }
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
        </div>
    )
  }