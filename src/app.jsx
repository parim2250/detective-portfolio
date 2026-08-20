import { useState, useEffect } from 'react'
import './App.css'
import CustomCursor from './components/CustomCursor'
import NoiseOverlay from './components/NoiseOverlay'
import DustParticles from './components/DustParticles'
import LoadingScreen from './components/LoadingScreen'
import Navbar from './components/Navbar'
import Landing from './sections/Landing'
import SuspectProfile from './sections/SuspectProfile'
import InvestigationBoard from './sections/InvestigationBoard'
import EvidenceLocker from './sections/EvidenceLocker'
import InvestigationLog from './sections/InvestigationLog'
import InformantReports from './sections/InformantReports'
import SecureChannel from './sections/SecureChannel'
import Footer from './components/Footer'

export default function App() {
  const [loading, setLoading] = useState(true)
  const [caseOpened, setCaseOpened] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3500)
    return () => clearTimeout(timer)
  }, [])

  if (loading) return <LoadingScreen />

  return (
    <div className="relative min-h-screen bg-[#0a0a0a]">
      <NoiseOverlay />
      <CustomCursor />
      <DustParticles />

      {!caseOpened ? (
        <Landing onOpenCase={() => setCaseOpened(true)} />
      ) : (
        <>
          <Navbar />
          <main>
            <SuspectProfile />
            <InvestigationBoard />
            <EvidenceLocker />
            <InvestigationLog />
            <InformantReports />
            <SecureChannel />
          </main>
          <Footer />
        </>
      )}
    </div>
  )
}