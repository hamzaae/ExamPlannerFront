"use client"

import * as React from "react"


import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

type User = (typeof users)[number]


export function ComboList({
  users,
  setSelectedStatus,
  selectedStatus
}: {
  users: User[];
  setSelectedStatus: (status: User | null) => void;
  selectedStatus: User | null;
}) {
  const [open, setOpen] = React.useState(false)
  // const [selectedStatus, setSelectedStatus] = React.useState<User | null>(
  //   null
  // )


    return (
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button variant="outline" className="w-[150px] justify-start">
            {selectedStatus ? <>{selectedStatus.lastName}</> : <>Choose Professor</>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0" align="start">
          <StatusList users={users} setOpen={setOpen} setSelectedStatus={setSelectedStatus} />
        </PopoverContent>
      </Popover>
    )

}

function StatusList({
  users,
  setOpen,
  setSelectedStatus,
}: {
  users: User[];
  setOpen: (open: boolean) => void
  setSelectedStatus: (status: User | null) => void
}) {
  return (
    <Command>
      <CommandInput placeholder="Choose status..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup>
          {users.map((user) => (
            <CommandItem
              key={user.id}
              value={user.id}
              onSelect={(value) => {
                setSelectedStatus(
                  users.find((user) => user.id === value) || null
                )
                setOpen(false)
              }}
            >
              {user.firstName + " " + user.lastName}
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </Command>
  )
}
