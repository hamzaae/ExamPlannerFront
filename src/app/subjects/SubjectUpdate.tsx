
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

export function SubjectUpdate({ subject }) {

  const router = useRouter()

  const [title, setTitle] = useState(subject.title || "");
  const [type, setType] = useState(subject.type || "");
  const [level, setLevel] = useState(subject.level || "");
  const [professor, setProfessor] = useState(subject.professor || "");
  const [coordinator, setCoordinator] = useState(subject.coordinator || "");
  const [loading, setLoading] = useState(false);


  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true);
    const response = await fetch("http://localhost:4001/users/" + subject.id, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            "title": title,
            "type": type,
            "level": level,
            "professor": professor,
            "coordinator": coordinator
        }),
    })
    if (response.ok) {
      router.push("/subjects");
      window.location.reload();
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
            Insert subject infos here. Click save when you're done.
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
                          <SelectItem value="subject">Subject</SelectItem>
                          <SelectItem value="subsubject">Sub Subject</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="grid gap-3">
                      <Label htmlFor="top-k">Level</Label>
                      <Select name="level" value={level}
                        onValueChange={(value) => setLevel(value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="system">AP 1</SelectItem>
                          <SelectItem value="user">AP 2</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-3">
                      <Label htmlFor="top-k">Professor</Label>
                      {/* <Select name="professor" value={professor}
                        onValueChange={(value) => setProfessor(value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="system">Prof 1</SelectItem>
                          <SelectItem value="user">Prof 2</SelectItem>
                        </SelectContent>
                      </Select> */}
                      {/* <ComboSelect /> */}
                      <ComboList />
                    </div>
                    <div className="grid gap-3">
                      <Label htmlFor="top-k">Coordinator</Label>
                      {/* <Select name="coordinator" value={coordinator}
                        onValueChange={(value) => setCoordinator(value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="system">coord 1</SelectItem>
                          <SelectItem value="user">coord 2</SelectItem>
                        </SelectContent>
                      </Select> */}
                      <ComboList />
                    </div>
              </div>

            </div>
              <Button disabled={loading} type="submit">Save Subject</Button>
          </form>

    </DialogContent>
    </Dialog>


  )
}
