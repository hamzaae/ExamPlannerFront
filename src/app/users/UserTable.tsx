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
import { toast } from "@/components/ui/use-toast"

const UserTable = ({users, sectors}) => {

    const router = useRouter()

    const handleClick = (userId) => {
      fetch(`http://localhost:8080/api/personnel/` + userId, {
        method: "DELETE",
        headers: {
          "Authorization": "Bearer " + localStorage.getItem("token")
      },
      }).then(() => {
        router.push("/users");
        window.location.reload();
      });
    };

    const handleClickAccount = async (userId) => {

        const response = await fetch(`http://localhost:8080/api/personnel/user/` + userId, {
          method: "POST",
          headers: {
            "Authorization": "Bearer " + localStorage.getItem("token"),
          },
        });
    
        if (response.ok) {
          const data = await response.text(); 

          // router.push("/users");
          // window.location.reload();
          toast({
            title: "New Account created for the User",
            description: `Password: ${data}`, // Adjust based on the response structure
          });
        } else {
          const errorMessage = await response.text();
          toast({
            title: "Error creating account",
            description: errorMessage,
          });
        }
    };
 



    return(
        <TableBody>
        {users.map((user) => (
                <TableRow key={user.idPerson}>
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
                      <UserUpdate user={user} sectors={sectors}/>
                      <DropdownMenuItem onClick={() => handleClick(user.idPerson)}>Delete</DropdownMenuItem>
                      <DropdownMenuItem onClick={() => handleClickAccount(user.idPerson)}>Create Account</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
              ))}
        </TableBody>

    )
}

export default UserTable;