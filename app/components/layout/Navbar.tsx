import { useState } from "react";
import { Link } from "@remix-run/react";
import { Sheet, SheetContent, SheetTrigger } from "~/components/ui/sheet";
import { Button } from "~/components/ui/button";
import { Menu, Bell, Search } from "lucide-react";

export function Navbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-neutral-200">
      <div className="px-4 h-16 flex items-center justify-between">
        {/* Menu & Logo */}
        <div className="flex items-center gap-3">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="p-0">
              <MobileMenu />
            </SheetContent>
          </Sheet>
          
          <img 
            src="/sirvoy-logo.png" 
            alt="Sirvoy" 
            className="h-8"
          />
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => setIsSearchOpen(true)}
          >
            <Search className="h-5 w-5" />
          </Button>
          
          <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </nav>
  );
} 