import Link from "next/link"
import { Zap } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-12 bg-background border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <Zap className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-bold text-lg text-foreground">SmartHub Enterprises</span>
          </Link>

          <nav className="flex flex-wrap justify-center gap-6">
            <Link href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              About
            </Link>
            <Link href="#services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Services
            </Link>
            <Link href="#team" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Team
            </Link>
            <Link href="#experience" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Projects
            </Link>
            <Link href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </Link>
          </nav>

          <p className="text-sm text-muted-foreground">© 2026 SmartHub Enterprises. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
