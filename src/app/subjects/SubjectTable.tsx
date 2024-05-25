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
import { SubjectUpdate } from "./SubjectUpdate"

const SubjectTable = ({subjects}) => {

    const router = useRouter()

    const handleClick = (subjectId) => {
      fetch(`http://localhost:4001/subjects/` + subjectId, {
        method: "DELETE",
      }).then(() => {
        router.push("/subjects");
        window.location.reload();
      });
    };



    return(
        <TableBody>
  
        {subjects.map((subject) => (
            <TableRow key={subject.id}>
            <TableCell className="font-medium">
              {subject.title}
            </TableCell>
            <TableCell>
              <Badge variant="outline">{subject.type}</Badge>
            </TableCell>
            <TableCell className="hidden md:table-cell">
              {subject.level}
            </TableCell>
            <TableCell className="hidden md:table-cell">
              {subject.professor}
            </TableCell>
            <TableCell className="hidden md:table-cell">
              {subject.coordinator}
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
                  <SubjectUpdate subject={subject}/>
                  <DropdownMenuItem onClick={() => handleClick(subject.id)}>Delete</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </TableRow>
          ))}

        </TableBody>
    )
}

export default SubjectTable;