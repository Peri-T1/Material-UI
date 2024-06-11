import MainPage from './pages/MainPage'
import Header from './components/Header'
import Container from './components/Container'
import HeroPage from './pages/HeroPage'
// import Footer from './components/Footer'

function App() {

  return (
    <>  
      <Container>
        <Header />
      
      <HeroPage/>
      <MainPage />
      </Container>
     
      {/* <Footer /> */}
    </>
  )
}

export default App
