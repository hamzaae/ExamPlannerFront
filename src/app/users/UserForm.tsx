
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
import { redirect, useRouter } from "next/navigation"
import useFetch from "../useFetch"
import { toast } from "@/components/ui/use-toast"

export function UserForm({ sectors}) {

  const router = useRouter()

  const [selectedRole, setSelectedRole] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [cin, setCin] = useState('');
  const [email, setEmail] = useState('');
  const [grade, setGrade] = useState('');
  const [speciality, setSpeciality] = useState('');
  const [selectedSector, setSelectedSector] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleRoleChange = (value) => {
    setSelectedRole(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true);
    const response = await fetch("http://localhost:8080/api/personnel", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + localStorage.getItem("token")
        },
        body: JSON.stringify({
          "type": selectedRole,
          "firstName": firstName,
          "lastName": lastName,
          "cin": cin,
          "email": email,
          "grade": grade,
          "speciality": speciality,
          "idSector": sectors.find(sector => sector.title === selectedSector)?.idSector,
          "idDepartement": 1 // hardcoded for now
        }),
    })
    if (response.ok) {
      router.push("/users");
      window.location.reload();
    }
    else {
      setLoading(false)
      const errorData = await response.json();
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
        <Button variant="outline">Add User</Button>
    </DialogTrigger>
    <DialogContent className="sm:max-w-[825]">
        <DialogHeader>
        <DialogTitle>Add User</DialogTitle>
        <DialogDescription>
            Insert user infos here. Click save when you&apos;re done.
        </DialogDescription>
        </DialogHeader>



        <form onSubmit={handleSubmit}
            className="relative hidden flex-col items-start gap-8 md:flex" x-chunk="dashboard-03-chunk-0"
          >
            <div className="grid w-full items-start gap-6">
            <fieldset className="grid gap-6 rounded-lg border p-4">
                <legend className="-ml-1 px-1 text-sm font-medium">
                  Personnel
                </legend>
                <div className="grid grid-cols-3 gap-4">
                  <div className="grid gap-3">
                    <Label htmlFor="top-p">First Name</Label>
                    <Input name="firstName" placeholder="Tarik" value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}/>
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="top-k">Last Name</Label>
                    <Input name="lastName" placeholder="BOUDAA" value={lastName}
          onChange={(e) => setLastName(e.target.value)}/>
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="top-k">CIN</Label>
                    <Input name="cin" placeholder="A123456" value={cin}
          onChange={(e) => setCin(e.target.value)}/>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-3">
                  <Label htmlFor="temperature">Email</Label>
                  <Input name="email" type="email" placeholder="tarik@email.com" value={email}
          onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className="grid gap-3">
                    <Label htmlFor="top-k">Role</Label>
                    <Select name="role" value={selectedRole} onValueChange={handleRoleChange}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Professor">Professor</SelectItem>
                      <SelectItem value="Administrator">Administrator</SelectItem>
                    </SelectContent>
                  </Select>
                  </div>
                </div>
            </fieldset>
            <fieldset className={`Professor grid gap-6 rounded-lg border p-4 ${selectedRole === 'Professor' ? '' : 'hidden'}`}>
              <legend className="-ml-1 px-1 text-sm font-medium">
                Professor
              </legend>
              <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-3">
                <Label htmlFor="role">Speciality</Label>
                <Select name="speciality" value={speciality}
          onValueChange={(value) => setSpeciality(value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a speciality" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="mathematics">Mathematics</SelectItem>
                    <SelectItem value="cs">Computer Science</SelectItem>
                    <SelectItem value="civil">Civil</SelectItem>
                    <SelectItem value="energies">Energies</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-3">
                <Label htmlFor="role">Sector</Label>
                <Select name="sector" value={selectedSector} onValueChange={(value) => setSelectedSector(value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a sector">{selectedSector}</SelectValue>
                  </SelectTrigger>
                  <SelectContent>
                    {sectors.map((sector) => (
                      <SelectItem key={sector.idSector} value={sector.title}>
                        {sector.title}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              </div>
            </fieldset>
            <fieldset className={`Administrator grid gap-6 rounded-lg border p-4 ${selectedRole === 'Administrator' ? '' : 'hidden'}`}>
              <legend className="-ml-1 px-1 text-sm font-medium">
                Administartor
              </legend>
              <div className="grid gap-3">
                <Label htmlFor="role">Grade</Label>
                <Select name="grade" value={grade}
          onValueChange={(value) => setGrade(value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a Grade" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="director">Director</SelectItem>
                    <SelectItem value="coordinator">Coordinator</SelectItem>
                    <SelectItem value="administrator">Admin</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </fieldset>
            </div>
            <Button disabled={loading} type="submit">Save User</Button>
          </form>

    </DialogContent>
    </Dialog>


  )
}
