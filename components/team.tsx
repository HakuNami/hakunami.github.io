const teamMembers = [
  { name: "Kwame Asante", role: "Senior Network Engineer", image: "/professional-headshot-black-african-man-40s-wearin.jpg" },
  { name: "Amina Diallo", role: "Cybersecurity Specialist", image: "/professional-headshot-black-african-woman-30s-wear.jpg" },
  { name: "Oluwaseun Adebayo", role: "Cloud Architect", image: "/professional-headshot-black-nigerian-man-35-wearin.jpg" },
  { name: "Tendai Chiwenga", role: "Network Infrastructure Lead", image: "/professional-headshot-black-zimbabwean-woman-45-we.jpg" },
  { name: "Naledi Molefe", role: "Data Center Specialist", image: "/professional-headshot-black-south-african-woman-28.jpg" },
  { name: "Chinedu Okonkwo", role: "Wireless Network Engineer", image: "/professional-headshot-black-nigerian-man-32-wearin.jpg" },
  { name: "Fatoumata Diop", role: "Senior Security Architect", image: "/professional-headshot-black-senegalese-woman-40-we.jpg" },
  { name: "Jabari Johnson", role: "Network Operations Manager", image: "/professional-headshot-black-american-man-50s-weari.jpg" },
]

export function Team() {
  return (
    <section id="team" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block mb-4 text-sm font-semibold tracking-wider text-primary uppercase">
            Our Team
          </span>
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Meet Our <span className="text-primary">Diverse Experts</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A multicultural team of certified professionals delivering exceptional network solutions.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="bg-card p-6 rounded-2xl border border-border hover:border-primary/50 transition-colors text-center group"
            >
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-muted overflow-hidden">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-semibold text-foreground mb-1">{member.name}</h3>
              <p className="text-sm text-muted-foreground">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
