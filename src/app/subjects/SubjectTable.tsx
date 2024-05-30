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

const SubjectTable = ({subjects, users, levels}) => {

    const router = useRouter()

    const handleClick = (subjectId) => {
      console.log(subjectId);
      fetch(`http://localhost:8080/api/Educationalelement/` + subjectId, {
        method: "DELETE",
        headers: {
          "Authorization": "Bearer " + localStorage.getItem("token")
      }
      }).then(() => {
        router.push("/subjects");
        window.location.reload();
      });
    };

    const getProfessorName = (professorId) => {
      const professor = users.find(user => user.idPerson === professorId);
      return professor ? `${professor.firstName} ${professor.lastName}` : '';
    };

    const getLevelName = (levelId) => {
      const level = levels.find(lvl => lvl.idLevel == levelId);
      return level ? `${level.title}` : '';
    };



    return(
        <TableBody>
  
        {subjects.map((subject) => (
            <TableRow key={subject.idElement}>
            <TableCell className="font-medium">
              {subject.title}
            </TableCell>
            <TableCell>
              <Badge variant="outline">{subject.elementType}</Badge>
            </TableCell>
            <TableCell className="hidden md:table-cell">
              {getLevelName(subject.level.idLevel)}
            </TableCell>
            <TableCell className="hidden md:table-cell">
            {getProfessorName(subject.professor.idPerson)}
            </TableCell>
            <TableCell className="hidden md:table-cell">
            {getProfessorName(subject.coordinator.idPerson)}
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
                  {users && <SubjectUpdate subject={subject} users={users} prof={subject.professor} coord={subject.coordinator}/>}
                  <DropdownMenuItem onClick={() => handleClick(subject.idElement)}>Delete</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </TableRow>
          ))}

        </TableBody>
    )
}

export default SubjectTable;