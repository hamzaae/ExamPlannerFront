import {
    File,
    ListFilter,
    MoreHorizontal,
  
  } from "lucide-react"
  
  import { Badge } from "@/components/ui/badge"
  
  import { Button } from "@/components/ui/button"

  import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  import {
    TableBody,
    TableCell,

    TableRow,
  } from "@/components/ui/table"

  import { useRouter } from "next/navigation"
import { UserUpdate } from "./UserUpdate"

const UserTable = ({users}) => {

    const router = useRouter()

    const handleClick = (userId) => {
      fetch(`http://localhost:4001/users/` + userId, {
        method: "DELETE",
      }).then(() => {
        router.push("/users");
        window.location.reload();
      });
    };



    return(
        <TableBody>
        {users.map((user) => (
                <TableRow key={user.id}>
                <TableCell className="font-medium">
                  {user.firstName + " " + user.lastName}
                </TableCell>
                <TableCell>
                  <Badge variant="outline">{user.type}</Badge>
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  {user.speciality}{user.grade}
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  {user.cin}
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  {user.email}
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
                      <UserUpdate />
                      <DropdownMenuItem onClick={() => handleClick(user.id)}>Delete</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
              ))}
        </TableBody>

    )
}

export default UserTable;