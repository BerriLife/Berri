/*eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { RxHamburgerMenu } from "react-icons/rx"; // Import the hamburger icon
import Link from "next/link"; // For navigation

interface HamburgerProps {
  setIsMenuOpen: (open: boolean) => void; // Specify the type properly
}

export function Hamburger({ setIsMenuOpen }: HamburgerProps) {
  const handleAboutClick = () => {
    // Close the menu
    setIsMenuOpen(false);
    // Scroll to the #faq-about section
    const element = document.getElementById('faq-about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Dialog onOpenChange={setIsMenuOpen}> {/* This will set isMenuOpen based on dialog open state */}
      <DialogTrigger asChild>
        <Button className="hover:text-black">
          <RxHamburgerMenu size={18} /> {/* Hamburger icon inside the button */}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]" style={{fontFamily: 'var(--maxima-nouva-normal)'}}>
        <div className="grid gap-4 py-4">
          <Button
            asChild
            variant="link"
            className="hover:bg-neutral-100 hover:text-black text-center text-lg hover:no-underline transition-colors duration-500"
            onClick={() => setIsMenuOpen(false)} // Close menu on click
          >
            <Link href="/newsletter">Newsletter</Link>
          </Button>
          <Button
            asChild
            variant="link"
            className="hover:bg-neutral-100 hover:text-black text-center text-lg hover:no-underline transition-colors duration-500"
            onClick={handleAboutClick} // Trigger the About scroll and close the menu
          >
            <Link href="/#faq-about">About</Link>
          </Button>
          <Button
            asChild
            variant="link"
            className="hover:bg-neutral-100 hover:text-black text-center text-lg hover:no-underline transition-colors duration-500"
            onClick={() => setIsMenuOpen(false)} // Close menu on click
          >
            <Link href="/corporate-solutions">Corporate Solutions</Link>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
