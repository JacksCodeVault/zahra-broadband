import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { Globe, Cpu, Bot, Code, Network, Server, Shield, ArrowRight } from "lucide-react"
import { useNavigate } from "react-router-dom"

export default function Services() {
  const navigate = useNavigate()

  const services = [
    {
      icon: Globe,
      name: "WISP Solutions",
      description: "High-speed internet connectivity for homes and SMEs with reliable coverage across urban & rural areas.",
      features: [
        "Dedicated bandwidth",
        "24/7 network monitoring",
        "Professional installation",
        "Flexible packages"
      ]
    },
    {
      icon: Cpu,
      name: "IoT & Telematics",
      description: "Smart solutions for monitoring, tracking, and automation to enhance operational efficiency.",
      features: [
        "Asset tracking",
        "Remote monitoring",
        "Sensor networks",
        "Real-time analytics"
      ]
    },
    {
      icon: Bot,
      name: "Robotics Solutions",
      description: "Custom robotics and automation solutions for industrial and commercial applications.",
      features: [
        "Process automation",
        "Custom robotics",
        "Maintenance services",
        "Technical support"
      ]
    },
    {
      icon: Code,
      name: "Software Development",
      description: "Custom software solutions tailored to your business needs with modern technologies.",
      features: [
        "Web applications",
        "Mobile apps",
        "API integration",
        "Cloud solutions"
      ]
    },
    {
      icon: Network,
      name: "Network Design",
      description: "Professional network infrastructure design and implementation services.",
      features: [
        "Network planning",
        "Infrastructure setup",
        "Security implementation",
        "Performance optimization"
      ]
    },
    {
      icon: Server,
      name: "Server Solutions",
      description: "Reliable server hosting and maintenance services for businesses.",
      features: [
        "Server hosting",
        "Backup solutions",
        "Maintenance",
        "24/7 monitoring"
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="container px-4 pt-32 pb-16">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Our Services
          </h1>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
            Comprehensive technology solutions to power your digital transformation
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="container px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.name} className="group relative rounded-2xl border p-8 hover:border-primary/50 transition-all duration-300">
              <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <service.icon className="h-7 w-7 text-primary" />
              </div>
              
              <h3 className="mt-6 text-xl font-semibold">{service.name}</h3>
              <p className="mt-3 text-gray-500 dark:text-gray-400">
                {service.description}
              </p>
              
              <ul className="mt-6 space-y-3">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <Shield className="mr-2 h-4 w-4 text-primary" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button className="mt-8 w-full group-hover:bg-primary/90">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container px-4 py-16">
        <div className="rounded-2xl bg-primary/10 p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold">Ready to get started?</h2>
          <p className="mt-4 text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            Contact our team to learn more about how our services can benefit your business.
          </p>
          <Button size="lg" className="mt-8" onClick={() => navigate('/contact')}>
            Contact Us
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}