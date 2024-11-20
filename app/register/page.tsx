"use client" // This file will be executed on the client side

import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Navbar from "@/components/Navbar";
import { FormEvent } from 'react'
import { useToast } from "@/hooks/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { useRouter } from "next/navigation";
import delay from "@/lib/sleep";


export default function Home() {
  const router = useRouter()
  const { toast } = useToast();
  async function Register(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
 
    const formData = new FormData(event.currentTarget)
    const full_name = formData.get('full_name') as string
    const email = formData.get('email') as string
    const password = formData.get('password') as string
    const phone = formData.get('phone') as string
    const school = formData.get('school') as string

    const response = await fetch('/api/register', {
      method: 'POST',
      body:JSON.stringify({full_name, email, password, phone, school}),
    })
    if(response.status === 201) {
      toast({
        variant: "success",
        title: "User created successfully",
        description: "You will redirect to the login page",
      })
      delay(1500)
      router.push("/login")
    }
    else{
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "User not created succesfully retry again please",
      })
    }
  
  }
  return (
    <div>
      <Navbar/>
      <>
        <div className="flex items-center justify-center ">
          <div className="relative mt-12 w-full max-w-lg sm:mt-10 ">
            <div className="relative -mb-px h-px w-full "></div>
            <div
              className="mx-5 border dark:border-b-white/50 dark:border-t-white/50 border-b-white/20 sm:border-t-white/20 shadow-[20px_0_20px_20px] shadow-slate-500/10 dark:shadow-white/20 rounded-lg border-white/20 border-l-white/20 border-r-white/20 sm:shadow-sm lg:rounded-xl lg:shadow-none bg-[rgba(255,255,255,0.10)] p-4 rounded-md transition ease-in-out hover:bg-[rgba(255,255,255,0.05)] ">
              <div className="flex flex-col p-6">
                <h3 className="text-xl font-semibold leading-6 tracking-tighter">Register</h3>
                <p className="mt-1.5 text-sm font-medium text-white/80">Create your account to get started.</p>
              </div>
              <div className="p-6 pt-0">
                <form onSubmit={Register}>
                  {/* Username Field */}
                  <div className="group relative rounded-lg border focus-within:border-sky-200 px-3 pb-1.5 pt-2.5 duration-200 focus-within:ring focus-within:ring-sky-300/30 mb-4">
                    <label className="text-xs font-medium text-muted-foreground group-focus-within:text-white text-gray-400">full name</label>
                    <input type="text" name="full_name" placeholder="full name" className="block w-full border-0 bg-transparent p-0 text-sm placeholder:text-muted-foreground/90 focus:outline-none focus:ring-0 text-foreground"/>
                  </div>

                  {/* Email Field */}
                  <div className="group relative rounded-lg border focus-within:border-sky-200 px-3 pb-1.5 pt-2.5 duration-200 focus-within:ring focus-within:ring-sky-300/30 mb-4">
                    <label className="text-xs font-medium text-muted-foreground group-focus-within:text-white text-gray-400">Email</label>
                    <input type="email" name="email" placeholder="Email" className="block w-full border-0 bg-transparent p-0 text-sm placeholder:text-muted-foreground/90 focus:outline-none focus:ring-0 text-foreground"/>
                  </div>

                  {/* Password Field */}
                  <div className="group relative rounded-lg border focus-within:border-sky-200 px-3 pb-1.5 pt-2.5 duration-200 focus-within:ring focus-within:ring-sky-300/30 mb-4">
                    <label className="text-xs font-medium text-muted-foreground group-focus-within:text-white text-gray-400">Password</label>
                    <input type="password" name="password" placeholder="Password" className="block w-full border-0 bg-transparent p-0 text-sm placeholder:text-muted-foreground/90 focus:outline-none focus:ring-0 text-foreground"/>
                  </div>

                  {/* Phone Number Field */}
                  <div className="group relative rounded-lg border focus-within:border-sky-200 px-3 pb-1.5 pt-2.5 duration-200 focus-within:ring focus-within:ring-sky-300/30 mb-4">
                    <label className="text-xs font-medium text-muted-foreground group-focus-within:text-white text-gray-400">Phone Number</label>
                    <input type="tel" name="phone" placeholder="Phone Number" className="block w-full border-0 bg-transparent p-0 text-sm placeholder:text-muted-foreground/90 focus:outline-none focus:ring-0 text-foreground"/>
                  </div>

                  {/* School Field */}
                  <div className="group relative rounded-lg border focus-within:border-sky-200 px-3 pb-1.5 pt-2.5 duration-200 focus-within:ring focus-within:ring-sky-300/30 mb-4">
                    <label className="text-xs font-medium text-muted-foreground group-focus-within:text-white text-gray-400">School</label>
                    <input type="text" name="school" placeholder="School" className="block w-full border-0 bg-transparent p-0 text-sm placeholder:text-muted-foreground/90 focus:outline-none focus:ring-0 text-foreground"/>
                  </div>

                  {/* Submit Button */}
                  <div className="mt-4 flex items-center justify-end gap-x-2">
                    <a className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:ring hover:ring-white h-10 px-4 py-2 duration-200"
                      href="/login">Login</a>
                    <button
                      className="font-semibold hover:bg-black hover:text-white hover:ring hover:ring-white transition duration-300 inline-flex items-center justify-center rounded-md text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-white text-black h-10 px-4 py-2"
                      type="submit">Register</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}
