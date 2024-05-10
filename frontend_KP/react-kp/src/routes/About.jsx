import Header from '../components/Header';
import Hero from '../components/Hero';
import AboutImg from '../assets/14.jpg';
import Footer from '../components/Footer';
import AboutUs from '../components/AboutUs';

function About(){
    return(
        <>
            <Header/>
            <Hero 
                cName='hero-mid' 
                heroImg={AboutImg}
                title='About'
            />
            <AboutUs/>
            <Footer/>
        </>
    )
}

export default About;