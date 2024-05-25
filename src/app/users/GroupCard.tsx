import * as React from "react"
import { Check, Plus } from "lucide-react"

import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
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
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"


type User = (typeof users)[number]

export function GroupCard({ users, onSelectedMembersChange }) {
    const [open, setOpen] = React.useState(false)
    const [selectedUsers, setSelectedUsers] = React.useState<User[]>([])

    const handleClick = (e) => {
        e.preventDefault(); 
        setOpen(true);
    };

    return (
        <>
            <TooltipProvider delayDuration={0}>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button
                            size="icon"
                            variant="outline"
                            className="ml-auto rounded-full"
                            onClick={handleClick}
                        >
                            <Plus className="h-4 w-4" />
                            <span className="sr-only">Add Members</span>
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent sideOffset={10}>Group Members</TooltipContent>
                </Tooltip>
            </TooltipProvider>
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogContent className="gap-0 p-0 outline-none">
                    <DialogHeader className="px-4 pb-4 pt-5">
                        <DialogTitle>Group Members</DialogTitle>
                        <DialogDescription>
                            Add a user to this Group. This will create a new community.
                        </DialogDescription>
                    </DialogHeader>
                    <Command className="overflow-hidden rounded-t-none border-t">
                        <CommandInput placeholder="Search user..." />
                        <CommandList>
                            <CommandEmpty>No users found.</CommandEmpty>
                            <CommandGroup className="p-2">
                                {users.map((user) => (
                                    <CommandItem
                                        key={user.email}
                                        className="flex items-center px-2"
                                        onSelect={() => {
                                            if (selectedUsers.includes(user)) {
                                                return setSelectedUsers(
                                                    selectedUsers.filter(
                                                        (selectedUser) => selectedUser !== user
                                                    )
                                                )
                                            }

                                            return setSelectedUsers(
                                                [...users].filter((u) =>
                                                    [...selectedUsers, user].includes(u)
                                                )
                                            )
                                        }}
                                    >
                                        <Avatar>
                                            {/* <AvatarImage src={user.avatar} alt="Image" /> */}
                                            <AvatarFallback>{user.lastName[0]}</AvatarFallback>
                                        </Avatar>
                                        <div className="ml-2">
                                            <p className="text-sm font-medium leading-none">
                                                {user.firstName + " " + user.lastName}
                                            </p>
                                            <p className="text-sm text-muted-foreground">
                                                {user.email}
                                            </p>
                                        </div>
                                        {selectedUsers.includes(user) ? (
                                            <Check className="ml-auto flex h-5 w-5 text-primary" />
                                        ) : null}
                                    </CommandItem>
                                ))}
                            </CommandGroup>
                        </CommandList>
                    </Command>
                    <DialogFooter className="flex items-center border-t p-4 sm:justify-between">
                        {selectedUsers.length > 0 ? (
                            <div className="flex -space-x-2 overflow-hidden">
                                {selectedUsers.map((user) => (
                                    <Avatar
                                        key={user.email}
                                        className="inline-block border-2 border-background"
                                    >
                                        {/* <AvatarImage src={user.avatar} /> */}
                                        <AvatarFallback>{user.lastName[0]}</AvatarFallback>
                                    </Avatar>
                                ))}
                            </div>
                        ) : (
                            <p className="text-sm text-muted-foreground">
                                Select users to add to this group.
                            </p>
                        )}
                        <Button
                            disabled={selectedUsers.length < 1}
                            onClick={() => {
                                const selectedMemberIds = selectedUsers.map(user => user.id);
                                onSelectedMembersChange(selectedMemberIds);
                                setOpen(false);
                            }}
                        >
                            Continue
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </>
    )
}