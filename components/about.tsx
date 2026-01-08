import { Shield, Target } from "lucide-react"

const stats = [
  { value: "15+", label: "Years Experience" },
  { value: "200+", label: "Projects Completed" },
  { value: "100%", label: "Client Satisfaction" },
  { value: "24/7", label: "Support Available" },
]

export function About() {
  return (
    <section id="about" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block mb-4 text-sm font-semibold tracking-wider text-primary uppercase">
              About SmartHub Enterprises
            </span>
            <h2 className="text-4xl font-bold text-foreground mb-6 leading-tight">
              <span className="text-primary">Telecommunications</span> Infrastructure Redefined
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              SmartHub Enterprises is a leading specialized partner for end-to-end telecommunications and network
              implementation, providing comprehensive IT infrastructure and cybersecurity solutions.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our certified engineers bring deep expertise in deploying and optimizing critical network elements
              including Huawei CSR routers, microwave transmission systems, and high-capacity fiber optic backhaul
              networks.
            </p>

            <div className="bg-background p-6 rounded-xl border border-border">
              <h3 className="text-xl font-semibold text-foreground mb-3 flex items-center gap-3">
                <Target className="text-primary w-5 h-5" />
                Our Mission Statement
              </h3>
              <p className="text-muted-foreground">
                To deliver exceptional network solutions that drive digital transformation while maintaining the highest
                standards of security, reliability, and performance.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-muted">
              <img
                src="/team-of-network-engineers-working-on-telecommunica.jpg"
                alt="SmartHub team working on network project"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-card p-4 rounded-xl border border-border hidden lg:flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-bold text-foreground">Certified Experts</h4>
                <p className="text-sm text-muted-foreground">HCIE, HCIP, HCIA certified</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 bg-primary/10 rounded-2xl p-8 border border-primary/20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
