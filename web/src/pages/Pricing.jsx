import { useState } from "react"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export default function Pricing() {
  const [selectedPlan, setSelectedPlan] = useState('home')

  const plans = {
    home: [
      {
        name: "Basic",
        price: "2000",
        features: [
          "8 Mbps Download Speed",
          "2 Mbps Upload Speed",
          "Unlimited Data",
          "24/7 Support",
          "Network Monitoring",
        ],
      },
      {
        name: "Standard",
        price: "2,500",
        popular: true,
        features: [
          "10 Mbps Download Speed",
          "5 Mbps Upload Speed",
          "Unlimited Data",
          "24/7 Priority Support",
          "Network Monitoring",
        ],
      },
      {
        name: "Premium",
        price: "3,500",
        features: [
          "20 Mbps Download Speed",
          "10 Mbps Upload Speed",
          "Unlimited Data",
          "24/7 Priority Support",
          "Network Monitoring",
        ],
      },
    ],
    business: [
      {
        name: "Startup",
        price: "5,000",
        features: [
          "30 Mbps Dedicated",
          "99.5% Uptime SLA",
          "24/7 Support",
            "Network Monitoring",
            "Custom Solutions",
        ],
      },
      {
        name: "Business",
        price: "10,000",
        popular: true,
        features: [
          "50 Mbps Dedicated",
          "99.9% Uptime SLA",
          "24/7 Priority Support",
          "Network Monitoring",
            "Custom Solutions",
        ],
      },
      {
        name: "Enterprise",
        price: "Custom",
        features: [
          "100+ Mbps Dedicated",
          "99.99% Uptime SLA",
          "24/7 Premium Support",
          "Advanced Monitoring",
          "Custom Solutions",
        ],
      },
    ],
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container px-4 pt-32 pb-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Simple, Transparent Pricing
          </h1>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
            Choose the perfect plan for your connectivity needs
          </p>
        </div>

        {/* Plan Toggle */}
        <div className="mt-12 flex justify-center gap-4">
          <Button 
            variant={selectedPlan === 'home' ? 'default' : 'outline'}
            onClick={() => setSelectedPlan('home')}
          >
            Home
          </Button>
          <Button 
            variant={selectedPlan === 'business' ? 'default' : 'outline'}
            onClick={() => setSelectedPlan('business')}
          >
            Business
          </Button>
        </div>

        {/* Pricing Cards */}
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {plans[selectedPlan].map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl border p-8 shadow-lg ${
                plan.popular ? 'border-primary' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="rounded-full bg-primary px-4 py-1 text-sm text-primary-foreground">
                    Most Popular
                  </div>
                </div>
              )}
              
              <div className="text-center">
                <h3 className="text-lg font-semibold">{plan.name}</h3>
                <div className="mt-4">
                  <span className="text-4xl font-bold">KES {plan.price}</span>
                  <span className="text-gray-500 dark:text-gray-400">/mo</span>
                </div>
              </div>

              <ul className="mt-8 space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <Check className="h-4 w-4 text-primary" />
                    <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button className="mt-8 w-full" variant={plan.popular ? 'default' : 'outline'}>
                Get Started
              </Button>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  )
}
