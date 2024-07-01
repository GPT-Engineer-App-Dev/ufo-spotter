import { CircleUser, Menu, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Outlet, Link } from "react-router-dom";

function SharedLayout() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6 justify-between">
        <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
          <Link to="/" className="flex items-center gap-2 text-lg font-semibold md:text-base">
            <img src="/images/ufo-icon.png" alt="UFO Icon" className="h-6 w-6" />
            <span>UFOs in USA</span>
          </Link>
          <Link to="/" className="text-muted-foreground transition-colors hover:text-foreground">Home</Link>
          <Link to="/sightings" className="text-muted-foreground transition-colors hover:text-foreground">Sightings</Link>
          <Link to="/reports" className="text-muted-foreground transition-colors hover:text-foreground">Reports</Link>
          <Link to="/about" className="text-muted-foreground transition-colors hover:text-foreground">About</Link>
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="shrink-0 md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <nav className="grid gap-6 text-lg font-medium">
              <Link to="/" className="flex items-center gap-2 text-lg font-semibold">
                <img src="/images/ufo-icon.png" alt="UFO Icon" className="h-6 w-6" />
                <span>UFOs in USA</span>
              </Link>
              <Link to="/" className="text-muted-foreground hover:text-foreground">Home</Link>
              <Link to="/sightings" className="text-muted-foreground hover:text-foreground">Sightings</Link>
              <Link to="/reports" className="text-muted-foreground hover:text-foreground">Reports</Link>
              <Link to="/about" className="text-muted-foreground hover:text-foreground">About</Link>
            </nav>
          </SheetContent>
        </Sheet>
        <div className="flex items-center gap-4 md:gap-2 lg:gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon" className="rounded-full">
                <CircleUser className="h-5 w-5" />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
      <main className="flex-grow p-4 overflow-auto bg-gray-100">
        <Outlet />
      </main>
      <footer className="bg-background p-4 text-center text-muted-foreground">
        <div className="flex justify-center space-x-4">
          <a href="#" className="hover:text-foreground">Facebook</a>
          <a href="#" className="hover:text-foreground">Twitter</a>
          <a href="#" className="hover:text-foreground">Instagram</a>
        </div>
        <p className="mt-2">© 2023 UFOs in USA. All rights reserved.</p>
        <p className="mt-1 text-xs">Disclaimer: The content on this website is for informational purposes only.</p>
      </footer>
    </div>
  );
}

export default SharedLayout;