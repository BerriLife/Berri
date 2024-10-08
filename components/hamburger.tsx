import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { RxHamburgerMenu } from "react-icons/rx"; // Import the hamburger icon
import Link from "next/link"; // For navigation

export function Hamburger() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="hover:text-black">
          <RxHamburgerMenu size={18} /> {/* Hamburger icon inside the button */}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]" style={{fontFamily: 'var(--maxima-nouva-normal)'}}>
        <div className="grid gap-4 py-4">
          <Button
            asChild
            variant = "link"
            className="hover:bg-neutral-100 hover:text-black text-center text-lg hover:no-underline transition-colors duration-500"
          >
            <Link href="/newsletter">Newsletter</Link>
          </Button>
          <Button
            asChild
            variant = "link"
            className="hover:bg-neutral-100 hover:text-black text-center text-lg hover:no-underline transition-colors duration-500"
          >
            <Link href="/about">About</Link>
          </Button>
          <Button
            asChild
            variant = "link"
            className="hover:bg-neutral-100 hover:text-black text-center text-lg hover:no-underline transition-colors duration-500"
          >
            <Link href="/corporate-solutions">Corporate Solutions</Link>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
