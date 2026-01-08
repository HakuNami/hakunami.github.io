import { Award, Users, Shield } from "lucide-react"

const objectives = [
  {
    icon: Award,
    title: "Quality Standards",
    description:
      "The products, services and solutions offered are of highest quality standards achieved through proper selection of quality suppliers, creative ideas and highly skilled project personnel.",
  },
  {
    icon: Users,
    title: "Expert Teams",
    description:
      "We assemble top-notch individuals and teams with certified, vendor-specific skills for successful project execution in telecommunications infrastructure.",
  },
  {
    icon: Shield,
    title: "Robust Solutions",
    description:
      "We specialize in planning, installation, commissioning, and maintenance of telecommunications infrastructure, ensuring robust, secure, and scalable networks.",
  },
]

export function Objectives() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block mb-4 text-sm font-semibold tracking-wider text-primary uppercase">
            What Drives Us
          </span>
          <h2 className="text-4xl font-bold text-foreground mb-6">Our Objectives</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {objectives.map((objective) => (
            <div
              key={objective.title}
              className="bg-card p-8 rounded-2xl border border-border hover:border-primary/50 transition-colors group"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <objective.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">{objective.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{objective.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
