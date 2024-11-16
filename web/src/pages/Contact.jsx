import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react"

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const data = Object.fromEntries(formData)
    
    window.location.href = `mailto:ojangoh2@outlook.com?subject=${data.subject}&body=Name: ${data.name}%0D%0AEmail: ${data.email}%0D%0AMessage: ${data.message}`
  }

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: "+254 112 407 259",
      action: "tel:+254112407259"
    },
    {
      icon: Mail,
      title: "Email",
      details: "ojangoh2@outlook.com",
      action: "mailto:ojangoh2@outlook.com"
    },
    {
      icon: MapPin,
      title: "Location",
      details: "Nakuru, Kenya",
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "Mon - Fri: 8:00 AM - 6:00 PM",
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="container px-4 pt-32 pb-16">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Get in Touch
          </h1>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
            We're here to help and answer any questions you might have
          </p>
        </div>
      </section>

      <section className="container px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Send us a Message</h2>
              <p className="text-gray-500 dark:text-gray-400">
                Fill out the form below and we'll get back to you as soon as possible
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <Input
                  name="name"
                  placeholder="Your Name"
                  required
                />
                <Input
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  required
                />
                <Input
                  name="subject"
                  placeholder="Subject"
                  required
                />
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  className="min-h-[150px]"
                  required
                />
              </div>
              <Button type="submit" className="w-full">
                Send Message
                <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Contact Information</h2>
              <p className="text-gray-500 dark:text-gray-400">
                Reach out to us through any of these channels
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((info) => (
                <div key={info.title} className="p-6 rounded-2xl border hover:border-primary/50 transition-all duration-300">
                  <info.icon className="h-6 w-6 text-primary mb-4" />
                  <h3 className="font-semibold mb-2">{info.title}</h3>
                  {info.action ? (
                    <a 
                      href={info.action}
                      className="text-gray-500 dark:text-gray-400 hover:text-primary"
                    >
                      {info.details}
                    </a>
                  ) : (
                    <p className="text-gray-500 dark:text-gray-400">{info.details}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
