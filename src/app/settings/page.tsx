"use client"
import {
    Bird,
    Book,
    Bot,
    Code2,
    CornerDownLeft,
    LifeBuoy,
    Mic,
    Paperclip,
    Rabbit,
    // Settings,
    Settings2,
    Share,
    SquareTerminal,
    SquareUser,
    Triangle,
    Turtle,
  } from "lucide-react"
  
  import { Badge } from "@/components/ui/badge"
  import { Button } from "@/components/ui/button"
  import {
    Drawer,
    DrawerContent,
    DrawerDescription,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
  } from "@/components/ui/drawer"
  import { Input } from "@/components/ui/input"
  import { Label } from "@/components/ui/label"
  import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  import { Textarea } from "@/components/ui/textarea"
  import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
  } from "@/components/ui/tooltip"

  import Link from "next/link"
import {
  File,
  ListFilter,
} from "lucide-react"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Progress } from "@/components/ui/progress"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export default function Settings() {

return(

            <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-">

                  <form className="grid w-full max-w-screen-md gap-6">
                    <fieldset className="grid gap-6 rounded-lg border p-4">
                      <legend className="-ml-1 px-1 text-sm font-medium">
                        Settings
                      </legend>
                      <div className="grid gap-3">
                        <Label htmlFor="model">Model</Label>
                        <Select>
                          <SelectTrigger
                            id="model"
                            className="items-start [&_[data-description]]:hidden"
                          >
                            <SelectValue placeholder="Select a model" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="genesis">
                              <div className="flex items-start gap-3 text-muted-foreground">
                                <Rabbit className="size-5" />
                                <div className="grid gap-0.5">
                                  <p>
                                    Neural{" "}
                                    <span className="font-medium text-foreground">
                                      Genesis
                                    </span>
                                  </p>
                                  <p className="text-xs" data-description>
                                    Our fastest model for general use cases.
                                  </p>
                                </div>
                              </div>
                            </SelectItem>
                            <SelectItem value="explorer">
                              <div className="flex items-start gap-3 text-muted-foreground">
                                <Bird className="size-5" />
                                <div className="grid gap-0.5">
                                  <p>
                                    Neural{" "}
                                    <span className="font-medium text-foreground">
                                      Explorer
                                    </span>
                                  </p>
                                  <p className="text-xs" data-description>
                                    Performance and speed for efficiency.
                                  </p>
                                </div>
                              </div>
                            </SelectItem>
                            <SelectItem value="quantum">
                              <div className="flex items-start gap-3 text-muted-foreground">
                                <Turtle className="size-5" />
                                <div className="grid gap-0.5">
                                  <p>
                                    Neural{" "}
                                    <span className="font-medium text-foreground">
                                      Quantum
                                    </span>
                                  </p>
                                  <p className="text-xs" data-description>
                                    The most powerful model for complex computations.
                                  </p>
                                </div>
                              </div>
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="grid gap-3">
                        <Label htmlFor="temperature">Temperature</Label>
                        <Input id="temperature" type="number" placeholder="0.4" />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="grid gap-3">
                          <Label htmlFor="top-p">Top P</Label>
                          <Input id="top-p" type="number" placeholder="0.7" />
                        </div>
                        <div className="grid gap-3">
                          <Label htmlFor="top-k">Top K</Label>
                          <Input id="top-k" type="number" placeholder="0.0" />
                        </div>
                      </div>
                    </fieldset>
                  </form>


            </div>


        )
  }