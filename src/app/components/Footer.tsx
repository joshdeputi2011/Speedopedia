import { Github, Twitter, Mail, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-muted/30 border-t border-border mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          {/* About */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-[var(--racing-red)] flex items-center justify-center text-white font-bold text-sm rounded">
                CP
              </div>
              <div className="text-xl font-semibold" style={{ fontFamily: 'var(--font-racing)' }}>
                CarPedia
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              A complete encyclopedia for car enthusiasts, engineers, and learners.
              Built with passion by people who love talking cars.
            </p>
            <div className="flex gap-3">
              <button className="w-8 h-8 rounded-full bg-muted hover:bg-muted-foreground/20 transition-colors flex items-center justify-center">
                <Github className="h-4 w-4" />
              </button>
              <button className="w-8 h-8 rounded-full bg-muted hover:bg-muted-foreground/20 transition-colors flex items-center justify-center">
                <Twitter className="h-4 w-4" />
              </button>
              <button className="w-8 h-8 rounded-full bg-muted hover:bg-muted-foreground/20 transition-colors flex items-center justify-center">
                <Mail className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Explore</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">All Manufacturers</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Browse by Era</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Body Styles</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Engine Types</a></li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="font-semibold mb-4">Community</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Contribute</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Discussion</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Guidelines</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">About Us</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <div>
            © 2026 CarPedia. Data-driven encyclopedia for car enthusiasts.
          </div>
          <div className="flex items-center gap-1">
            Made with <Heart className="h-3 w-3 text-[var(--racing-red)] fill-[var(--racing-red)]" /> for car lovers everywhere
          </div>
        </div>
      </div>
    </footer>
  );
}