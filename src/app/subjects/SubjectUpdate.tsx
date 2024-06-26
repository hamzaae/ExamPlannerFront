
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter
  } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"

import { use, useState } from "react"
import { useRouter } from "next/navigation"
import { DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import { ComboList } from "./ComboList"
import { toast } from "@/components/ui/use-toast"

export function SubjectUpdate({ subject, users, prof, coord , levels}) {

  const router = useRouter()

  const [title, setTitle] = useState(subject.title || "");
  const [type, setType] = useState(subject.elementType || "");
  const [level, setLevel] = useState(subject.level.idLevel || "");
  const [professor, setProfessor] = useState(prof || null);
  const [coordinator, setCoordinator] = useState(coord || null);
  const [loading, setLoading] = useState(false);

  const getUserName = (userId) => {
    const user = users.find(user => user.id === userId);
    return user ? `${user.firstName} ${user.lastName}` : '';
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true);
    const response = await fetch("http://localhost:8080/api/Educationalelement/" + subject.id, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + localStorage.getItem("token")
        },
        body: JSON.stringify({
            "title": title,
            "type": type,
            "level": level,
            "professor": professor?.id || null,
            "coordinator": coordinator?.id || null
        }),
    })
    if (response.ok) {
      router.push("/subjects");
      window.location.reload();
    } else {
      setLoading(false)
      const errorData = await response.json();
      const errorMessage = errorData.message || "An error occurred";
      toast({
        title: "Uh oh! Something went wrong.",
        description: errorMessage,
      });
    }

}

  return (

    <Dialog>
    <DialogTrigger asChild>
    <DropdownMenuItem
        onSelect={(event) => {
          event.preventDefault();
          event.stopPropagation();
        }}
        >Edit</DropdownMenuItem>
    </DialogTrigger>
    <DialogContent className="sm:max-w-[825]">
        <DialogHeader>
        <DialogTitle>Add Subject</DialogTitle>
        <DialogDescription>
            Insert subject infos here. Click save when you&apos;re done.
        </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit}
            className="relative hidden flex-col items-start gap-8 md:flex" x-chunk="dashboard-03-chunk-0"
          >
            <div className="grid w-full items-start gap-6">
              <div className="grid grid-cols-3 gap-4">
                    <div className="grid gap-3">
                      <Label htmlFor="top-p">Title</Label>
                      <Input name="title" placeholder="Java" value={title}
                    onChange={(e) => setTitle(e.target.value)}/>
                    </div>
                    <div className="grid gap-3">
                      <Label htmlFor="top-k">Type</Label>
                      <Select name="type" value={type}
                        onValueChange={(value) => setType(value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="ELEMENT">ELEMENT</SelectItem>
                          <SelectItem value="MODULE">MODULE</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="grid gap-3">
                      <Label htmlFor="top-k">Level</Label>
                      <Select name="level" value={level}
                        onValueChange={(value) => setLevel(value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a level">
                          {levels &&
                            levels.find((lvl) => lvl.idLevel == level)?.title ||
                            "Select a level"}
                          </SelectValue>
                        </SelectTrigger>
                        <SelectContent>
                          {levels && levels.map((level) => (
                          <SelectItem value={level.idLevel}>{level.title}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-3">
                      <Label htmlFor="top-k">Professor</Label>
                      {users && <ComboList users={users} setSelectedStatus={setProfessor} selectedStatus={professor}/>}
                    </div>
                    <div className="grid gap-3">
                      <Label htmlFor="top-k">Coordinator</Label>
                      <ComboList
                        users={users}
                        setSelectedStatus={setCoordinator}
                        selectedStatus={coordinator}
                      />
                    </div>
              </div>

            </div>
              <Button disabled={loading} type="submit">Save Subject</Button>
          </form>

    </DialogContent>
    </Dialog>


  )
}