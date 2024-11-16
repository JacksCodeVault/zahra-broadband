import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from '@/components/theme-provider'
import AppRoutes from '@/routes/AppRoutes'

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider defaultTheme="system" storageKey="zahra-ui-theme">
        <AppRoutes />
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App