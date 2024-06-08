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
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function PopOver({monitoring, rooms}) {
  // console.log(monitoring)
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Avatar>
          <AvatarFallback>AB</AvatarFallback>
        </Avatar>
      </PopoverTrigger>
      <PopoverContent className="w-120">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Exam Details</h4>
            <p className="text-sm text-muted-foreground">
              Get the details for the exam.
            </p>
          </div>
          <form className="grid w-full items-start gap-6">
              <div className="grid grid-cols-3 gap-4">
                    <div className="grid gap-3">
                      <Label htmlFor="top-k">Subject</Label>
                      <Input type="text" placeholder="Subject" value={monitoring.exam.element.title} disabled/>
                    </div>
                    <div className="grid gap-3">
                      <Label htmlFor="top-k">Coordinator</Label>
                      <Input type="text" placeholder="Coordinator" value={monitoring.coordinator.firstName + " " + monitoring.coordinator.lastName} disabled/>
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
                            {monitoring.professors.map((professor) => (
                            <DropdownMenuRadioItem value="" disabled>{professor.firstName + " " + professor.lastName}</DropdownMenuRadioItem>
                            ))}
                          </DropdownMenuRadioGroup>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
              <div className="grid gap-3">
                      <Label htmlFor="top-k">Type</Label>
                      <Input type="text" placeholder="Type" value={monitoring.exam.examType} disabled/>
                    </div>
                    <div className="grid gap-3">
                      <Label htmlFor="top-k">Duration</Label>
                      <Input type="text" placeholder="Duration" value={monitoring.exam.duration} disabled/>
                    </div>
                    <div className="grid gap-3">
                      <Label htmlFor="top-k">Reel Duration</Label>
                      <Input type="number" step="0.25" max={parseInt(monitoring.exam.duration)} placeholder="reel duration" />
                    </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                    <div className="grid gap-3">
                      <Label htmlFor="top-k">PV</Label>
                      <Input type="file" placeholder="pv" />
                    </div>
                    <div className="grid gap-3">
                      <Label htmlFor="top-k">Repport</Label>
                      <Input type="file" placeholder="repport" />
                    </div>
                    <div className="grid gap-3">
                      <Label htmlFor="top-k">Rooms</Label>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="outline">Add Rooms</Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-56">
                          <DropdownMenuLabel>Panel Position</DropdownMenuLabel>
                          <DropdownMenuSeparator />
                            {rooms.map((room) => (
                            <DropdownMenuCheckboxItem checked={rooms.find(room => monitoring.room.idRoom == room.idRoom)} value={room.idRoom}>{room.nameRoom}</DropdownMenuCheckboxItem>
                            ))}
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
              </div>
            </form>
        </div>
      </PopoverContent>
    </Popover>
  )
}
