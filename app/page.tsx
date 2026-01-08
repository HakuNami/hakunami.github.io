import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Objectives } from "@/components/objectives"
import { Services } from "@/components/services"
import { Team } from "@/components/team"
import { Qualifications } from "@/components/qualifications"
import { Projects } from "@/components/projects"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Objectives />
      <Services />
      <Team />
      <Qualifications />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}
