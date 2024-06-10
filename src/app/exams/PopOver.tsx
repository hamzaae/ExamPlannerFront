"use client"

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
import { useState } from "react"
import { toast } from "@/components/ui/use-toast"
import { useRouter } from "next/navigation"

export function PopOver({monitoring, rooms}) {
  const router = useRouter()

  // console.log(monitoring)
  
  const [report, setReport] = useState(null);
  const [pvFile, setPvFile] = useState(null);
  const [duree, setDuree] = useState(monitoring.exam.reelDuration != null ? monitoring.exam.reelDuration : monitoring.exam.duration);

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    if (name === 'report') setReport(files[0]);
    if (name === 'pvFile') setPvFile(files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!report || !pvFile ) {
      // toast ({message: 'All files are required'})
      // setError('All files are required');
      return;
    }
    const formData = new FormData();
    formData.append('report', report);
    formData.append('pvFile', pvFile);


    try {
      const response = await fetch(`http://localhost:8080/api/Exam/report/${monitoring.exam.idExam}?duree=`+1, {
        method: 'POST',
        headers: {
          "Authorization": "Bearer " + localStorage.getItem("token")
      },
        body: formData,
      });

      if (!response.ok) {
        throw new Error('File upload failed');
      }

      const result = await response.json();
      // setSuccess('Files uploaded successfully');
      // setError(null);
      console.log(result);
      window.location.reload();
      router.push("/exams?date=" + date);
    } catch (err) {
      // setError(err.message);
      // setSuccess(null);
      console.error(err);
    }
  };
  // console.log(monitoring)
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Avatar>
          <AvatarFallback>{monitoring.exam.reelDuration == null ? monitoring.coordinator.lastName[0] + monitoring.coordinator.firstName[0] : "✓"}</AvatarFallback>
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
          <form className="grid w-full items-start gap-6" onSubmit={handleSubmit}>
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
                          <DropdownMenuLabel>Professors</DropdownMenuLabel>
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
                      <Input type="text" name="duree" value={duree} onChange={(e) => setDuree(e.target.value)} placeholder="reel duration" disabled={monitoring.exam.reelDuration != null}/>
                    </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                    <div className="grid gap-3">
                      <Label htmlFor="top-k">PV</Label>
                      {monitoring.exam.reelDuration != null ? <Input type="text" placeholder="pv" value={monitoring.exam.pv} disabled/> : 
                      <Input type="file" placeholder="pv" name="pvFile" onChange={handleFileChange} /> }
                    </div>
                    <div className="grid gap-3">
                      <Label htmlFor="top-k">Repport</Label>
                      {monitoring.exam.reelDuration != null ? <Input type="text" placeholder="repport" value={monitoring.exam.rapport} disabled/> : 
                      <Input type="file" placeholder="repport" name="report" onChange={handleFileChange} /> }
                    </div>
                    <div className="grid gap-3">
                      <Label htmlFor="top-k">Abscence Controller</Label>
                      <Input type="text" placeholder="Administrator" value={monitoring.administrator.firstName + " " + monitoring.administrator.lastName} disabled/>
                    </div>
              </div>
              <Button type="submit" disabled={monitoring.exam.reelDuration != null}>Validate</Button>
            </form>
        </div>
      </PopoverContent>
    </Popover>
  )
}
