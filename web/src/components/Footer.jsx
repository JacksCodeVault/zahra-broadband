import { Link } from "react-router-dom"
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t bg-background">
      <div className="container px-4 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Zahra Networks</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Connecting Communities, Empowering Innovation through technology solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm text-gray-500 dark:text-gray-400 hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm text-gray-500 dark:text-gray-400 hover:text-primary">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-sm text-gray-500 dark:text-gray-400 hover:text-primary">
                  Projects
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                <Phone className="h-4 w-4" />
                <span>+254 747 407 259</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                <Mail className="h-4 w-4" />
                <span>info@zahra.co.ke</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                <MapPin className="h-4 w-4" />
                <span>Nakuru, Kenya</span>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Follow Us</h3>
            <div className="flex gap-4">
              <a href="#" className="text-gray-500 hover:text-primary">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-primary">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-primary">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t text-center text-sm text-gray-500 dark:text-gray-400">
          © {currentYear} Zahra Networks. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
