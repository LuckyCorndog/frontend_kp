import Header from '../components/Header';
import Hero from '../components/Hero';
import HomeImg from '../assets/12.jpg'
import Trip from '../components/Trip';
import Footer from '../components/Footer';

function Home(){
    return(
        <>
            <Header/>
            <Hero 
                cName='hero-mid' 
                heroImg={HomeImg}
                title='Travel Blog'
                text='Share your experience with other people!'
            />
            <Trip/>
            <Footer/>
        </>
    )
}

export default Home;