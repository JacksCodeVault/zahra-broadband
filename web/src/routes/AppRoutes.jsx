  import { Routes, Route } from 'react-router-dom'
  import Landing from '@/pages/Landing'
  import Services from '@/pages/Services'
  import Projects from '@/pages/Projects'
  import Pricing from '@/pages/Pricing'
  import About from '@/pages/About'
  import Contact from '@/pages/Contact'
  import NotFound from '@/pages/NotFound'
  import GetStarted from '@/pages/GetStarted'
  import ApplicationForm from '@/components/ApplicationForm'

  export default function AppRoutes() {
    return (
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/get-started" element={<GetStarted />} />
        <Route path="/application" element={<ApplicationForm />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    )
  }