import { Navbar } from "@/components/Navbar"
import { Button } from "@/components/ui/button"
import { ArrowRight, Globe, Cpu, Bot, Code, Phone } from "lucide-react"
import { Footer } from "@/components/Footer"
import { useNavigate } from "react-router-dom"

export default function Landing() {
  const navigate = useNavigate()

  const features = [
    {
      name: 'WISP Solutions',
      description: 'Fast and reliable internet connectivity for homes and businesses',
      icon: Globe,
    },
    {
      name: 'IoT & Telematics',
      description: 'Smart solutions for monitoring and automation',
      icon: Cpu,
    },
    {
      name: 'Robotics',
      description: 'Custom robotics solutions for industry automation',
      icon: Bot,
    },
    {
      name: 'Development',
      description: 'Custom web and mobile applications',
      icon: Code,
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
        <Navbar />


      {/* Hero Section */}
      <section className="container px-4 md:px-8 pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="flex flex-col items-center text-center space-y-6 md:space-y-8">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl max-w-4xl">
            Connecting Communities,<br />Empowering Innovation
          </h1>
          <p className="max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400 mx-auto">
            Providing affordable and reliable internet services coupled with cutting-edge solutions in IoT, robotics, and app development.
          </p>
          <div className="flex flex-wrap justify-center gap-6 mt-8">
            <Button size="lg" className="shadow-lg hover:shadow-xl transition-shadow" onClick={() => navigate('/services')}>
              Explore Services
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>            
            <Button variant="outline" size="lg" className="shadow-lg hover:shadow-xl transition-shadow" onClick={() => navigate('/about')}>
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container px-4 md:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div key={feature.name} className="group relative rounded-xl border p-8 hover:border-foreground/20 transition-all duration-300 hover:shadow-lg">
              <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="mt-6 text-xl font-semibold">{feature.name}</h3>
              <p className="mt-3 text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container px-4 md:px-8 py-16 md:py-24">
        <div className="rounded-2xl bg-primary/10 p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to get started?</h2>
          <p className="mt-4 text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-8">
            Contact us today to discuss how we can help transform your connectivity needs.
          </p>
          <Button size="lg" className="mt-8" onClick={() => navigate('/contact')}>
            Get in Touch
            <Phone className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}