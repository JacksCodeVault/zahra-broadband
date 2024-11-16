import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, Phone, Lightbulb, Shield, Users, Award } from "lucide-react"
import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"

export default function About() {
  const navigate = useNavigate()

  const values = [
    {
      title: "Innovation",
      description: "Constantly pushing boundaries to deliver cutting-edge solutions that transform communities.",
      icon: Lightbulb
    },
    {
      title: "Reliability",
      description: "Committed to providing stable and dependable services that our clients can count on.",
      icon: Shield
    },
    {
      title: "Community",
      description: "Focused on creating positive impact and fostering digital inclusion in local communities.",
      icon: Users
    },
    {
      title: "Excellence",
      description: "Striving for the highest standards in everything we do, from service delivery to customer support.",
      icon: Award
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="container px-4 pt-32 pb-16">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Our Story
          </h1>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
            Building the future of connectivity and technology solutions in Kenya
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="container px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <img 
              src="/ai-nuclear-energy-background-future-innovation-disruptive-technology.jpg" 
              alt="Our Mission"
              className="rounded-2xl shadow-lg"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Our Mission</h2>
            <p className="text-gray-500 dark:text-gray-400">
              At Zahra Networks, we're on a mission to bridge the digital divide by providing affordable, reliable internet connectivity and innovative technology solutions to communities across Kenya.
            </p>
            <Button>
              Learn More
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="container px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value) => (
            <motion.div
              key={value.title}
              className="p-6 rounded-2xl border group cursor-pointer"
              whileHover={{ 
                scale: 1.05,
                borderColor: 'hsl(var(--primary) / 0.5)',
                transition: { duration: 0.2 }
              }}
            >
              <div className="flex flex-col items-center text-center">
                <value.icon className="h-12 w-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-500 dark:text-gray-400">{value.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="container px-4 py-16">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold">Meet Our Team</h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            A dedicated group of professionals committed to delivering excellence in technology solutions.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Team member cards will go here */}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container px-4 py-16">
        <div className="rounded-2xl bg-primary/10 p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold">Join Our Journey</h2>
          <p className="mt-4 text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            Partner with us to bring innovative technology solutions to your community.
          </p>
          <Button size="lg" className="mt-8" onClick={() => navigate('/contact')}>
            Get in Touch
            <Phone className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}