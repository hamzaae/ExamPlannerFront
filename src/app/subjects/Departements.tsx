
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
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"


export function Departements({departements}) {
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
        <Table>
          {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
          <TableHeader>
            <TableRow>
              <TableHead>Departement Name</TableHead>
              {/* <TableHead>Professors Count</TableHead> */}
            </TableRow>
          </TableHeader>
          <TableBody>
              {departements.map((departement) => (
            <TableRow>
              <TableCell className="font-medium">{departement.title}</TableCell>
              {/* <TableCell>TODO</TableCell> */}
            </TableRow>
              ))}
          </TableBody>
        </Table>


        {/* <TabsCard /> */}
    </DialogContent>
    </Dialog>



  )
}
