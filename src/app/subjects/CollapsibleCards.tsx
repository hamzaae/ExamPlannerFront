"use client"

import * as React from "react"
import { ChevronsUpDown, Plus, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

export function CollapsibleCards() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="w-[350px] space-y-2"
    >
      <div className="flex items-center justify-between space-x-4 px-4">
        <h4 className="text-sm font-semibold">
          Mathematics Departement : 3 Majors
        </h4>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="sm" className="w-9 p-0">
            <ChevronsUpDown className="h-4 w-4" />
            <span className="sr-only">Toggle</span>
          </Button>
        </CollapsibleTrigger>
      </div>
      <CollapsibleContent className="space-y-2">
      <div className="rounded-md border px-4 py-3 font-mono text-sm">
        Major 1: Algebra
      </div>
        <div className="rounded-md border px-4 py-3 font-mono text-sm">
          Major 2: Geometry
        </div>
        <div className="rounded-md border px-4 py-3 font-mono text-sm">
          Major 3: Calculus
        </div>
      </CollapsibleContent>
    </Collapsible>
  )
}
