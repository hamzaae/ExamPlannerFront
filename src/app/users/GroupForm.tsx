
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

export function GroupForm() {
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
        <div className="grid gap-4 py-4">
        <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
            Group Name
            </Label>
            <Input id="name" value="" className="col-span-3" />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
            About
            </Label>
            <Textarea placeholder="Group description." className="col-span-3 resize-none" />
        </div>
        <div className="grid grid-cols-2 items-center gap-4">
            <Label htmlFor="username" className="text-right">
            Members
            </Label>
            <GroupCard />
        </div>
        </div>
        <SheetFooter>
        <SheetClose asChild>
            <Button type="submit">Save changes</Button>
        </SheetClose>
        </SheetFooter>
    </SheetContent>
</Sheet>

  )
}
