import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { ExternalLink, Globe, Cpu, Bot, Network } from "lucide-react"

export default function Projects() {
  const projects = [
    {
      title: "Rural Connectivity Initiative",
      category: "WISP",
      description: "Deployed high-speed internet infrastructure across rural communities, connecting over 40 households and businesses.",
      image: "https://images.unsplash.com/photo-1498084393753-b411b2d26b34?q=80&w=2070",
      icon: Globe,
    },
    {
      title: "Smart Agriculture Monitoring",
      category: "IoT",
      description: "Implemented IoT sensors and monitoring systems for large-scale greenhouse operations, optimizing crop yields.",
      image: "/smart-farming-with-agriculture-iot.jpg",
      icon: Cpu,
    },
    {
      title: "Telematics and Robotics Solutions",
      category: "Robotics",
      description: "Fleet management and robotic automation for a logistics company, reducing operational costs and improving efficiency.",
      image: "/medium-shot-man-wearing-helmet.jpg",
      icon: Bot,
    },
    {
      title: "Enterprise Network Infrastructure",
      category: "Networking",
      description: "Deployed complete network infrastructure for a multi-location business with redundant connections.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034",
      icon: Network,
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="container px-4 pt-32 pb-16">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Our Projects
          </h1>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
            Transforming businesses and communities through innovative technology solutions
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="container px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.title} className="group relative overflow-hidden rounded-2xl border hover:border-primary/50 transition-all duration-300">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <project.icon className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium text-primary">{project.category}</span>
                </div>

                <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
                <p className="text-gray-500 dark:text-gray-400 mb-6">
                  {project.description}
                </p>

                <Button className="w-full">
                  View Case Study
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container px-4 py-16">
        <div className="rounded-2xl bg-primary/10 p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold">Have a project in mind?</h2>
          <p className="mt-4 text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            Let's discuss how we can help bring your vision to life with our technology solutions.
          </p>
          <Button size="lg" className="mt-8">
            Start a Project
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}