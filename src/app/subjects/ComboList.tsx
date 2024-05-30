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



export function ComboList({
  users,
  setSelectedStatus,
  selectedStatus
}) {
  const [open, setOpen] = React.useState(false)

    return (
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button variant="outline" className="w-[150px] justify-start">
            {selectedStatus ? <>{users.find(user => user.idPerson === selectedStatus)?.firstName + " " + users.find(user => user.idPerson === selectedStatus)?.lastName}</> : <>Choose Professor</>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0" align="start">
        <Command>
          <CommandInput placeholder="Choose status..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup>
              {users.map((user) => (
                <CommandItem
                  key={user.idPerson}
                  value={user.idPerson}
                  onSelect={() => {
                    setSelectedStatus(user.idPerson)
                    setOpen(false)
                  }}
                >
                  {user.firstName + " " + user.lastName}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
        </PopoverContent>
      </Popover>
    )

}


