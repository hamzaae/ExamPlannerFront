"use client"

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
import { useState } from "react"
import { useRouter } from "next/navigation"
  




export default function RoomForm() {

    const router = useRouter()
    
    const [roomName, setRoomName] = useState('')
    const [roomType, setRoomType] = useState('')
    const [roomPlace, setRoomPlace] = useState('')
    const [roomSize, setRoomSize] = useState(0)

    const handleSubmit = async (e) => {
        e.preventDefault()
        const response = await fetch("http://localhost:4001/rooms", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "name": roomName,
                "type" : roomType,
                "place" : roomPlace,
                "size" : roomSize,
            }),
        })
        if (response.ok) {
            router.push("/rooms");
            window.location.reload();

        }
    }

    return (   
        
                <Dialog>
                    
                <DialogTrigger asChild>
                    <Button variant="outline">Add Room</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                    <DialogTitle>Add Room</DialogTitle>
                    <DialogDescription>
                        Insert room infos here. Click save when you&apos;re done.
                    </DialogDescription>
                    </DialogHeader>
                    <form onSubmit={handleSubmit}>
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="name" className="text-right">
                            Name
                            </Label>
                            <Input
                            id="name"
                            className="col-span-3"
                            value={roomName}
                            onChange={(e) => setRoomName(e.target.value)}
                            />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="username" className="text-right">
                            Type
                            </Label>
                            <Select value={roomType} onValueChange={(value) => setRoomType(value)}>
                            <SelectTrigger className="w-[180px]">
                                <SelectValue  />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="Amphie" >Amphie</SelectItem>
                                <SelectItem value="Room" >Room</SelectItem>
                                <SelectItem value="Tp" >Tp</SelectItem>
                            </SelectContent>
                            </Select>
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="name" className="text-right">
                            Place
                            </Label>
                            <Select value={roomPlace} onValueChange={(value) => setRoomPlace(value)}>
                            <SelectTrigger className="w-[180px]">
                                <SelectValue  />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="Block A" >Bloc A</SelectItem>
                                <SelectItem value="Block B" >Bloc B</SelectItem>
                                <SelectItem value="Amphie" >Amphie</SelectItem>
                            </SelectContent>
                            </Select>
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="username" className="text-right">
                            Size
                            </Label>
                            <Input
                            id="username"
                            type="number"
                            min={10}
                            max={100}
                            className="col-span-2"
                            value={roomSize}
                            onChange={(e) => setRoomSize(parseInt(e.target.value))}
                            />
                        </div>
                    </div>
                    <DialogFooter>
                    <Button type="submit">Save changes</Button>
                    </DialogFooter>
                    </form>
                </DialogContent>
                
                </Dialog>    
                 
    )
  }