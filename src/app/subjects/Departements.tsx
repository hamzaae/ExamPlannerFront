
import { Button } from "@/components/ui/button"

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter
  } from "@/components/ui/dialog"
import { TabsCard } from "./TabsCard"

export function Departements() {
  return (

    <Dialog>
    <DialogTrigger asChild>
        <Button variant="outline">Departements</Button>
    </DialogTrigger>
    <DialogContent className="sm:max-w-[825]">
        <DialogHeader>
        <DialogTitle>Departements Details</DialogTitle>
        <DialogDescription>
            Get all departements and their Majors here
        </DialogDescription>
        </DialogHeader>

        <TabsCard />
    </DialogContent>
    </Dialog>



  )
}
