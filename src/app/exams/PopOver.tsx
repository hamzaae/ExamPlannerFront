import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function PopOver({monitoring}) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Avatar>
          <AvatarFallback>AB</AvatarFallback>
        </Avatar>
      </PopoverTrigger>
      <PopoverContent className="w-180">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Exam Details</h4>
            <p className="text-sm text-muted-foreground">
              Get the details for the exam.{monitoring.coordinator.idPerson}
            </p>
          </div>
          <form className="grid w-full items-start gap-6">
              <div className="grid grid-cols-4 gap-4">
                    <div className="grid gap-3">
                      <Label htmlFor="top-k">Subject</Label>
                      <Input type="text" placeholder="Subject" value="Maths" disabled/>
                    </div>
                    <div className="grid gap-3">
                      <Label htmlFor="top-k">Coordinator</Label>
                      <Input type="text" placeholder="Coordinator" value="Coord 1" disabled/>
                    </div>
                    <div className="grid gap-3">
                      <Label htmlFor="top-k">Monitors</Label>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="outline">Open</Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-56">
                          <DropdownMenuLabel>Panel Position</DropdownMenuLabel>
                          <DropdownMenuSeparator />
                          <DropdownMenuRadioGroup >
                            <DropdownMenuRadioItem disabled value="">Prof 1</DropdownMenuRadioItem>
                            <DropdownMenuRadioItem disabled value="">Prof 2</DropdownMenuRadioItem>
                            <DropdownMenuRadioItem disabled value="">Prof 3</DropdownMenuRadioItem>
                          </DropdownMenuRadioGroup>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                    <div className="grid gap-3">
                      <Label htmlFor="top-k">Type</Label>
                      <Select defaultValue="">
                        <SelectTrigger>
                          <SelectValue placeholder="Select a level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="system">DS 1</SelectItem>
                          <SelectItem value="user">Exam</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-3">
                      <Label htmlFor="top-k">Number of Monitors / Room</Label>
                      <Input type="number" placeholder="Number of Monitors" value={2}/>
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
      </PopoverContent>
    </Popover>
  )
}
