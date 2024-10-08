"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Hamburger } from "@/components/hamburger"

export function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <NavigationMenu className="mt-7 mx-4 rounded-xl shadow-lg border-2 border-slate-50" style={{fontFamily: 'var(--maxima-nouva-bold)'}}>
      <NavigationMenuList> 
        <div className="w-screen px-6 py-2 flex flex-row justify-between items-center">
          <div>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={`${navigationMenuTriggerStyle()}`}>
                  <Image
                    src="/images/logo.png" // Path to your logo image
                    alt="Logo"
                    width={50} // Adjust the width according to your need
                    height={50} // Adjust the height according to your need
                  />
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </div>
          <div className="flex sm:hidden">
            <Hamburger/>
          </div>
          <div className={`flex-col sm:flex-row gap-2 ${isMenuOpen ? 'flex' : 'hidden'} sm:flex`}>
            <NavigationMenuItem>
              <Link href="/newsletter" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Newsletter
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <Link href="/about" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  About
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/corporate_solutions" legacyBehavior passHref>
                <NavigationMenuLink className={`${navigationMenuTriggerStyle()} hover:bg-inherit bg-primary text-white rounded-xl`}>
                  Corporate Solutions
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </div>
        </div>
      </NavigationMenuList>
    </NavigationMenu>
  )
}