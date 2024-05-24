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
import { Badge } from "@/components/ui/badge"
  




export default function ExamForm() {

    const router = useRouter()
    
    const [roomName, setRoomName] = useState('')
    const [roomType, setRoomType] = useState('')
    const [roomPlace, setRoomPlace] = useState('')
    const [roomSize, setRoomSize] = useState(0)

    const handleSubmit = async (e) => {
        e.preventDefault()
        const response = await fetch("http://localhost:4000/rooms", {
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
            router.push("/rooms")
        }
    }

    return (   
        
        <Dialog>
            
        <DialogTrigger asChild>
            <Button >New Exam</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[825]">
        <DialogHeader>
        <DialogTitle>New exam</DialogTitle>
        <DialogDescription>
            Insert exam infos here. Click save when you're done.
        </DialogDescription>
        </DialogHeader>



        <div
            className="relative hidden flex-col items-start gap-8 md:flex" x-chunk="dashboard-03-chunk-0"
          >
            <form className="grid w-full items-start gap-6">
              <div className="grid grid-cols-4 gap-4">
                    <div className="grid gap-3">
                      <Label htmlFor="top-k">Subject</Label>
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
                      <Label htmlFor="top-k">Session</Label>
                      <Select defaultValue="">
                        <SelectTrigger>
                          <SelectValue placeholder="Select a level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="system">Normal</SelectItem>
                          <SelectItem value="user">Ratt</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="grid gap-3">
                      <Label htmlFor="top-k">Semester</Label>
                      <Select defaultValue="">
                        <SelectTrigger>
                          <SelectValue placeholder="Select a level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="system">Print</SelectItem>
                          <SelectItem value="user">Autom</SelectItem>
                        </SelectContent>
                      </Select>
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