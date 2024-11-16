import { Button } from "@/components/ui/button"
import { Home, RefreshCcw } from "lucide-react"
import { Link } from "react-router-dom"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container flex flex-col items-center justify-center min-h-[80vh] px-4 text-center">
        <div className="space-y-8">
          {/* Fun server image */}
          <div className="relative w-64 h-64 mx-auto">
            <img
              src="https://illustrations.popsy.co/amber/crashed-error.svg"
              alt="Crashed Server"
              className="w-full h-full"
            />
          </div>
          
          <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl">
            404: Server Having a Coffee Break
          </h1>
          
          <p className="text-xl text-gray-500 dark:text-gray-400 max-w-lg mx-auto">
            Looks like our server decided to take an unscheduled break. Maybe it's watching cat videos? 🐱
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button asChild size="lg">
              <Link to="/">
                <Home className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </Button>
            
            <Button variant="outline" size="lg" onClick={() => window.location.reload()}>
              <RefreshCcw className="mr-2 h-4 w-4" />
              Wake Up Server
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
