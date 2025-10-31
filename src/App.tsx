import Header from './components/Header'
import About from './components/About'
import Resume from './components/Resume'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Home from './components/Home'

function App() {
  return (
    <>
      <Header />
      <main>
        <Home />
        <About/>
        <Portfolio />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App