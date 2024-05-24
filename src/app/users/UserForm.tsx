
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
import { Bird, Rabbit, Turtle } from "lucide-react"
import { Textarea } from "@/components/ui/textarea"

export function UserForm() {

  


  return (

    <Dialog>
    <DialogTrigger asChild>
        <Button variant="outline">Add User</Button>
    </DialogTrigger>
    <DialogContent className="sm:max-w-[825]">
        <DialogHeader>
        <DialogTitle>Add User</DialogTitle>
        <DialogDescription>
            Insert user infos here. Click save when you're done.
        </DialogDescription>
        </DialogHeader>



        <div
            className="relative hidden flex-col items-start gap-8 md:flex" x-chunk="dashboard-03-chunk-0"
          >
            <form className="grid w-full items-start gap-6">
            <fieldset className="grid gap-6 rounded-lg border p-4">
                <legend className="-ml-1 px-1 text-sm font-medium">
                  Personnel
                </legend>
                <div className="grid grid-cols-3 gap-4">
                  <div className="grid gap-3">
                    <Label htmlFor="top-p">First Name</Label>
                    <Input id="firstN" placeholder="Tarik" />
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="top-k">Last Name</Label>
                    <Input id="lastN" placeholder="BOUDAA" />
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="top-k">CIN</Label>
                    <Input id="cin" placeholder="A123456" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-3">
                  <Label htmlFor="temperature">Email</Label>
                  <Input id="email" type="email" placeholder="tarik@email.com" />
                </div>
                <div className="grid gap-3">
                    <Label htmlFor="top-k">Role</Label>
                    <Select defaultValue="">
                    <SelectTrigger>
                      <SelectValue placeholder="Select a role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="professor">Professor</SelectItem>
                      <SelectItem value="admin">Administrator</SelectItem>
                    </SelectContent>
                  </Select>
                  </div>
                </div>
            </fieldset>
            <fieldset className="grid gap-6 rounded-lg border p-4 ">
              <legend className="-ml-1 px-1 text-sm font-medium">
                Professor
              </legend>
              <div className="grid gap-3">
                <Label htmlFor="role">Speciality</Label>
                <Select defaultValue="system">
                  <SelectTrigger>
                    <SelectValue placeholder="Select a role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="system">Spec 1</SelectItem>
                    <SelectItem value="user">Spec 2</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </fieldset>
            <fieldset className="grid gap-6 rounded-lg border p-4 ">
              <legend className="-ml-1 px-1 text-sm font-medium">
                Administartif
              </legend>
              <div className="grid gap-3">
                <Label htmlFor="role">Grade</Label>
                <Select defaultValue="system">
                  <SelectTrigger>
                    <SelectValue placeholder="Select a role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="system">Grade 1</SelectItem>
                    <SelectItem value="user">Grade 2</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </fieldset>
            </form>
          </div>



        <DialogFooter>
        <Button type="submit">Save User</Button>
        </DialogFooter>
    </DialogContent>
    </Dialog>



  )
}
