
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

export function SubjectForm() {
  return (

    <Dialog>
    <DialogTrigger asChild>
        <Button variant="outline">Add Subject</Button>
    </DialogTrigger>
    <DialogContent className="sm:max-w-[825]">
        <DialogHeader>
        <DialogTitle>Add Subject</DialogTitle>
        <DialogDescription>
            Insert subject infos here. Click save when you're done.
        </DialogDescription>
        </DialogHeader>



        <div
            className="relative hidden flex-col items-start gap-8 md:flex" x-chunk="dashboard-03-chunk-0"
          >
            <form className="grid w-full items-start gap-6">
              <div className="grid grid-cols-3 gap-4">
                    <div className="grid gap-3">
                      <Label htmlFor="top-p">Title</Label>
                      <Input id="firstN" placeholder="Java" />
                    </div>
                    <div className="grid gap-3">
                      <Label htmlFor="top-k">Type</Label>
                      <Select defaultValue="">
                        <SelectTrigger>
                          <SelectValue placeholder="Select a type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="system">Subject</SelectItem>
                          <SelectItem value="user">Sub Subject</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="grid gap-3">
                      <Label htmlFor="top-k">Level</Label>
                      <Select defaultValue="">
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
                      <Select defaultValue="">
                        <SelectTrigger>
                          <SelectValue placeholder="Select a type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="system">Prof 1</SelectItem>
                          <SelectItem value="user">Prof 2</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="grid gap-3">
                      <Label htmlFor="top-k">Coordinator</Label>
                      <Select defaultValue="">
                        <SelectTrigger>
                          <SelectValue placeholder="Select a level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="system">coord 1</SelectItem>
                          <SelectItem value="user">coord 2</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
              </div>
            </form>
          </div>


        <DialogFooter>
        <Button type="submit">Save Subject</Button>
        </DialogFooter>
    </DialogContent>
    </Dialog>



  )
}
