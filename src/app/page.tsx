"use client"
import Link from "next/link"
import {
  File,
  ListFilter,
  School,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button, buttonVariants } from "@/components/ui/button"
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
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { TooltipProvider } from "@/components/ui/tooltip";
import SideBar from "@/components/SideBar";
import HeaderBar from "@/components/HeaderBar";
// import Login from "@/components/Login";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import { useRouter } from "next/navigation"
import { useState } from "react"


import Image from "next/image"

import { cn } from "@/lib/utils"
import { UserAuthForm } from "@/components/UserAuthForm"
import { Icons } from "@/components/ui/icons"


export default function MainHome() {

  const router = useRouter()

  const [state, setState] = useState({
    username: "",
    password: ""
  })
  
  const [isLoading, setIsLoading] = useState<boolean>(false)

  function handleChange(e) {
    const copy = { ...state }
    copy[e.target.name] = e.target.value
    setState(copy)
  }

  async function handleSubmit() {
    setIsLoading(true)
    const username = state.username; 
    const password = state.password; 
  
    const res = await fetch("http://localhost:8080/api/auth/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Basic " + btoa(username + ":" + password)
      }
    });
  
    if (res.ok) {
      const token = await res.text(); 
      localStorage.setItem("token", token);
      router.push("/home");
      // window.location.reload();
    } else {
      alert("Bad credentials");
      setIsLoading(false);
    }
  }




    return (

      // <div className="flex items-center justify-center py-20">
      //   <div className="mx-auto grid w-[350px] gap-8">
      //     <div className="grid gap-2 text-center">
      //       <h1 className="text-3xl font-bold">Login</h1>
      //       <p className="text-balance text-muted-foreground">
      //         Enter your email below to login to your account 
      //       </p>
      //     </div>
      //     <div className="grid gap-4">
      //       <div className="grid gap-2">
      //         <Label htmlFor="email">Email</Label>
      //         <Input
      //           id="email"
      //           type="email"
      //           placeholder="m@example.com"
      //           required
      //           name="username" 
      //           value={state.username} 
      //           onChange={handleChange}
      //         />
      //       </div>
      //       <div className="grid gap-2">
      //         <div className="flex items-center">
      //           <Label htmlFor="password">Password</Label>
      //           {/* <Link
      //             href="/forgot-password"
      //             className="ml-auto inline-block text-sm underline"
      //           >
      //             Forgot your password?
      //           </Link> */}
      //         </div>
      //         <Input 
      //         id="password" 
      //         type="password" 
      //         name="password" 
      //         value={state.password} 
      //         onChange={handleChange}
      //         required 
      //         />
      //       </div>
      //       <Button onClick={handleSubmit} className="w-full">
      //         Login
      //       </Button>
      //     </div>
      //   </div>
      // </div>

      <div className="container relative hidden h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
          <div className="absolute inset-0 bg-[url('/bg4.jpg')] bg-cover bg-center" />
          <div className="relative z-20 flex items-center text-lg font-medium">
            <School className="mr-2" size={24} />
            ExamPlanner
          </div>
          <div className="relative z-20 mt-auto">
            <blockquote className="space-y-2">
              <p className="text-lg">
                &ldquo;Making organizing exams efficient and hassle-free. 
                Save time and enhance coordination among faculty with ExamPlanner&rdquo;
              </p>
              <footer className="text-sm">The Team :)</footer>
            </blockquote>
          </div>
        </div>
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                Welcome Back
              </h1>
              <p className="text-sm text-muted-foreground">
                Enter your email and password below to sign in
              </p>
            </div>
            <div >
        <div className="grid gap-4">
        <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              Email
            </Label>
            <Input
              id="email"
              name="username"
              type="email"
              placeholder="email@mail.com"
              disabled={isLoading}
              value={state.username} 
              onChange={handleChange}
              required
            />
          </div>
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="password">
              Password
            </Label>
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="Password"
              disabled={isLoading}
              value={state.password} 
              onChange={handleChange}
              required
            />
          </div>
          <Button 
          disabled={isLoading}
          onClick={handleSubmit}
          >
            {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            Sign In 
          </Button>
        </div>
    </div>
          </div>
        </div>
      </div>

    )
}
