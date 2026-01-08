"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

const certifications = [
  { count: 3, label: "HCIE's" },
  { count: 4, label: "HCIP's" },
  { count: 6, label: "HCIA's" },
  { count: 2, label: "PMP's" },
  { count: 1, label: "CCIE" },
  { count: 6, label: "CCNP's" },
]

const experience = [
  { value: "15+", label: "Years in Industry" },
  { value: "200+", label: "Projects Completed" },
  { value: "100%", label: "Client Satisfaction" },
]

const partners = ["Huawei", "Cisco", "Juniper", "Microsoft"]

type Tab = "certifications" | "experience" | "partners"

export function Qualifications() {
  const [activeTab, setActiveTab] = useState<Tab>("certifications")

  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block mb-4 text-sm font-semibold tracking-wider text-primary uppercase">
            Credentials
          </span>
          <h2 className="text-4xl font-bold text-foreground mb-6">Our Qualifications</h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="flex border-b border-border mb-8">
            {(["certifications", "experience", "partners"] as Tab[]).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={cn(
                  "py-4 px-6 font-medium transition-colors border-b-2 -mb-px capitalize",
                  activeTab === tab
                    ? "text-primary border-primary"
                    : "text-muted-foreground border-transparent hover:text-foreground",
                )}
              >
                {tab}
              </button>
            ))}
          </div>

          {activeTab === "certifications" && (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {certifications.map((cert) => (
                <div
                  key={cert.label}
                  className="bg-background p-6 rounded-xl border border-border text-center hover:border-primary/50 transition-colors"
                >
                  <div className="text-3xl font-bold text-primary mb-2">{cert.count}</div>
                  <div className="text-sm text-muted-foreground">{cert.label}</div>
                </div>
              ))}
            </div>
          )}

          {activeTab === "experience" && (
            <div className="grid md:grid-cols-3 gap-6">
              {experience.map((item) => (
                <div
                  key={item.label}
                  className="bg-background p-6 rounded-xl border border-border text-center hover:border-primary/50 transition-colors"
                >
                  <div className="text-3xl font-bold text-primary mb-2">{item.value}</div>
                  <div className="text-sm text-muted-foreground">{item.label}</div>
                </div>
              ))}
            </div>
          )}

          {activeTab === "partners" && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {partners.map((partner) => (
                <div
                  key={partner}
                  className="bg-background p-8 rounded-xl border border-border flex items-center justify-center hover:border-primary/50 transition-colors"
                >
                  <span className="text-lg font-semibold text-muted-foreground">{partner}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
