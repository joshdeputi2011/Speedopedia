import { Search, Menu, Moon, Sun } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { useState, useEffect } from "react";

interface NavigationProps {
  onNavigate: (page: string, id?: string) => void;
  currentPage: string;
}

export function Navigation({ onNavigate, currentPage }: NavigationProps) {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => onNavigate("home")}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <div className="w-8 h-8 bg-[var(--racing-red)] flex items-center justify-center text-white font-bold text-sm rounded">
              CP
            </div>
            <div>
              <div className="text-xl font-bold tracking-tight" style={{ fontFamily: 'var(--font-racing)' }}>
                CarPedia
              </div>
              <div className="text-xs text-muted-foreground -mt-1">
                Every car. Ever made.
              </div>
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <button
              onClick={() => onNavigate("home")}
              className={`text-sm transition-all duration-200 ease-in-out hover:scale-x-105 hover:drop-shadow-md ${
                currentPage === "home" ? "text-foreground font-semibold" : "text-muted-foreground"
              }`}
            >
              Home
            </button>
            <button
              onClick={() => onNavigate("explore")}
              className={`text-sm transition-all duration-200 ease-in-out hover:scale-x-105 hover:drop-shadow-md ${
                currentPage === "explore" ? "text-foreground font-semibold" : "text-muted-foreground"
              }`}
            >
              Explore
            </button>
            <button
              onClick={() => onNavigate("manufacturers")}
              className={`text-sm transition-all duration-200 ease-in-out hover:scale-x-105 hover:drop-shadow-md ${
                currentPage === "manufacturers" ? "text-foreground font-semibold" : "text-muted-foreground"
              }`}
            >
              Manufacturers
            </button>
            <button
              onClick={() => onNavigate("timeline")}
              className={`text-sm transition-all duration-200 ease-in-out hover:scale-x-105 hover:drop-shadow-md ${
                currentPage === "timeline" ? "text-foreground font-semibold" : "text-muted-foreground"
              }`}
            >
              Timeline
            </button>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setDarkMode(!darkMode)}
              className="hidden sm:flex"
            >
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="px-4 py-4 space-y-3">
            <button
              onClick={() => {
                onNavigate("home");
                setMobileMenuOpen(false);
              }}
              className="block w-full text-left py-2 text-sm hover:text-foreground"
            >
              Home
            </button>
            <button
              onClick={() => {
                onNavigate("explore");
                setMobileMenuOpen(false);
              }}
              className="block w-full text-left py-2 text-sm hover:text-foreground"
            >
              Explore
            </button>
            <button 
              onClick={() => {
                onNavigate("manufacturers");
                setMobileMenuOpen(false);
              }}
              className="block w-full text-left py-2 text-sm hover:text-foreground"
            >
              Manufacturers
            </button>
            <button 
              onClick={() => {
                onNavigate("timeline");
                setMobileMenuOpen(false);
              }}
              className="block w-full text-left py-2 text-sm hover:text-foreground"
            >
              Timeline
            </button>
            <div className="pt-2 border-t border-border">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setDarkMode(!darkMode)}
                className="w-full justify-start"
              >
                {darkMode ? (
                  <>
                    <Sun className="h-4 w-4 mr-2" /> Light Mode
                  </>
                ) : (
                  <>
                    <Moon className="h-4 w-4 mr-2" /> Dark Mode
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}