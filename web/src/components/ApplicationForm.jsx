import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Download } from "lucide-react"
import html2pdf from 'html2pdf.js'
import ReactDOMServer from 'react-dom/server'
import { useState } from "react"

export default function ApplicationForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    idNumber: '',
    email: '',
    phone: '',
    streetAddress: '',
    area: '',
    building: '',
    floor: '',
    landmarks: '',
    packageType: '',
    plan: '',
    additionalInfo: '',
    date: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const downloadForm = () => {
    const formContent = (
      <div className="max-w-4xl mx-auto p-8 bg-white">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold">ZAHRA NETWORKS</h1>
          <p className="text-gray-500">Service Application Form</p>
        </div>

        <div className="space-y-6">
          <section className="space-y-4">
            <h2 className="text-xl font-semibold border-b pb-2">Personal Information</h2>
            <div className="grid grid-cols-1 gap-4">
              <div><strong>Full Name:</strong> {formData.fullName}</div>
              <div><strong>ID/Passport Number:</strong> {formData.idNumber}</div>
              <div><strong>Email Address:</strong> {formData.email}</div>
              <div><strong>Phone Number:</strong> {formData.phone}</div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold border-b pb-2">Installation Address</h2>
            <div className="space-y-4">
              <div><strong>Street Address:</strong> {formData.streetAddress}</div>
              <div><strong>Area/Estate:</strong> {formData.area}</div>
              <div><strong>Building Name/Number:</strong> {formData.building}</div>
              <div><strong>Floor/Unit Number:</strong> {formData.floor}</div>
              <div><strong>Landmarks:</strong> {formData.landmarks}</div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold border-b pb-2">Service Selection</h2>
            <div className="space-y-4">
              <div><strong>Package Type:</strong> {formData.packageType}</div>
              <div><strong>Selected Plan:</strong> {formData.plan}</div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold border-b pb-2">Additional Information</h2>
            <div>{formData.additionalInfo}</div>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold border-b pb-2">Declaration</h2>
            <div className="space-y-2 text-sm">
              <p>By submitting this application:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>I confirm that all information provided is accurate and complete</li>
                <li>I agree to Zahra Networks' terms of service</li>
                <li>I authorize the necessary installation works at the provided address</li>
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div>
                <strong>Signature:</strong> _____________________
              </div>
              <div>
                <strong>Date:</strong> {formData.date}
              </div>
            </div>
          </section>

          <section className="mt-8 page-break-before">
            <h2 className="text-xl font-bold text-center mb-4">Terms and Conditions</h2>
            
            <div className="space-y-4 text-sm">
              <div>
                <h3 className="font-bold">1. Service Agreement</h3>
                <p>This agreement is between Zahra Networks ("Provider") and the Customer for internet and related services.</p>
              </div>

              <div>
                <h3 className="font-bold">2. Service Description</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Internet connectivity as per selected package</li>
                  <li>Installation and equipment setup</li>
                  <li>Technical support and maintenance</li>
                  <li>Service availability target of 99.5%</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold">3. Customer Responsibilities</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Provide accurate information for installation and billing</li>
                  <li>Maintain security of provided equipment</li>
                  <li>Allow access for installation and maintenance</li>
                  <li>Use service in compliance with applicable laws</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold">4. Payment Terms</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Monthly service fees payable in advance</li>
                  <li>One-time installation fee</li>
                  <li>Late payment may result in service suspension</li>
                  <li>30-day notice required for service cancellation</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold">5. Service Level Agreement</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>24/7 technical support</li>
                  <li>Response time within 4 hours for critical issues</li>
                  <li>Scheduled maintenance with prior notice</li>
                  <li>Service credits for extended downtime</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold">6. Equipment</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Equipment remains property of Zahra Networks</li>
                  <li>Customer responsible for equipment safety</li>
                  <li>Replacement costs for damaged equipment</li>
                  <li>Return of equipment upon service termination</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold">7. Term and Termination</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Initial contract period of 12 months</li>
                  <li>Early termination fee applicable</li>
                  <li>Provider may terminate for breach of terms</li>
                  <li>Written notice required for termination</li>
                </ul>
              </div>

              <div className="mt-8">
                <p className="font-bold">Customer Acknowledgment:</p>
                <p>I have read, understood, and agree to these terms and conditions.</p>
                
                <div className="mt-4 grid grid-cols-2 gap-4">
                  <div>
                    <p>Signature: _____________________</p>
                  </div>
                  <div>
                    <p>Date: _____________________</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    )

    const element = document.createElement('div')
    element.innerHTML = ReactDOMServer.renderToString(formContent)

    const options = {
      margin: 1,
      filename: 'Zahra-Networks-Application-Form.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
    }

    html2pdf().set(options).from(element).save()
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container px-4 pt-32 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold">ZAHRA NETWORKS</h1>
            <p className="text-gray-500">Service Application Form</p>
          </div>

          <div className="space-y-6">
            {/* Personal Information */}
            <section className="space-y-4">
              <h2 className="text-xl font-semibold border-b pb-2">Personal Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input 
                  name="fullName"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={handleInputChange}
                />
                <Input 
                  name="idNumber"
                  placeholder="ID/Passport Number"
                  value={formData.idNumber}
                  onChange={handleInputChange}
                />
                <Input 
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleInputChange}
                />
                <Input 
                  name="phone"
                  type="tel"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
              </div>
            </section>

            {/* Installation Address */}
            <section className="space-y-4">
              <h2 className="text-xl font-semibold border-b pb-2">Installation Address</h2>
              <div className="space-y-4">
                <Input 
                  name="streetAddress"
                  placeholder="Street Address"
                  value={formData.streetAddress}
                  onChange={handleInputChange}
                />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Input 
                    name="area"
                    placeholder="Area/Estate"
                    value={formData.area}
                    onChange={handleInputChange}
                  />
                  <Input 
                    name="building"
                    placeholder="Building Name/Number"
                    value={formData.building}
                    onChange={handleInputChange}
                  />
                  <Input 
                    name="floor"
                    placeholder="Floor/Unit Number"
                    value={formData.floor}
                    onChange={handleInputChange}
                  />
                </div>
                <Input 
                  name="landmarks"
                  placeholder="Landmarks/Additional Directions"
                  value={formData.landmarks}
                  onChange={handleInputChange}
                />
              </div>
            </section>

            {/* Service Selection */}
            <section className="space-y-4">
              <h2 className="text-xl font-semibold border-b pb-2">Service Selection</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <select 
                  name="packageType"
                  className="w-full p-2 rounded-md border"
                  value={formData.packageType}
                  onChange={handleInputChange}
                >
                  <option value="">Select Package Type</option>
                  <option value="home">Home Package</option>
                  <option value="business">Business Package</option>
                </select>
                <select 
                  name="plan"
                  className="w-full p-2 rounded-md border"
                  value={formData.plan}
                  onChange={handleInputChange}
                >
                  <option value="">Select Plan</option>
                  <option value="basic">Basic - KES 2,000</option>
                  <option value="standard">Standard - KES 2,500</option>
                  <option value="premium">Premium - KES 3,500</option>
                  <option value="business">Business - KES 5,000</option>
                  <option value="enterprise">Enterprise - Custom</option>
                </select>
              </div>
            </section>

            {/* Additional Information */}
            <section className="space-y-4">
              <h2 className="text-xl font-semibold border-b pb-2">Additional Information</h2>
              <Textarea 
                name="additionalInfo"
                placeholder="Special Requirements or Notes"
                className="min-h-[100px]"
                value={formData.additionalInfo}
                onChange={handleInputChange}
              />
            </section>

            {/* Terms and Declaration */}
            <section className="space-y-4">
              <h2 className="text-xl font-semibold border-b pb-2">Terms and Declaration</h2>
              <div className="space-y-2 text-sm text-gray-500">
                <p>By submitting this application:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>I confirm that all information provided is accurate and complete</li>
                  <li>I agree to Zahra Networks' terms of service</li>
                  <li>I authorize the necessary installation works at the provided address</li>
                </ul>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                <div className="text-gray-500 italic">Signature required after printing</div>
                <Input 
                  name="date"
                  type="date"
                  value={formData.date}
                  onChange={handleInputChange}
                />
              </div>
            </section>

            <div className="flex justify-center pt-6">
              <Button className="w-full md:w-auto" onClick={downloadForm}>
                Download Form
                <Download className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

