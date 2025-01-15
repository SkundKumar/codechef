import Hero from "./components/Hero"
import About from "./components/About"
import Features from "./components/Features"
import Footer from "./components/Footer"
import Contact from "./components/Contact"
export default function App() {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Hero/>
      <About/>
      <Features/>
      <Contact/>
      <Footer/>
    </main>
  )
}