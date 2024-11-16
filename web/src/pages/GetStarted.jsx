import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MapPin, Check } from "lucide-react"
import { useState } from "react"
import { useNavigate } from 'react-router-dom'

export default function GetStarted() {
  const navigate = useNavigate()
  const [location, setLocation] = useState("")
  const [isInCoverage, setIsInCoverage] = useState(null)

  const coverageAreas = [
    "Kabarak", "Rafiki", "White House", "Kapken", "Rafiki", "Kampi Ya Moto", "Barkesen", "Chergei", "Oloika"
  ]

  const checkCoverage = (e) => {
    e.preventDefault()
    const hasService = coverageAreas.some((area) =>
      location.toLowerCase().includes(area.toLowerCase())
    )
    setIsInCoverage(hasService)
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="container px-4 pt-32 pb-16">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Check Service Availability
          </h1>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
            Verify if your location is within our coverage area
          </p>
        </div>
      </section>

      <section className="container px-4 py-16 max-w-3xl mx-auto">
        <div className="space-y-12">
          {/* Coverage Checker */}
          <div className="space-y-6">
            <div className="p-8 rounded-2xl border">
              <form onSubmit={checkCoverage} className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-1">
                    <Input
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      placeholder="Enter your location (e.g., Kabarak, Rafiki)"
                      required
                    />
                  </div>
                  <Button type="submit">
                    Check Coverage
                    <MapPin className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </form>

              {isInCoverage !== null && (
                <div className={`mt-6 p-4 rounded-lg ${
                  isInCoverage ? "bg-green-500/10" : "bg-red-500/10"
                }`}>
                  {isInCoverage ? (
                    <div className="space-y-4">
                      <p className="text-green-600 dark:text-green-400 font-medium">
                        Great news! We provide service in your area.
                      </p>
                      <Button onClick={() => navigate('/application')}>
                        Continue with Application
                      </Button>
                    </div>
                  ) : (
                    <p className="text-red-600 dark:text-red-400">
                      We currently don't service this location. Please check back later as we're continuously expanding our coverage.
                    </p>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Coverage Areas */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Current Coverage Areas</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {coverageAreas.map((area) => (
                <div key={area} className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-primary" />
                  <span>{area}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Instructions */}
          <div className="p-6 rounded-2xl bg-primary/10">
            <h3 className="font-semibold mb-4">How to Apply</h3>
            <ol className="space-y-4 list-decimal list-inside text-gray-500 dark:text-gray-400">
              <li>Check if your location is within our coverage area</li>
              <li>Fill out the application form</li>
              <li>Download and sign the completed form</li>
              <li>Send the signed form to ojangoh2@outlook.com</li>
              <li>Our team will contact you within 24 hours</li>
            </ol>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
