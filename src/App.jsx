import '../src/index.css'
import AboutUs from './components/AboutUs'
import Questions from './components/Questions'
import Footer from './components/Footer'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Feedback from './components/Feedback'
import LearnMore from './components/Learn'
import Quote from './components/Quote'

function App() {

  return (
    <>
      <Navbar />
      <Home />
      <AboutUs />
      <LearnMore />
      <Quote/>
      <Questions/>
      <Feedback/>
      <Footer />
    </>
  )
}

export default App
