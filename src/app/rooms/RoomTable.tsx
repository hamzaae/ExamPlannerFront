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

const RoomTable = ({rooms}) => {

    const router = useRouter()

    const handleClick = (roomId) => {
      fetch(`http://localhost:4001/rooms/` + roomId, {
        method: "DELETE",
      }).then(() => {
        router.push("/rooms");
        window.location.reload();
      });
    };



    return(
        <TableBody>

        {rooms.map((room) => (
            <TableRow key={room.id}>
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
                  <DropdownMenuItem onClick={() => handleClick(room.id)}>Delete</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </TableRow>
          ))}

        </TableBody>

    )
}

export default RoomTable;