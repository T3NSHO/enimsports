import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import Image from "next/image"
import "./navbar.css"

export default function Navbar() {
  return (
    <div className="navbarContainer">
      <Image src="/logo.png" alt="ENSMR Sports Logo" width={100} height={100} className="Logo" />
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-lg bg-transparent hover:text-blue-500 transition-colors duration-200">About ENIM Sports</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md hover:scale-105 transition-transform duration-200"
                    href="/"
                  >
                    <div className="mb-2 mt-4 text-lg font-medium">
                      Sports Committee
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Managing sports activities and facilities at École Nationale Supérieure des Mines de Rabat.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/about/rules" title="ENIM">
                Learn more about the École Nationale Supérieure des Mines de Rabat.
              </ListItem>
              <ListItem href="/about/rules" title="Regulations">
                Facility usage guidelines and tournament participation rules.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-lg bg-transparent hover:text-blue-400 transition-colors duration-200">Tournaments</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              <ListItem href="/tournaments/upcoming" title="Upcoming Tournaments">
                View and register for upcoming sports competitions.
              </ListItem>
              <ListItem href="/tournaments/results" title="Tournament Results">
                Check past tournament results and standings.
              </ListItem>
              <ListItem href="/tournaments/register" title="Team Registration">
                Register your team for upcoming tournaments.
              </ListItem>
              <ListItem href="/tournaments/schedule" title="Match Schedule">
                View the complete tournament schedule and fixtures.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/booking" legacyBehavior passHref>
            <NavigationMenuLink className="login-button">
              Login
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
    </div>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-all duration-200 hover:bg-blue-500/10 hover:text-blue-400 focus:bg-blue-500/10 focus:text-blue-400",
            className
          )}
          {...props}
        >
          <div className="text-sm font-bold leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"