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



export function ComboListE({
  // users,
  setSelectedStatus,
  selectedStatus,
  subjects
}) {
  const [open, setOpen] = React.useState(false)

    return (
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button variant="outline" className="justify-start">
            {selectedStatus ? <>{subjects.find(user => user.idElement === selectedStatus)?.title}</> : <>Choose </>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0" align="start">
        <Command>
          <CommandInput placeholder="Choose status..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup>
              {subjects.map((user) => (
                <CommandItem
                  key={user.idElement}
                  value={user.idElement}
                  onSelect={() => {
                    setSelectedStatus(user.idElement)
                    setOpen(false)
                  }}
                >
                  {user.title}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
        </PopoverContent>
      </Popover>
    )

}


