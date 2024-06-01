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
import { ComboList } from "../subjects/ComboList"
import { ComboListE } from "./ComboListE"
import { toast } from "@/components/ui/use-toast"
import { set } from "date-fns"
  




export default function ExamForm({subjects, room, startTime, date}) {

    const router = useRouter()
    
    const [subject, setSubject] = useState('')
    const [session, setSession] = useState('')
    const [semester, setSemester] = useState('')
    const [type, setType] = useState('')
    const [nbr, setNbr] = useState(2)
    const [preuve, setPreuve] = useState(null)
    const [loading, setLoading] = useState(false)

    const handleFileChange = (event) => {
      const file = event.target.files[0];
      setPreuve(file);
    };

    const handleSubmit = async (e) => {
        e.preventDefault()
        const examResponse = await fetch("http://localhost:8080/api/Exam", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem("token")
            },
            body: JSON.stringify({
                "startTime": startTime.toString(),
                "endTime" : (startTime + 2).toString(),
                "preuve" : "preuve",
                "element" : {"idElement": subject},
            }),
        })

        if (examResponse.ok) {
            const examData = await examResponse.json();

            const monitorResponse = await fetch("http://localhost:8080/api/monitorings", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem("token")
            },
            body: JSON.stringify({
                "dateExam": date, 
                "administrator" : {"idPerson": 1},
                // "coordinator" : {"idPerson": 1},
                "room" : {"idRoom": room.idRoom},
                "exam" : {"idExam": examData},
            }),
        })
        if (monitorResponse.ok){
            router.push("/rooms")
            window.location.reload();
        }
        else {
          setLoading(false)
          const errorData = await monitorResponse.json();
          const errorMessage = errorData.message || "An error occurred";
          toast({
            title: "Uh oh! Something went wrong.",
            description: errorMessage,
          });
        }
        }
        else {
          setLoading(false)
          const errorData = await examResponse.json();
          const errorMessage = errorData.message || "An error occurred";
          toast({
            title: "Uh oh! Something went wrong.",
            description: errorMessage,
          });
        }
        
    }



    return (   
        
        <Dialog>
            
        <DialogTrigger asChild>
            {/* <Button >New Exam</Button> */}
            <Badge>new</Badge>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[825]">
        <DialogHeader>
        <DialogTitle>New exam</DialogTitle>
        <DialogDescription>
            Insert exam infos here. Click save when you&apos;re done.
        </DialogDescription>
        </DialogHeader>



        <div
            className="relative hidden flex-col items-start gap-8 md:flex" x-chunk="dashboard-03-chunk-0"
          >
            <form className="grid w-full items-start gap-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-4 gap-4">
                    <div className="grid gap-3">
                      <Label htmlFor="top-k">Subject</Label>
                      <ComboListE subjects={subjects} setSelectedStatus={setSubject} selectedStatus={subject}/>
                    </div>
                    <div className="grid gap-3">
                      <Label htmlFor="top-k">Session</Label>
                      <Select name="session" value={session}
                        onValueChange={(value) => setSession(value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="NORMAL">NORMAL</SelectItem>
                          <SelectItem value="RETAKE">RETAKE</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="grid gap-3">
                      <Label htmlFor="top-k">Semester</Label>
                      <Select name="semster" value={semester}
                        onValueChange={(value) => setSemester(value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a semster" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="PRINTEMPS">PRINTEMPS</SelectItem>
                          <SelectItem value="AUTOMNE">AUTOMNE</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="grid gap-3">
                      <Label htmlFor="top-k">Type</Label>
                      <Select name="type" value={type}
                        onValueChange={(value) => setType(value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="EXAM">EXAM</SelectItem>
                          <SelectItem value="DS">DS</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-3">
                      <Label htmlFor="top-k">Number of Monitors / Room</Label>
                      <Input type="number" name="nbr" placeholder="Number of Monitors" value={nbr} onChange={(e) => setNbr(e.target.value)}/>
                    </div>
                    <div className="grid gap-3">
                      <Label htmlFor="top-k">Paper</Label>
                      <Input type="file" name="preuve" onChange={handleFileChange}/>
                    </div>
              </div>
              <Button type="submit" disabled={loading}>Save Exam</Button>
            </form>
          </div>


    </DialogContent>
    </Dialog>
                 
    )
  }