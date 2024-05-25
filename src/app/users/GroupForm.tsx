
import { Button } from "@/components/ui/button"
import { GroupCard } from "./GroupCard"
import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { Bird, Rabbit, Turtle } from "lucide-react"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"

import { useState } from "react"
import { useRouter } from "next/navigation"

export function GroupForm({users}) {

    const router = useRouter()

    const [members, setMembers] = useState([]);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [loading, setLoading] = useState(false);
  
  
    const handleSubmit = async (e) => {
      e.preventDefault()
      setLoading(true);
      const response = await fetch("http://localhost:4002/groups/", {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify({
            "name": name,
            "description": description,
            "members": members,
            "createDate": new Date().toLocaleString()
          }),
      })
      if (response.ok) {
        router.push("/users");
        window.location.reload();
      }
  
  }

  const handleSelectedMembers = (selectedMembers) => {
    setMembers(selectedMembers);
  };


  return (

    <Sheet>
    <SheetTrigger asChild>
        <Button variant="outline">Add Group</Button>
    </SheetTrigger>
    <SheetContent>
        <SheetHeader>
        <SheetTitle>New Group</SheetTitle>
        <SheetDescription>
            Create new group here. Click save when you're done.
        </SheetDescription>
        </SheetHeader>
        <form onSubmit={handleSubmit} className="grid gap-4 py-4">
        <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
            Group Name
            </Label>
            <Input name="name"  className="col-span-3" value={name}
                    onChange={(e) => setName(e.target.value)}/>
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
            About
            </Label>
            <Textarea name="description" placeholder="Group description." className="col-span-3 resize-none" value={description}
                    onChange={(e) => setDescription(e.target.value)}/>
        </div>
        <div className="grid grid-cols-2 items-center gap-4">
            <Label htmlFor="username" className="text-right">
            Members
            </Label>
            <GroupCard users={users} onSelectedMembersChange={handleSelectedMembers} />
        </div>
        <Button disabled={loading} type="submit">Save changes</Button>
        </form>
    </SheetContent>
</Sheet>

  )
}
