const projects = [
  {
    client: "Ilitha Telecommunications",
    description:
      "Provided core network integration and user authentication services. Our work involved ensuring the BNG (Broadband Network Gateway) infrastructure was seamlessly integrated to manage user access and services.",
  },
  {
    client: "Zoom Fiber",
    description:
      "Supported backhaul and core network functions. Our role involved systems that interface with public IP resource management (CGNAT), showcasing our experience with the operational support systems used by ISPs.",
  },
  {
    client: "Econet Lesotho",
    description:
      "ATN and MW installation link (indoor and outdoor units), Site surveys (TSS,LOS), commissioning and testing details, integration with the core network, maintain and support MW and ATNs.",
  },
  {
    client: "Gauteng Department of Human Settlements",
    description:
      "Large-scale network implementation and managed services capability including hands-on installation, configuration, and ongoing maintenance for a multi-vendor environment.",
  },
]

export function Projects() {
  return (
    <section id="experience" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block mb-4 text-sm font-semibold tracking-wider text-primary uppercase">
            Track Record
          </span>
          <h2 className="text-4xl font-bold text-foreground mb-6">Project Experience</h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {projects.map((project) => (
            <div
              key={project.client}
              className="bg-card p-6 rounded-2xl border-l-4 border-primary hover:bg-card/80 transition-colors"
            >
              <h3 className="text-xl font-semibold text-foreground mb-2">{project.client}</h3>
              <p className="text-muted-foreground leading-relaxed">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
