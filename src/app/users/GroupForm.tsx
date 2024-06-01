
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
import { toast } from "@/components/ui/use-toast"

export function GroupForm({users}) {

    const router = useRouter()

    const [members, setMembers] = useState([]);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [loading, setLoading] = useState(false);
  
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      setLoading(true);
    
      // 1. Create the group
      const groupResponse = await fetch("http://localhost:8080/api/Group", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
        body: JSON.stringify({
          title: name,
          description: description,
          createDate: new Date().toLocaleString(),
        }),
      });
    
      if (!groupResponse.ok) {
        // Handle errors creating the group
          const errorData = await groupResponse.json();
          const errorMessage = errorData.message || "An error occurred";
          toast({
            title: "Uh oh! Something went wrong.",
            description: errorMessage,
          })
          setLoading(false);
        return;
      }
    
      // 2. Extract the created group ID from the response
      const groupData = await groupResponse.json();
      // console.log(members);
      // console.log(typeof members);
    
      // 3. Add members to the group
      const addMembersResponse = await fetch(`http://localhost:8080/api/Group/${groupData}/addProfessortogroup`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
        body: JSON.stringify(Array.from(new Set(members.map(member => parseInt(member, 10))))),
      });
    
      if (!addMembersResponse.ok) {
        // Handle errors adding members
        const errorData = await addMembersResponse.json();
        const errorMessage = errorData.message || "An error occurred";
        toast({
          title: "Uh oh! Something went wrong.",
          description: errorMessage,
        })
        setLoading(false);
      }
    
      setLoading(false);
    
      router.push("/users");
      window.location.reload();
    };
    

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
            Create new group here. Click save when you&apos;re done.
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
