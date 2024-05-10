import Header from '../components/Header';
import Hero from '../components/Hero';
import AddBlogImg from '../assets/13.jpg'
import Footer from '../components/Footer';
import NewBlog from '../components/NewBlog';

function AddBlog(){
    return(
        <>
            <Header/>
            <Hero 
                cName='hero-mid' 
                heroImg={AddBlogImg}
                title='Share your experience'
                text='Use this form to share with people your facinating travaling stories!'
            />
            <NewBlog/>
            <Footer/>
        </>
    )
}

export default AddBlog;