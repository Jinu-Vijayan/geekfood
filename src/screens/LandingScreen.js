import Navbar from '../components/Navbar.js'
import HeroSection from '../components/HeroSection.js'
import SecondSection from '../components/SecondSection.js';
import Grid from '../components/Grid.js'
import Footer from "../components/Footer.js"

function LandingScreen(){
    return(
        <>
            <Navbar/>
            <HeroSection/>
            <SecondSection/>
            <Grid/>
            <Footer/>
        </>
    )
}

export default LandingScreen;