import Link from "next/link"
import { ArrowRight, Radio, HardDrive, Cloud, Server, Shield, Monitor } from "lucide-react"
import { Button } from "@/components/ui/button"

const services = [
  {
    icon: Radio,
    title: "Telecom Network Services",
    description:
      "Full lifecycle services including planning, deployment, and optimization of core networks, microwave links, and fiber optic infrastructure.",
  },
  {
    icon: HardDrive,
    title: "Enterprise Networking",
    description:
      "High-performance network architecture design and implementation using cutting-edge technologies from Huawei, Cisco, and Juniper.",
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    description: "Hybrid and multi-cloud solutions with seamless integration to your existing network infrastructure.",
  },
  {
    icon: Server,
    title: "Data Center Solutions",
    description:
      "Comprehensive data center services including server management, virtualization, and storage solutions.",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Advanced threat protection, network security assessments, and compliance consulting services.",
  },
  {
    icon: Monitor,
    title: "Managed Services",
    description: "24/7 monitoring, maintenance, and support to ensure optimal network performance and uptime.",
  },
]

export function Services() {
  return (
    <section id="services" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block mb-4 text-sm font-semibold tracking-wider text-primary uppercase">
            Our Expertise
          </span>
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Comprehensive <span className="text-primary">Network Solutions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We provide end-to-end networking services that keep your business connected and protected.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-background p-6 rounded-2xl border border-border hover:border-primary/50 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button size="lg" asChild>
            <Link href="#contact">
              Request Custom Solution
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
