import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'
import { TooltipProvider } from "@/components/ui/tooltip";
import SideBar from "@/components/SideBar";
import HeaderBar from "@/components/HeaderBar";

export default function LayoutAuthenticated(props) {
    const [profile, setProfile] = useState()
    const router = useRouter()

    useEffect(() => {
        fetchProfile()
    }, [])

    async function fetchProfile() {
        const res = await fetch(`http://localhost:8080/api/profile`, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem("token")
            }
        })
        if (res.ok) {
            const json = await res.json()
            setProfile(json)
        } else {
            router.push("/")
        }
    }

    function logout() {
        localStorage.removeItem("token")
        router.push("/")
    }

    return (
        <TooltipProvider>
            <div className="flex min-h-screen w-full flex-col bg-muted/40 font-sans">
                <SideBar />
                <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
                    <HeaderBar />
                    <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-2 xl:grid-cols-2">
                        {props.children}
                    </main>
                </div>
            </div>
        </TooltipProvider>

    )
}