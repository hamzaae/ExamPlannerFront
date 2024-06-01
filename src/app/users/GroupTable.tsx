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

const GroupTable = ({groups}) => {

    const router = useRouter()

    const handleClick = (groupId) => {
      fetch(`http://localhost:8080/api/Group/` + groupId, {
        method: "DELETE",
        headers: {
          "Authorization": "Bearer " + localStorage.getItem("token")
      },
      }).then(() => {
        router.push("/users");
        window.location.reload();
      });
    };

 



    return(
        <TableBody>
        {groups.map((grp) => (
                <TableRow key={grp.idGroup}>
                <TableCell className="font-medium">
                  {grp.title}
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  {grp.description}
                </TableCell>
                <TableCell>
                  {console.log(grp)}
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
                      <DropdownMenuItem onClick={() => handleClick(grp.idGroup)}>Delete</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
              ))}
        </TableBody>

    )
}

export default GroupTable;