import heroImg from './assets/hero.png'
import Homepage from './components/header'
import Solutionstailor from './components/solutionstailor'; 
import CloudBased from './components/cloudbased';
import DigitalBanking from './components/digitalbanking';
import Footer from './components/footer';
import CaseStudy from './components/casestudy';
function App() {
  return (
    <div>
      <Homepage />
        <Solutionstailor/> 
        <CloudBased />
        <DigitalBanking/>
        <CaseStudy/>
        <Footer/>
    </div>
  )
}

export default App