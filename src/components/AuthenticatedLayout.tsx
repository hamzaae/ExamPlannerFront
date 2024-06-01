import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'
import { TooltipProvider } from "@/components/ui/tooltip";
import SideBar from "@/components/SideBar";
import HeaderBar from "@/components/HeaderBar";
import { Toaster } from './ui/toaster';

export default function LayoutAuthenticated(props) {
    const [profile, setProfile] = useState(null)
    const router = useRouter()

    useEffect(() => {
        fetchProfile()
    }, [])

    async function fetchProfile() {
        const res = await fetch(`http://localhost:8080/api/auth/profile`, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem("token")
            }
        })
        if (res.ok) {
            const usr = await res.text();
            setProfile(usr)
            // localStorage.setItem('userProfile', usr);
        } else {
            router.push("/")
        }
    }


    return (
        <TooltipProvider>
        {profile && 
            <div className="flex min-h-screen w-full flex-col bg-muted/40 font-sans">
                <SideBar />
                <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
                    <HeaderBar />
                    <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-2 xl:grid-cols-2">
                        {props.children}
                    </main>
                    <Toaster />
                </div>
            </div>
        }
        </TooltipProvider>
    )
}