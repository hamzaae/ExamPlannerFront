// "use client"

// import Image from "next/image"
// import Link from "next/link"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"

// import { useRouter } from "next/navigation"
// import { useState } from "react"

// const Login = ({ onLoginSuccess }: { onLoginSuccess: () => void }) => {

//   const router = useRouter()

//   const [state, setState] = useState({
//     username: "",
//     password: ""
//   })

//   function handleChange(e) {
//     const copy = { ...state }
//     copy[e.target.name] = e.target.value
//     setState(copy)
//   }

//   async function handleSubmit() {
//     const username = state.username; 
//     const password = state.password; 
  
//     const res = await fetch("http://localhost:8080/api/auth/token", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         "Authorization": "Basic " + btoa(username + ":" + password)
//       }
//     });
  
//     if (res.ok) {
//       const token = await res.text(); 
//       localStorage.setItem("token", token);
//       onLoginSuccess();
//       router.push("/");
//       window.location.reload();
//     } else {
//       alert("Bad credentials");
//     }
//   }
  


//     return (

//       <div className="flex items-center justify-center py-20">
//         <div className="mx-auto grid w-[350px] gap-8">
//           <div className="grid gap-2 text-center">
//             <h1 className="text-3xl font-bold">Login</h1>
//             <p className="text-balance text-muted-foreground">
//               Enter your email below to login to your account
//             </p>
//           </div>
//           <div className="grid gap-4">
//             <div className="grid gap-2">
//               <Label htmlFor="email">Email</Label>
//               <Input
//                 id="email"
//                 type="email"
//                 placeholder="m@example.com"
//                 required
//                 name="username" 
//                 value={state.username} 
//                 onChange={handleChange}
//               />
//             </div>
//             <div className="grid gap-2">
//               <div className="flex items-center">
//                 <Label htmlFor="password">Password</Label>
//                 {/* <Link
//                   href="/forgot-password"
//                   className="ml-auto inline-block text-sm underline"
//                 >
//                   Forgot your password?
//                 </Link> */}
//               </div>
//               <Input 
//               id="password" 
//               type="password" 
//               name="password" 
//               value={state.password} 
//               onChange={handleChange}
//               required 
//               />
//             </div>
//             <Button onClick={handleSubmit} className="w-full">
//               Login
//             </Button>
//           </div>
//         </div>
//       </div>

//     )
//   }

//   export default Login;